// Fichas de clase predefinidas - Libera tu arte
// Campos: titulo, fecha (AAAA-MM-DD), grupo, items[{id, min, nota}]
const FICHAS_BASE = [
{titulo:"Ficha Jamming 28/09/2026",fecha:"2026-09-28",grupo:"Jamming",items:[
  {id:"relajacion-silla-canciones",min:10,nota:"Cuatro canciones: 1ª ojos cerrados sin interacción · 2ª ojos abiertos alrededor de la silla · 3ª salimos al espacio con contacto visual · 4ª interacción total."},
  {id:"si-vamos",min:10,nota:"Por parejas por toda la sala, alternando las propuestas. Ej.: 'Vamos a jugar al parchís' / '¡Sí, vamos!' → 'Vamos a tirar piedras por la ventana abierta' / '¡Sí, vamos!'."},
  {id:"y-ahora-que-parejas",min:10,nota:"Ej.: cazar caracoles → la lupa espacial de la NASA → cubrirnos de barro para ocultarnos en las sombras. Al 'No, eso no' se cambian los papeles."},
  {id:"clonar-anecdota",min:10,nota:"Anécdota de un minuto; después la otra persona la clona."},
  {id:"anecdota-gibberish",min:10,nota:"Ej.: me fui de ruta a un río, me resbalé y me puse perdido. Gibberish → compi la cuenta hablando → el primero la cuenta hablando y comparamos."}
]},
{titulo:"Intensivo Escenia Griñón · Día 2: El PROL",fecha:"",grupo:"Intensivo Escenia Griñón (adultos, 6 participantes, 2 formadores)",items:[
  {id:"c-prol",min:10,nota:"Presentación: bienvenida y recogida del día 1 (¿qué se os quedó del 'sí, y además'? una frase por persona). Explicar el PROL como antídoto al 'no sé qué decir'. Metáfora: la escena es una esfera aceitosa; cada letra del PROL es un asa."},
  {id:"rueda-palmada",min:5,nota:"Vinculación: dinámica rápida de nombres y energía. Día 2: corto, solo para encender el circuito grupal."},
  {id:"samurai",min:5,nota:"Calentamiento mental. Con 6 va muy rápido: meter cambios de ritmo y celebrar los fallos."},
  {id:"volcan-de-palabras",min:5,nota:"Asociación libre en círculo sin filtrar; si alguien se lo piensa más de un segundo, todos celebran y se sigue."},
  {id:"que-haces",min:10,nota:"Calentamiento físico. Lento y claro: hasta que no se entienda la acción no se pregunta."},
  {id:"4-elementos-lecoq",min:25,nota:"P de PERSONAJE. 1) Exploración por el espacio (10'): cuerpo, luego voz, luego una frase. 2) Personaje híbrido (15'): en 3 parejas, de espaldas, combinan dos elementos (Fuego+Tierra, Agua+Aire, Fuego+Aire, Agua+Tierra); se giran y se encuentran como ese personaje. Devolución: ¿qué elemento dominaba? ¿Se sostuvo el cuerpo con el texto?"},
  {id:"juego-sillas-objetivo",min:8,nota:"O de OBJETIVO. Persuasión, estatus, seducción o engaño; ~90\" por intento y rotación. Todos pasan por ambos roles."},
  {id:"parque-invasivo",min:12,nota:"Tres escenas de ~3' + un minuto de devolución. Cazar la 'charla de ascensor'. Público: ¿en qué momento supimos qué quería B?"},
  {id:"miradas-estatus",min:7,nota:"R de RELACIÓN / ESTATUS. Dos equipos de 3. Segunda ronda: B esquiva el contacto. Comentar qué sintieron: eso ES el estatus."},
  {id:"cartas-estatus",min:13,nota:"Lugar común (boda, sala de espera, cola del paro). Al final se ordenan en fila y se revelan las cartas. Si hay tiempo, segunda ronda. Después: DESCANSO EXPRÉS (5')."},
  {id:"pintar-lugar",min:15,nota:"L de LUGAR. Los 6, sin palabras; segunda ronda con otro lugar cambiando el orden. Premiar al que USA lo del compañero antes de añadir lo propio."},
  {id:"ruleta-prol",min:20,nota:"Impro final: Fase 1 PROL servido (10', dos escenas) + Fase 2 PROL emergente (10'). Rotar para que todos jueguen."},
  {id:"c-subobjetivos",min:0,nota:"Para sembrar durante las devoluciones, no como charla aparte: la mitad de la actuación es la reacción; el público no debe saber qué hará el personaje."},
  {id:"circulo-cierre-reflexion",min:10,nota:"¿Cuál es tu 'letra coja'? Es el deber para el día 3. Recoger feedback para los días 3 y 4."}
]}
];

