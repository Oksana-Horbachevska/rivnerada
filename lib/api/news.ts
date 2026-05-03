import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { NewsItem } from "@/types/news";

export const getNews = async (): Promise<NewsItem[]> => {
  const snapshot = await getDocs(collection(db, "news"));

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      title: data.title || "",
      content: data.content || "",
      imageUrl: data.imageUrl || "",
    };
  });
};
