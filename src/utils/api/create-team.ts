import { db } from "@/firebase";
import { CreateTeam, Team } from "@/types";
import { CollectionReference, DocumentData, addDoc, collection } from "firebase/firestore";

export const createTeam = async (team: CreateTeam) => {
  return await addDoc<Team, DocumentData>(
    collection(db, "teams") as CollectionReference<Team, DocumentData>,
    {
      ...team,
      createdAt: new Date().toISOString(),
    },
  );
};
