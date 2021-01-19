import './App.css';
import StockList from './components/StockList';
import TradeInput from './components/TradeInput';
import ThemeProvider from './context/ThemeContext';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <img className='App-header' src={logo} alt='logo'/>
      <ThemeProvider>
          <StockList/>
      </ThemeProvider>
      <TradeInput />
    </div>
  );
}

export default App;