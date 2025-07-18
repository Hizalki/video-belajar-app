import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from "react-router";
import { useState } from "react";


// Schema validation untuk form login
const loginFormSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;



export const useHookFrom = () => {
  const [showPassword, setShowPassword] = useState(false);


  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // mavigate
  const navigate = useNavigate();

  const handleLogin = (values: LoginFormData) => {
    console.log("Data login:", values);
    // Implementasi login logic di sini
    navigate("/homepages")
    alert("Login berhasil guy!");
  };

  const handleGoogleLogin = () => {
    console.log("Login dengan Google");
    // Implementasi Google login di sini
  };

  const handleNavigateToRegister = () => {
    console.log("Navigate to register");
    navigate("/register")
    // Implementasi navigasi ke halaman registrasi
  };

  const handleForgotPassword = () => {
    console.log("Forgot password");
    // Implementasi forgot password di sini
  };

  return {
    form,
    handleForgotPassword,
    handleGoogleLogin,
    handleNavigateToRegister,
    handleLogin,
    setShowPassword,
    showPassword
  }
}