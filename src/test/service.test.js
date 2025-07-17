const { getFilteredEntities } = require("../services/entity.service");

describe("orden alfabetico de entidades", () => {
  test("las entidades estan organizadas de forma alfabetica", async () => {
    const entities = await getFilteredEntities(2, 5);

    const names = entities.map((e) => e.name);
    const sortedNames = [...names].sort((a, b) => a.localeCompare(b));

    expect(names).toEqual(sortedNames);
  });
});
