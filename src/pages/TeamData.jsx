import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// import { reqApiSports } from '../services/apiSports';
import { reqApiSportsMock } from '../services/apiSports';
import getTokenInLocalStorage from '../utils/localStorage';
import styles from '../styles/TeamData.module.css';

function TeamData() {
  const selectedTeamId = useSelector(({ team }) => (team.selectedTeamId));
  const selectedSeasonYear = useSelector(({ team }) => (team.selectedSeasonYear));
  const selectedLeagueId = useSelector(({ team }) => (team.selectedLeagueId));

  const [players, setPlayers] = useState([]);
  const [teamStatistics, setTeamStatistics] = useState([]);

  // const PLAYERS_ENDPOINT = `https://v3.football.api-sports.io/players?team=${selectedTeamId}&season=${selectedSeasonYear}`;
  const PLAYERS_ENDPOINT = 'http://localhost:3001/players';

  // const TEAM_STATISTICS_ENDPOINT = `https://v3.football.api-sports.io/teams/statistics?team=${selectedTeamId}&season=${selectedSeasonYear}&league=${selectedLeagueId}`;
  const TEAM_STATISTICS_ENDPOINT = 'http://localhost:3001/teamstatistics';

  const requestPlayers = async () => {
    const token = getTokenInLocalStorage();
    // const dataPlayers = await reqApiSports(COUNTRY_ENDPOINT, JSON.parse(token));
    const dataPlayers = await reqApiSportsMock(PLAYERS_ENDPOINT, JSON.parse(token));
    if (dataPlayers.data?.results) {
      setPlayers(dataPlayers.data.response);
    }
  };

  const requestTeamStatistics = async () => {
    const token = getTokenInLocalStorage();
    // const dataTeamStatistics = await reqApiSports(TEAM_STATISTICS_ENDPOINT, JSON.parse(token));
    const dataTeamStatistics = await
    reqApiSportsMock(TEAM_STATISTICS_ENDPOINT, JSON.parse(token));
    if (dataTeamStatistics.data?.results) {
      setTeamStatistics(dataTeamStatistics.data.response);
    }
  };

  useEffect(() => {
    if (selectedTeamId !== '' && selectedSeasonYear !== '' && selectedLeagueId !== '') {
      requestPlayers();
      requestTeamStatistics();
    }
  }, [selectedTeamId, selectedSeasonYear, selectedLeagueId]);

  return (
    <section className={ styles.section }>
      <h1>Informações sobre o time selecionado</h1>
      <h2>Jogadores</h2>
      {
        players?.length > 0 ? (
          <div className={ styles.cards }>
            {
              players.map((item, index) => (
                <div className={ styles.cardPlayer } key={ index }>
                  <p>
                    Nome: &nbsp;
                    <span>{ item.player.name }</span>
                  </p>
                  <p>
                    Idade: &nbsp;
                    <span>{ item.player.age }</span>
                  </p>
                  <p>
                    Nacionalidade: &nbsp;
                    <span>{ item.player.nationality }</span>
                  </p>
                </div>
              ))
            }
          </div>
        ) : (null)
      }
      <h2>Formação mais usada</h2>
      {
        teamStatistics?.lineups ? (
          <div>
            <p>
              Formação: &nbsp;
              <span>{ teamStatistics.lineups[0].formation }</span>
            </p>
            <p>
              Ocorrências: &nbsp;
              <span>{ teamStatistics.lineups[0].played }</span>
              {' vezes'}
            </p>
          </div>
        ) : (null)
      }
    </section>
  );
}

export default TeamData;
