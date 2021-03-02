import logo from './logo.svg';
import logoAS from './logo.png';
import './App.css';

function App() {
  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getUTCMonth()+1) + '-' + today.getDate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoAS} className="App-logo" alt="logo" />
        <p>
        🚀Something Amazing Is Coming Soon🚀
        </p>
        <p>
        👨‍🏫👨‍🏫Caltech CTME PG DevOps Assessment 1👨‍🏫👨‍🏫
        </p>
        <p>
        ⭐by Khaleel O'Brien⭐
        </p>
        <p>
        📅{date}📅
        </p>
      </header>
    </div>
  );
}

export default App;
