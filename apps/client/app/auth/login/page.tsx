"use client";

import AuthForm from "@/components/auth/auth-form";
import { Socials } from "@/components/auth/socials";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex h-screen w-screen max-w-screen max-h-screen items-center justify-center">
      <div className="flex items-center w-full mt-4">
        <AuthForm>
          <div className="flex items-center w-full mt-4">
            <Socials />
          </div>
        </AuthForm>
      </div>
    </div>
  );
};

export default LoginPage;
