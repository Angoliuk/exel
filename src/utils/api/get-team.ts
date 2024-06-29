import { db } from "@/firebase";
import { Team } from "@/types";
import { DocumentData, DocumentReference, doc, getDoc } from "firebase/firestore";

export const getTeam = async (id: string) => {
  return await getDoc<Team, DocumentData>(
    doc(db, "teams", id) as DocumentReference<Team, DocumentData>,
  );
};
