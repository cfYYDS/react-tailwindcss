const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className="w-[500px] mx-auto my-4 h-full sm:w-full" src='./src/assets/pic1.jpg' alt="" />
            <div className="flex flex-col justify-center md:mx-8 m-8">
                <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor
                     sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor inci
                      didunt ut labore et dolore magna 
                      aliqua. Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris nisi u
                      t aliquip ex ea commodo consequat. Duis aute irure
                       dolor in reprehenderit in voluptate veli
                       t esse cillum dolore eu fugiat nulla pariatur
                       . Excepteur sint occaecat cupidatat non proident
                       , sunt in culpa qui officia deserunt mollit anim id
                        est laborum.</p>           
                        <button className="bg-black text-[#00df9a] w-[200px]
                        rounded-md font-medium my-6 mx-auto py-3 xl:mx-0">Get Started</button>   
            </div>
        </div>
    </div>
  )
}

export default Analytics