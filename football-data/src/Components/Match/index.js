import React from "react";
import moment from "moment";
import "./style.css";

export default function Match(props) {
  let status;
  if (props.status === "FINISHED") status = "ОКОНЧЕН";
  else if (props.status === "SCHEDULED")
    status = moment(props.utcDate).format("YYYY-MM-DD");
  else if (props.status === "CANCELLED") status = "ОТМЕНЕН";

  return (
    <li className="match">
      <div className="match_item">
        <div className="team_names">
          <p className="host_name">{props.homeTeam.name}</p>
          <div className="score">
            <p>{props.score.fullTime.homeTeam}</p>
            <p>:</p>
            <p>{props.score.fullTime.awayTeam}</p>
          </div>
          <p className="guest_name">{props.awayTeam.name}</p>
        </div>
        <p>{status}</p>
      </div>
    </li>
  );
}
