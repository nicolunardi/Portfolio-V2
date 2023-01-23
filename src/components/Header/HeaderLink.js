import React from "react";
import { Link } from "react-scroll/modules";

const HeaderLink = ({ section, text }) => {
  return (
    <div>
      <Link to={section} smooth duration={500} offset={-80}>
        {text}
      </Link>
    </div>
  );
};

export default HeaderLink;
