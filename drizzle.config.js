// drizzle.config.js

/** @type { import("drizzle-kit").Config } */
module.exports = {
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./migrations-folder",
  dbCredentials: {
    url: "postgresql://neondb_owner:FtL4whiaZjV5@ep-raspy-sea-a5839diq.us-east-2.aws.neon.tech/Topideas?sslmode=require",
  }
};
