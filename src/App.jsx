import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="w-4/5 h-max bg-cyan-50 ml-[340px]">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