// Fichas de clase - Menudos Artistas. La primera vez que se abre ficha-menudos.html se copian
// a "Fichas de clase" del navegador; desde ahí se editan o se borran como cualquier otra.
// Para añadir un juego a una ficha ya copiada: sube la v de la ficha y pon esa misma v en el juego nuevo.
const FICHAS_BASE_MENUDOS = [
{titulo:"Clase 5 — Grupo Ugena (curso 2026-2027): Suspense a lo Agatha Christie",fecha:"2026-10-13",v:3,grupo:"Menudos Artistas (6 peques)",items:[
  {id:"un-dos-tres-miradas",min:5,nota:"Las muertes son de novela de Agatha Christie, muertes elegantes: veneno en el té, el candelabro en la biblioteca, un dardo en el tren, la daga de la colección del coronel..."},
  {id:"iw-verdad-y-mentira",min:10,nota:"Versión 'Coartadas': cada uno da dos coartadas para la noche del crimen ('estaba en la cocina con la cocinera' / 'estaba leyendo en mi cuarto'); una es falsa. El grupo vota cuál es la mentira. Aprovechar para fijarse en cómo se nota (o no) que alguien miente."},
  {id:"suspense-taza-te",min:5,nota:"Concepto 'Tensión y resultado incierto' en versión peques: el suspense es la espera, no el susto."},
  {id:"peligro-que-solo-ve-publico",min:10,nota:"Para practicar el concepto justo después de la charla. Preparar antes 6 tarjetitas de peligro (una por peque) para no tener que pensarlas en clase."},
  {id:"ruidos-mansion",v:3,min:10,nota:"Primera ronda: dirige el profe, narrando y haciendo soundpainting. Después, algún peque voluntario se anima a dirigir. Usar la variante con niveles de tensión (del 3 al 7 al abrir la carta)."},
  {id:"iw-el-espia-el-ladron",min:10,nota:"Versión 'Poirot examina el despacho': de uno en uno, en pantomima, entran al despacho del anfitrión (cajones, cortinas, papelera, chimenea...). Cada uno encuentra UNA pista y la dice en voz alta ('una taza de té fría', 'un guante de mujer', 'el reloj parado a las 9'). El profe las apunta: se guardan para la revelación del final."},
  {id:"cena-mansion-apagon",min:20,nota:"Ejercicio central. Las cartas de estatus son las de ImproXpresión ('Las cartas de estatus') en versión sencilla. Preparar antes los papelitos de secreto y elegir a quién le toca la X (mejor alguien a quien le cueste disimular poco). No revelar secretos al terminar."},
  {id:"iw-interrogatorio",min:10,nota:"Versión Agatha Christie: el inspector, un ayudante torpe tipo Hastings (que se equivoca, apunta mal, interrumpe) y un sospechoso de la cena que siempre dice 'sí'... pero cada 'sí' le incrimina un poco más ('¿Estuvo en la biblioteca?' 'Sí, y además llevaba el candelabro, pero para leer'). Dos tríos a la vez, rotando para que todos pasen por los tres papeles. Contraste con 'El sospechoso en la silla' del 29/09: allí se defendían con 'Sí, pero...'; aquí se hunden con 'Sí, y además...'."},
  {id:"iw-tres-muertos",min:10,nota:"Versión 'Y no quedó ninguno': invitados a una isla incomunicada por la tormenta por un anfitrión misterioso que nunca aparece. Dos grupos de 3; cada uno presenta su personaje y cómo llegó a la isla, y todos deben morir en el mismo lugar y a la misma hora (por ejemplo, en el comedor cuando el reloj da las doce). El público elige la muerte de cada uno."},
  {id:"revelacion-biblioteca",min:10,nota:"Solo valen las pistas que ya han salido (las del despacho + lo visto en la cena + lo dicho en los interrogatorios). Votación antes de la revelación. El culpable es el de la X de la cena. Incluye el cierre en círculo."}
]}
];
