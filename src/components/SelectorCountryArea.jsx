import PropTypes from 'prop-types';
import Select from 'react-select';

function SelectorCountryArea(props) {
  const { dataArray, text, setSelectedCountryName } = props;

  const mountOptions = () => dataArray.map((item) => (
    { value: item.name, label: item.name }
  ));

  const changeCountryName = (event) => {
    setSelectedCountryName(event.value);
  };

  return (
    <>
      <h2>{ text }</h2>
      <Select
        isDisabled={ dataArray.length === 0 }
        options={ mountOptions() }
        onChange={ changeCountryName }
      />
    </>
  );
}

export default SelectorCountryArea;

SelectorCountryArea.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataArray: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  setSelectedCountryName: PropTypes.func.isRequired,
};

// Fonte: https://react-select.com/home
