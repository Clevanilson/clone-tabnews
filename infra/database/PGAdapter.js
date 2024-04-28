import { Client } from "pg";

export class PGAdapter {
  async query(statement, params) {
    const client = new Client({
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      database: process.env.POSTGRES_DATABASE,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    });
    try {
      await client.connect();
      const result = await client.query(statement, params);
      return result.rows;
    } catch (e) {
      console.error(e.message);
    } finally {
      client.end();
    }
  }
}
