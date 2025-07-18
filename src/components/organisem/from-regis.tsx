import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { useHookRegis } from "../../hook/useHookRegis";


function FormRegis() {
  const {
    handleForgotPassword,
    handleGoogleRegistration,
    handleNavigateToLogin,
    handleRegistration,
    setShowConfirmPassword,
    setShowPassword,
    showConfirmPassword,
    showPassword,
    form
  } = useHookRegis();


  return (
    <div className="bg-[#FFFDF3] py-6 px-5 sm:py-30 sm:px-15 flex justify-center items-center sm:h-full">
      <div className="flex flex-col items-start p-5 w-full sm:p-9 gap-[20px] sm:gap-[36px] sm:w-[590px] bg-white box-border border border-gray-100 rounded-lg">
        
        {/* Header */}
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="text-[#222325] Poppins text-[24px] sm:text-[36px] font-bold text-center leading-10">
            Pendaftaran Akun
          </h3>
          <p className="text-[#717177] text-[14px] sm:text-base font-normal leading-8 tracking-wide text-center">
            Yuk, daftarkan akunmu sekarang juga!
          </p>
        </div>

        {/* Form */}
        <div className="w-full">
          <form className="flex flex-col" onSubmit={form.handleSubmit(handleRegistration)}>
            
            {/* Nama Lengkap */}
            <label htmlFor="fullName" className="text-[#717177] text-[14px] sm:text-base font-sans leading-8 tracking-wide">
              Nama Lengkap *<br />
              <input 
                type="text" 
                {...form.register("fullName")}
                id="fullName"
                placeholder="Masukkan nama lengkap"
                className="flex-1 py-2 px-3 items-center gap-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF4C] focus:border-transparent"
              />
            </label>
            {form.formState.errors.fullName && (
              <span className="text-red-600 text-sm mt-1 block">
                {form.formState.errors.fullName.message}
              </span>
            )}
            <br />

            {/* Email */}
            <label htmlFor="email" className="text-[#717177] text-[14px] sm:text-base font-sans leading-8 tracking-wide">
              E-Mail *<br />
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
 
            {/* Nomor HP */}
            <label htmlFor="phoneNumber" className="text-[#717177] text-[14px] sm:text-base font-sans leading-8 tracking-wide">
              No. Hp *<br />
              <div className="flex">
                <div className="flex items-center px-3 py-2 border border-gray-200 border-r-0 rounded-l-lg bg-gray-50">
                  <span className="inline-block w-6 h-4 bg-red-500 mr-2"></span>
                  <span className="text-gray-700 text-sm">+62</span>
                  <svg className="w-4 h-4 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <input 
                  type="tel" 
                  {...form.register("phoneNumber")}
                  id="phoneNumber"
                  placeholder="8123456789"
                  className="flex-1 py-2 px-3 border border-gray-200 border-l-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF4C] focus:border-transparent"
                />
              </div>
            </label>
            {form.formState.errors.phoneNumber && (
              <span className="text-red-600 text-sm mt-1 block">
                {form.formState.errors.phoneNumber.message}
              </span>
            )}
            <br />

            {/* Password */}
            <label htmlFor="password" className="text-[#69696d] text-[14px] sm:text-base font-sans leading-8 tracking-wide">
              Kata Sandi *<br />
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

            {/* Konfirmasi Password */}
            <label htmlFor="confirmPassword" className="text-[#69696d] text-[14px] sm:text-base font-sans leading-8 tracking-wide">
              Konfirmasi Kata Sandi *<br />
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  {...form.register("confirmPassword")}
                  id="confirmPassword"
                  placeholder="Konfirmasi password"
                  className="flex-1 py-2 px-3 pr-10 items-center gap-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF4C] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <VisibilityOff className="w-5 h-5" /> : <Visibility className="w-5 h-5" />}
                </button>
              </div>
            </label>
            {form.formState.errors.confirmPassword && (
              <span className="text-red-600 text-sm mt-1 block">
                {form.formState.errors.confirmPassword.message}
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

            {/* Register Button */}
            <button 
              type="submit"
              disabled={form.formState.isSubmitting}
              className="flex w-full justify-center items-center rounded-lg bg-[#3ECF4C] hover:bg-green-400 disabled:bg-gray-400 py-[7px] px-[22px] sm:py-2.5 sm:px-6 gap-1 font-bold text-[16px] sm:font-bold font-sans text-white cursor-pointer transition-colors duration-200"
            >
              {form.formState.isSubmitting ? "Mendaftar..." : "Daftar"}
            </button>
            <br />

            {/* Login Button */}
            <button 
              type="button"
              onClick={handleNavigateToLogin}
              className="flex w-full justify-center items-center rounded-lg bg-[#E2FCD9CC] hover:bg-green-100 py-[7px] px-[22px] sm:py-2.5 sm:px-6 gap-1 text-[16px] font-bold sm:font-bold font-sans text-[#3ECF4C] cursor-pointer transition-colors duration-200"
            >
              Masuk
            </button>

            {/* Divider */}
            <p className="flex justify-center text-[#717177] text-[14px] sm:text-base font-sans leading-9 tracking-wide">
              atau
            </p>

            {/* Google Registration Button */}
            <button 
              type="button"
              onClick={handleGoogleRegistration}
              className="flex w-full justify-center items-center rounded-xl bg-white border-2 border-gray-200 hover:border-gray-300 py-[7px] px-[22px] sm:py-2.5 sm:px-6 gap-3 text-[16px] font-bold sm:font-bold font-sans text-gray-500 cursor-pointer transition-colors duration-200"
            >
              <Google />
              Daftar dengan Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormRegis;