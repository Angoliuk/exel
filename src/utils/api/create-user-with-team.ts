import { CreateUser } from "@/types";

import { createTeam } from "./create-team";
import { createUser } from "./create-user";
import { updateUser } from "./update-user";

export const createUserWithTeam = async (user: CreateUser) => {
  await createUser(user);

  const team = await createTeam({
    name: `${user.name}'s Team`,
    ownerId: user.uid,
  });

  await updateUser(user.uid, {
    teamId: team.id,
  });
};
