import { auth } from "@/firebase";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export const useLoggedInProtection = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) navigate({ to: "/sign-up" });
  }, [navigate, user]);
};

export const useLoggedOutProtection = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) navigate({ to: "/" });
  }, [navigate, user]);
};
