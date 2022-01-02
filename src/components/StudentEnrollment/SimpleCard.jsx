import React from "react";
import styles from "./styles.module.css";

export default function SimpleCard({ title, iconSrc, children, style }) {
  return (
    <div style={style}>
      <div className={styles.simpleCardHeader}>
        <img
          alt="icon"
          width={40}
          height={40}
          src={iconSrc}
          className={styles.simpleCardImg}
          loading="lazy"
        />
        <div>{title}</div>
      </div>
      <div className={styles.simpleCardContent}>{children}</div>
    </div>
  );
}
