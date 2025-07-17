const { getFilteredEntities } = require("../services/entity.service");

describe("verificaion de propiedades de cada entidad", () => {
  test("cada entidad tiene las propiedades requeridas", async () => {
    const entities = await getFilteredEntities(2, 3);

    for (const entity of entities) {
      expect(entity).toHaveProperty("entityId");
      expect(entity).toHaveProperty("name");
      expect(entity).toHaveProperty("identificationNumber");
      expect(entity).toHaveProperty("expirationDate");
      expect(entity).toHaveProperty("contactName");
      expect(entity).toHaveProperty("contactMail");
    }
  });
});
