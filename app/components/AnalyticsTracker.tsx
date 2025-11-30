"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
  const path = usePathname();
  useEffect(() => {
    window.gtag("event", "page_view", {
      page_title: path,
      page_path: path,
    });
  }, [path]);
  return null;
}
