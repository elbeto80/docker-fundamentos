const cron = require("node-cron");
const { SyncDB } = require("./tasks/sync-db");

cron.schedule("1-59/5 * * * * *", () => {
  SyncDB();
});

console.log("Starting cron job");
