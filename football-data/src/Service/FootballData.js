import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://api.football-data.org/v2",
  headers: { "X-Auth-Token": "a7987faea44044a483c891d232640c77" },
});

export const getLeagues = async () => {
  const arrResponse = [];
  const response = await instance.get("/competitions?areas=2077&plan=TIER_ONE");
  for (let league of response.data.competitions) {
    if (
      league.id === 2021 ||
      league.id === 2015 ||
      league.id === 2002 ||
      league.id === 2019 ||
      league.id === 2014 ||
      league.id === 2003
    ) {
      arrResponse.push(league);
    }
  }
  return arrResponse;
};

export const getTeams = async (id, season = 2020) => {
  const response = await instance.get(
    `/competitions/${id}/teams?season=${season}`
  );
  return response.data.teams;
};

export const getMatchesTeam = async (
  teamId,
  dateFrom = "2021-01-01",
  dateTo = "2022-01-01"
) => {
  const response = await instance.get(
    `/teams/${teamId}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`
  );
  return response.data.matches;
};

export const getMatchesLeague = async (
  leagueId,
  dateFrom = "2021-01-01",
  dateTo = "2022-01-01"
) => {
  const response = await instance.get(
    `/competitions/${leagueId}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`
  );
  return response.data.matches;
};
