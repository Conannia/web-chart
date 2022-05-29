import logo from './logo.svg';
import './App.css';
import BarChart from './Charts/BarChart';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';
import Dankmemes from './Charts/Dankmemes';
import LineBudget from './Charts/LineBudget';
import SalaryChart from './Charts/SalaryChart';
import { CircularProgressbar } from 'react-circular-progressbar';
import ReviewsBar from './Circular/ReviewsBar';
import ReviewsProvider from './Circular/ReviewsProvider';
import DetailInformation from './Circular/Detail';
import RadialBarChart from './Charts/CobaRadial';
import CobaRadial from './Charts/CobaRadial';
import Example from './Charts/CobaRadial';



function App() {
  return (
    <div className="App">
      <h1>Monthly Budget Analys - Portofolio Views</h1>
      <div>
  
        <LineBudget/>
        <CobaRadial/>

      </div>

    </div>
  );
}

export default App;
