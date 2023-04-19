import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faBagShopping, faTruck, faTruckFast } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div className="p-4 w-screen flex flex-col justify-center items-center gap-6 box-border lg:pt-24 pt-20 relative min-h-screen">
            <div className="bg-[url('https://images.unsplash.com/photo-1634403665481-74948d815f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]
                            bg-auto md:w-full md:bg-cover bg-no-repeat w-auto h-auto box-border p-8 relative flex flex-col justify-start items-start gap-4 pb-24">
                <h3 className="text-xs md:text-md lg:text-lg font-semibold">LEARN  HOW EVERYONE GETS</h3>
                <p className="text-3xl lg:text-4xl font-semibold">Phone Pro for up to $100 off</p>
                <h3 className="text-sm md:text-lg text-gray-700 mt-2">With eligible trade-in</h3>
                <h3 className='text-xs md:text-sm text-gray-500 underline mb-8'>See offer details</h3>
                <button className='px-6 md:px-8 py-2 md:py-4 text-white bg-violet-600 hover:bg-violet-800 duration-700 transition-all rounded-md text-xs font-semibold'>SHOP NOW <FontAwesomeIcon icon={faArrowRightLong} /></button>
            </div>
            <div className='flex flex-col gap-4 md:flex-row box-border'>
                <div className='p-8 bg-gray-100 flex flex-col justify-start items-start gap-4 w-screen md:w-full box-border'>
                    <h3 className='text-lg lg:text-xl font-semibold'>WIRELESS</h3>
                    <h3 className='text-2xl lg:text-4xl font-semibold'>Fast Secure Trusted</h3>
                    <h3 className='text-xs lg:text-lg text-gray-500'>Americas's best network</h3>
                    <h3 className='lg:text-xs'>Learn more <FontAwesomeIcon icon={faArrowRightLong} size='xs' /></h3>
                </div>
                <div className='p-8 bg-gray-100 flex flex-col justify-start items-start gap-4 w-screen md:w-full box-border'>
                    <h3 className='text-lg lg:text-xl font-semibold'>UNLIMITED DATA PLANS</h3>
                    <h3 className='text-2xl lg:text-4xl font-semibold'>With unlimited data you and yours get more</h3>
                    <h3 className='text-xs lg:text-lg text-gray-500'>Pick the perfect plan for each member of your family</h3>
                    <h3 className='lg:text-xs'>Learn more <FontAwesomeIcon icon={faArrowRightLong} size='xs' /></h3>
                </div>
                <div className='p-8 bg-gray-100 flex flex-col justify-start items-start gap-4 w-screen md:w-full box-border'>
                    <h3 className='text-lg lg:text-xl font-semibold'>WIRELESS</h3>
                    <h3 className='text-2xl lg:text-4xl font-semibold'>Fast Secure Trusted</h3>
                    <h3 className='text-xs lg:text-lg text-gray-500'>Americas's best network</h3>
                    <h3 className='lg:text-xs'>Learn more <FontAwesomeIcon icon={faArrowRightLong} size='xs' /></h3>
                </div>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center box-border'>
                    <h3 className='text-2xl font-semibold mt-4 text-center'>Stay Connected Get Entertainment.</h3>
                    <div className="bg-[url('https://images.unsplash.com/photo-1605719125065-3dd9e3f79057?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]
                                    bg-cover md:w-full md:bg-full bg-no-repeat box-border p-6 lg:p-32 mt-12 flex flex-col justify-center items-center gap-12">
                        <h3 className='text-xl mt-12'>Internet</h3>
                        <p className='text-xl font-semibold text-center'>Consistent speed. Staightforward price.</p>
                        <p className='font-semibold text-center'>Enjoy your internet with no anual contract and no equipment fees.</p>
                        <button className='px-6 py-2 border-2 border-white text-white hover:border-white hover:text-black hover:bg-white transition-all duration-700 rounded-sm mb-12 font-bold'>Learn More</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center pb-12 lg:mt-16 box-border'>
                    <h3>FAST EASY ONLINE</h3>
                    <h3 className='text-2xl lg:text-4xl font-semibold mt-4'>Shop The Way You Want</h3>
                    <div className='flex flex-col justify-center items-center gap-8 lg:gap-32 md:flex-row md:gap-4 md:w-full box-border'>
                        <div className='flex  flex-col justify-center items-center gap-4 box-border'>
                            <FontAwesomeIcon icon={faBagShopping} size='2xl' className='mt-12 text-violet-600' />
                            <h3 className='text-xl'>Same day pickup</h3>
                            <p className='text-center'>Order online and pickup on store or curbside today</p>
                            <button className='text-lg'>Find a store <FontAwesomeIcon icon={faArrowRightLong} size='xs' /></button>
                        </div>
                        <div className='flex  flex-col justify-center items-center gap-4 box-border'>
                            <FontAwesomeIcon icon={faTruck} size='2xl' className='mt-12 text-violet-600' />
                            <h3 className='text-xl'>Same day delivery</h3>
                            <p className='text-center'>Get delivery and an expert will set up everything for you</p>
                            <button className='text-lg'>Learn More <FontAwesomeIcon icon={faArrowRightLong} size='xs' /></button>
                        </div>
                        <div className='flex  flex-col justify-center items-center gap-4 box-border'>
                            <FontAwesomeIcon icon={faTruckFast} size='2xl' className='mt-12 text-violet-600' />
                            <h3 className='text-xl text-center'>Free shipping and flexible returns</h3>
                            <p className='text-center'>Shop online with free shipping and flexible returns</p>
                            <button className='text-lg'>Learn More <FontAwesomeIcon icon={faArrowRightLong} size='xs' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home