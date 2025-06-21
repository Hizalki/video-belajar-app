import { Google} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";


const loginFormSchema = z.object ({
    email: z.string().email(),
    password: z.string().min(8),
})

type loginFormSchema = z.infer<typeof loginFormSchema>;

function FormLogin() {
    const [showPassword, setShowPassword] = useState(false);


    const form = useForm <loginFormSchema>({
        resolver: zodResolver(loginFormSchema),
    });

    const handeleLogin = (values: loginFormSchema ) => {
        alert("konfirmasi");
        console.log(values);

    }
     

    return(
        <div className="bg-[#FFFDF3] py-6 px-5 sm:py-30 sm:px-15 flex justify-center items-center h-screen sm:h-full"> 
            <div className="flex flex-col items-star p-5 w-full sm:p-9 gap-[20px] sm:gap-[36px] sm:w-[590px] sm:h-[617px] bg-white box-border  border border-gray-100 rounded-lg ">
                <div className="flex flex-col justify-center items-center">
                        <h3 className="text-[#222325] Poppins text-[24px] sm:text-[36px] font-bold text-center leading-10">
                            Masuk Ke Akun</h3>
                         <p className="text-[#717177] text-[14px]  sm:text-[14px]  sm:text-base font-normal leading-8 tracking-wide ">
                            yuk, lanjutin belajarmu di videobelajar</p>
                </div>
                <div>
                    <form className="sm:flex flex-col" 
                          onSubmit={form.handleSubmit(handeleLogin)}>

                        <label htmlFor="email" 
                               className="text-[#717177] text-[14px] sm:text-base font-sans leading-8 tracking-wide">
                            Email: <br />
                        <input type="email" {...form.register("email")}
                             className="flex-1 py-1 px-0 items-center gap-2 w-full border border-gray-200 rounded-lg outline-gray-200"/>
                        </label><br />

                        <label htmlFor="password" className="text-[#69696d] text-[14px] sm:text-base font-sans leading-8 tracking-wide">
                            Password: <br />
                        <input  type={showPassword? "text" : "password"} {...form.register("password")}
                                className="flex-1 py-1 px-0 items-center gap-2 w-full border border-gray-200 rounded-lg outline-gray-200"/>
                        </label><br/>
                        <span className="text-red-600 text-sm">{form.formState.errors.password?.message}</span>

                        <label className="flex items-center  justify-end">
                            <input 
                               type="checkbox"
                               onChange={event => setShowPassword(event.target.checked)} />
                        </label>
                        
                        <a href="#" className="flex justify-end text-[#717177] text-[14px] sm:text-base font-sans leading-8 tracking-wide   ">
                            Lupa Password?</a><br />

                        <button type="submit"
                                className="flex w-full flex-col justify-center items-center rounded-lg bg-[#3ECF4C] hover:bg-green-400 py-[7px] px-[22px] sm:py-2.5 sm:px-6.5 gap-1 font-bold text-[16px] text-sm sm:font-bold font-sans text-amber-50 cursor-pointer "
                        >Masuk</button><br />

                        <button type="submit"
                                className="flex w-full flex-col justify-center items-center rounded-lg bg-[#E2FCD9CC] py-[7px] px-[22px] sm:py-2.5 sm:px-6.5 gap-1 text-sm font-bold sm:font-bold font-sans  text-[#3ECF4C] cursor-pointer  outline-green-500 font-base text-[16px]"
                        >Daftar</button>

                        <p className="flex justify-center text-[#717177] text-[14px]  sm:text-base font-sans leading-9 tracking-wide">atau</p>

                        <button type="button"
                               className="flex w-full  justify-center items-center rounded-xl bg-whotw py-[7px] px-[22px] sm:py-2.5 sm:px-6.5 gap-1 text-sm text-[16px] font-bold sm:font-bold font-sans text-gray-500 cursor-pointer  outline-gray-200 outline-2"
                         >{<Google/>}Masuk dengan Google</button>
                    </form>
                 </div>
            </div>

        </div>
        
    )
}

export default FormLogin;