
const Newsletter = () => {
  return (
    <div className='text-white w-full py-16 px-4'>
        <div className='max-w-[1200px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
            <h1 className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p className='py-2'>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col gap-2 sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                <button className='button'>Notify Me</button>
            </div>
            <p>We care bout the protection of your data.Read our<span className='text-[#00df9a] mx-2'>Privacy Policy.</span></p>
        </div>
        </div>
    </div>
  )
}

export default Newsletter