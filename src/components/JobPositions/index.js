import React from "react";
import JobCard from "./JobCard";

import styles from "./styles.module.css";

import designer from "../../img/jobs/adobexd.png";
import frontend from "../../img/jobs/front.png";
import backend from "../../img/jobs/cloud.png";
import sysadmin from "../../img/jobs/linux.png";
import devops from "../../img/jobs/devops.png";
import mobile from "../../img/jobs/swift.png";
import database from "../../img/jobs/db.png";

const jobsInformation = [
  {
    title: "Front-end Engineer",
    content: (
      <>
        Front-end розробники - це комп'ютерні програмісти, що спеціалізуються на
        дизайні веб-сайтів. В обов'язки фронтенд-розробника входить визначення
        структури та дизайну веб-сторінок, досягнення балансу між функціональним
        та естетичним дизайн та забезпечення оптимізації веб-дизайну для
        смартфонів.
      </>
    ),
    iconSrc: frontend,
  },
  {
    title: "Back-end Engineer",
    content: (
      <>
        Back-end розробники створюють, кодують та покращують серверні, серверні
        програми та бази даних, які у поєднанні з інтерфейсними кодами
        допомагають створити функціональну та безперебійну роботу для кінцевого
        користувача. Вони вивчають галузеві тенденції, створюють чи покращують
        внутрішні процеси та коди, а також працюють з іншими над розробкою
        найкращої програми.
      </>
    ),
    iconSrc: backend,
  },
  {
    title: "Graphic Designer",
    content: (
      <>
        Графічні дизайнери використовують програмне забезпечення та інструменти
        дизайну для створення онлайн-контенту, включаючи банерну рекламу, твори
        мистецтва, графіку в соціальних мережах та інтерактивний веб-контент.
        Цифровий дизайнер працює у тісній співпраці з маркетинговими та творчими
        командами, щоб проводити внутрішньобрендові та привабливі кампанії, що
        відповідають загальній естетиці компанії.
      </>
    ),
    iconSrc: designer,
  },
  {
    title: "System Administrator",
    content: (
      <>
        Системні адміністратори або системні адміністратори несуть
        відповідальність за настроювання та обслуговування комп'ютерних систем.
        Вони забезпечують безперебійну та безпечну роботу комп'ютерів у мережі
        компанії, особливо серверів.
      </>
    ),
    iconSrc: sysadmin,
  },
  {
    title: "DevOps Engineer",
    content: (
      <>
        Інженери DevOps працюють на стику розробки та операцій у компаніях, що
        розробляють програмне забезпечення. Їхня участь на кожному етапі
        існування продукту сприяє підвищенню ефективності та, зрештою,
        збільшення доходів.
      </>
    ),
    iconSrc: devops,
  },
  {
    title: "Mobile developer",
    content: (
      <>
        Мобільні розробники працюють над створенням мобільних додатків, які
        функціональні та естетичні. Щоб досягти успіху як мобільного розробника,
        ви повинні поєднувати свої знання UI та UX з розумінням останніх
        технологій у мобільних додатках.
      </>
    ),
    iconSrc: mobile,
  },
  {
    title: "Database developer",
    content: (
      <>
        Розробники баз даних створюють комп'ютерні сховища, здатні зберігати
        великі обсяги інформації. Ці професіонали, яких також називають
        програмістами баз даних, створюють рішення, адаптовані до конкретних
        вимог кожного клієнта.
      </>
    ),
    iconSrc: database,
  },
];

export default function JobPositions(props) {
  const [selected, selectCard] = React.useState(null);

  React.useEffect(() => {
    if (selected) document.querySelector("html").classList.add("is-clipped");
    else document.querySelector("html").classList.remove("is-clipped");
  }, [selected]);

  const onClose = () => onCardClick(null);
  const onCardClick = card => {
    if (card) document.querySelector("html").classList.toggle("is-clipped");

    selectCard(card?.title !== selected?.title ? card : null);
  };

  return (
    <div className={`container ${styles.jobPositions}`}>
      {jobsInformation.map((x, i) => (
        <JobCard key={i} onClick={() => onCardClick(x)} {...x} />
      ))}
      {selected && (
        <Modal onClose={onClose}>
          <JobCard
            key="jmdl"
            onClick={onClose}
            {...selected}
            contentClassName={styles.open}
          />
        </Modal>
      )}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal is-active column">
      <div className="modal-background" onClick={props.onClose} />
      <div className="modal-content">{props.children}</div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.onClose}
      />
    </div>
  );
}
