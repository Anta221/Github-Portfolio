import logo512 from './logo512.png';
import './App.css';
import { Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo512}className="" alt="logo" />
        <SearchForm/>
        <Button>Générer</Button>
      </header>
    </div>
  );
}

export default App;
