const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
    const { host, port, database, user, password } = parse(env("PG_STRING"));
    return {
        connection: {
            client: "postgres",
            connection: {
                host,
                port,
                database,
                user,
                password,
                ssl: {
                    rejectUnauthorized: false,
                },
            },
            debug: false,
        },
    };
};
