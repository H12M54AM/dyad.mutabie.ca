import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ConsentBanner from "./components/ConsentBanner";
import AnalyticsWrapper from "./components/AnalyticsWrapper";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <AnalyticsWrapper />
    <ConsentBanner />
  </BrowserRouter>
);

export default App;