import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";

// Schema validation untuk form login
const loginFormSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (values: LoginFormData) => {
    console.log("Data login:", values);
    // Implementasi login logic di sini
    alert("Login berhasil!");
  };

  const handleGoogleLogin = () => {
    console.log("Login dengan Google");
    // Implementasi Google login di sini
  };

  const handleNavigateToRegister = () => {
    console.log("Navigate to register");
    // Implementasi navigasi ke halaman registrasi
  };

  const handleForgotPassword = () => {
    console.log("Forgot password");
    // Implementasi forgot password di sini
  };

  return (
    <div className="bg-[#FFFDF3] py-6 px-5 sm:py-30 sm:px-15 flex justify-center items-center h-screen sm:h-full">
      <div className="flex flex-col items-start p-5 w-full sm:p-9 gap-[20px] sm:gap-[36px] sm:w-[590px] bg-white box-border border border-gray-100 rounded-lg">
        
        {/* Header */}
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="text-[#222325] Poppins text-[24px] sm:text-[36px] font-bold text-center leading-10">
            Masuk Ke Akun
          </h3>
          <p className="text-[#717177] text-[14px] sm:text-base font-normal leading-8 tracking-wide text-center">
            Yuk, lanjutin belajarmu di videobelajar
          </p>
        </div>

        {/* Form */}
        <div className="w-full">
          <form className="flex flex-col" onSubmit={form.handleSubmit(handleLogin)}>
            
            {/* Email */}
            <label htmlFor="email" className="text-[#717177] text-[14px] sm:text-base font-sans leading-8 tracking-wide">
              Email *<br />
              <input 
                type="email" 
                {...form.register("email")}
                id="email"
                placeholder="Masukkan alamat email"
                className="flex-1 py-2 px-3 items-center gap-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF4C] focus:border-transparent"
              />
            </label>
            {form.formState.errors.email && (
              <span className="text-red-600 text-sm mt-1 block">
                {form.formState.errors.email.message}
              </span>
            )}
            <br />

            {/* Password */}
            <label htmlFor="password" className="text-[#69696d] text-[14px] sm:text-base font-sans leading-8 tracking-wide">
              Password *<br />
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  {...form.register("password")}
                  id="password"
                  placeholder="Masukkan password"
                  className="flex-1 py-2 px-3 pr-10 items-center gap-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF4C] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <VisibilityOff className="w-5 h-5" /> : <Visibility className="w-5 h-5" />}
                </button>
              </div>
            </label>
            {form.formState.errors.password && (
              <span className="text-red-600 text-sm mt-1 block">
                {form.formState.errors.password.message}
              </span>
            )}
            <br />

            {/* Forgot Password Link */}
            <button 
              type="button"
              onClick={handleForgotPassword}
              className="flex justify-end text-[#717177] text-[14px] sm:text-base font-sans leading-8 tracking-wide hover:text-[#3ECF4C] transition-colors duration-200"
            >
              Lupa Password?
            </button>
            <br />

            {/* Login Button */}
            <button 
              type="submit"
              disabled={form.formState.isSubmitting}
              className="flex w-full justify-center items-center rounded-lg bg-[#3ECF4C] hover:bg-green-400 disabled:bg-gray-400 py-[7px] px-[22px] sm:py-2.5 sm:px-6 gap-1 font-bold text-[16px] sm:font-bold font-sans text-white cursor-pointer transition-colors duration-200"
            >
              {form.formState.isSubmitting ? "Masuk..." : "Masuk"}
            </button>
            <br />

            {/* Register Button */}
            <button 
              type="button"
              onClick={handleNavigateToRegister}
              className="flex w-full justify-center items-center rounded-lg bg-[#E2FCD9CC] hover:bg-green-100 py-[7px] px-[22px] sm:py-2.5 sm:px-6 gap-1 text-[16px] font-bold sm:font-bold font-sans text-[#3ECF4C] cursor-pointer transition-colors duration-200"
            >
              Daftar
            </button>

            {/* Divider */}
            <p className="flex justify-center text-[#717177] text-[14px] sm:text-base font-sans leading-9 tracking-wide">
              atau
            </p>

            {/* Google Login Button */}
            <button 
              type="button"
              onClick={handleGoogleLogin}
              className="flex w-full justify-center items-center rounded-xl bg-white border-2 border-gray-200 hover:border-gray-300 py-[7px] px-[22px] sm:py-2.5 sm:px-6 gap-3 text-[16px] font-bold sm:font-bold font-sans text-gray-500 cursor-pointer transition-colors duration-200"
            >
              <Google />
              Masuk dengan Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;