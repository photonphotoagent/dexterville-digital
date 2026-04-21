"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadScreen from "@/components/LoadScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CredentialTicker from "@/components/CredentialTicker";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AmbientGlow from "@/components/AmbientGlow";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadScreen key="loadscreen" onComplete={handleComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <AmbientGlow />
        <Navigation />
        <main role="main">
          <Hero />
          <CredentialTicker />
          <Approach />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </motion.div>

      <noscript>
        <div>
          <h1>Jennifer Jordan, PMHNP-BC — Psychiatric Nurse Practitioner in Northern Virginia</h1>
          <p>
            Board-certified psychiatric mental health nurse practitioner specializing in
            pediatric and adult ADHD, mood disorders, trauma-informed care, and integrative
            medication management. Georgetown University alumna with 17+ years of clinical excellence.
          </p>
          <h2>Services</h2>
          <ul>
            <li>Pediatric and Adolescent Psychiatric Care (Ages 6-17)</li>
            <li>Adult ADHD Assessment and Strategy</li>
            <li>Integrative Medication Management</li>
            <li>Trauma-Informed Psychiatric Care</li>
            <li>Telehealth Available Statewide (Virginia)</li>
          </ul>
          <h2>Areas Served</h2>
          <p>Northern Virginia including Fairfax, Arlington, Alexandria, McLean, Reston, Tysons, Herndon, Leesburg, and Manassas.</p>
        </div>
      </noscript>
    </>
  );
}
