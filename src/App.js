import Navbar from './Navbar/Navbar';
import Introduction from './Introduction/Introduction';
import WorkExperience from './WorkExperience/WorkExperience';

import './App.css';


      //TODO: navbar
      //TODO: main section
      //TODO: work experience
      //TODO: technologies
      //TODO: footer contact date

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Introduction />
        <WorkExperience />
      </main>
    </div>
  );
}

export default App;
