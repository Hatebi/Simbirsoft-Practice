import React from "react";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTeams } from "../../Service/FootballData";
import "./style.css";

import Team from "../Team";

function Teams(props) {
  const id = props.match.params.id;
  const [teams, setTeams] = useState([]);
  const [season, setSeason] = useState(2020);

  const handleSeason = (event) => {
    setSeason(event.target.value);
  };
  useEffect(() => {
    const asyncTeams = async () => {
      const response = await getTeams(id, season);
      setTeams(response);
    };
    asyncTeams();
    return () => asyncTeams;
  }, [id, season]);

  return (
    <div>
      <div className="form__group field">
        <input className="form__field" value={season} onChange={handleSeason} />
      </div>
      <div className="intro">
        <div className="team_container">
          <ul className="team_list">
            {teams.map((item, key) => (
              <Team {...item} key={key} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Teams);
