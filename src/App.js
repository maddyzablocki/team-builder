import React, {useState} from 'react';
import './App.css';
import Form from './components/Forms';
import Team from './components/Team';

function App() {
  const [team, setTeam] = useState([
    {
    name: "Maddyzablocki",
    email: "zablockimadison@gmail.com",
    role: "Junior Full Stack Web Developer"
  }
]);

const addNewMember = teamMember => {
  const newTeamMember ={
    id: Date.now(),
    name: teamMember.name,
    email: teamMember.email,
    role:teamMember.role
  };
  console.warn(newTeamMember);
  setTeam([...team, newTeamMember]);
};

  return (
    <div className="App">
      <h1>My Team Mates</h1>
      <Form addNewMember={addNewMember}/>
      <Team team={team} />
    </div>
  );
};

export default App;
