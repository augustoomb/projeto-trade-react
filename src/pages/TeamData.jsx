import { useSelector } from 'react-redux';

function TeamData() {
  const selectedTeamId = useSelector(({ team }) => (team.selectedTeamId));

  return (
    <div>
      {
        selectedTeamId ? (
          <p>{ selectedTeamId }</p>
        ) : (null)
      }
    </div>
  );
}

export default TeamData;
