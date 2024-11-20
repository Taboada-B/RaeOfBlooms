import { Outlet } from "react-router-dom";

import Banner from "./components/banner";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Banner />
      <main className="pages">
        <Outlet />
      </main>
      

      <Footer />
    </>
  );
}

export default App;
