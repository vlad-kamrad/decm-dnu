import React from "react";
import styles from "./styles.module.css";

export default function InfinityCarousel(props) {
  if (!props?.children?.length) return null;

  return (
    <div class={styles.slider}>
      <div class={styles.slideTrack}>
        {props.children.map(x => (
          <div class={styles.slide}>{x}</div>
        ))}
      </div>
    </div>
  );
}
