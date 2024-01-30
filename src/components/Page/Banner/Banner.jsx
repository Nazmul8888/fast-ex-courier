

import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='relative  '>
            <img src="https://www.steadfast.com.bd/icon/bg-wave-img.svg" alt="" />
            <h1 className=' absolute inset-x-0 top-0 h-16 max-w-screen-xl mx-auto content mt-20'><span className=' text-[#FFCC00] '>We Have Fast</span> <br /><span className=' text-[#343a40]'>Delivery To Your</span> <br />Home</h1>
            <Link to='/register'>
            <button  className="btn btn-wide bg-red-600 bg feature-content .btn font-16 absolute inset-x-30  ml-80  top-80 h-16 max-w-screen-xl mx-auto content ">Become A Merchant</button>
            </Link>
          
            <img className='absolute top-0 right-0 max-w-screen-2xl mx-auto mr-56 mt-20' src="https://i.ibb.co/Gt01ftc/slider-motor-bike.png" alt="" />

            <br />
            <br />
          </div>

          <div className=''>
          
          </div>

            <div className='card track-elem relative  py-16 '>
            <div className=' w-100'>
            <span className=' text-3xl font-bold text-[#FFCC00]  ml-96'>TRACK YOUR CONSIGNMENT</span>
            </div>
            <br />
            <div className='w-96  flex justify-center gap-2 ml-96'>
            <input  type="text" name="tracking_code" placeholder="Enter your tracking code" className="btn btn-block text-red-600 font-medium font-h-md-14 mbl-trc-btn without-focus border-lightseagreen-1 py-2 h-auto">

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