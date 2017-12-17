/**
 * Module dependencies
 */

 import Reflux from 'reflux';
 import $ from 'jquery';
 import ImageActions from '../actions/ImageActions';

 /**
  * Creamos un Objeto Store, recibe un Objeto
  * para decirle al Store que escuche las acciones de las imagenes creamos
  * un atributo que escuche y colocamos el array con las Actions que queremos queremos
  que escuche y ejecuta el metodo igual a la accion que se dispare
  */
let ImageStore = Reflux.createStore({
  url:'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
  listenables:[ImageActions],
  imagelist:[],
  init: function(){
    this.fetchList();
  }
   /**
    * Creamos el metodo con el nombre de la accion para ejecutarlo
    * este metodo ejecuta la peticion por Ajax a la API, pasandole
    todos las propiedades que queremos que ejecute el Request

    Incluimos la URL del Request definiendola como atributo, ? sirve para
    agruegar atributos
    */
  fetchList: function(){
    /**
     * Luego creamos los Tags para que los traiga especificamente en el CallBack success
     y se guarda en imagelist el resultado del data
     el Trigger dispara la actualizacion de las vistas
     */
    let tags =[ 'apple', 'ios', 'Mac', 'iphone', 'imac' ];
    let randomTag = tags[Math.floor(Math.ramdom()*tags.length)];
    $.ajax({
      url:this.url+'&tag=${randomTag}',
      dataType:'jsonp',
      jsonpCallback:'jsonFlickrFeed',
      cache: false,
      context: this,
      success: function(data){
        console.log('fetch ok');
        this.imagelist=data.items;
        this.trigger(this.imagelist);
      }
    })
  }
});

exports default ImageStore;
