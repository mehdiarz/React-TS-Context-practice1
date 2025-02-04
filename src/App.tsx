import TimersContextProvider from "./store/timers-context";

import AddTimer from "./components/AddTimer";
import TimersControl from "./components/TimersControl";

function App() {
  return (
    <TimersContextProvider>
      <TimersControl />
      <div>
        <AddTimer />
      </div>
    </TimersContextProvider>
  );
}

export default App;
