const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = prisma;

prisma.logMemory = function() {
  let used = process.memoryUsage()
  let memory = ""
  for (let key in used) {
    memory = memory + `${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB  |  `
  }

  console.log(memory)
}