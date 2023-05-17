import PropTypes from 'prop-types';

function Button(props) {
  const { text, onClick } = props;

  return (
    <button onClick={ onClick }>
      { text }
    </button>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
