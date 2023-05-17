import PropTypes from 'prop-types';
import Select from 'react-select';

function SelectorArea(props) {
  const { dataArray, text } = props;

  //   const tests = [
  //     { value: 'chocolate', label: 'Chocolate' },
  //     { value: 'strawberry', label: 'Strawberry' },
  //     { value: 'vanilla', label: 'Vanilla' },
  //   ];

  const mountOptions = () => dataArray.map((item) => (
    { value: item.name, label: item.name }
  ));

  return (
    <>
      <h2>{ text }</h2>
      <Select options={ mountOptions() } />
    </>
  );
}

export default SelectorArea;

SelectorArea.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataArray: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
};

// Fonte: https://react-select.com/home
