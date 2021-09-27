const config = {
    default: {
        apiUrl: 'http://localhost:5000/api'
    }
};

const react_script_env = process.env.REACT_APP_ENV;

function getEnvironment() {
    var env;
    switch (react_script_env) {
        case 'LOCAL':
            env = 'default';
            break;
        case 'DEV':
            env = 'dev';
            break;
        case 'PROD':
            env = 'prod';
            break;
        case 'UAT':
            env = 'uat';
            break;
        default:
            env = 'default';
    }
    return env;
}

const env = getEnvironment();
export default config[env];
