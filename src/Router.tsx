import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { Contexto } from "./pages/Contexto";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { AdmLayout } from "./layouts/AdmLayout";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/contexto" element={<Contexto />} />
      </Route>

      {/* <Route path="/admin" element={<AdmLayout />}>
        <Route path="/history" element={<History />} />
      </Route> */}
    </Routes>
  );
}
