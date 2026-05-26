import React from 'react'
import HappyClient from "../Pages/Navbar/HappyClient";
import Choice from "../Pages/Navbar/Choice";
import Summary from "../Pages/Navbar/Summary";
import Features from "../Features/Features";
import Services from "../Services/Services";
import Marque from "../Services/Marque";
import Goal from "../Pages/Goal";
import Langauge from "../Pages/Langauge";
import Dna from "../DNA/Dna";
import TeamExcilent from "../Pages/TeamExcilent";
import Contact from "../Pages/Contact";


const Container = () => {
  return (
    <div>
      <HappyClient />
      <Choice />
      <Summary />
      <Features />
      <Services />
      <Marque />
      <Goal />
      <Dna />
      <Langauge />
      <TeamExcilent />
      <Contact />
      
    </div>
  );
}

export default Container
