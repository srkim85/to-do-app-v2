import Header from "./components/Header";
import Title from "./components/Title";
import { TaksProvider } from "./contexts/tasksContext";

function App() {
  return (
    <div className="container">
      <TaksProvider>
        <Title />
        <Header />
        {/* <Tasks />
        <AddTaks /> */}
      </TaksProvider>
    </div>
  );
}

export default App;
