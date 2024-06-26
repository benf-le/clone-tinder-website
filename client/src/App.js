import Home from "./page/Home";
import Dashboard from "./page/Dashboard";
import OnBoarding from "./page/OnBoarding";
// nhớ cài npm i react-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useCookies} from "react-cookie";


const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const authToken = cookies.AuthToken

    return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
         {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
         {authToken && <Route path="/onboarding" element={<OnBoarding/>}/>}
     </Routes>
   </BrowserRouter>
  );
}

export default App;
