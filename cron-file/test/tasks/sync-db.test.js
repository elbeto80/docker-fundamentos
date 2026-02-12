const { SyncDB } = require("../../tasks/sync-db");

describe("Prueba de la función SyncDB", () => {
  test("Debe devolver 2", () => {
    SyncDB();
    const result = SyncDB();
    expect(result).toBe(2);
  });
});
