import "./App.css";
import Navbar from "./components/Navbar";
import MainTitle from "./containers/MainTitle";
import UseId from "./containers/UseId";
import UseTransition from "./containers/UseTransition";
import UseDeferredValue from "./containers/UseDeferredValue";
import UseSyncExternalStore from "./containers/UseSyncExternalStorage";
import UseInsertionEffect from "./containers/UseInsertionEffect";

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" />
      <main className="mt-5">
        <MainTitle />
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
