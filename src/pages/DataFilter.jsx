import { useState, useEffect } from 'react';
import SelectorCountryArea from '../components/SelectorCountryArea';
import Title from '../components/Title';
import { reqApiSports } from '../services/apiSports';
import getTokenInLocalStorage from '../utils/localStorage';
import SelectorSeasonArea from '../components/SelectorSeasonArea';
import SelectorLeagueArea from '../components/SelectorLeagueArea';
import SelectorTeamArea from '../components/SelectorTeamArea';

function DataFilter() {
  const [countries, setCountries] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);

  const [selectedCountryName, setSelectedCountryName] = useState('');
  const [selectedSeasonYear, setSelectedSeasonYear] = useState('');
  const [selectedLeagueId, setSelectedLeagueId] = useState('');

  const COUNTRY_ENDPOINT = 'countries';
  const SEASON_ENDPOINT = 'leagues/seasons';
  const LEAGUES_ENDPOINT = 'leagues';
  const TEAMS_ENDPOINT = 'teams';

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
    const dataLeagues = await reqApiSports(
      LEAGUES_ENDPOINT,
      JSON.parse(token),
      selectedCountryName,
    );
    if (dataLeagues.data?.results) {
      setLeagues(dataLeagues.data.response);
    }
  };

  const requestTeams = async () => {
    const token = getTokenInLocalStorage();
    const dataTeams = await reqApiSports(
      TEAMS_ENDPOINT,
      JSON.parse(token),
      { selectedLeagueId,
        selectedSeasonYear },
    );
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
    requestCountries();
    requestSeasons();
  }, []);

  return (
    <div>
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
      />
    </div>
  );
}

export default DataFilter;
