import React from "react";
import styles from "./styles.module.css";

export default function JobCard({
  title,
  content,
  iconSrc,
  onClick,
  contentClassName,
}) {
  return (
    <div className={`card ${styles.jobCard}`} onClick={onClick}>
      <header className={`card-header ${styles.jobCardHeader}`}>
        <p className={`card-header-title ${styles.jobCardTitle}`}>{title}</p>
        <a className="card-header-icon" aria-label="more options">
          <span className="icon">
            <img src={iconSrc} />
          </span>
        </a>
      </header>
      <div className={`card-content __jch`}>
        <div className={`${styles.jobContent} ${contentClassName}`}>
          {content}
        </div>
      </div>
    </div>
  );
}
