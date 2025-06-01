"use client";

import { redirect } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const SignOutButton = () => {
  return (
    <Button
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onError: () => {
              toast.error("Erro ao sair da conta");
            },
            onSuccess: () => {
              redirect("/authentication");
            },
          },
        })
      }
    >
      Sair da conta
    </Button>
  );
};

export default SignOutButton;
