import React from "react";
import styles from "./styles.module.css";
import useToggle from "../../hooks/useToggle";

export default function JobCard({ title, content, iconSrc }) {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className={`card ${styles.jobCard}`}>
      <header class={`card-header ${styles.jobCardHeader}`}>
        <p class={`card-header-title ${styles.jobCardTitle}`}>{title}</p>
        <a class="card-header-icon" aria-label="more options">
          <span class="icon">
            <img src={iconSrc} />
          </span>
        </a>
      </header>
      <div className="card-content __jch">
        <div
          className={`${styles.jobContent} ${isOpen ? styles.open : ""}`}
          onClick={toggle}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
