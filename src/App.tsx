import './App.css';
import { Button } from './stories/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          primary
          backgroundColor="#ff0000"
          size="large"
          label="TestBTN"
          onClick={() => console.log('Button clicked')}
        />
      </header>
    </div>
  );
}

export default App;
