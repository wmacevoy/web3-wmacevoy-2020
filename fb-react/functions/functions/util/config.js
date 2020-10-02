const functions = require('firebase-functions');
const config = functions.config();

module.exports = {
    region: config.envs.firebase_region,
    projectId: config.envs.firebase_project_id,
    apiKey: config.envs.firebase_api_key,
    authDomain: config.envs.firebase_auth_domain,
    databaseURL: config.envs.firebase_database_url,
    funcionsURL: config.envs.firebase_functions_url,
    storageBucket: config.envs.firebase_storage_bucket,
    messagingSenderId: config.envs.firebase_sender_id
};

