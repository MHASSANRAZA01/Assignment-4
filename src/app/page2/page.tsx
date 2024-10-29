import Link from 'next/link'
import Image from 'next/image'
import mouse1 from "../asset/mouse1.jpg"
import mouse2 from "../asset/mouse2.jpeg"
import mouse3 from "../asset/mouse3.jpeg"
import mouse4 from "../asset/mouse4.jpeg"
import mouse6 from "../asset/mouse6.webp"


const page = () => {
  return (
    <div>
        <h1 className='text-2xl ml-20 mt-10'>Top 5 Mouse in the World (2024): Price & Specifications</h1> <br />

        <Image className='mt-10 ml-20'
        src={"/asset/mouse1.jpg"}
        alt='Logitech MX Master 3S'
        width={500}
        height={500}
        /> <br />
        <h1 className='ml-20 text-2xl'>1. Logitech MX Master 3S</h1> <br />
       <ul className='ml-20 list-disc'>
        <li className='mt-2'><b>Use</b>: Productivity & Office</li>
        <li className='mt-2'><b>Price</b>: $99</li>
        <li className='mt-2'><b>Features</b>: Ultra-fast scroll wheel, ergonomic design, 8000 DPI sensor, supports multiple devices.</li>
        <li className='mt-2'><b>Why it's great</b>:  Ideal for professionals needing comfort and multi-device functionality​</li>
        </ul><br />
        {/* 2 */}
        <Image className='mt-10 ml-20'
        src={"/asset/mouse2.jpeg"}
        alt='Razer DeathAdder V3 Pro'
        width={500}
        height={500}
        /> <br />
        <h1 className='ml-20 text-2xl'>2. Razer DeathAdder V3 Pro</h1> <br />
       <ul className='ml-20 list-disc'>
        <li className='mt-2'><b>Use</b>: Competitive Gaming</li>
        <li className='mt-2'><b>Price</b>: $150</li>
        <li className='mt-2'><b>Features</b>: 30,000 DPI Focus Pro optical sensor, lightweight (63g), 90 hours of battery life, <br />
         1,000Hz polling (expandable to 4,000Hz with a dongle).</li>
        <li className='mt-2'><b>Why it's great</b>:  Known for precise tracking, it's an excellent option for serious gamers, <br />
         especially with palm grip preferences​</li>
        </ul><br />
        {/* 3 */}
        <Image className='mt-10 ml-20'
        src={"/asset/mouse3.jpeg"}
        alt='Alienware Pro Wireless Gaming Mouse'
        width={500}
        height={500}
        /> <br />
        <h1 className='ml-20 text-2xl'>3. Alienware Pro Wireless Gaming Mouse</h1> <br />
       <ul className='ml-20 list-disc'>
        <li className='mt-2'><b>Use</b>: Wireless Gaming</li>
        <li className='mt-2'><b>Price</b>: $130</li>
        <li className='mt-2'><b>Features</b>: 26,000 DPI sensor, 2.4GHz wireless with 4,000Hz polling, USB-C charging, ambidextrous design.</li>
        <li className='mt-2'><b>Why it's great</b>:  Exceptional build quality and comfort, with smooth gliding for fast-paced gameplay​
        ​</li>
         </ul> <br />
         {/* 4 */}
         <Image className='mt-10 ml-20'
        src={"/asset/mouse4.jpeg"}
        alt='Logitech G502 X PLUS'
        width={500}
        height={500}
        /> <br />
        <h1 className='ml-20 text-2xl'>4. Logitech G502 X PLUS</h1> <br />
       <ul className='ml-20 list-disc'>
        <li className='mt-2'><b>Use</b>: Versatile Gaming</li>
        <li className='mt-2'><b>Price</b>: $160</li>
        <li className='mt-2'><b>Features</b>: HERO 25K sensor, customizable buttons, 2.4GHz wireless, LIGHTSYNC RGB.</li>
        <li className='mt-2'><b>Why it's great</b>:  A highly customizable gaming mouse suited for FPS and MMO players alike, <br />
         combining performance and design​​</li>
         </ul> <br />
         {/* 5 */}
         <Image className='mt-10 ml-20'
        src={"/asset/mouse6.webp"}
        alt='LAMZU Maya'
        width={500}
        height={500}
        /> <br />
        <h1 className='ml-20 text-2xl'>Lightweight Wireless Gaming</h1> <br />
       <ul className='ml-20 list-disc'>
        <li className='mt-2'><b>Use</b>: Versatile Gaming</li>
        <li className='mt-2'><b>Price</b>: $100</li>
        <li className='mt-2'><b>Features</b>: 46.4g weight, 1,000Hz polling rate (expandable to 4,000Hz), low-latency clicks, open-bottom design.</li>
        <li className='mt-2'><b>Why it's great</b>:  Its ultra-lightweight build is favored by gamers who need fast aim and flicks,  <br />
        although it may collect dust over time due to the open design​​</li>
         </ul> <br />
         <br />

        </div> 
        

  );
}

export default page