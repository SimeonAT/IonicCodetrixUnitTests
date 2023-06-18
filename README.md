# Ionic Codetrix Unit Tests Demo

A short demonstration on how unit tests can be written for code that uses the [Codetrix's Capacitor GoogleAuth Plugin](https://github.com/CodetrixStudio/CapacitorGoogleAuth) for implementing Google OAuth with Firebase.

This project is written in React and Typescript. All source files reside in the `unit-tests-demo` directory.

## Installation

After cloning this repository, run:

```bash
npm run installs
```

to install all dependencies.

You can then run

```bash
npm run test.unit.silent
```

to run the unit tests.

If you would like to see the error messages that appear when running the tests, you can run
```bash
npm run test.unit
```

### Running in your Browser

In order to run this web application in your browser, you will first need to add in the API keys for your Firebase project.

You will need to add your Firebase API keys and secrets in all files in `/unit-tests/demo/src/env`, and in `capacitor.config.ts`.

After doing so, you can now run
```bash
npm run dev
```
to run the project at `localhost:5173`.
