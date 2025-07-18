import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { useNavigate } from "react-router";

// Schema validation yang sesuai dengan form registrasi
const registrationFormSchema = z.object({
  fullName: z.string().min(2, "Nama lengkap minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  phoneNumber: z.string().min(10, "Nomor HP minimal 10 digit").max(15, "Nomor HP maksimal 15 digit"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  confirmPassword: z.string().min(8, "Konfirmasi password minimal 8 karakter"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password dan konfirmasi password tidak cocok",
  path: ["confirmPassword"],
});

type RegistrationFormData = z.infer<typeof registrationFormSchema>;



export const useHookRegis = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  const handleRegistration = (values: RegistrationFormData) => {
    console.log("Data registrasi:", values);
    alert("Registrasi berhasil!");
  };

  const handleGoogleRegistration = () => {
    console.log("Daftar dengan Google");
    // Implementasi registrasi Google di sini
  };

  const handleNavigateToLogin = () => {
    navigate("/")
    console.log("Navigate to login");
    // Implementasi navigasi ke halaman login
  };

  const handleForgotPassword = () => {
    console.log("Forgot password");
    // Implementasi forgot password di sini
  };

  return{
    handleForgotPassword,
    handleGoogleRegistration,
    handleNavigateToLogin,
    handleRegistration,
    setShowPassword,
    setShowConfirmPassword,
    showConfirmPassword,
    showPassword,
    form
  }
}