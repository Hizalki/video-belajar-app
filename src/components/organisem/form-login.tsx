import { Google } from "@mui/icons-material";
import React, { useState } from "react";

function FormLogin() {
     const [email, setEmail] = useState("");
     const [password, setPassword]= useState("")

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   
    console.log("Email :", email);
    console.log("Password :", password);

  };
    


    return(
        <div className="bg-[#FFFDF3] flex justify-center items-center w-full h-screen "> 
            <div className="flex flex-col items-star p-9 gap-[36px] w-[590px] h-[617px] bg-white box-border  border border-gray-100 rounded-lg ">
                <div className="flex flex-col justify-center items-center">
                        <h3 className="text-[#222325] Poppins text-[36px] font-bold text-center leading-10">Masuk Ke Akun</h3>
                         <p className="text-[#717177] text-base font-normal leading-8 tracking-wide ">yuk, lanjutin belajarmu di videobelajar</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col  gap[24px]" >
                        <label htmlFor="email" className="text-[#717177] text-base font-sans leading-8 tracking-wide">
                            Email: <br />
                        <input type="email" 
                             value={email} 
                             className="flex-1 py-1 px-0 items-center gap-2 w-full border border-gray-200 rounded-lg outline-gray-200"
                             placeholder=""
                             onChange={(e) => setEmail(e.target.value)}/>
                        </label><br />
                        <label htmlFor="password" className="text-[#69696d] text-base font-sans leading-8 tracking-wide">
                            Password: <br />
                        <input type="password"
                            className="flex-1 py-1 px-0 items-center gap-2 w-full border border-gray-200 rounded-lg outline-gray-200"
                            onChange={(e) => setPassword(e.target.value)}/>
                        </label><br/>
                        <a href="#" className="flex justify-end text-[#717177] text-base font-sans leading-8 tracking-wide   ">
                            Lupa Password?</a><br />
                        <button type="submit"
                                className="flex w-full flex-col justify-center items-center rounded-lg bg-[#3ECF4C] hover:bg-green-500 py-2.5 px-6.5 gap-1 font-bold font-sans text-amber-50 cursor-pointer "
                        >Masuk</button><br />
                        <button type="button"
                                className="flex w-full flex-col justify-center items-center rounded-lg bg-[#E2FCD9CC] py-2.5 px-6.5 gap-1 font-bold font-sans text-[#3ECF4C] cursor-pointer  outline-green-500  "
                        >Daftar</button>
                        <p className="flex justify-center text-[#717177] text-base font-sans leading-9 tracking-wide">atau</p>
                        <button type="button"
                               className="flex w-full  justify-center items-center rounded-xl bg-whotw py-2.5 px-6.5 gap-1 font-[500] font-sans text-gray-500 cursor-pointer  outline-gray-200 outline-2"
                         >{<Google/>}Masuk dengan Google</button>
                    </form>
                 </div>
            </div>

        </div>
        
    )
}

export default FormLogin;