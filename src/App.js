import ProjectLanding from "./components/ProjectLanding/ProjectLanding.js";
import OurUniqueness from "./components/OurUniqueness/OurUniqueness.js";
import ProductsShoppingPage from "./components/ProductsShoppingPage/ProductsShoppingPage.js";
import TrackingMoodSection from "./components/TrackingMoodSection/TrackingMoodSection.js";
import TrackingPeriodSection from "./components/TrackingPeriodSection/TrackingPeriodSection.js"
import ConsultingSection from "./components/ConsultingSection/ConsultingSection.js"
import PersonalizedPeriodKitSection from "./components/PersonalizedPeriodKitSection/PersonalizedPeriodKitSection.js"

import "./App.css";

function App() {
  return (
    <div className="App">
      <ProjectLanding />
      <OurUniqueness />
      <ProductsShoppingPage />
      <TrackingMoodSection />
      <TrackingPeriodSection />
      <ConsultingSection />
      <PersonalizedPeriodKitSection />
    </div>
  );
}

export default App;
