"use client";

import Link from "next/link";
import { useCallback } from "react";

export function NotFoundActions({ locale }: { locale: "en" | "es" }) {
  const homeHref = locale === "es" ? "/es" : "/";
  const handleRetraceSteps = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.replace(homeHref);
  }, [homeHref]);

  return (
    <div className="not-found-actions">
      <Link href={homeHref} replace className="not-found-primary">
        {locale === "en" ? "Return home" : "Volver al inicio"}
      </Link>
      <button
        className="not-found-secondary"
        type="button"
        onClick={handleRetraceSteps}
      >
        {locale === "en" ? "Retrace my steps" : "Regresar"}
      </button>
    </div>
  );
}
