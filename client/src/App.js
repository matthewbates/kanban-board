import "./App.css";

import KanbanBoard from "./components/KanbanBoard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <KanbanBoard />
    </div>
  );
}

export default App;
