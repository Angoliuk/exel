import { auth } from "@/firebase";
import { Team, User } from "@/types";
import { getTeam, getUser } from "@/utils/api";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const useGetUserWithTeam = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | undefined>(undefined);
  const [team, setTeam] = useState<Team | undefined>(undefined);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = auth?.currentUser?.uid;

      if (!userId) return;

      const userDocument = await getUser(userId);
      const userData = userDocument.data();

      if (!userData) return;

      setUser(userData);

      if (!userData.teamId) return;

      const teamDocument = await getTeam(userData.teamId);
      setTeam(teamDocument.data());
    };

    fetchUserData();
  }, [navigate]);

  return {
    team,
    user,
  };
};
