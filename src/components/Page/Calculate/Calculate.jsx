import { useState } from "react";


const Calculate = () => {
    const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [charge, setCharge] = useState(0);
  const [pricePerKg, setPricePerKg] = useState(100);


  const handleCalculate = () => {
    // Replace this with your actual charge calculation logic
    // Here is just a simple example calculation based on weight
    const baseChargePerKg = 100; // $1.5 per kg
    const calculatedCharge = baseChargePerKg * weight;
    setCharge(calculatedCharge);
  };
  const handlePricePerKgChange = (event) => {
    setPricePerKg(parseFloat(event.target.value));
  };

    return (
        <div className=" py-10">
             <h1 className=" text-3xl font-bold text-center"> Calculate Charge </h1>

            <div className=' flex justify-center gap-10  py-10'>


        <div>
        <h1 className=' text-xl font-bold text-black  py-2'>From</h1>
        <input className=" w-44 border-2 border-[#FFCC00]  "
        type="text"
        value={source}
        placeholder=""
        onChange={(e) => setSource(e.target.value)}
      />
        </div>


      <div>
      <h1 className=' text-xl font-bold text-black  py-2'>Destination</h1>
      <input className=" w-44 border-2 border-[#FFCC00]  "
        type="text"
        value={destination}
        placeholder=""
        onChange={(e) => setDestination(e.target.value)}
      />
      </div>
      
                        
        <div>
        <h1 className=' text-xl font-bold text-black  py-2'>Price Per kg</h1>
        <input 
        className=" w-44 border-2 border-[#FFCC00]  "
         type="number" value={pricePerKg} onChange={handlePricePerKgChange} />
        </div>
        
     <div>
     <h1 className=' text-xl font-bold text-black  py-2'>Weight (KG)</h1>
     <input   className=" w-44 border-2 border-[#FFCC00]  "
        type="number"
        value={weight}
        placeholder="Weight (kg)"
        onChange={(e) => setWeight(parseFloat(e.target.value))}
      />
     </div>
     </div>


                <div className=" flex justify-center gap-5">
            <div >
             <button onClick={handleCalculate} className=" btn btn-warning">Calculate</button>
             </div>

             <div className="  mt-3"> {charge > 0 && <p>Charge: ${charge.toFixed(2)}</p>}</div>
            </div>

            <div>
            <div className=' py-4'>
           <p className='flex justify-center'> * ১% ক্যাশ অন ডেলিভারি ও রিস্ক ম্যানেজমেন্ট চার্জ প্রযোজ্য</p>
               
           <p className='flex justify-center'> * পার্সেল সাইজের কারণে ডেলিভারি মাশুল পরিবর্তিত হতে পারে</p>
         
           <p className='flex justify-center  mr-32'> * উক্ত চার্জসমূহ ভ্যাট ও ট্যাক্স ব্যাতিত</p>
          
            <p className='flex justify-center'>* অনাকাঙ্ক্ষিত কারণবশত ডেলিভারি সময়ের পরিবর্তন হতে পারে</p>
            </div>
            </div>
    </div>
  );
};

export default Calculate;