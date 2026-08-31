# 🎭 Libera tu arte — Web de juegos de teatro e impro

Web local (sin servidor, sin internet) con todos los juegos extraídos de `C:\edu_personal\ClasesMenudosArtistas2025` (fichas Jamming, guiones de Menudos Artistas 2024-2026, intensivos de Toto Curcio, Edu Ferrés y el taller de teatro para adultos).

## Cómo abrirla
Doble clic en **index.html**. Funciona en cualquier navegador, directamente desde el disco.

## Estructura
```
web_juegos_impro/
├── index.html         → Buscador de juegos
├── conceptos.html     → Glosario de conceptos teóricos
├── ficha.html         → Creador de fichas de clase
├── actuaciones.html   → Calendario de actuaciones
├── css/estilos.css
├── fonts/Alphakind.ttf → fuente del logo
├── img/logo.svg       → logo (recreación en SVG; si guardas el PNG original como img/logo.png se usará ese automáticamente)
├── js/
│   ├── comun.js       → utilidades y almacenamiento (localStorage)
│   ├── app.js         → lógica del buscador
│   ├── conceptos.js   → lógica del glosario
│   ├── ficha.js       → lógica del creador de fichas
│   └── actuaciones.js → lógica del calendario
└── data/
    ├── juegos.js      → base de datos (281 juegos)
    └── conceptos.js   → glosario (96 conceptos)
```

## Calendario de actuaciones (actuaciones.html)
- Alta manual de actuaciones: título, fecha, horas, lugar y notas. Se separan automáticamente en **próximas** y **pasadas**.
- Cada actuación tiene botón **📆 Google Calendar** (abre Google con el evento precargado: solo hay que darle a Guardar) y **⬇ .ics** (para Outlook, iPhone o cualquier calendario).
- Se pueden editar y borrar; entran en la copia de seguridad.

## Glosario de conceptos (conceptos.html)
96 conceptos teóricos organizados en 9 bloques: Pilares de la impro, Escena y estructura, Personaje, Emoción y verdad (Stanislavski, Grotowski, Boleslavski), Cuerpo y voz (Lecoq), Comedia, Errores y anti-patrones, Formatos y match, y Pedagogía y dirección.
- Fuentes: apuntes propios (Edu, Toto Curcio, Sara Párbole, Raúl Marcos, Isaac), The Improv Handbook (Salinsky & Frances-White, incl. su glosario), Keith Johnstone, Stanislavski (*El trabajo del actor sobre sí mismo*), Thomas Richards/Grotowski (*Las acciones físicas*), Boleslavski, Lecoq, Holovatuck & Astrosky y Javier Vecino (*El Match de Improvisación*).
- Buscador por texto, chips de bloque y filtro por fuente. Clic en un concepto lo expande (definición completa + 💡 cómo aplicarlo + fuente).
- Cada concepto se puede **añadir a la ficha** como bloque teórico (sale con 📖 y minutos propios): ideal para el apartado "Conceptos" de tus clases.

## Buscador (index.html)
- **Texto libre**: busca en título, descripción, variantes, categorías, autor y fuente (varias palabras = todas deben aparecer).
- **Filtros combinables**: categorías (chips, multiselección), autor, edad (niños/adultos/ambos), solo favoritos ⭐, solo mis juegos, con variantes.
- **Orden**: alfabético, por categoría o por fuente.
- Clic en el título de una tarjeta → ficha detallada del juego.
- **➕ Crear juego**: añade juegos propios (se guardan en el navegador, editables y borrables; salen con etiqueta verde "Mío").

## Creador de fichas (ficha.html)
- Añade juegos desde el buscador con el botón **+ Ficha**.
- Ordena los bloques (flechas o arrastrando), asigna **minutos** a cada uno y escribe **notas de sesión**.
- El total de tiempo se calcula solo.
- **Guardar**: archiva la ficha (recuperable desde "Fichas guardadas").
- **Descargar .md**: exporta la ficha en Markdown.
- **Imprimir / PDF**: versión limpia lista para llevar a clase.

## Dónde se guardan tus datos
- La base de 281 juegos y los 96 conceptos viven en `data/juegos.js` y `data/conceptos.js` (archivos del disco).
- **Todo lo demás vive en el `localStorage` del navegador**: juegos que creas, ediciones de juegos existentes, favoritos, la ficha en curso y las fichas guardadas. Si cambias de navegador o borras los datos de navegación, se pierde.
- Por eso existe el botón **⬇ Copia de seguridad** (en el buscador): descarga un JSON con todos tus datos. Con **⬆ Restaurar copia** los recuperas en cualquier navegador u ordenador.
- Si quieres consolidar tus juegos/ediciones en la base permanente, pásale la copia de seguridad a Claude y que los integre en `data/juegos.js`.

## Editar juegos
- **Cualquier juego se puede editar**, también los de la base: tu versión editada se guarda aparte y el juego aparece con la etiqueta "Editado". Desde su ficha puedes **↺ Restaurar original** en cualquier momento.
- Los juegos creados por ti llevan la etiqueta "Mío" y sí se pueden eliminar del todo.
- El filtro "🟢 Nuevos o editados por mí" muestra ambos.

## Notas
- Los libros de la carpeta `intensivos` (Stanislavski, Boleslavski, Grotowski, The Improv Handbook, manuales de Holovatuck/Astrosky, Frias Rafa, Zack Vázquez, match de Javier Vecino) no están indexados juego a juego: son bibliografía de consulta.
- Para añadir juegos de forma masiva, edita `data/juegos.js` siguiendo el formato de cualquier entrada.
