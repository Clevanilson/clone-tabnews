import { PGAdapter } from "@/infra/database";

export default async function status(_, response) {
  const connection = new PGAdapter();
  const databaseVersionResult = await connection.query("SHOW server_version;");
  const databaseMaxConnectionsResult = await connection.query(
    "SHOW max_connections;"
  );
  const updatedAt = new Date().toISOString();
  return response.status(200).json({
    updatedAt,
    dependencies: {
      database: {
        version: databaseVersionResult[0].server_version,
        maxConnections: Number(databaseMaxConnectionsResult[0].max_connections),
      },
    },
  });
}
