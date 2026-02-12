import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing at build time");
}
export default defineConfig({
  datasource: {
    url: env('DATABASE_URL'),
    // shadowDatabaseUrl: env('SHADOW_DATABASE_URL')
  },
})