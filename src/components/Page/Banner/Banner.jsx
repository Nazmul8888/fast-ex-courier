

import './Banner.css'

const Banner = () => {
    return (
        <div>
        <div className='relative  '>
            <img src="https://www.steadfast.com.bd/icon/bg-wave-img.svg" alt="" />
            <h1 className=' absolute inset-x-0 top-0 h-16 max-w-screen-xl mx-auto content'>Parcel Delivered <br />On Time with no Hassle</h1>
            <img className='absolute top-0 right-0 max-w-screen-2xl mx-auto mr-56' src="https://www.steadfast.com.bd/icon/dlv-man.png" alt="" />
        </div>

            <div className='card track-elem relative '>
            <div className=' w-100'>
            <span className=' text-3xl font-bold text-purple-600 '>TRACK YOUR CONSIGNMENT</span>
            </div>
            <br />
            <div>
            <input type="text" name="tracking_code" placeholder="Enter your tracking code" className="btn btn-block text-red-600 font-medium font-h-md-14 mbl-trc-btn without-focus border-lightseagreen-1 py-2 h-auto">

            </input>
            <br />
            <br />
            <button type="button" className="btn btn-block text-red-600 font-medium font-h-md-14 mbl-trc-btn without-focus border-lightseagreen-1 py-2"><span className="pr-1 d-none">TRACK PRODUCT</span> </button>
            </div>
            <div>
            
            </div>
            </div>


        </div>




    );
};

export default Banner;