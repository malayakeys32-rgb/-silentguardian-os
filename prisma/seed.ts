import { prisma } from "../db/client";

async function main() {
  await prisma.alert.create({
    data: {
      title: "Test Alert",
      description: "Sample general safety alert."
    }
  });

  await prisma.report.create({
    data: {
      title: "Test Report",
      description: "Sample incident report."
    }
  });

  await prisma.fentanylAlert.create({
    data: {
      location: "Downtown",
      description: "Possible fentanyl exposure."
    }
  });

  console.log("Seed complete.");
}

main();
