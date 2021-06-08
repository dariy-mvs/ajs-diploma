import Character from "../Character";
import Swordsman from "../Characters/Swordsman";

test("new Character error", () => {
  expect(() => {
    new Character(3);
    F;
  }).toThrow("создайте конкретного персонажа");
});
test("new extends no Error", () => {
  const swordsman = new Swordsman();
  expect(swordsman).toEqual({
    attack: 40,
    defence: 10,
    type: "swordsman",
    health: 50,
    level: undefined,
  });
});
