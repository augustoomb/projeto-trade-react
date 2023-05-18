import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reqApiSports } from '../services/apiSports';
import Title from '../components/Title';
import Button from '../components/Button';
import SpanErrors from '../components/SpanErrors';
// import InputLogin from '../components/InputLogin';

function Login() {
  const [token, setToken] = useState('');
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const saveTokenOnLocalStorage = (tokenToLocalStorage) => {
    localStorage.setItem('token', JSON.stringify(tokenToLocalStorage));
  };

  // const LOGIN_ENDPOINT = 'status';
  const LOGIN_ENDPOINT = 'https://v3.football.api-sports.io/status';

  const login = async () => {
    const responseAuth = await reqApiSports(LOGIN_ENDPOINT, token);

    if (Object.keys(responseAuth.data?.errors).length > 0 || responseAuth.error) {
      setErrors(JSON.stringify(responseAuth.data?.errors));
      return false;
    }

    saveTokenOnLocalStorage(token);
    navigate({ pathname: '/datafilter' });
  };

  const onChangeInput = (value) => {
    setToken(value);
    setErrors(undefined);
  };

  return (
    <div>
      <Title text="Login" />

      <input
        placeholder="Digite sua key"
        type="text"
        value={ token }
        // onChange={ ({ target }) => setToken(target.value) }
        onChange={ ({ target }) => onChangeInput(target.value) }
      />

      <Button text="Login" onClick={ login } />

      <SpanErrors text={ errors } />

    </div>
  );
}

export default Login;
