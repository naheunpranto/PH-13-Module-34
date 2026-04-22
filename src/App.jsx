import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PircingOptions/PricingOptions";
import ResultsChart from "./components/ResultsChart/ResultsChart";

const pricingPromise = fetch("pricingData.json").then(res => res.json());


function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise = {pricingPromise}></PricingOptions>
        </Suspense>


        <ResultsChart></ResultsChart>
      </main>
    </>
  );
}

export default App;
