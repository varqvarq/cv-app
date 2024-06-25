import type { Config } from 'jest';

const config: Config = {
	clearMocks: true,
	// collectCoverage: true,
	coverageDirectory: 'coverage',
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(scss|sass|css)$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: ['./src/setupTests.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	modulePaths: ['<rootDir>'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	transformIgnorePatterns: ['/node_modules/'],
	collectCoverageFrom: ['./src/**/*.tsx'],
	coverageThreshold: {
		global: {
			branches: 40,
			functions: 40,
			lines: 40,
			statements: 40,
		},
	},
};

export default config;
