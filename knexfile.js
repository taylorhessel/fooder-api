module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/fooder-api'
    },

    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL + '?ssl=true',
    },

};
