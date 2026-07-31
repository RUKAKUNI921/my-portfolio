"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./page.module.css";
import type { Work } from "@/data/works";

type WorkIntroProps = Pick<Work, "title" | "category" | "description" | "workType" | "tools" | "year" | "link">;

export default function WorkIntro({ work }: { work: WorkIntroProps }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const catRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("li") ?? [];

    const tl = gsap.timeline({ delay: 0.2, defaults: { ease: "power2.out" } });

    if (titleRef.current) {
      tl.to(titleRef.current, { opacity: 1, duration: 0.5 });
    }
    if (catRef.current) {
      tl.to(catRef.current, { opacity: 1, duration: 0.5 }, "-=0.2");
    }
    if (descRef.current) {
      tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
    }
    if (items.length) {
      tl.to(items, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "<");
    }
  }, []);

  return (
    <>
      <div className={styles.ttlWrap}>
        <h1 ref={titleRef} className={`${styles.ttl} u-ff-en-m u-trim`}>
          {work.title}
        </h1>
        <p ref={catRef} className={`${styles.cat} u-ff-en-l u-trim`}>
          {work.category.join(" / ")}
        </p>
      </div>

      <div className={styles.infoWrap}>
        <p ref={descRef} className={`${styles.desc} u-ff-txt`}>
          {work.description}
        </p>
        <ul ref={listRef} className={styles.list}>
          <li className={`${styles.item} u-ff-txt u-trim`}>
            <span className={styles.tag}>PROJECT TYPE :</span>
            {work.workType}
          </li>
          <li className={`${styles.item} u-ff-txt u-trim`}>
            <span className={styles.tag}>TOOLS :</span>
            {work.tools.join(" / ")}
          </li>
          <li className={`${styles.item} u-ff-txt u-trim`}>
            <span className={styles.tag}>DATE :</span>
            {work.year}
          </li>
          {work.link && (
            <li className={`${styles.item} u-ff-txt u-trim`}>
              <span className={styles.tag}>SITE :</span>
              <a
                className={styles.link}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {work.link}
                <svg
                  className={styles.linkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
