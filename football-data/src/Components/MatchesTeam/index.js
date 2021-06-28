import React from "react";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMatchesTeam } from "../../Service/FootballData";
import "./style.css";
import Match from "../Match";

function MatchesTeam(props) {
  const id = props.match.params.id;
  const [matchesTeam, setMatchesTeam] = useState([]);
  const [dateFrom, setDateFrom] = useState("2021-01-01");
  const [dateTo, setDateTo] = useState("2022-01-01");

  const handleDateFrom = (event) => {
    setDateFrom(event.target.value);
  };

  const handleDateTo = (event) => {
    setDateTo(event.target.value);
  };

  useEffect(() => {
    const asyncMatchesTeam = async () => {
      const response = await getMatchesTeam(id, dateFrom, dateTo);
      setMatchesTeam(response);
    };
    asyncMatchesTeam();
    return () => asyncMatchesTeam;
  }, [id, dateFrom, dateTo]);

  console.log(matchesTeam);

  return (
    <div>
      <div className="intro">
        <div className="calendar_container_1">
          <label>Дата с</label>
          <input
            type="date"
            className="calendar"
            value={dateFrom}
            onChange={handleDateFrom}
          ></input>
        </div>
        <div className="calendar_container_2">
          <label>Дата по</label>
          <input
            type="date"
            className="calendar"
            value={dateTo}
            onChange={handleDateTo}
          ></input>
        </div>
        <div className="matchesTeam_container">
          <ul className="matchesTeam_list">
            {matchesTeam.map((item, key) => (
              <Match {...item} key={key} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MatchesTeam);
