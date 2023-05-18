import PropTypes from 'prop-types';
import Select from 'react-select';

function SelectorLeagueArea(props) {
  const { dataArray, text, setSelectedLeagueId } = props;

  const mountOptions = () => dataArray.map((item) => (
    { value: item.league.id, label: item.league.name }
  ));

  const changeLeagueId = (event) => {
    setSelectedLeagueId(event.value);
  };

  return (
    <>
      <h2>{ text }</h2>
      <Select
        options={ mountOptions() }
        isDisabled={ dataArray.length === 0 }
        onChange={ changeLeagueId }
      />
    </>
  );
}

export default SelectorLeagueArea;

SelectorLeagueArea.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataArray: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  setSelectedLeagueId: PropTypes.func.isRequired,
};
