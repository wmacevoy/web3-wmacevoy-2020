const functions = require('firebase-functions');
const config = functions.config();

module.exports = {
    apiKey: config.envs.firebase_api_key,
    authDomain: config.envs.firebase_auth_domain,
    databaseURL: config.envs.firebase_config_database_url,
    projectId: config.envs.firebase_project_id,
    storageBucket: config.envs.firebase_storage_bucket,
    messagingSenderId: config.envs.firebase_sender_id
};

