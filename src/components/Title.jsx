import PropTypes from 'prop-types';

function Title(props) {
  const { text } = props;

  return (
    <h1>{text}</h1>
  );
}

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
