import React from "react";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMatchesLeague } from "../../Service/FootballData";
import "./style.css";
import Match from "../Match";

function MatchesLeague(props) {
  const id = props.match.params.id;
  const [matchesLeague, setMatchesLeague] = useState([]);
  const [dateFrom, setDateFrom] = useState("2021-01-01");
  const [dateTo, setDateTo] = useState("2022-01-01");

  const handleDateFrom = (event) => {
    setDateFrom(event.target.value);
  };

  const handleDateTo = (event) => {
    setDateTo(event.target.value);
  };

  useEffect(() => {
    const asyncMatchesLeague = async () => {
      const response = await getMatchesLeague(id, dateFrom, dateTo);
      setMatchesLeague(response);
    };
    asyncMatchesLeague();
    return () => asyncMatchesLeague;
  }, [id, dateFrom, dateTo]);

  console.log(matchesLeague);

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
        <div className="matchesLeague_container">
          <ul className="matchesLeague_list">
            {matchesLeague.map((item, key) => (
              <Match {...item} key={key} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MatchesLeague);
