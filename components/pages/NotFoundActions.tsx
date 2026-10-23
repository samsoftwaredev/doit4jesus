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
      <Link href={homeHref} replace className="not-found-primary" data-analytics-event="not_found_recovery" data-analytics-id="not_found_return_home" data-analytics-placement="not_found_actions" data-analytics-target="home">
        {locale === "en" ? "Return home" : "Volver al inicio"}
      </Link>
      <button
        className="not-found-secondary"
        type="button"
        onClick={handleRetraceSteps}
        data-analytics-event="not_found_recovery"
        data-analytics-id="not_found_retrace"
        data-analytics-placement="not_found_actions"
        data-analytics-target="history_back"
      >
        {locale === "en" ? "Retrace my steps" : "Regresar"}
      </button>
    </div>
  );
}
