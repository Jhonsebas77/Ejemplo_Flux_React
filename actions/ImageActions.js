/**
 * Module dependencies
 */

 import Reflux from 'reflux';

/**
 * Objeto que tiene todas la acciones de las imagenes que vamos
 * a traer del feed, recibe un Array [] y como parametro el
 * nombre de la accion que desea llamar, entiendo que es un nombre
 * que mas adelante vamos a crear como metodo
 */
 let ImageActions = Reflux.createActions([
  'fetchList'
]);

/**
 * Y lo exportamos
 */

export default ImageActions;
