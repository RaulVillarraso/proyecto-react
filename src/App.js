import logo from './logo.svg';
import './App.css';
import ContactPage from './components/container/contactPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactPage></ContactPage>
      </header>
    </div>
  );
}

export default App;
