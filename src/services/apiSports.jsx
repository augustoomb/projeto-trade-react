import axios from 'axios';

const auth = async (token) => {
  try {
    const response = await axios({
      method: 'GET',
      mode: 'no-cors',
      url: 'https://v3.football.api-sports.io/status',
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

export { auth };
