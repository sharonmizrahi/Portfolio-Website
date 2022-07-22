import './Gallery.css';
import PaintsCollection from './PaintsCollection';
import { cactus,prince,abstruct } from '../../data';


const Gallery = ()=> {

    return (

        <div className='gallery'>

            <h1 className='gallery-header'>GALLERY</h1>

            <div className='gallery-container'>
                  
                 <PaintsCollection category='ABSTRUCT' paints={abstruct} />
                
            </div>
          
        </div>

       );

}


export default Gallery;