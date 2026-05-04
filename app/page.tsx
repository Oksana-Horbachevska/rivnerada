import Image from "next/image";
import css from "./page.module.css";
import Events from "@/components/Events/Events";
import UsefulLinks from "@/components/UsefulLinks/UsefulLinks";

export default function Home() {
  return (
    <>
      <section className={css.heroSection}>
        <div className={css.background}>
          <div className={`container ${css.heroContainer}`}>
            <Image
              className={css.logoImage}
              src="/logo-rivne-big.png"
              alt="Logo Rivne"
              width={607}
              height={271}
              priority
            />
            <h1 className={css.heroTitle}>
              Розвиваємо економіку Рівного для добробуту громади та успішного
              майбутнього
            </h1>
          </div>
        </div>
      </section>

      <Events />
      <UsefulLinks />
    </>
  );
}
