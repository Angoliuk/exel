import { Avatar, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/card";
import { PageWrapper } from "@/components/page-wrapper";
import { auth } from "@/firebase";
import { useLoggedInProtection } from "@/hooks/auth-protection";
import { useGetUserWithTeam } from "@/hooks/get-user-with-team";
import { FC, memo } from "react";

export const ProfileContainer: FC = memo(() => {
  useLoggedInProtection();

  const { team, user } = useGetUserWithTeam();

  if (!user || !team) return <div>Loading...</div>;

  const logout = async () => {
    await auth.signOut();
  };

  return (
    <PageWrapper contentWrapperClassName="flex justify-center items-center" isHeaderShown={false}>
      <Card className="w-[512px]">
        <CardHeader className="flex-row items-center justify-center gap-4">
          <Avatar>{!!user.photo && <AvatarImage alt="user avatar" src={user.photo} />}</Avatar>
          <span className="text-center text-white-1000 text-headlineS">{user.name}'s Profile</span>
        </CardHeader>
        <CardContent>
          <p className="text-white-1000 text-headlineS">Name: {user.name}</p>
          <p className="text-white-1000 text-headlineS">Email: {user.email}</p>
          <p className="text-white-1000 text-headlineS">Team: {team.name}</p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={logout}>Log out</Button>
        </CardFooter>
      </Card>
    </PageWrapper>
  );
});
