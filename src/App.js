import './App.css';
import search from './call';

async function App() {
  const pachinko = await search('pachinko');
  const results = [];
  pachinko.forEach((result) => {
    results.push(result);
  });
  pachinko.forEach((result) => {
    console.log(result.title);
  })
  const testTitle = pachinko[0].title;
  return (
    <div className="App">
      <header className="App-header">
        {testTitle}
      </header>
    </div>
  );
}

export default App;
