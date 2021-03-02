import logo from './logo.svg';
import logoAS from './logo.png';
import './App.css';
import AnimatedBg from "react-animated-bg";

function App() {
  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getUTCMonth()+1) + '-' + today.getDate();
  return (
    <div className="App">
      <AnimatedBg
        colors={["#70C1B3", "#FFD484", "#FFBB56", "#FF0755", "#247BA0"]}
        duration={1.5}
        delay={0}
        timingFunction="ease-out"
        className="App-header"
      >
        <div>
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
          <p>
          ✨Built with React✨
          </p>
        </div>
      </AnimatedBg>
    </div>
  );
}

export default App;
