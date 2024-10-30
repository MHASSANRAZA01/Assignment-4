 
import Link from 'next/link'
import Image from 'next/image'
import image from "/images/mackbook.png"
import DELL from "/images/DELL.webp"
import asus from "/images/asus.jpg"
import OIP from "/images/OIP.jpeg"
import hp from "/images/hp.jpeg"

const page = () => {
  return (
    <div >
        <h1 className='text-2xl ml-20 mt-10'>Top 5 Laptops in the World (2024): Price & Specifications</h1> <br />

        <p className='ml-20'>With the laptop market booming with new technology, finding the best one can be overwhelming. <br />
        Whether you need a laptop for gaming, coding, business, or casual use, here’s a detailed look at the <br />
        top 10 laptops in the world for 2024 based on <b> performance, design, price, and features.</b> <br />
        </p> <br />
        <Image className='mt-10 ml-20'
        src={"/images/mackbook.png"}
        alt='Mack Book Photo'
        width={500}
        height={500}
        /> <br />
        <br />
       <h1 className='ml-20 text-2xl'>1. Apple MacBook Pro 16-inch (M2 Max)</h1> <br />
       <ul className='ml-20 list-disc'>
        <li className='mt-2'><b>Processor</b>: Apple M2 Max</li>
        <li className='mt-2'><b>RAM</b>: 32GB / 64GB</li>
        <li className='mt-2'><b>Storage</b>: 512GB - 8TB SSD</li>
        <li className='mt-2'><b>Display</b>: 16.2-inch Liquid Retina XDR</li>
        <li className='mt-2'><b>Graphics</b>: Integrated 38-core GPU</li>
        <li className='mt-2'><b>Battery Life</b>: Up to 22 hours</li>
        <li className='mt-2'><b>Price</b>: Starting from $3,499</li>
        <li className='mt-2'><b>Ideal for</b>: Creators, Video editors, and Developers.</li> <br />
        <p>This powerhouse laptop offers incredible performance and stunning visuals, <br /> 
        making it a favorite among professionals.</p>
       </ul>
        <br />
  {/* 2 */}

  <Image className='mt-10 ml-20'
        src={"/images/DELL.webp"}
        alt='ASUS ROG Zephyrus G14'
        width={500}
        height={500}
        /> <br />
        <br />
        <h1 className='ml-20 text-2xl'> 2. Dell XPS 15 (2024)</h1> <br />
       <ul className='ml-20 list-disc'>
        <li className='mt-2'><b>Processor</b>: Intel Core i9-13900H</li>
        <li className='mt-2'><b>RAM</b>: 32GB / 64GB</li>
        <li className='mt-2'><b>Storage</b>: 512GB - 4TB SSD</li>
        <li className='mt-2'><b>Display</b>: 15.6-inch OLED, 3.5K resolution</li>
        <li className='mt-2'><b>Graphics</b>: NVIDIA GeForce RTX 4070</li>
        <li className='mt-2'><b>Battery Life</b>: Up to 13 hours</li>
        <li className='mt-2'><b>Price</b>: S$2,399</li>
        <li className='mt-2'><b>Ideal for</b>:  Designers, Programmers, and Business users</li> <br />
        <p>TThe XPS 15 combines sleek aesthetics with powerful internals for productivity and entertainment.<br /> 
        </p>
       </ul>
        <br />
        <Image className='mt-10 ml-20'
        src={"/images/asus.jpg"}
        alt='Mack Book Photo'
        width={500}
        height={500}
        /> <br />
        <br />
        <h1 className='ml-20 text-2xl'> 3. ASUS ROG Zephyrus G14</h1> <br />
       <ul className='ml-20 list-disc'>
        <li className='mt-2'><b>Processor</b>: AMD Ryzen 9 7940HS</li>
        <li className='mt-2'><b>RAM</b>: 16GB / 32GB</li>
        <li className='mt-2'><b>Storage</b>: 1TB SSD</li>
        <li className='mt-2'><b>Display</b>: 14-inch QHD+, 165Hz refresh rate</li>
        <li className='mt-2'><b>Graphics</b>:  NVIDIA RTX 4060 / 4090</li>
        <li className='mt-2'><b>Battery Life</b>: Up to 13 hours</li>
        <li className='mt-2'><b>Price</b>: $1,799</li>
        <li className='mt-2'><b>Ideal for</b>:  Gamers and creators.</li> <br />
        <p>This lightweight gaming laptop packs immense power in a compact frame, perfect for gaming on the go.<br /> 
        </p>
       </ul>
        <br />
        
        <Image className='mt-10 ml-20'
        src={"/images/OIP.jpeg"}
        alt=' Lenovo ThinkPad X1 Carbon Gen 11'
        width={500}
        height={500}
        /> <br />
        <br />
        <h1 className='ml-20 text-2xl'> 4. Lenovo ThinkPad X1 Carbon Gen 11</h1> <br />
       <ul className='ml-20 list-disc'>
        <li className='mt-2'><b>Processor</b>: Intel Core i7-1365U</li>
        <li className='mt-2'><b>RAM</b>: 16GB / 32GB</li>
        <li className='mt-2'><b>Storage</b>: 512GB - 2TB SSD</li>
        <li className='mt-2'><b>Display</b>: 14-inch WUXGA touchscreen</li>
        <li className='mt-2'><b>Graphics</b>:  Intel Iris Xe</li>
        <li className='mt-2'><b>Battery Life</b>: Up to 15 hours</li>
        <li className='mt-2'><b>Price</b>: $1,799</li>
        <li className='mt-2'><b>Ideal for</b>:  Business professionals.</li> <br />
        <p>Known for durability and reliability, this laptop offers superb productivity features.<br /> 
        </p>
       </ul>
        <br />
        <Image className='mt-10 ml-20'
        src={"/images/hp.jpeg"}
        alt=' Lenovo ThinkPad X1 Carbon Gen 11'
        width={500}
        height={500}
        /> <br />
        <br />
        <h1 className='ml-20 text-2xl'> 5. HP Spectre x360 14</h1> <br />
       <ul className='ml-20 list-disc'>
        <li className='mt-2'><b>Processor</b>: Intel Core i7-1355U</li>
        <li className='mt-2'><b>RAM</b>: 16GB</li>
        <li className='mt-2'><b>Storage</b>: 512GB - 1TB SSD</li>
        <li className='mt-2'><b>Display</b>: 13.5-inch OLED 3:2, 3000x2000 resolution</li>
        <li className='mt-2'><b>Graphics</b>:  Intel Iris Xe</li>
        <li className='mt-2'><b>Battery Life</b>: Up to 17 hours</li>
        <li className='mt-2'><b>Price</b>: $1,599</li>
        <li className='mt-2'><b>Ideal for</b>:  Students and designers.</li> <br />
        <p>This 2-in-1 convertible laptop blends versatility with style.<br /> 
        </p>
       </ul>
        <br />


         

 

        

        
          
        
 
    </div>
  )
}

export default page