module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.ts",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.ts",
  },
  testMatch: ["<rootDir>/src/**/*.test.(js|jsx|ts|tsx)"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
