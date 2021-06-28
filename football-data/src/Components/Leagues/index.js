import React, { useEffect, useState } from "react";
import { getLeagues } from "../../Service/FootballData";
import "./style.css";

import League from "../League";

export default function Leagues() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const asyncLeagues = async () => {
      const response = await getLeagues();
      setLeagues(response);
    };
    asyncLeagues();
    return () => asyncLeagues;
  }, []);

  return (
    <div className="intro">
      <div className="league_container">
        <ul className="league_list">
          {leagues.map((item, key) => (
            <League {...item} key={key} />
          ))}
        </ul>
      </div>
    </div>
  );
}
