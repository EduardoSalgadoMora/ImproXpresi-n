// Fichas preparadas - Libera tu arte
// Aparecen en ficha.html ("Fichas preparadas") y se pueden cargar y guardar como cualquier ficha.
// Campos: titulo, fecha (AAAA-MM-DD), grupo, items[] = {id (juego o concepto), min, nota}
const FICHAS_PREPARADAS = [
{
  titulo: "Semana 3 · Misterio: un crimen a lo Agatha Christie",
  fecha: "2026-10-13",
  grupo: "Martes",
  items: [
    {id:"un-dos-tres-miradas", min:8, nota:"CALDEAMIENTO. Muertes de novela de Agatha Christie: veneno en el té, candelabro en la biblioteca, empujón desde el acantilado, dardo envenenado en el avión, arsénico en el bombón. Morir con elegancia inglesa: nada de gritos, un suspiro y caer sobre la alfombra."},
    {id:"ac-guino-asesino", min:10, nota:"Ambientación: el Orient Express detenido por la nieve. Antes de empezar, cada uno elige su pasajero (condesa, coronel, institutriz, mayordomo, vendedor americano) y lo camina. Sube la tensión: cada vez paseo más lento y miradas más largas."},
    {id:"iw-verdad-y-mentira", min:10, nota:"ADAPTACIÓN SUSPENSE: «Coartadas». Cada uno dice su nombre de personaje y dos coartadas para la noche del crimen («estaba en el invernadero con el jardinero» / «estaba escribiendo cartas en mi cuarto»). Una es verdad y otra mentira. Al final el grupo vota qué coartada es falsa: quien miente con más verdad escénica gana. Fijarse en el cuerpo: ¿quién se toca la cara, quién mira al suelo?"},
    {id:"c-tension", min:5, nota:"Charla breve: el suspense no es el susto, es la espera. Agatha Christie da la información al público antes que a los personajes. Consigna para la sesión: retrasar la revelación, sostener la pausa, que el resultado sea incierto."},
    {id:"7-niveles-tension", min:10, nota:"Recorrido: paseo nivel 3 por la mansión de noche → oyes un ruido (4, curiosidad) → ves una puerta entreabierta (5) → descubres el cuerpo (6) → explosión (7) y vuelta lenta al 3 para disimular delante de los demás. Después en parejas: el asesino en nivel 2 (frío) y el testigo en nivel 6."},
    {id:"iw-el-espia-el-ladron", min:10, nota:"ADAPTACIÓN: «Hércules Poirot examina el despacho». Uno a uno entran en la escena del crimen como el detective: abrir cajones, oler la taza, mirar el reloj parado, la ventana. En silencio y en pantomima. Al salir dicen en voz alta UNA pista que han encontrado (una colilla, una carta quemada, el reloj parado a las 9:15). El grupo memoriza las pistas: se usarán en la revelación final."},
    {id:"ac-cena-mansion", min:15, nota:"Los personajes del Orient Express pueden repetir aquí. Repartir los secretos en papelitos antes de empezar. Side-coaching: «menos información, más subtexto», «¿qué te da miedo que descubran?»."},
    {id:"iw-interrogatorio", min:10, nota:"ADAPTACIÓN: «Interrogatorio en el salón». Grupos de 3: el inspector de Scotland Yard (estatus alto), su ayudante torpe (tipo capitán Hastings) y un sospechoso de la cena. El sospechoso debe decir siempre «sí» pero justificando con un detalle que lo hace aún más sospechoso. Usar pistas del despacho. Rotar roles."},
    {id:"iw-tres-muertos", min:12, nota:"ADAPTACIÓN: «Y no quedó ninguno». Cuatro invitados a una isla incomunicada por la tormenta. El público propone las muertes al estilo Christie. Ronda 1: quién soy y qué crimen del pasado escondo. Ronda 2: la isla y la casa. Ronda 3: cómo muero. Todos mueren en el mismo lugar y a la misma hora. Iluminación tenue si es posible."},
    {id:"ac-revelacion-biblioteca", min:15, nota:"CIERRE. El detective acusa usando las pistas del despacho y lo que salió en la cena y los interrogatorios (reincorporación). Votación del público antes de revelar. Devolución final: ¿en qué momento se sintió el suspense? ¿qué pausa funcionó?"}
  ]
}
];
