import { PGAdapter } from "@/infra/database";

export default async function status(_, response) {
  const connection = new PGAdapter();
  const versionResult = await connection.query("SHOW server_version;");
  const databaseVersion = versionResult[0].server_version;
  const updatedAt = new Date().toISOString();
  return response.status(200).json({
    updatedAt,
    dependencies: { database: { version: databaseVersion } },
  });
}
