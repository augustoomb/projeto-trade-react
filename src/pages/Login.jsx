import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reqApiSports } from '../services/apiSports';
// import Title from '../components/Title';
// import Button from '../components/Button';
// import SpanErrors from '../components/SpanErrors';
import styles from '../styles/Login.module.css';
import LoginLeftBlock from '../components/LoginLeftBlock';
import LoginRightBlock from '../components/LoginRightBlock';
// import backgroundLeft from '../images/background-left-block.png';

function Login() {
  const [token, setToken] = useState('');
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const saveTokenOnLocalStorage = (tokenToLocalStorage) => {
    localStorage.setItem('token', JSON.stringify(tokenToLocalStorage));
  };

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
    <section className={ styles.sectionMain }>
      <LoginLeftBlock />
      {/* <div className={ styles.rightBlock }>
        <Title text="Login" />

        <input
          placeholder="Digite sua key"
          type="text"
          value={ token }
          onChange={ ({ target }) => onChangeInput(target.value) }
        />

        <Button text="Login" onClick={ login } />

        <LoginRightBlock
          value={ token }
          onChange={ ({ target }) => onChangeInput(target.value) }
          onClick={ login }
        />

        <SpanErrors text={ errors } />
      </div> */}
      <LoginRightBlock
        value={ token }
        onChange={ ({ target }) => onChangeInput(target.value) }
        onClick={ login }
        errors={ errors }
      />

    </section>
  );
}

export default Login;
