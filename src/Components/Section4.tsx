import img18 from '../images/18.png';
import img19 from '../images/19.png';
import img20 from '../images/20.png';

export default function Section4() {
  return (
    <div>
         <h3 className='text-center text-2xl font-bold pt-5'>Blogs and Insight</h3>
         <p className='text-center text-[12px]'>Explore our Blog for Design inspiration and Tips</p>
       <section className='flex gap-2 justify-center items-center pl-4 pr-4 pt-5'>
                <img src={img18} className='w-[80px] h-[120px] md:w-[200px] md:h-[250px]'/>
           
                <img src={img19} className='w-[80px] h-[120px] md:w-[200px] md:h-[250px]'/>
            
                <img src={img20} className='w-[80px] h-[120px] md:w-[200px] md:h-[250px]'/>
            </section> 
    </div>
  )
}
