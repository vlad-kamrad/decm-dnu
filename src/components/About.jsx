import React from "react";

import campus from "../img/campus1.png";

export default function About() {
  return (
    <section className="sas-section section" id="__about">
      <h2 className="section-title">Про кафедру</h2>
      <div className="column">
        <p>
          Кафедра "Електронних обчислювальних машин" входить до складу
          факультету "Фізики Електроніки та Комп'ютерних систем" і вже понад 10
          років є лідером у підготовці висококваліфікованих спеціалістів:
        </p>
        <p>
          першого освітнього рівня (бакалавр) за спеціалізацією "Комп'ютерна
          інженерія";
        </p>
        <p>
          другого освітнього рівня (магістр) за спеціалізацією "Комп'ютерна
          інженерія"
        </p>
        <p>
          Інформаційні технології активно проникають у всі сфери прикладної та
          професійної діяльності людини, стаючи невід'ємною атрибутом
          професійної придатності у суспільстві. Одним з найбільш бурхливих
          напрямів інформаційних технологій, активно використовуються в умовах
          становлення інформаційного суспільства інформаційні технології.
        </p>
        <p>
          Інформаційні технології впроваджуються практично у всі сфери
          життєдіяльності суспільства – створення товарів для систем масової
          інформації та комунікації; візуалізація об'єктів глобального
          інформаційного простору; розвиток електронної демократії, електронних
          послуг, інформаційних ринків; нарощування інформаційного обміну у
          вигляді електронних соціальних мереж. Це багато в чому, пояснює
          затребуваність фахівців, які володіють технологіями та системами
          мультимедіа в області: комп'ютерної обробки, аналізу та відтворення
          цифрових зображень
        </p>
      </div>
      <h2 className="section-title">Історія кафедри</h2>
      <div className="columns">
        <div className="column is-6">
          <img src={campus} style={{ objectFit: "cover", maxHeight: 500 }} loading="lazy" alt="Campus" />
        </div>
        <div className="column">
          <p>
            Кафедра ЕОМ була заснована на базі кафедри біоніки фізичного
            факультету Дніпропетровського державного університету в 1976 році на
            початку широкого впровадження обчислювальної техніки в виробничу
            діяльність підприємств Придніпровського регіону. Вона є однією з
            перших кафедр цього напрямку в Україні.
          </p>
          <p>
            З 1977 року кафедра ЕОМ входить до складу радіофізичного факультету,
            а з 2007 року - до складу факультету фізики, електроніки та
            комп'ютерних систем Дніпровського національного університету імені
            Олеся Гончара
          </p>
          <p>
            За час свого існування кафедра ЕОМ підготувала понад 3000
            висококваліфікованих фахівців в області комп'ютерних систем і мереж.
            Ліцензійний обсяг – 75 бакалаврів, 50 магістрів.
          </p>
        </div>
      </div>
    </section>
  );
}
