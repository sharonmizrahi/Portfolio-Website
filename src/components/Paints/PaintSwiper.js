import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import PaintItem from './PaintItem';
import 'swiper/css';
import './PaintSwiper.css';
import 'swiper/css/navigation';


const PaintSwiper = (props) =>{

    return (

       <div className='paint-swiper'>
          <h2 className='category-header'>{props.category} COLLECTION</h2>
          <Swiper className='swiper-container'
               spaceBetween={30}
               slidesPerView={4}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}
           >
               {props.paints.map((paint) => (

                   <SwiperSlide>
                       <PaintItem
                          key={paint.id} 
                          title={paint.title}
                          img={paint.img}
                          description={paint.description}
                          price={paint.price}
                    >

                        </PaintItem>
                   </SwiperSlide>

                ))}
            
         </Swiper>
         
       </div>
      );
  }
 
 
  export default PaintSwiper