import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
     {/* <Counter/> */}
     {/* <FunctionClick/>
     <ClassClick/> */}
     {/* <EventBind/> */}
     <ParentComponent/>
    </div>
  );
}

export default App;
