import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Dashboard from "./Pages/Dashboard";
//import Memory from "./Games/MemoryGame/Memory";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
       <Route path="/chats" component={Chatpage} />
        <Route path="/dashboard" component={Dashboard} />
       {/* <Route path="/memory" component={Memory} />  */}
        
    </div>
  );
}

export default App;