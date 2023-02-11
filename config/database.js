const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
    const { host, port, database, user, password } = parse(env("PG_STRING"));
    const ssl = host == "localhost" ? false : { rejectUnauthorized: false };
    return {
        connection: {
            client: "postgres",
            connection: {
                host,
                port,
                database,
                user,
                password,
                ssl,
            },
            debug: false,
        },
        pool: { min: 0, max: 4},
    };
};
