import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SelectorCountryArea from '../components/SelectorCountryArea';
import Title from '../components/Title';
import { reqApiSports } from '../services/apiSports';
import getTokenInLocalStorage from '../utils/localStorage';
import SelectorSeasonArea from '../components/SelectorSeasonArea';
import SelectorLeagueArea from '../components/SelectorLeagueArea';
import SelectorTeamArea from '../components/SelectorTeamArea';
import { setTeamId } from '../redux/slices/team';
import styles from '../styles/DataFilter.module.css';
import img from '../images/background.jpg';

function DataFilter() {
  const [countries, setCountries] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);

  const [selectedCountryName, setSelectedCountryName] = useState('');
  const [selectedSeasonYear, setSelectedSeasonYear] = useState('');
  const [selectedLeagueId, setSelectedLeagueId] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const COUNTRY_ENDPOINT = 'https://v3.football.api-sports.io/countries';
  const SEASON_ENDPOINT = 'https://v3.football.api-sports.io/leagues/seasons';
  const LEAGUES_ENDPOINT = `https://v3.football.api-sports.io/leagues?country=${selectedCountryName}`;
  const TEAMS_ENDPOINT = `https://v3.football.api-sports.io/teams?league=${selectedLeagueId}&season=${selectedSeasonYear}`;
  // const INFO_TEAMS_ENDPOINT = `https://v3.football.api-sports.io/teams?id=${selectedTeamId}`;

  const requestCountries = async () => {
    const token = getTokenInLocalStorage();
    const dataCountries = await reqApiSports(COUNTRY_ENDPOINT, JSON.parse(token));
    if (dataCountries.data?.results) {
      setCountries(dataCountries.data.response);
    }
  };

  const requestSeasons = async () => {
    const token = getTokenInLocalStorage();
    const dataSeasons = await reqApiSports(SEASON_ENDPOINT, JSON.parse(token));
    if (dataSeasons.data?.results) {
      setSeasons(dataSeasons.data.response);
    }
  };

  const requestLeagues = async () => {
    const token = getTokenInLocalStorage();
    const dataLeagues = await reqApiSports(LEAGUES_ENDPOINT, JSON.parse(token));
    if (dataLeagues.data?.results) {
      setLeagues(dataLeagues.data.response);
    }
  };

  const requestTeams = async () => {
    const token = getTokenInLocalStorage();
    const dataTeams = await reqApiSports(TEAMS_ENDPOINT, JSON.parse(token));
    if (dataTeams.data?.results) {
      setTeams(dataTeams.data.response);
    }
  };

  useEffect(() => {
    if (selectedCountryName !== '') {
      requestLeagues();
    }
  }, [selectedCountryName]);

  useEffect(() => {
    if (selectedLeagueId !== '' && selectedSeasonYear !== '') {
      requestTeams();
    }
  }, [selectedLeagueId, selectedSeasonYear]);

  useEffect(() => {
    if (selectedTeamId !== '') {
      dispatch(setTeamId({ selectedTeamId }));
      navigate({ pathname: '/teamdata' });
    }
  }, [selectedTeamId]);

  useEffect(() => {
    requestCountries();
    requestSeasons();
  }, []);

  return (
    <div className={ styles.background } style={ { backgroundImage: `url(${img})` } }>
      <Title text="Tela de filtros" />
      <SelectorCountryArea
        dataArray={ countries }
        text="Escolha um país"
        setSelectedCountryName={ setSelectedCountryName }
      />
      <SelectorSeasonArea
        dataArray={ seasons }
        text="Escolha uma temporada"
        setSelectedSeasonYear={ setSelectedSeasonYear }
      />
      <SelectorLeagueArea
        dataArray={ leagues }
        text="Escolha uma liga"
        setSelectedLeagueId={ setSelectedLeagueId }
      />
      <SelectorTeamArea
        dataArray={ teams }
        text="Escolha um time"
        setSelectedTeamId={ setSelectedTeamId }
      />
    </div>
  );
}

export default DataFilter;
