"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import localFont from "next/font/local";
import { gsap } from "gsap";

import ThemeButton from "./ThemeButton";

const vanillaRavioli = localFont({
  src: "../fonts/VanillaRavioli.ttf",
});
const presicav = localFont({
  src: "../fonts/PresicavRg-Bold.ttf",
});

function Header() {
  const subscribe = useRef(null);
  const menu = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(subscribe.current, {
      duration: 1,
      opacity: 0,
      y: -10,
    });
    // console.log(subscribe.current);
  }, []);

  return (
    <main className="border-b max-w-7xl m-auto">
      <header className="flex container mx-auto mt px-2">
        <div
          style={{
            fontSize: 16,
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <Link
            href="/subscribe"
            className={presicav.className}
            ref={subscribe}
          >
            Subscribe
          </Link>
        </div>

        <div
          style={{
            fontSize: 30,
            flex: "1",
            display: "flex",
            alignItems: "center",
            color: "#FF3928",
            // color: "#F4d35E",
            justifyContent: "center",
          }}
        >
          <Link href="/" className={vanillaRavioli.className} ref={subscribe}>
            ELFAD
          </Link>
        </div>
        <div
          style={{
            fontSize: 20,
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <button className={presicav.className} ref={menu}>
            Menu
          </button>
        </div>
      </header>
    </main>
  );
}

export default Header;
