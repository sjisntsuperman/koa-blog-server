"use strict";
const validateRules = {
    required: [
        'port',
        'database',
        'gitToken'
    ],
    properties: {
        port: {
            type: 'number'
        },
        database: {
            type: 'object',
            required: [
                'type',
                'host',
                'port',
                'username',
                'password',
                'database'
            ],
            properties: {
                type: {
                    type: 'string',
                    minLength: 1
                },
                host: {
                    type: 'string',
                    minLength: 1
                },
                port: {
                    type: 'number',
                },
                username: {
                    type: 'string',
                    minLength: 1
                },
                password: {
                    type: 'string',
                    minLength: 1
                },
                database: {
                    type: 'string',
                    minLength: 1
                },
                charset: {
                    type: 'string'
                }
            }
        },
        gitToken: {
            type: 'string',
            minLength: 1
        }
    }
};
const envConfig = validateRules;
module.exports = envConfig;
