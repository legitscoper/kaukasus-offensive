//File which is used to render the animated routes

import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion/dist/framer-motion";

import Index from "../routes/index";
import Briefing from "../routes/briefing";

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/briefing" element={<Briefing />} />
        <Route path="/big_map" element={<Index />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
