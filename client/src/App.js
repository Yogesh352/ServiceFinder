import Landing from "./pages/Landing/Landing";
import image from "./background/LandingPageBackground.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listings from "./pages/Listings/Listings";
import Walkthrough from "./pages/Walkthrough/Walkthrough";
import { createContext, useMemo, useState } from "react";
import Summary from "./pages/Summary/Summary";
import Ending from "./pages/Ending/Ending";
import Form from "./pages/Form/Form";
export const AddedServicesContext = createContext({
  services: [],
  setServices: () => {},
});

function App() {
  const [services, setServices] = useState([]);
  const [userData, setUserData] = useState({});
  const value = useMemo(
    () => ({ services, setServices, userData, setUserData }),
    [services, userData]
  );
  return (
    <AddedServicesContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/solutions" element={<Listings />} />
          <Route path="/walkthrough" element={<Walkthrough />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/ending" element={<Ending />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </AddedServicesContext.Provider>
  );
}

export default App;
