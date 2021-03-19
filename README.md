# Dynamic Showcase
Proyecto sencillo de práctica básica para tecnología HTML + CSS + JS. Se trata de un showcase de frutas que permite arrastrar items predefinidos a un carrito de la compra y que va llevando la cuenta de todo lo incluido en el carrito.

## HTML + CSS
Un layout de HTML básico que usa bootstrap y estilos propios. Diseñado bajo los parámetros mobile first.

### Showcase
Un showcase sencillo con varias imagenes para representar los elementos.

### Carrito
Una imagen de carrito de la compra que sirve como droparea y notifica cuántos items se van agregando.

### Ticket area
Listado de artículos y unidades que se van agregando, junto con su precio.

## JS
Los elementos del showcase se han tratado como objetos con 3 propiedades: nombre, imagen y precio. El showcase inicial se crea a partir de una función predefinida en JS que agrega el HTML, lo que permite modificar facilmente el orden de los 4 items que se usan para la presentación.

### Funciones utilizadas

* Secuencia de funciones drag&drop creada según standard [w3schools](https://www.w3schools.com/html/html5_draganddrop.asp)

* Funciones generales para relizar la impresión:
1. **printShowcase**. Recibe el id de la "balda" (fila) del showcase y el orden de 4 objetos para colocar.

2. **printArticles**. Recibe el parámetro "id" del elemento en el DOM para identificar el área donde se va a colocar la lista y va imprimiendo los items que se van arrastrando al carrito. Sabe identificar entre items repetidos para no repetirlos, sino contarlos y sumar su precio. Añade también el total de la lista de precios.

2. **printGeneralCount**. Recibe un parámetro "count" que almacena la cuenta de todos los drag&drops exitosos que se van registrando y que imprime el HTML necesario para que se despliegue en forma de icono circular en la esquina superior derecha del carrito.

* Funciones de encapsulamiento
1. **getPrice**. Obtiene el precio del objeto cuyo nombre aparece en la lista. 

2. **printHTML**. Inserta el HTML necesario para el primer elemento llevado al carrito y que se despliega dentro del ticket-area.

3. **appendHTML**. Añade el HTML necesario para nuevos elementos llevados al carrito y que se despliegan dentro del ticket-area.

4. **printTotal**. Lee los items en la lista, junto con la cantidad que hay de ellos y va sumando todos los subtotales para luego imprimir el total.


