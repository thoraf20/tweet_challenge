// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: {
      database: "tweet_challenge",
      user: "postgres",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/db/igrations"
    },
    seeds: {
      directory: "./src/db/seeds"
    },
  },

  test: {
    client: "pg",
    connection: {
      database: "tweet_challenge",
      user: "postgres",
      password: "root"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/db/igrations"
    },
    seeds: {
      directory: "./src/db/seeds"

    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
