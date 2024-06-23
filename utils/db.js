// import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-http';
// import * as schema from "./schema";

// const sql = neon(process.env.NEON_DB);
// export const db = drizzle(sql, {schema });
// import dotenv from 'dotenv';
// dotenv.config();

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema";

// console.log('NEON_DB:', process.env.NEON_DB); // Debug statement

const sql = neon( "postgresql://neondb_owner:FtL4whiaZjV5@ep-raspy-sea-a5839diq.us-east-2.aws.neon.tech/Topideas?sslmode=require");
export const db = drizzle(sql, { schema });
