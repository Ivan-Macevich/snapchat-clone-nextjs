"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "src/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { authGithubAction, authGoogleAction } from "src/lib/actions";
export const LoginCard = () => {
  const [errorGithubMessage, dispatchGithub] = useFormState(authGithubAction, "");
  const [errorGoogleMessage, dispatchGoogle] = useFormState(authGoogleAction, "");
  return (
    <>
      <form action={dispatchGithub} className="space-y-4">
        <LoginGithubButton />
      </form>
      <form action={dispatchGoogle} className="space-y-4">
        <LoginGoogleButton />
      </form>
      <div className="mt-4 text-center text-[13px]">
        <span>New To SnapNext? </span>
        <Link
          className="text-blue-500 hover:underline text-[13px] mr-1"
          href="/signup"
        >
          Sign Up
        </Link>
        {errorGithubMessage ? (
          <p className="text-sm text-red-500">{errorGithubMessage}</p>
        ) : null}
      </div>
    </>
  );
};

function LoginGithubButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="w-full flex gap-2"
      disabled={pending}
      aria-disabled={pending}
    >
      <Image src={"/github.svg"} width={20} height={20} alt="Github logo" /> Log
      in with Github
    </Button>
  );
}

function LoginGoogleButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="w-full flex gap-2"
      disabled={pending}
      aria-disabled={pending}
    >
      <Image src={"/github.svg"} width={20} height={20} alt="Github logo" /> Log
      in with Google
    </Button>
  );
}
