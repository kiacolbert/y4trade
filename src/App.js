import './App.css';
import StockList from './components/StockList';
import ThemeToggle from './components/ThemeToggle';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <StockList/>
        <ThemeToggle />
      </ThemeProvider>
    </div>
  );
}

export default App;
