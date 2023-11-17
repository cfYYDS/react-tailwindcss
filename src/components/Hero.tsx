import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full  mx-auto text-center flex flex-col gap-2 my-12'>
            <p className='text-[#00df9a] font-bold '>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='md:text-5xl sm:text-4xl text-xl font-bold flex justify-center items-center'>
                <p className='py-4'>Fast, flexible financing for</p>
                <Typed className='pl-2 md:pl-4'
                strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop={true} />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Mointor your data analytics to increase revenue for BTB,BTC,&SASS platforms.</p>
            <button className='button'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero