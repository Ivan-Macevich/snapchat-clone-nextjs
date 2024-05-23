import Image from "next/image";
import Link from "next/link";

import React from "react";
import { LoginCard } from "./login-card";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <>
        <h1 className="text-2xl font-bold text-center mb-4">
          Log in to SnapNext
        </h1>
        <LoginCard />
      </>
    </div>
  );
};

export default Login;
