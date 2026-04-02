
export class DigimonActor extends Actor {
  prepareDerivedData() {
    super.prepareDerivedData();
    const data = this.system;

    if (this.type === "digimon") {
      data.combat.attack = data.attributes.power + 10;
      data.combat.defense = data.attributes.defense + 10;
      data.combat.initiative = data.attributes.speed + 10;
    }
  }

  async rollAttack() {
    const roll = await new Roll("1d20 + @system.combat.attack", this.getRollData()).roll();
    roll.toMessage();
  }
}
