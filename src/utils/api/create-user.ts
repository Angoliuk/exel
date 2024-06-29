import { db } from "@/firebase";
import { CreateUser, User } from "@/types";
import { CollectionReference, DocumentData, addDoc, collection } from "firebase/firestore";

export const createUser = async (user: CreateUser) => {
  return await addDoc<User, DocumentData>(
    collection(db, "users") as CollectionReference<User, DocumentData>,
    {
      ...user,
      createdAt: new Date().toISOString(),
    },
  );
};
