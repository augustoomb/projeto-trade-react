import { useState, useEffect } from 'react';
import SelectorArea from '../components/SelectorArea';
import Title from '../components/Title';
import { reqApiSports } from '../services/apiSports';
import getTokenInLocalStorage from '../utils/localStorage';

function DataFilter() {
  const [countries, setCountries] = useState([]);

  const COUNTRY_ENDPOINT = 'countries';

  const requestCountries = async () => {
    const token = getTokenInLocalStorage();
    const dataCountries = await reqApiSports(COUNTRY_ENDPOINT, JSON.parse(token));
    if (dataCountries.data?.results) {
      setCountries(dataCountries.data.response);
    }
    // setMyBooks(dataBooks);
  };

  useEffect(() => {
    requestCountries();
  }, []);

  return (
    <div>
      <Title text="Tela de filtros" />
      {
        countries.length > 0 ? (
          <SelectorArea dataArray={ countries } text="Escolha um país" />
        ) : (
          null
        )
      }
    </div>
  );
}

export default DataFilter;
