/**
 * Module dependencies
 */

 import React from 'react';
 import Reflux from 'reflux';
 import ImageStore from '../stores/ImageStore';

/**
 *  Para que el componente ImageGrid escuche los cambios en el Store
 debemos usar un Mixing (Pendiente por investigar que es y como funciona)
 Es un Array que recibe el ImageStore que es lo que nos interesa y el
 atributo del State que queremos que se modifique
Luego, Render nos devuelve un JSX con el contenido que queremos ver en el DOM

 */
 let ImageGrid = React.createClass({
    mixins:[Reflux.connect(ImageStore,'imagestore')],
    render:function(){
      if(this.state.imagestore){
        return
          <div>
            {
              this.state.imagestore.map((image)=>{
                return
                <div className="image">
                  <a href={image.link}>
                    <img src={image.media.m}/>
                  </a>
                </div>
              })
            }
          </div>
      }else{
        return <p> No hay imagenes disponibles </p>
      }
    }
 });

 export default ImageGrid;
