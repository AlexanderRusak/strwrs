export const testEnvironment = 'jsdom';
export const testRegex = '\\.test\\.(js|jsx|ts|tsx)$';
export const roots = ['<rootDir>/src'];
export const transform = {
  '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
};
export const collectCoverage = true;
export const coverageDirectory = 'coverage';
export const coverageReporters = ['lcov', 'text', 'html'];
