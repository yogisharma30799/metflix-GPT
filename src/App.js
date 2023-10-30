import './App.css';
import Body from './components/Body';
import Store from './utils/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store = {Store}>
      <Body/>
    </Provider>
  );
}

export default App;
