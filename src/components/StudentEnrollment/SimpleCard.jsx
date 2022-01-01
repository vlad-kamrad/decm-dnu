import React from "react";
import styles from "./styles.module.css";

export default function SimpleCard({ title, iconSrc, children, style }) {
  return (
    <div style={style}>
      <div className={styles.simpleCardHeader}>
        <img src={iconSrc} className={styles.simpleCardImg} />
        <div>{title}</div>
      </div>
      <div className={styles.simpleCardContent}>{children}</div>
    </div>
  );
}
