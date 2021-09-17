const factories = require("../src/factories");
const prisma = require("../src/index");
const Factory = require("factory.ts");
const { sampleSize } = require("lodash");

const seeded = {
  customUserAttr: Factory.Async.makeFactoryFromSync(
    factories.customUserAttrFactory.builder
  ).transform((data) => prisma.user_custom_attributes.create({ data })),
  userStatus: Factory.Async.makeFactoryFromSync(
    factories.userStatusFactory.builder
  ).transform((data) => prisma.user_statuses.create({ data })),
  user: Factory.Async.makeFactoryFromSync(
    factories.userFactory.builder
  ).transform((data) => prisma.users.create({ data })),
};

afterAll(async () => {
  await prisma.$disconnect();
});

describe("users", () => {
  beforeEach(async () => {
    await prisma.users.deleteMany();
  });

  it("should be created without relations", async () => {
    const user = await seeded.user.build({
      user_custom_attributes: undefined,
      user_statuses: undefined,
    });
    expect(user).toBeTruthy();
  });

  it("should be created with relations", async () => {
    const userList = await seeded.user.buildList(50);
    const randomUserEmails = sampleSize(userList, 15).map(({ email }) => email);
    await expect(seeded.user.buildList(5)).resolves.toHaveLength(5);
    await expect(
      prisma.users.findMany({
        where: {
          email: { in: randomUserEmails },
        },
        include: {
          application_settings: true,
          ci_triggers: {
            include: {
              projects: {
                include: {
                  ci_builds: true,
                },
              },
            },
          },
          user_statuses: true,
          user_custom_attributes: true,
        },
      })
    ).resolves.toHaveLength(15);
  });

  it("should support related field updates", async () => {
    const userList = await seeded.user.buildList(500);
    const randomUserEmails = sampleSize(userList, 20).map(({ email }) => email);

    const customUserAttrKeys = (
      await prisma.user_custom_attributes.findMany({
        where: {
          users: {
            email: { notIn: randomUserEmails },
          },
        },
      })
    ).map(({ key }) => key);

    await Promise.all(
      randomUserEmails.map(async (email) => {
        return prisma.users.update({
          where: { email },
          data: {
            user_custom_attributes: {
              deleteMany: {
                key: {
                  in: customUserAttrKeys,
                },
              },
            },
          },
        });
      })
    );
  }, 10000);
});
