const prisma = require("../src/index");

afterAll(async () => {
  await prisma.$disconnect();
});

it("might leak", async () => {
  await prisma.$connect();
  expect(true).toBeTruthy();
});
