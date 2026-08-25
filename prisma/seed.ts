import { db } from "../db/client";

async function main() {
  await db.alert.create({
    data: {
      title: "Test Alert",
      description: "Sample general safety alert."
    }
  });

  await db.report.create({
    data: {
      title: "Test Report",
      description: "Sample incident report."
    }
  });

  await db.fentanylAlert.create({
    data: {
      location: "Downtown",
      description: "Possible fentanyl exposure."
    }
  });

  console.log("Seed complete.");
}

main();
