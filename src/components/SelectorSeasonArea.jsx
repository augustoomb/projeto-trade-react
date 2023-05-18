import PropTypes from 'prop-types';
import Select from 'react-select';

function SelectorSeasonArea(props) {
  const { dataArray, text, setSelectedSeasonYear } = props;

  const mountOptions = () => dataArray.map((item) => (
    { value: item, label: item }
  ));

  const changeSeasonYear = (event) => {
    setSelectedSeasonYear(event.value);
  };

  return (
    <>
      <h2>{ text }</h2>
      <Select
        isDisabled={ dataArray.length === 0 }
        options={ mountOptions() }
        onChange={ changeSeasonYear }
      />
    </>
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
