// Briefing site.
import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

class Briefing extends React.Component {
  render() {
    return (
      <motion.div
        className="container"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <h1 class="jumbotron-heading">Introduction</h1>
        <p>
          This mission intends to provide you a place to fly where you get
          meaningful things to do with moderate flying distances and balance in
          mind, and to make things better, this website should help you get an
          overview over the current situation in the battlefield with its
          livemap and scoreboard.
          <br></br>
          <br></br>
          <b>
            Everything you do is being saved, the Kaukasus Offensive forgets
            nothing.{" "}
          </b>
          <br></br>
          <br></br>
          Objectives can be occupied or neutral. Whenever a side has units at an
          objective, the objective changes from white to the coalitions color,
          once all units are destroyed it turns neutral again. In order to
          occupy an objective you have to send a helicopter to deploy vehicles
          of your choice.
          <br></br>
          <br></br>
          FARPS and Airodromes can also be open or closed, FARPS can also be
          closed while being occupied. In order to open a FARP you need to bring
          a complete set of groundcrew units to the FARP (ATC, Fuel and Ammo).
          You can also do this by buying a groundcrew Convoy
          <br></br>
          <br></br>
          Helicopters can also deploy airdefenses and other ground units in the
          field, however the amount of wild-SAMs you can place depends on how
          many antennas your team manages to occupy. They will self destruct
          after 48 hours.
          <br></br>
          <br></br>
          If a Pilot ejects, your ejected Pilot will stay patiently in place,
          until a Helicopter comes and picks him up! CSAR Missions are not only
          fun, because you never know where the Pilos come down, they also
          reward you with Points which you can use to send Convoys to friendly
          objectives! Capturing an enemy Pilot will bring twice the points!
          <br></br>
          <br></br>
          Most of the things you can do will earn you money. If you hit a
          target, if you drop cargo, if you rescue piltos, you will even receive
          100$ per flight-minute, but only if you manage to land safely. You can
          use your cash to call for convoys to reinforce your objectives or
          attack enemy objectives. You can only call convoys if you are at the
          Objective you want to call the convoy to.
          <br></br>
          <br></br>
          Absolutely everything you do will get you a score. Emergencylandings,
          weapon usage, Pilots rescued, kills of course! You will even be
          rewarded a kill if a SAM you deployed killed an enemy player!
          <br></br>
          <br></br>
          As a Striker you don't need to be worried to face a dozen 4th-gen
          fighterjets, every category (Fighter/Attack/Transport) is limited to
          only 4 slots per side. This should help finding small teams and
          working together efficiently.
          <br></br>
          <br></br>
          In order to make everythign easier, we enforce the use of Ciribobs
          fantastic Simple Radio to communicate! Battle space is 251 Mhz,
          everyone should at least listen to this radio channel! You can also
          use any secondary frequency to communicate with your wingman. If
          you're having trouble setting it up please check this space.
        </p>
        <h2 class="jumbotron-heading">
          Getting Started (read this if you are new!)
        </h2>
        <p>
          Welcome to The Kaukasus Offensive!
          <br></br>
          <br></br>
          To get started, you will first need to choose a slot. You likely
          already realized that some slots are blocked, and sometimes you cannot
          get a slot at all. Let us explain how to get an easy overview of
          what's available.
          <br></br>
          <br></br>
          <h2 className="jumbotron-heading">
            "How do I find a slot I can spawn in?"
          </h2>
          First of all check the Map to see which Objectives are owned by your
          coalition. That's the straightforward part. FARPs are a little bit
          more complicated than airfields, because the can be open or closed,
          even if they are occupied by your coalition (occupied = at least one
          unit regardless of unit-type of either coalition is in the objectives
          zone).
          <br></br>
          <br></br>
          You can only spawn at FARPs and Airfields that are open and occupied
          by the coalition of your choice! To open a FARP you need to bring all
          3 types of Groundcrew (ATC/Fuel/Ammo) to the FARP. It will stay open
          until all Groundcrew is destroyed.
          <br></br>
          <br></br>
          One last thing about slots. In order to prevent a 15vs15
          Fighters-Scenario, which you are likely already used to, we introduced
          quite strict slot-balancing. This means, you only have 4 Fighters, 4
          Strikers and 4 Helicopters per side available. This is to make sure if
          you decide to fly A10 or UH-1, that you are not facing 10 F15s or
          Flankers on the enemy side. Teams are kept balance, to make it easier
          to work together. This way, a Team of 2 fighters and 2 strikers that
          work well as a team can be a lot more effective than 4 fighters who do
          not care about what each other is doing.
          <br></br>
          <br></br>
          To find out how many slots of your category of choice are available,
          have a look at the Slotlist below the map!
          <br></br>
          <br></br>
          <h2 className="jumbotron-heading">
            "Alright, got I got a slot, what's next?"
          </h2>
          The most important thing you should know about the Kaukasus-Offensive
          is ground-units do not respawn! Once you kill a SAM it is gone
          forever! All units are either brought to their location by a
          Helicopter, or they were deployed with a convoy by a helicopter Pilot
          who collected enough points by either delivering crates or rescuing
          pilots.
          <br></br>
          <br></br>
          Absolutely everything you do will get you a score. Emergencylandings,
          weapon usage, Pilots rescued, kills of course! You will even be
          rewarded a kill if a SAM you deployed killed an enemy player!
          <br></br>
          <br></br>
          <h2 className="jumbotron-heading">
            "Gotcha, I'm a Fighter Pilot, whats my task?"
          </h2>
          Your job is to gain and hold airsuperiority wherever it is needed.
          Communicate with your Team to find out where they are operating. If
          you are the only one, check which objectives belong to your coalition,
          and make sure there is no striker coming in to destroy them. If you
          have a bunch of strikers, as them what they are attacking, and make
          sure they are not being intercepted by enemy CAP. Just set off a
          radio-call on 251.00 AM on SRS, every Striker-Pilot is happy to be
          escorted by a Fighterjet ;) Also don't forget about helicopters, most
          of them don't have an RWR, they will also be happy to know you protect
          them.
          <br></br>
          <br></br>
          Absolutely everything you do will get you a score. Emergencylandings,
          weapon usage, Pilots rescued, kills of course! You will even be
          rewarded a kill if a SAM you deployed killed an enemy player!
          <br></br>
          <br></br>
          <h2 className="jumbotron-heading">
            "I'd like to destroy stuff, CAS, SEAD or sneaky missions in
            Attack-Choppers!"
          </h2>
          Your job is to gain and hold airsuperiority wherever it is needed.
          Communicate with your Team to find out where they are operating. If
          you are the only one, check which objectives belong to your coalition,
          and make sure there is no striker coming in to destroy them. If you
          have a bunch of strikers, as them what they are attacking, and make
          sure they are not being intercepted by enemy CAP. Just set off a
          radio-call on 251.00 AM on SRS, every Striker-Pilot is happy to be
          escorted by a Fighterjet ;) Also don't forget about helicopters, most
          of them don't have an RWR, they will also be happy to know you protect
          them.
          <br></br>
          <br></br>
          Welcome Striker! Your job is the opposite of Choppers, you move the
          enemy frontline back to where it came from. Choose your targets
          wisely! It does not make sense to do a deepstrike to the airfields, if
          the enemy owns all FARPs! In order to move along, the FARPs are vital
          to get choppers going effectively. Make sure you takeout the antennas
          as well, if the enemy has deployed SAMs in the Wild, and you destroy
          their antennas, the oldest deployed SAM will be destroyed, assuming
          the Enemy has used all available SAM-Systems.
          <br></br>
          <br></br>
          If you fly SEAD, be extra extra cautious to make sure the
          radar-emitter you are attacking is Enemy! Your team will not like it
          if you destroy their sams. If you are in doubt, set off a Radio-Call
          and ask for help identifying your target! If you are lucky you will
          even have GCI that can easily identify friend or foe for you!
          <br></br>
          <br></br>
          <h2 className="jumbotron-heading">
            "I'm a rotorhead by heart. What can I do in here?"
          </h2>
          We got you covered, as I'm sure you gathered, helicopters are the
          heart of the Kaukasus Offensive. Without you, nothing is going to
          happen, and your Team is guaranteed to loose! You can select from a
          multitude of tasks:
          <br></br>
          <br></br>
          <ul>
            <li>Capture Neutral Objectives</li>
            <li>Open FARPs</li>
            <li>Supply and reinforce Objectives</li>
            <li>Rescue Ejected Pilots</li>
            <li>Set up JTACs to get a buddy-laser for F5s and M2000s</li>
            <li>Set up EWR for better overview of your GCIs</li>
          </ul>
          All those tasks will earn you points, which you can trade for Convoys
          to your current location (not all Objectives have convoys available)
          <br></br>
          <br></br>
          We would suggest you to focus on getting and keeping FARPs! Once you
          fortified the FARP of your choice to not loose it quickly, you can
          focus on other objectives. If your team looses all FARPs, the game is
          pretty much over for your team. Also holding multiple FARPs greatly
          reduces flying-distances!
          <br></br>
          <br></br>
          <h2 className="jumbotron-heading">
            "I'm getting kicked for not having SRS, what is this?"
          </h2>
          SRS is a fantastic piece of Software, that connects to DCS and
          provides Voice-Radio functionality for your Aircraft! While in FC3
          Aircraft, you can use an external radio-overlay, for all other
          Aircraft SRS adds this functionality to your radio! All you need to do
          is download SRS, install it, do a quick check of the Audiofunctions
          and bind at least the "Common PTT" button to talk. Next, open DCS and
          connect to the Server (SRS should connect automatically, if not just
          enter the IP you find in the briefing), switch on your Radio, make
          sure you are tuned on 251MHz AM, and you're good to go!
        </p>
      </motion.div>
    );
  }
}

export default Briefing;
