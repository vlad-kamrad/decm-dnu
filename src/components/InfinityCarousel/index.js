import React from "react";
import styles from "./styles.module.css";

export default function InfinityCarousel(props) {
  if (!props?.children?.length) return null;

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {props.children.map((x, i) => (
          <div key={i} className={styles.slide}>
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}
