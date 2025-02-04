import TimersContextProvider from "./store/timers-context";

import AddTimer from "./components/AddTimer";
import TimersControl from "./components/TimersControl";
import Timers from "./components/Timers";

function App() {
  return (
    <TimersContextProvider>   
      <div>
      <TimersControl />
        <AddTimer />
        <Timers />
      </div>
    </TimersContextProvider>
  );
}

export default App;
