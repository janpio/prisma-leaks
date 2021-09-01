const prisma = require("../src");

it("might leak", async () => {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      email: "test",
    },
  });
  expect(user).toBeTruthy();
  prisma.logMemory()
});
