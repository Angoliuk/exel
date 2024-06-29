import { db } from "@/firebase";
import { User } from "@/types";
import { DocumentData, DocumentReference, doc, getDoc } from "firebase/firestore";

export const getUser = async (id: string) => {
  return await getDoc<User, DocumentData>(
    doc(db, "users", id) as DocumentReference<User, DocumentData>,
  );
};
