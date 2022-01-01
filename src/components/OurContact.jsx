import React from "react";
import { Link, graphql } from "gatsby";
import MapComponent from "./Map";

const wrapperStyles = {
  justifyContent: "space-evenly",
  flexDirection: "row-reverse",
};

export default function OurContact() {
  return (
    <section id="__contacts" className="section">
      <h2 className="section-title">Контакти</h2>
      <div className="columns" style={wrapperStyles}>
        <div className="column is-4 __ocpw">
          <p>
            <b>Наша адреса:</b>
          </p>
          <p>м. Дніпро, вул. Наукова, 9, навчальні корпуси №12, №15</p>
          <p>
            Сайт ДНУ ім. Олеся Гончара:{" "}
            <Link to="http://www.dnu.dp.ua/">http://www.dnu.dp.ua/</Link>
          </p>
          <p>
            Сайт факультету фізики, електроніки та комп'ютерних систем:{" "}
            <Link to="https://ffeks.dp.ua/">https://ffeks.dp.ua/</Link>
          </p>
        </div>
        <div className="column is-7">
          <MapComponent />
        </div>
      </div>
    </section>
  );
}
