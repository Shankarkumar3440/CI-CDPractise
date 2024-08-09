import type { Config } from "jest";

 const baseConfig = "<rootDir>/src/app"
 const baseDirConfig = "<rootDir>/src/test"  


const config:Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseConfig}/**/*.{js,ts}`
    ],
    testMatch: [
       `${baseDirConfig}/**/*.{js,ts}`
    ]
}

export default config