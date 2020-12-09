import logo512 from './logo512.png';
import './App.css';
import { Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo512}className="" alt="logo" />
        <p>
          <br/>
        <Form.Group>
          <Form.Control size="lg" type="text" placeholder="Large text" />
        </Form.Group>
        </p>
        <Button>Générer</Button>
      </header>
    </div>
  );
}

export default App;
