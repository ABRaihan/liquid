import ContextProvider from '../context/store/store';
import Router from './Router';

function App() {
  return (
    <ContextProvider>
      <Router />
      {/* <TestHooks /> */}
    </ContextProvider>
  );
}

export default App;
