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
        <i className="card-header-icon" aria-label="more options">
          <span className="icon">
            <img src={iconSrc} alt="job img" />
          </span>
        </i>
      </header>
      <div className={`card-content __jch`}>
        <div className={`${styles.jobContent} ${contentClassName}`}>
          {content}
        </div>
      </div>
    </div>
  );
}
