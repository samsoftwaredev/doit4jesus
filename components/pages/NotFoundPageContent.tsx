"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { NotFoundActions } from "./NotFoundActions";

const copy = {
  en: {
    status: "404 · Lost, not forgotten",
    brandLabel: "DoIt4Jesus home",
    imageAlt: "A lost sheep holding a map beside a wooden signpost",
    kicker: "The lost sheep",
    title: "This page has wandered off.",
    message: "The page you’re looking for doesn’t exist or may have moved. Let’s help you find your way back.",
    note: "Even in the wilderness, you’re never beyond the Shepherd’s reach.",
  },
  es: {
    status: "404 · Perdida, pero no olvidada",
    brandLabel: "Inicio de DoIt4Jesus",
    imageAlt: "Una oveja perdida con un mapa junto a un letrero de madera",
    kicker: "La oveja perdida",
    title: "Esta página se apartó del camino.",
    message: "La página que buscas no existe o quizá se trasladó. Te ayudaremos a encontrar el camino de regreso.",
    note: "Incluso en el desierto, nunca estás fuera del alcance del Buen Pastor.",
  },
} as const;

export function NotFoundPageContent() {
  const pathname = usePathname();
  const locale = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
  const t = copy[locale];
  const homeHref = locale === "es" ? "/es" : "/";
  const pathWithoutLocale = locale === "es" ? pathname.replace(/^\/es(?=\/|$)/, "") || "/" : pathname;
  const spanishHref = pathWithoutLocale === "/" ? "/es" : `/es${pathWithoutLocale}`;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <header className="not-found-header">
        <Link href={homeHref} replace className="brand" aria-label={t.brandLabel}>
          <Image className="brand-logo" src="/assets/logo-white.svg" alt="" width={132} height={70} priority />
        </Link>
        <div className="not-found-header-tools">
          <nav aria-label={locale === "en" ? "Select language" : "Seleccionar idioma"} className="not-found-languages">
            <Link href={pathWithoutLocale} hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined}>EN</Link>
            <Link href={spanishHref} hrefLang="es" lang="es" aria-current={locale === "es" ? "page" : undefined}>ES</Link>
          </nav>
          <span>{t.status}</span>
        </div>
      </header>

      <main className="not-found-main">
        <div className="not-found-artwork-frame">
          <Image className="not-found-artwork" src="/assets/lost-sheep-404.png" alt={t.imageAlt} width={768} height={1152} sizes="(min-width: 1100px) 340px, (min-width: 700px) 300px, 240px" priority />
        </div>
        <section className="not-found-copy" aria-labelledby="not-found-heading">
          <p className="not-found-kicker">{t.kicker}</p>
          <h1 id="not-found-heading">{t.title}</h1>
          <p className="not-found-message">{t.message}</p>
          <NotFoundActions locale={locale} />
          <p className="not-found-note">{t.note}</p>
        </section>
      </main>
    </>
  );
}
