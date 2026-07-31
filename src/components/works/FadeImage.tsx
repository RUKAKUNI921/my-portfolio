"use client";

import styles from "./gallery.module.css";
import { useFadeInOnLoad } from "@/hooks/useFadeInOnLoad";

export default function FadeImage({
  src,
  alt,
  className,
  scrollTrigger = true,
}: {
  src: string;
  alt: string;
  className?: string;
  scrollTrigger?: boolean;
}) {
  const ref = useFadeInOnLoad<HTMLDivElement>({ scrollTrigger });
  return (
    <div ref={ref} className={styles.fadeWrap}>
      <div className={styles.dots} data-dots />
      <img src={src} alt={alt} className={`${styles.fadeIn} ${className ?? ""}`} />
    </div>
  );
}
