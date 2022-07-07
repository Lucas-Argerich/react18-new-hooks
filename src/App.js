import "./App.css";
import Navbar from "./components/Navbar";
import UseDeferredValue from "./pages/UseDeferredValue";
import UseId from "./pages/UseId";
import UseInsertionEffect from "./pages/UseInsertionEffect";
import UseSyncExternalStore from "./pages/UseSyncExternalStorage";
import UseTransition from "./pages/UseTransition";

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
