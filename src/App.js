import "./App.css";
import Navbar from "./components/Navbar";
import UseDeferredValue from "./containers/UseDeferredValue";
import UseId from "./containers/UseId";
import UseInsertionEffect from "./containers/UseInsertionEffect";
import UseSyncExternalStore from "./containers/UseSyncExternalStorage";
import UseTransition from "./containers/UseTransition";

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" />
      <main className="mt-5">
        <UseId />
        <UseTransition />
        <UseDeferredValue />
        <UseSyncExternalStore />
        <UseInsertionEffect />
      </main>
    </div>
  );
}

export default App;
