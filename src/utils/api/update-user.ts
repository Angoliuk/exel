import { db } from "@/firebase";
import { User } from "@/types";
import { doc, updateDoc } from "firebase/firestore";

export const updateUser = async (id: string, user: Partial<User>) => {
  await updateDoc(doc(db, "users", id), user);
};
