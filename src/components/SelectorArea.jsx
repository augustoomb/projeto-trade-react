import PropTypes from 'prop-types';
import Select from 'react-select';

function SelectorArea(props) {
  const { text } = props;

  const tests = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <>
      <h2>{ text }</h2>
      <Select options={ tests } />
    </>
  );
}

export default SelectorArea;

SelectorArea.propTypes = {
  text: PropTypes.string.isRequired,
};

// Fonte: https://react-select.com/home
