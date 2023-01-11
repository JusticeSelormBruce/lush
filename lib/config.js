/**
 * Base configuration file
 */

// Dependencies

// config container

let config = {};

config.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "staging",
};

config.prod = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: "prod",
};

//determine which  environment is used  and use that else default to staging

var chosenEnv =
  typeof process.env.NODE_ENV !== "undefined" &&
  typeof process.env.NODE_ENV == "string"
    ? process.env.NODE_ENV.toLocaleLowerCase()
    : "";
var selectedEnv =
  typeof config[chosenEnv] == "object" ? config[chosenEnv] : config.staging;

module.exports = selectedEnv;