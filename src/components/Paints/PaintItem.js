 import './PaintItem.css';

const PaintItem = (props) =>{

   return (

      <div className='card'>
           <div className='card-img'>
              <img className='img' src={props.img}></img>
            </div>
            <div className='card-title'>
              <p>{props.title}</p>
           </div>
         </div>
     );
 }


 export default PaintItem