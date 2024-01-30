
import './calculate.css'


const CalculateCharge = () => {
    return (
        <div className=' py-10'>
            <h1 className=" text-3xl font-bold text-center"> Calculate Charge </h1>


            <div className=' flex justify-center gap-10  py-10'>
                <div className=' row form-group  '>
                <div>
                 <h1 className=' text-xl font-bold text-black  py-2'>From</h1>
                <div className="form-control">
               <select id='FromId' className=" w-44 border-2 border-[#FFCC00]  "></select>
               <option value="14">Dhaka</option>
                </div>
                </div>
                </div>
                <div className=' row form-group  '>
                <div>
                 <h1 className=' text-xl font-bold text-black  py-2'>Destination</h1>
                <div className="form-control">
               <select id='FromId' className=" w-44 border-2 border-[#FFCC00]  "></select>
               <option value="14">Dhaka</option>
                </div>
                </div>
                </div>
                <div className=' row form-group  '>
                <div>
                 <h1 className=' text-xl font-bold text-black  py-2'>Category</h1>
                <div className="form-control">
               <select id='FromId' className=" w-44 border-2 border-[#FFCC00]  "></select>
               <option value="14">Dhaka</option>
                </div>
                </div>
                </div>
                <div className=' row form-group  '>
                <div>
                 <h1 className=' text-xl font-bold text-black  py-2'>Service</h1>
                <div className="form-control">
               <select id='FromId' className=" w-44 border-2 border-[#FFCC00]  "></select>
               <option value="14">Dhaka</option>
                </div>
                </div>
                </div>
                <div className=' row form-group  '>
                <div>
                 <h1 className=' text-xl font-bold text-black  py-2'>Weight (KG)</h1>
                <div className="form-control">
               <select id='FromId' className=" w-44 border-2 border-[#FFCC00]  "></select>
               <option value="14">Dhaka</option>
                </div>
                </div>
                </div>

                

            </div>

            {/* total section  */}
            <div className=' flex justify-center '>
                <div className='del-charge'>
                <strong>50Tk</strong>
                </div>
                
            </div>
            <div className=' py-4'>
           <p className='flex justify-center'> * ১% ক্যাশ অন ডেলিভারি ও রিস্ক ম্যানেজমেন্ট চার্জ প্রযোজ্য</p>
               
           <p className='flex justify-center'> * পার্সেল সাইজের কারণে ডেলিভারি মাশুল পরিবর্তিত হতে পারে</p>
         
           <p className='flex justify-center  mr-32'> * উক্ত চার্জসমূহ ভ্যাট ও ট্যাক্স ব্যাতিত</p>
          
            <p className='flex justify-center'>* অনাকাঙ্ক্ষিত কারণবশত ডেলিভারি সময়ের পরিবর্তন হতে পারে</p>
            </div>
        </div>
    );
};

export default CalculateCharge;