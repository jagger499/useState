import './App.css';
import { ClassState } from './components/ClassState';
import { UseReducer } from '../src/reducers/useReducer';

function App() {
  return (
    <div>
      <UseReducer name={'useState'}/>
      <ClassState name={'classState'}/>
    </div>
  );
}

export default App;
