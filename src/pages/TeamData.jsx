import { useSelector } from 'react-redux';

function TeamData() {
  const selectedTeamId = useSelector(({ team }) => (team.selectedTeamId));
  const selectedSeasonYear = useSelector(({ team }) => (team.selectedSeasonYear));

  return (
    <div>
      {
        selectedTeamId && selectedSeasonYear ? (
          <>
            <p>{ selectedTeamId }</p>
            <p>{ selectedSeasonYear }</p>
          </>
        ) : (null)
      }
    </div>
  );
}

export default TeamData;
