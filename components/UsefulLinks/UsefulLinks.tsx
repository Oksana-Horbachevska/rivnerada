"use client";

import { useEffect, useState } from "react";
import type { UsefulItem } from "@/types/news";
import { getUseful } from "@/lib/api/useful";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import css from "./UsefulLinks.module.css";

export default function UsefulLinks() {
  const [useful, setUseful] = useState<UsefulItem[]>([]);

  useEffect(() => {
    const fetchUseful = async () => {
      const data = await getUseful();
      console.log("Useful:", data);
      setUseful([...data, ...data]);
    };

    fetchUseful();
  }, []);
  return (
    <section className={css.useful}>
      <div className="container">
        <div className={css.useful_body}>
          <div className={css.usefulHeader}>
            <h3 className={css.usefulTitle}>Корисні посилання</h3>
            <div className={css.usefulBtns}>
              <button className={css.btnPrev}>
                <svg width="30" height="30" className={css.btnIcon}>
                  <use href="/sprite.svg#icon-chevron-left" />
                </svg>
              </button>
              <button className={css.btnNext}>
                <svg width="30" height="30" className={css.btnIcon}>
                  <use href="/sprite.svg#icon-chevron-right" />
                </svg>
              </button>
            </div>
          </div>
          <div className={css.swiper_container}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView="auto"
              loop
              autoplay={{ delay: 2500 }}
            >
              {useful.map((item, index) => (
                <SwiperSlide key={`${item.id}-${index}`} style={{ width: 288 }}>
                  <a className={css.card} href={item.link} target="_blank">
                    <div className={css.image_wrapper}>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className={css.image}
                      />
                    </div>
                    <h4 className={css.card_title}>{item.title}</h4>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
