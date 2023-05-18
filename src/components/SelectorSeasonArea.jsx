import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from '../styles/SelectorSeasonArea.module.css';

function SelectorSeasonArea(props) {
  const { dataArray, text, setSelectedSeasonYear } = props;

  const mountOptions = () => dataArray.map((item) => (
    { value: item, label: item }
  ));

  const changeSeasonYear = (event) => {
    setSelectedSeasonYear(event.value);
  };

  return (
    <section className={ styles.selectorSeasonArea }>
      <h2>{ text }</h2>
      <Select
        isDisabled={ dataArray.length === 0 }
        options={ mountOptions() }
        onChange={ changeSeasonYear }
      />
    </section>
  );
}

export default SelectorSeasonArea;

SelectorSeasonArea.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataArray: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  setSelectedSeasonYear: PropTypes.func.isRequired,
};

// Fonte: https://react-select.com/home
