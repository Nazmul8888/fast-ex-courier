import { Link } from "react-router-dom";
import './register.css'



const Register = () => {


    const handelRegister = e=>{
        e.preventDefault();
        
        const business = e.target.business.value;
        const name = e.target.name.value;
        const address = e.target.address.value;
        const number = e.target.number.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
       


        console.log(business,name,address,number,email,password)
    }


    return (
        <div className=" py-10">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto py-36">
        <img className=" items-center    " src="https://i.ibb.co/2sR6n1t/logo.png" alt="" />
        <h1 className="text-3xl font-bold text-center text-indigo-600">Become a Merchant</h1>
        {/* Input fields and the form started */}
        <form onSubmit={handelRegister} action="" className="space-y-6">
            <div className="space-y-2 text-sm ">
                <label htmlFor="username" className="block ">
                  
                </label>
                <input type="text" name="business" id="username" placeholder="  Name of Business" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
            </div>
            <div className="space-y-2 text-sm">
                <label htmlFor="username" className="block ">
                  
                </label>
                <input type="text" name="name" id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
            </div>
            <div className="space-y-2 text-sm">
                <label htmlFor="username" className="block ">
                   
                </label>
                <input type="text" name="address" id="username" placeholder="Address of your Pick up Location" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
            </div>
            <div className="space-y-2 text-sm">
                <label htmlFor="username" className="block ">
                  
                </label>
                <input type="text" name="number" id="username" placeholder=" Phone Number" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
            </div>
            <div className="space-y-2 text-sm">
                <label htmlFor="username" className="block ">
                   
                </label>
                <input type="text" name="email" id="username" placeholder=" Email" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
            </div>
            <div className="space-y-2 text-sm">
                <label htmlFor="password" className="block ">
                    Password
                </label>
                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                <div className="flex justify-end text-xs ">
                    <a href="#" className="hover:underline">
                        {/* Forgot Password? */}
                    </a>
                </div>
            </div>
            {/* Sign in Button */}
            <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
               Register
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                    Lets go
                </span>
                <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            </button>
        </form>


        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
            Have an account?
            <Link to='/login'>
            <a href="#" className="underline hover:text-indigo-600">
               Login
            </a>
            </Link>
        </p>
        </div>

    </div>
    );
};

export default Register;