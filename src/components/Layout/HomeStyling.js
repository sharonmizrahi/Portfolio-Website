import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade } from 'swiper';
import { home } from '../../data';
import 'swiper/css';
import './HomeStyling.css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


const HomeStyling = () =>{

    return (

       <div className='styling'>
           <div className='styling-summry'>
              <div className='summry-header'>
                 <h2>HOME STYLING</h2>
              </div>
              <div className='summry-p'>
                 <p>style your home with my art</p>
              </div>
           </div>
          <Swiper className='swiper-styling'
               modules={[ Autoplay,EffectFade ]}
               slidesPerView={1}
               loop={true}
               autoplay={{ delay: 2000}}
               effect="fade"
           >
               {home.map((paint) => (

                   <SwiperSlide className='img-styling'>
                         <img src={paint.img}></img>
                   </SwiperSlide>

                ))}
            
         </Swiper>
         
       </div>
      );
}
 
 
  export default HomeStyling