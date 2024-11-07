"use client";

import AuthForm from "@/components/auth/auth-form";
import { Socials } from "@/components/auth/socials";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex max-w-screen max-h-screen h-screen items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <AuthForm>
          <Socials />
        </AuthForm>
      </div>
    </div>
  );
};

export default LoginPage;
