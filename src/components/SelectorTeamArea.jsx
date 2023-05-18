import PropTypes from 'prop-types';
import Select from 'react-select';

function SelectorTeamArea(props) {
  const { dataArray, text } = props;

  const mountOptions = () => dataArray.map((item) => (
    { value: item.team.id, label: item.team.name }
  ));

  // const changeSeasonYear = (event) => {
  //   setSelectedSeasonYear(event.value);
  // };

  return (
    <>
      <h2>{ text }</h2>
      <Select
        isDisabled={ dataArray.length === 0 }
        options={ mountOptions() }
        // onChange={ changeSeasonYear }
      />
    </>
  );
}

export default SelectorTeamArea;

SelectorTeamArea.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataArray: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
};

// Fonte: https://react-select.com/home
