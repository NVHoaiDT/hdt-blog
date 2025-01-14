import React from "react";
import Link from "next/link";

import styles from "./NavLinks.module.css";

function NavLinks({ links }) {
  return (
    <ul className={styles.wrapper}>
      {links.map(({ label, href }) => {
        return (
          <li key={label} className={styles.link}>
            <Link href={href}>{label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
