import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Task1 from "./Pages/Task1/Task1";
import Task2 from "./Pages/Task2/Task2";
import Task3 from "./Pages/Task3/Task3";
import Task4 from "./Pages/Task4/Task4";
import Task5 from "./Pages/Task5/Task5";
import Task6 from "./Pages/Task6/Task6";
import Task7 from "./Pages/Task7/Task7";
import Task8 from "./Pages/Task8/Task8";
import Task9 from "./Pages/Task9/Task9";
import Task10 from "./Pages/Task10/Task10";
import Task11 from "./Pages/Task11/Task11";
import Task12 from "./Pages/Task12/Task12";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/task1" element={<Task1 />}></Route>
        <Route path="/task2" element={<Task2 />}></Route>
        <Route path="/task3" element={<Task3 />}></Route>
        <Route path="/task4" element={<Task4 />}></Route>
        <Route path="/task5" element={<Task5 />}></Route>
        <Route path="/task6" element={<Task6 />}></Route>
        <Route path="/task7" element={<Task7 />}></Route>
        <Route path="/task8" element={<Task8 />}></Route>
        <Route path="/task9" element={<Task9 />}></Route>
        <Route path="/task10" element={<Task10 />}></Route>
        <Route path="/task11" element={<Task11 />}></Route>
        <Route path="/task12" element={<Task12 />}></Route>
      </Routes>
    </>
  );
}

export default App;
