import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { UsefulItem } from "@/types/news";

export const getUseful = async (): Promise<UsefulItem[]> => {
  const snapshot = await getDocs(collection(db, "useful"));

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      title: data.title || "",
      imageUrl: data.imageUrl || "",
      link: data.link || "",
    };
  });
};
