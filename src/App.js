import './App.css';
import {Kanban} from "./graggableKanban/Kanban";
import {GeneratorComponent} from "./generatorPassword/GeneratorComponent";

function App() {

  return (
    <div className="App">
        <GeneratorComponent />
        <Kanban />
    </div>
  );
}

export default App;
