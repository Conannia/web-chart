import logo from './logo.svg';
import './App.css';
import BarChart from './Charts/BarChart';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';
import Dankmemes from './Charts/Dankmemes';
import LineBudget from './Charts/LineBudget';
import SalaryChart from './Charts/SalaryChart';

function App() {
  return (
    <div className="App">
      <h1>Monthly Budget Analys - Portofolio Views</h1>
      <div>
        {/* <LineChart /> */}
        
        <LineBudget />
        <BarChart />
        {/* <PieChart />
        <SalaryChart/> */}
      </div>

    </div>
  );
}

export default App;
