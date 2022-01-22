import './App.css';
import { UseState } from './components/UseState';
import { ClassState } from './components/ClassState';

function App() {
  return (
    <div>
      <UseState name={'useState'}/>
      <ClassState name={'classState'}/>
    </div>
  );
}

export default App;
