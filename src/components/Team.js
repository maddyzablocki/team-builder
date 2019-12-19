import React from "react";

const Team = props => {
    console.warn(props.team, 'this is the log I want')
  return (
    <div className="team-list">
      {props.team.map(teamMember => (
        <div className="build" key={teamMember.id}>
          <h3>{teamMember.name}</h3>
          <p>{teamMember.email}</p>
          <p>{teamMember.role}</p>
        </div>
      ))}
    </div>
  );
};
export default Team;