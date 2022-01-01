import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  const [nowYear] = React.useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <span style={{ fontWeight: 800 }}>
        Дніпровський Національний Університет імені Олеся Гончара
      </span>
      <span style={{ fontSize: 19 }}>
        Факультет фізики, електроніки та комп'ютерних систем
      </span>
      <span style={{ fontSize: 16 }}>
        кафедра Електронних Обчислювальних Машин
      </span>
      <span style={{ fontSize: 15.5 }}>© {nowYear}</span>
    </footer>
  );
};

export default Footer;
