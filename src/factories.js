const Factory = require("factory.ts");
const faker = require("faker");
const { randomUUID } = require("crypto");
// const { prisma } = require("./");

const customUserAttrFactory = Factory.Sync.makeFactory({
  created_at: Factory.each(() => faker.date.recent()),
  updated_at: Factory.each(() => faker.date.recent()),
  key: Factory.each(() => randomUUID()),
  value: Factory.each(() => faker.lorem.paragraph()),
});

const userStatusFactory = Factory.Sync.makeFactory({
  cached_markdown_version: faker.datatype.number(),
  emoji: faker.random.alpha(),
  message: faker.lorem.sentence(),
  message_html: faker.lorem.paragraphs(1),
});

const userFactory = Factory.Sync.makeFactory({
  email: Factory.each((i) => faker.internet.email(i.toString())),
  projects_limit: Factory.each((i) => i),
  user_custom_attributes: Factory.each(() => ({
    create: customUserAttrFactory.buildList(50),
  })),
  user_statuses: Factory.each(() => ({
    create: userStatusFactory.build(),
  })),
});

module.exports = {
  customUserAttrFactory,
  userStatusFactory,
  userFactory,
};
