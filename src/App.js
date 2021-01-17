import './App.css';
import StockList from './components/StockList';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <h1 className='App-header'>y4trade</h1>
      <ThemeProvider>
          <StockList/>
      </ThemeProvider>
    </div>
  );
}

export default App;
