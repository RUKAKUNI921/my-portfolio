"use client";

import styles from "./gallery.module.css";
import { useFadeInOnLoad } from "@/hooks/useFadeInOnLoad";

export default function FadeVideo({ src, title }: { src: string; title: string }) {
  const ref = useFadeInOnLoad<HTMLDivElement>();
  return (
    <div ref={ref} className={styles.fadeWrap}>
      <div className={styles.dots} data-dots />
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={styles.fadeIn}
      />
    </div>
  );
}
