"use client";
import React from "react";
import Cookie from "js-cookie";
import clsx from "clsx";
import { Rss, Sun, Moon, Search } from "react-feather";

import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";
import { NAV_LINKS } from "@/constants";

import Logo from "@/components/Logo";
import NavLinks from "../NavLinks";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./Header.module.css";

function Header({ initialTheme, className, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleToggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    Cookie.set("color-theme", nextTheme, {
      expires: 1000,
    });

    const TOKENS = nextTheme === "dark" ? DARK_TOKENS : LIGHT_TOKENS;

    const root = document.documentElement;
    root.setAttribute("data-color-theme", nextTheme);
    Object.entries(TOKENS).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />
      <NavLinks links={NAV_LINKS} />
      <div className={styles.actions}>
        <button className={styles.action}>
          <Search
            size="1.4rem"
            style={{
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>

        <button className={styles.action} onClick={handleToggleTheme}>
          {theme === "dark" ? <Moon size="1.4rem" /> : <Sun size="1.4rem" />}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>

        <button className={styles.action}>
          <Rss
            size="1.4rem"
            style={{
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
