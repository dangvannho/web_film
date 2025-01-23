import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <SideBar />
      <div className="w-full lg:w-4/5 h-max bg-cyan-50 mt-[52px] lg:mt-[0px] lg:ml-[20%]">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
