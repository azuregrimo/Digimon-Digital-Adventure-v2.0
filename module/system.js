
import { DigimonActor } from "./actor.js";

Hooks.once("init", function () {
  console.log("Digimon System | Init");
  CONFIG.Actor.documentClass = DigimonActor;
});
