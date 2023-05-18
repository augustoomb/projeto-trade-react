import axios from 'axios';

const reqApiSports = async (endpoint, token, param = false) => {
  const url = () => {
    if (!param) {
      return `https://v3.football.api-sports.io/${endpoint}`;
    }
    if (typeof param === 'string') {
      return `https://v3.football.api-sports.io/${endpoint}?country=${param}`;
    }
    return `https://v3.football.api-sports.io/${endpoint}?league=${param.selectedLeagueId}&season=${param.selectedSeasonYear}`;
  };
  try {
    const response = await axios({
      method: 'GET',
      mode: 'no-cors',
      url: url(),
      headers: {
        'x-rapidapi-key': token,
        'x-rapidapi-host': 'v3.football.api-sports.io',
      },
    });
    return (response);
  } catch (error) {
    return ({ error });
  }
};

export { reqApiSports };
