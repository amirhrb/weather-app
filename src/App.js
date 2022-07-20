//components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ErrorModal from "./components/ErrorModal";

function App() {
  return (
    <div className=" flex flex-col items-center justify-between ">
      <Navbar />
      <Home />
      <ErrorModal />
    </div>
  );
}

export default App;
