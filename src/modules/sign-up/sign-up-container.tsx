import { Button } from "@/components/button";
import { Card, CardFooter, CardHeader } from "@/components/card";
import { PageWrapper } from "@/components/page-wrapper";
import { auth, googleProvider } from "@/firebase";
import { useLoggedOutProtection } from "@/hooks/auth-protection";
import { createUserWithTeam, getUser } from "@/utils/api";
import { signInWithPopup } from "firebase/auth";
import { FC, memo, useCallback } from "react";

export const SignUpContainer: FC = memo(() => {
  useLoggedOutProtection();

  const signInWithGoogle = useCallback(async () => {
    const { user } = await signInWithPopup(auth, googleProvider);

    const userDocument = await getUser(user.uid);

    if (userDocument.exists()) return;

    await createUserWithTeam({
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
      teamId: null,
      uid: user.uid,
    });
  }, []);

  return (
    <PageWrapper contentWrapperClassName="flex justify-center items-center" isHeaderShown={false}>
      <Card className="w-[512px]">
        <CardHeader>
          <p className="text-center text-white-1000 text-headlineS">Login</p>
        </CardHeader>
        <CardFooter className="justify-center">
          <Button onClick={signInWithGoogle}>Sign In</Button>
        </CardFooter>
      </Card>
    </PageWrapper>
  );
});
