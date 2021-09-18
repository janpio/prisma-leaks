import * as Factory from "factory.ts";
import faker from "faker";
import { randomUUID } from "crypto";
import { Prisma } from ".prisma/client";
import { prisma } from "./";

export const customUserAttrFactory =
  Factory.Sync.makeFactory<Prisma.user_custom_attributesCreateWithoutUsersInput>(
    {
      created_at: Factory.each(() => faker.date.recent()),
      updated_at: Factory.each(() => faker.date.recent()),
      key: Factory.each(() => randomUUID()),
      value: Factory.each(() => faker.lorem.paragraph()),
    }
  );

export const userStatusFactory =
  Factory.Sync.makeFactory<Prisma.user_statusesCreateInput>({
    cached_markdown_version: faker.datatype.number(),
    emoji: faker.random.alpha(),
    message: faker.lorem.sentence(),
    message_html: faker.lorem.paragraphs(1),
  });

export const userFactory = Factory.Sync.makeFactory<Prisma.usersCreateInput>({
  email: Factory.each((i) => faker.internet.email(i.toString(), randomUUID())),
  projects_limit: Factory.each((i) => i),
  user_custom_attributes: Factory.each(() => ({
    create: customUserAttrFactory.buildList(50),
  })),
  user_statuses: Factory.each(() => ({
    create: userStatusFactory.build(),
  })),
});

export const seeded = {
  customUserAttr: Factory.Async.makeFactoryFromSync(
    customUserAttrFactory.builder
  ).transform(async (baseData) => {
    const { id: user_id } = await prisma.users.create({
      data: userFactory.build({ user_custom_attributes: undefined }),
    });
    return prisma.user_custom_attributes.create({
      data: { ...baseData, user_id },
    });
  }),
  userStatus: Factory.Async.makeFactoryFromSync(
    userStatusFactory.builder
  ).transform((data) => prisma.user_statuses.create({ data })),
  user: Factory.Async.makeFactoryFromSync(userFactory.builder).transform(
    (data) => prisma.users.create({ data })
  ),
};
