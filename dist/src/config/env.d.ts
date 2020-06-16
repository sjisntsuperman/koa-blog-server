declare const envConfig: {
    required: string[];
    properties: {
        port: {
            type: string;
        };
        database: {
            type: string;
            required: string[];
            properties: {
                type: {
                    type: string;
                    minLength: number;
                };
                host: {
                    type: string;
                    minLength: number;
                };
                port: {
                    type: string;
                };
                username: {
                    type: string;
                    minLength: number;
                };
                password: {
                    type: string;
                    minLength: number;
                };
                database: {
                    type: string;
                    minLength: number;
                };
                charset: {
                    type: string;
                };
            };
        };
        gitToken: {
            type: string;
            minLength: number;
        };
    };
};
export = envConfig;
