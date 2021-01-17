import './App.css';
import StockList from './components/StockList';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const theme = {
    isLightTheme: true,
    light: { content: '#57585E', bg: '#FFFFFF'},
    dark: { content: '#FFFFFF',  bg: '#000000' }
  }
  return (
    <div className="App">
      <ThemeProvider value={theme}>
        <StockList/>
      </ThemeProvider>
    </div>
  );
}

export default App;
