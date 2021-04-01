export class AlmanaxService {
  public getAlmanaxBonus(dateMili: number): string {
    const endOfLastMonthMili = Date.parse("2021-03-31");
    const diff = Math.floor(dateMili - endOfLastMonthMili) / 1000 / 3600 / 24;
    let bonus: string = "";
    switch (diff % 5) {
      case 0:
        bonus = "+40 Prospecting";
        break;
      case 1:
        bonus = "+20% XP & Speed Craft";
        break;
      case 2:
        bonus = "+30% XP Harvest & Planting";
        break;
      case 3:
        bonus = "+20% Quantity of Harvest & +20% Chance of Planting";
        break;
      case 4:
        bonus = "+40 Wisdom";
        break;
    }
    return bonus;
  }
}
