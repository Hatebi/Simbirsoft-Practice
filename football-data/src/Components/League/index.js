import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const publicLogo =
  "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uefa_2013.png";

export default function League(props) {
  return (
    <li className="league">
      <div className="league_item">
        <div
          className="league_logo"
          style={{
            backgroundImage: `url(${
              props.emblemUrl ? props.emblemUrl : publicLogo
            })`,
          }}
        ></div>
        <div className="two_but">
          <Link to={`/league/${props.id}`} className="sq-btn">
            {props.name}: Команды
          </Link>
          <Link to={`/league/${props.id}/calendar`} className="sq-btn">
            {props.name}: Календарь
          </Link>
        </div>
      </div>
    </li>
  );
}
