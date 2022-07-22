import './PaintsCollection.css';
import PaintItem from './PaintItem';


const PaintsCollection = (props)=> {

    return (

       <div className='paint-collection'> 

           <h2 className='header-category'>{props.category} COLLECTION</h2>

           <div className='paints-items'>

                 {props.paints.map((paint) => (

                         <PaintItem
                             key={paint.id} 
                             title={paint.title}
                             img={paint.img}
                             description={paint.description}
                              price={paint.price}
                    />
            

                ))} 
         </div>
          
        </div>

     );

}


export default PaintsCollection;