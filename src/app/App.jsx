import ContextProvider from '../context/store/store';
import Router from './Router';

function App() {
  return (
    <ContextProvider>
      <Router />
    </ContextProvider>
  );
}

export default App;
