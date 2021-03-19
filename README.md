# Dynamic Showcase
Proyecto sencillo de práctica básica para tecnología HTML + CSS + JS. Se trata de un showcase de frutas que permite arrastrar items predefinidos a un carrito de la compra y que va llevando la cuenta de todo lo incluido en el carrito.

## HTML + CSS
Un layout de HTML básico que usa bootstrap y estilos propios. Diseñado bajo los parámetros mobile first.

### Showcase
Un showcase sencillo con varias imagenes para representar los elementos.

### Carrito
Una imagen de carrito de la compra que sirve como droparea y notifica cuántos items se van agregando.

### Ticket area
Listado de artículos y unidades que se van agregando.

## JS
* Secuencia de funciones dra&drop creada según standarsd [w3schools]{https://www.w3schools.com/html/html5_draganddrop.asp}

* Funciones generales para relizar la impresión:
1. printArticles
Recibe el parámetro "id" del DOM para identificar el área donde se va a colocar la lista y va imprimiendo los items que se van arrastrando al carrito. Sabe identificar entre items repetidos para no repetirlos, sino contarlos.

2. printGeneralCount
Recibe un parámetro "count" que almacena la cuenta de todos los drag&drops exitosos que se van registrando y que imprime el HTML necesario para que se despliegue en forma de icono circular en la esquina superior derecha del carrito.

* Funciones de encapsulamiento
1. printHTML
Función que inserta el HTML necesario para el primer elemento llevado al carrito y que se despliega dentro del ticket-area.

2. appendHTML
Función que añade el HTML necesario para nuevos elementos llevados al carrito y que se despliegan dentro del ticket-area.


