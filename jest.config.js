"use strict";

module.exports = {
  displayName: "test",
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: false,
  collectCoverage: false,
  silent: true,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
