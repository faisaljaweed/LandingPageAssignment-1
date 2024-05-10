import img8 from '../images/08.png';
import img9 from '../images/09.png';
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';
import img13 from '../images/13.png';
import img14 from '../images/14.png';
import img15 from '../images/15.png';
import img16 from '../images/16.png';
export default function Section3() {
  return (
    <div>
            <h3 className='text-center text-2xl font-bold pt-5'>All Products </h3>
            <section className='flex gap-2 justify-center items-center pl-4 pr-4'>
                <img src={img8} className='w-[80px] h-[120px] md:w-[200px] md:h-[250px]'/>
           
                <img src={img9} className='w-[80px] h-[120px]  md:w-[200px] md:h-[250px]'/>
         
                <img src={img10} className='w-[80px] h-[120px]  md:w-[200px] md:h-[250px]'/>
            </section>
            <section className='flex gap-2 justify-center items-center pl-4 pr-4 pt-5'>
                <img src={img11} className='w-[80px] h-[120px]  md:w-[200px] md:h-[250px]'/>
           
                <img src={img12} className='w-[80px] h-[120px]  md:w-[200px] md:h-[250px]'/>
            
                <img src={img13} className='w-[80px] h-[120px]  md:w-[200px] md:h-[250px]'/>
            </section> 
            <section className='flex gap-2 justify-center items-center pl-4 pr-4 pt-5'>
                <img src={img14} className='w-[80px] h-[120px]  md:w-[200px] md:h-[250px]'/>
           
                <img src={img15} className='w-[80px] h-[120px]  md:w-[200px] md:h-[250px]'/>
            
                <img src={img16} className='w-[80px] h-[120px]  md:w-[200px] md:h-[250px]'/>
            </section> 

    </div>
  )
} 
 