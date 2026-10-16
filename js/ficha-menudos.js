// Constructor de fichas - Menudos Artistas
(function(){
  const $ = s => document.querySelector(s);
  const lista = $('#listaFicha');
  let ficha = MA.carrito();

  // meta
  $('#fTitulo').value = ficha.titulo || '';
  $('#fFecha').value = ficha.fecha || '';
  $('#fGrupo').value = ficha.grupo || '';
  ['fTitulo','fFecha','fGrupo'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      ficha.titulo = $('#fTitulo').value;
      ficha.fecha = $('#fFecha').value;
      ficha.grupo = $('#fGrupo').value;
      MA.guardarCarrito(ficha);
    });
  });

  // Índices de una lista de fichas ordenados por fecha (las sin fecha, al final)
  function ordenPorFecha(lista){
    return lista.map((f,i)=>i).sort((a,b)=>(lista[a].fecha||'9999').localeCompare(lista[b].fecha||'9999'));
  }

  function total(){
    return ficha.items.reduce((s,i)=>s+(parseInt(i.min)||0),0);
  }

  function pintar(){
    lista.innerHTML = '';
    $('#vacio').style.display = ficha.items.length ? 'none' : '';
    ficha.items.forEach((item, idx) => {
      const j = MA.porId(item.id);
      if(!j){ return; }
      const div = document.createElement('div');
      div.className = 'item-ficha';
      div.dataset.idx = idx;
      div.innerHTML = `
        <div class="item-num" draggable="true" title="Arrastra para reordenar">${idx+1}</div>
        <div class="item-cuerpo">
          <h3>${j.t} <span class="cat-tag">${(j.c||[])[0]||''}</span>${j.origenImpro?' <span class="cat-tag origen-impro">🎭 ImproXpresión</span>':''}</h3>
          <p class="desc">${j.d}</p>
          ${j.v ? `<p class="desc desc-variantes"><em>Variantes: ${j.v}</em></p>` : ''}
          <textarea placeholder="Notas para esta sesión (consignas, adaptaciones al grupo...)" data-nota="${idx}">${item.nota||''}</textarea>
          <p class="nota-print"></p>
        </div>
        <div class="item-controles">
          <input type="number" class="minutos" min="1" max="120" value="${item.min}" data-min="${idx}" title="Minutos">
          <div class="flechas">
            <button class="btn btn-secundario btn-mini" data-sube="${idx}" ${idx===0?'disabled':''}>▲</button>
            <button class="btn btn-secundario btn-mini" data-baja="${idx}" ${idx===ficha.items.length-1?'disabled':''}>▼</button>
          </div>
          <button class="btn btn-rojo btn-mini" data-quita="${idx}">✕</button>
        </div>`;
      div.querySelector('.nota-print').textContent = item.nota || '';
      lista.appendChild(div);
    });
    const t = total();
    $('#totalMin').textContent = t + ' min';
    const h = Math.floor(t/60), m = t%60;
    $('#avisoMin').textContent = t ? `(${h}h ${m}') · ${ficha.items.length} juegos` : '';
    MA.actualizarBadge();
  }

  lista.addEventListener('input', e => {
    if(e.target.dataset.min !== undefined){
      ficha.items[+e.target.dataset.min].min = parseInt(e.target.value)||0;
      MA.guardarCarrito(ficha);
      const t = total();
      $('#totalMin').textContent = t + ' min';
      $('#avisoMin').textContent = `(${Math.floor(t/60)}h ${t%60}') · ${ficha.items.length} juegos`;
    }
    if(e.target.dataset.nota !== undefined){
      ficha.items[+e.target.dataset.nota].nota = e.target.value;
      e.target.nextElementSibling.textContent = e.target.value;
      MA.guardarCarrito(ficha);
    }
  });
  lista.addEventListener('click', e => {
    const sube = e.target.closest('[data-sube]');
    const baja = e.target.closest('[data-baja]');
    const quita = e.target.closest('[data-quita]');
    if(sube){ const i=+sube.dataset.sube; [ficha.items[i-1],ficha.items[i]]=[ficha.items[i],ficha.items[i-1]]; }
    else if(baja){ const i=+baja.dataset.baja; [ficha.items[i+1],ficha.items[i]]=[ficha.items[i],ficha.items[i+1]]; }
    else if(quita){ ficha.items.splice(+quita.dataset.quita,1); }
    else return;
    MA.guardarCarrito(ficha); pintar();
  });

  // drag & drop
  let dragIdx = null;
  lista.addEventListener('dragstart', e => {
    const it = e.target.closest('.item-ficha'); if(!it) return;
    dragIdx = +it.dataset.idx; it.classList.add('arrastrando');
    if(e.dataTransfer) e.dataTransfer.setDragImage(it, 20, 20);
  });
  lista.addEventListener('dragend', e => {
    const it = e.target.closest('.item-ficha'); if(it) it.classList.remove('arrastrando');
  });
  lista.addEventListener('dragover', e => e.preventDefault());
  lista.addEventListener('drop', e => {
    e.preventDefault();
    const it = e.target.closest('.item-ficha'); if(!it || dragIdx===null) return;
    const destino = +it.dataset.idx;
    const [mov] = ficha.items.splice(dragIdx,1);
    ficha.items.splice(destino,0,mov);
    dragIdx = null;
    MA.guardarCarrito(ficha); pintar();
  });

  // exportar markdown
  function generarMd(){
    const t = total();
    let md = `# ${ficha.titulo || 'Ficha de clase'}\n`;
    if(ficha.fecha || ficha.grupo) md += `**${[ficha.fecha, ficha.grupo].filter(Boolean).join(' · ')}** — Total: ${t} min (${Math.floor(t/60)}h ${t%60}')\n`;
    md += '\n---\n';
    ficha.items.forEach((item,i) => {
      const j = MA.porId(item.id); if(!j) return;
      md += `\n## ${i+1}. ${j.t}${j.origenImpro?' (ImproXpresión)':''} (${item.min}')\n`;
      md += `*${(j.c||[]).join(', ')}*\n\n${j.d}\n`;
      if(j.v) md += `\n**Variantes:** ${j.v}\n`;
      if(item.nota) md += `\n> 📝 ${item.nota}\n`;
    });
    md += `\n---\n*Generada con Menudos Artistas · ${new Date().toLocaleDateString('es-ES')}*\n`;
    return md;
  }
  $('#btnExportarMd').onclick = () => {
    if(!ficha.items.length){ alert('La ficha está vacía.'); return; }
    const blob = new Blob([generarMd()], {type:'text/markdown;charset=utf-8'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = (ficha.titulo ? MA.slug(ficha.titulo) : 'ficha') + '.md';
    a.click();
  };
  $('#btnImprimir').onclick = () => {
    if(!ficha.items.length){ alert('La ficha está vacía.'); return; }
    document.title = ficha.titulo || 'Ficha de clase';
    window.print();
  };
  $('#btnVaciar').onclick = () => {
    if(!confirm('¿Vaciar la ficha actual?')) return;
    ficha = {titulo:'', fecha:'', grupo:'', items:[]};
    MA.guardarCarrito(ficha);
    $('#fTitulo').value=''; $('#fFecha').value=''; $('#fGrupo').value='';
    pintar();
  };

  // fichas de clase
  function pintarGuardadas(){
    const guardadas = MA.leer(MA.KEY_FICHAS, []);
    const cont = $('#listaGuardadas');
    cont.innerHTML = guardadas.length ? '' : '<p style="color:#6b6478;font-size:.9rem">Aún no hay fichas de clase.</p>';
    ordenPorFecha(guardadas).forEach(i => {
      const f = guardadas[i];
      const min = f.items.reduce((s,x)=>s+(x.min||0),0);
      const div = document.createElement('div');
      div.className = 'ficha-guardada';
      div.innerHTML = `
        <span class="nombre">${f.titulo || 'Sin título'}</span>
        <span class="datos">${f.fecha || ''} · ${f.items.length} juegos · ${min}'</span>
        <button class="btn btn-secundario btn-mini" data-carga="${i}">Cargar</button>
        <button class="btn btn-rojo btn-mini" data-borra="${i}">✕</button>`;
      cont.appendChild(div);
    });
  }
  $('#btnGuardarFicha').onclick = () => {
    if(!ficha.items.length){ alert('La ficha está vacía.'); return; }
    if(!ficha.titulo){ ficha.titulo = prompt('Título de la ficha:','Ficha ' + new Date().toLocaleDateString('es-ES')) || 'Ficha'; $('#fTitulo').value = ficha.titulo; }
    const guardadas = MA.leer(MA.KEY_FICHAS, []);
    const idx = guardadas.findIndex(f => f.titulo === ficha.titulo);
    const copia = JSON.parse(JSON.stringify(ficha));
    if(idx >= 0){ if(confirm('Ya existe una ficha con ese título. ¿Sobreescribir?')) guardadas[idx] = copia; else return; }
    else guardadas.push(copia);
    MA.guardar(MA.KEY_FICHAS, guardadas);
    MA.guardarCarrito(ficha);
    pintarGuardadas();
    alert('Ficha guardada ✔');
  };
  $('#listaGuardadas').addEventListener('click', e => {
    const carga = e.target.closest('[data-carga]');
    const borra = e.target.closest('[data-borra]');
    const guardadas = MA.leer(MA.KEY_FICHAS, []);
    if(carga){
      if(ficha.items.length && !confirm('Se sustituirá la ficha actual. ¿Continuar?')) return;
      ficha = JSON.parse(JSON.stringify(guardadas[+carga.dataset.carga]));
      MA.guardarCarrito(ficha);
      $('#fTitulo').value = ficha.titulo||''; $('#fFecha').value = ficha.fecha||''; $('#fGrupo').value = ficha.grupo||'';
      pintar();
    }
    if(borra){
      const f = guardadas[+borra.dataset.borra];
      if(!confirm(`¿Seguro que quieres borrar la ficha «${f.titulo || 'Sin título'}»?\n\nNo se puede deshacer.`)) return;
      guardadas.splice(+borra.dataset.borra,1);
      MA.guardar(MA.KEY_FICHAS, guardadas);
      pintarGuardadas();
    }
  });

  // Las fichas de data/fichas.js se copian una sola vez a las fichas de clase del navegador.
  // Se recuerda cuáles se han copiado (y en qué versión, campo v) para que una ficha borrada
  // no vuelva a aparecer. Si sube la versión, se añaden solos a la copia del navegador los
  // juegos marcados con una v mayor (juegos nuevos), sin tocar lo que se haya cambiado a mano.
  function importarFichasBase(){
    const base = (typeof FICHAS_BASE_MENUDOS !== 'undefined') ? FICHAS_BASE_MENUDOS : [];
    let importadas = MA.leer(MA.KEY_FICHAS_BASE, {});
    if(Array.isArray(importadas)) importadas = Object.fromEntries(importadas.map(t => [t, 1]));
    const guardadas = MA.leer(MA.KEY_FICHAS, []);
    const actual = MA.leer(MA.KEY_CARRITO, null);
    const limpia = it => { const c = {...it}; delete c.v; return c; };
    // Mete en la ficha f los juegos de la base añadidos después de la versión desde
    function añadirNuevos(f, fb, desde){
      if(!f || f.titulo !== fb.titulo) return false;
      let cambia = false;
      fb.items.forEach((it, k) => {
        if((it.v || 1) <= desde || f.items.some(x => x.id === it.id)) return;
        const prev = k > 0 ? f.items.findIndex(x => x.id === fb.items[k-1].id) : -1;
        f.items.splice(prev >= 0 ? prev + 1 : f.items.length, 0, limpia(it));
        cambia = true;
      });
      return cambia;
    }
    base.forEach(f => {
      const v = f.v || 1;
      const idx = guardadas.findIndex(g => g.titulo === f.titulo);
      if(!(f.titulo in importadas)){
        if(idx < 0){ const c = JSON.parse(JSON.stringify(f)); delete c.v; c.items = c.items.map(limpia); guardadas.push(c); }
      } else if(importadas[f.titulo] < v){
        añadirNuevos(guardadas[idx], f, importadas[f.titulo]);
        if(añadirNuevos(actual, f, importadas[f.titulo])) { MA.guardarCarrito(actual); ficha = actual; }
      }
      importadas[f.titulo] = v;
    });
    MA.guardar(MA.KEY_FICHAS, guardadas);
    MA.guardar(MA.KEY_FICHAS_BASE, importadas);
  }

  importarFichasBase();
  pintar();
  pintarGuardadas();
})();
