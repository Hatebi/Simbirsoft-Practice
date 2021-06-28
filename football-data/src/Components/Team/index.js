import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Team(props) {
  return (
    <li className="team">
      <div className="team_item">
        <div
          className="team_logo"
          style={{ backgroundImage: `url(${props.crestUrl})` }}
        ></div>
        <Link to={`/team/${props.id}`} className="team_name">
          {props.name}
        </Link>
      </div>
    </li>
  );
}
