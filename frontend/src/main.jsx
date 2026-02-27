import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import "./styles/global.css";
import Homepage from "./pages/Homepage.jsx";
import FruitsEtLegumes from "./pages/FruitsEtLegumes.jsx";
import MaterielEtMaintenance from "./pages/MaterielEtMaintenance.jsx";
import AchatsEtGraines from "./pages/AchatsEtGraines.jsx";
import Planning from "./pages/PlanningEtCalendrier.jsx";
import PlanDuPotager from "./pages/PlanPotager.jsx";
import JournalDuJardinage from "./pages/journalDeJardinnage.jsx";
import RessourcesEtConseils from "./pages/RessourcesEtConseils.jsx";
import StatistiquesEtAnalyse from "./pages/StatistiquesEtAnalyse.jsx";
import PageIntrouvable from "./pages/PageIntrouvable.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>           
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/fruits-et-legumes" element={<FruitsEtLegumes />} />
        <Route path="/materiel-et-maintenance" element={<MaterielEtMaintenance />} />
        <Route path="/achats-et-graines" element={<AchatsEtGraines />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/plan-du-potager" element={<PlanDuPotager />} />
        <Route path="/journal-du-jardinage" element={<JournalDuJardinage />} />
        <Route path="/ressources-et-conseils" element={<RessourcesEtConseils />} />
        <Route path="/statistiques-et-analyse" element={<StatistiquesEtAnalyse />} />
        <Route path="*" element={<PageIntrouvable />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
