import { TaksProvider } from "./contexts/tasksContext";
import Header from "./components/Header";
import Title from "./components/Title";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="container">
      <TaksProvider>
        <Title />
        <Header />
        <Tasks />
        <AddTask />
      </TaksProvider>
    </div>
  );
}

export default App;
