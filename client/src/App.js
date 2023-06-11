import Home from "./page/Home";
import Dashboard from "./page/Dashboard";
import OnBoarding from "./page/OnBoarding";
// nhớ cài npm i react-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/onboarding" element={<OnBoarding/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
