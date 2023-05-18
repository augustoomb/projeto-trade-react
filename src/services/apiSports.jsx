/* eslint-disable no-unused-vars */
import axios from 'axios';

const reqApiSports = async (endpoint, token) => {
  try {
    const response = await axios({
      method: 'GET',
      mode: 'no-cors',
      // url: url(),
      url: endpoint,
      headers: {
        'x-rapidapi-key': token,
        'x-rapidapi-host': 'v3.football.api-sports.io',
      },
    });
    return (response);
    // console.log('API desativada');
  } catch (error) {
    return ({ error });
  }
};

export { reqApiSports };
