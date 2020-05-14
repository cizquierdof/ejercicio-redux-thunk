import React from 'react';
import TaskList from './components/TaskList';
import Notifications from './components/Notifications';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <Container className="App">
    
      <Notifications></Notifications>
      <br></br>
      <TaskList></TaskList>
    </Container>
  );
}

export default App;
