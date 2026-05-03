"use client";

import { useEffect, useState } from "react";
import type { NewsItem } from "@/types/news";
import { getNews } from "@/lib/api/news";
import Image from "next/image";
import css from "./Events.module.css";

export default function Events() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      console.log("NEWS:", data);
      setNews([...data, ...data]);
    };

    fetchNews();
  }, []);
  return (
    <section className={css.events}>
      <div className="container">
        <div className={css.events_body}>
          <div className={css.events_info}>
            <h2 className={css.eventsTitle}>Актуальні події та новини</h2>
            <p className={css.eventsText}>
              Слідкуйте за актуальними ініціативами, програмами підтримки
              бізнесу, інвестиційними проєктами та ключовими заходами.
            </p>
            <a
              href="https://economy.rivnerada.gov.ua/aktualni-podiyii-ta-novyny-diznatysya-bilshe/"
              className={css.events_btn}
            >
              Дiзнатися більше
            </a>
          </div>

          <div className={css.swiper_container}>
            <div className={css.swiper_track}>
              {news.map((item, index) => (
                <div key={`${item.id}-${index}`} className={css.card}>
                  <div className={css.image_wrapper}>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className={css.image}
                    />
                  </div>
                  <div className={css.card_content}>
                    <span className={css.category}>ОГОЛОШЕННЯ</span>
                    <h3 className={css.card_title}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
