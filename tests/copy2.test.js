const prisma = require("../src");

afterAll(async () => {
  await prisma.$disconnect();
});

it("might leak", async () => {
  await prisma.users.deleteMany();
  const user = await prisma.users.create({
    data: {
      email: "test",
      projects_limit: 99,
    },
  });
  expect(user).toBeTruthy();
});
