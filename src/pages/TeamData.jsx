import { useSelector } from 'react-redux';

function TeamData() {
  const selector = useSelector(({ teamId }) => (teamId));

  return (
    <div>{ selector }</div>
  );
}

export default TeamData;
