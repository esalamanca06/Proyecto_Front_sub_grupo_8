import React from "react";
import { Whatsapp } from "./components/btnWhatsapp/Whatsapp";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Copyright } from "./components/copyright/Copyright";
import { LoginForm } from "./components/loginForm/LoginForm";

export const Login = () => {
  return (
    <>
      <Whatsapp />
      <Navbar />
      <LoginForm/>
      <Footer />
      <Copyright />
    </>
  );
};
