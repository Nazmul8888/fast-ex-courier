import { useState } from "react";

const accordionData = [

{title: 'Daily Pick up, No limitations', subtitle: 'Steadfast Courier gives you the opportunity of unlimited pickup. You can give any amount of parcels regardless of their size and weight. ', colorBg: 'bg-amber-500', colorBorder: 'border-amber-500'},

{title: ' Faster Payment Service', subtitle: 'At Steadfast Courier you can request for your payment every six days of the week', colorBg: 'bg-orange-500', colorBorder: 'border-orange-500'},

{title: ' Cash on Delivery', subtitle: 'At Steadfast Courier we will collect the cash on behalf of you. Our trusted delivery man will deliver your parcel to your customer', colorBg: 'bg-red-500', colorBorder: 'border-red-500'},

{title: ' Real-Time Tracking', subtitle: 'Steadfast Courier provides an unique tracking code for your every consignments', colorBg: 'bg-sky-500', colorBorder: 'border-sky-500'},

{title: ' Online Management', subtitle: 'With our simple and easy to use user interface you can get all the information you need in your own user dashboard.', colorBg: 'bg-purple-500', colorBorder: 'border-purple-500'},
{title: '  Advanced Customer Service', subtitle: 'Our Call Center Executives are always ready 24/7 to help you with your problems', colorBg: 'bg-purple-500', colorBorder: 'border-purple-500'}


];

const Accordion = () => {
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className=" ">
        <div className="w-fit mx-auto min-h-[300px] flex gap-1 ">
                {accordionData.map((_, idx) => (
                    <div key={idx} className="flex">
                        {/* toggle item */}
                        <button onClick={() => handleToggle(idx)} className={`h-full flex justify-around flex-col items-center w-14 ${_.colorBg} text-white rounded-lg relative`}>
                            {isActive === idx && <span className={`w-0 h-0 ${_.colorBorder} border-r-[20px] border-b-[20px] border-r-transparent absolute rotate-[225deg] left-10 top-4`}></span>}
                            <p>{idx + 1}</p>
                            <p className="rotate-[270deg]"></p>
                        </button>
                        {/* container */}
                        <div
                            className={`grid place-content-center bg-gray-200 shadow-md rounded-lg ${
                                isActive === idx ? 'w-56 px-5 opacity-1 scale-1' : 'w-0 opacity-0 scale-0'
                            } text-black ml-2 duration-300 ease-in-out`}
                        >
                            <h2 className="lg:text-2xl font-black">{_.title}</h2>
                            <p className="text-black/60">{_.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            </div>
    );
};

export default Accordion;
