import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// import { reqApiSports } from '../services/apiSports';
import { reqApiSportsMock } from '../services/apiSports';
import getTokenInLocalStorage from '../utils/localStorage';
import styles from '../styles/TeamData.module.css';

function TeamData() {
  const selectedTeamId = useSelector(({ team }) => (team.selectedTeamId));
  const selectedSeasonYear = useSelector(({ team }) => (team.selectedSeasonYear));

  const [players, setPlayers] = useState([]);

  // const PLAYERS_ENDPOINT = `https://v3.football.api-sports.io/players?team=${selectedTeamId}&season=${selectedSeasonYear}`;
  const PLAYERS_ENDPOINT = 'http://localhost:3001/players';

  const requestPlayers = async () => {
    const token = getTokenInLocalStorage();
    // const dataPlayers = await reqApiSports(COUNTRY_ENDPOINT, JSON.parse(token));
    const dataPlayers = await reqApiSportsMock(PLAYERS_ENDPOINT, JSON.parse(token));
    if (dataPlayers.data?.results) {
      setPlayers(dataPlayers.data.response);
    }
  };

  useEffect(() => {
    if (selectedTeamId !== '' && selectedSeasonYear !== '') {
      requestPlayers();
    }
  }, [selectedTeamId, selectedSeasonYear]);

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
                // <p key={ index }>Teste</p>
              ))
            }
          </div>
        ) : (null)
      }
    </section>
  );
}

export default TeamData;
