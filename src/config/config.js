import dotenv from 'dotenv';
dotenv.config()

const env = process.env.NODE_ENV || 'development';

const development = {
    REACT_APP_SPACE_BN_TOKEN: process.env.REACT_APP_SPACE_BN_TOKEN,
    REACT_APP_SECRET_USERNAME: process.env.REACT_APP_SECRET_USERNAME,
    REACT_APP_SECRET_PASSWORD:process.env.REACT_APP_SECRET_PASSWORD,
};
const test = {
    REACT_APP_SPACE_BN_TOKEN: process.env.REACT_APP_SPACE_BN_TOKEN,
    REACT_APP_SECRET_USERNAME: process.env.REACT_APP_SECRET_USERNAME,
    REACT_APP_SECRET_PASSWORD:process.env.REACT_APP_SECRET_PASSWORD,
};
const staging = {
    REACT_APP_SPACE_BN_TOKEN: process.env.REACT_APP_SPACE_BN_TOKEN,
    REACT_APP_SECRET_USERNAME: process.env.REACT_APP_SECRET_USERNAME,
    REACT_APP_SECRET_PASSWORD:process.env.REACT_APP_SECRET_PASSWORD,
};
const production = {
    REACT_APP_SPACE_BN_TOKEN: process.env.REACT_APP_SPACE_BN_TOKEN,
    REACT_APP_SECRET_USERNAME: process.env.REACT_APP_SECRET_USERNAME,
    REACT_APP_SECRET_PASSWORD:process.env.REACT_APP_SECRET_PASSWORD,
};


const config = {
    development,
    test,
    staging,
    production
};

export default config[env]