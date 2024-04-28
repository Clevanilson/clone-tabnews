// import { PGAdapter } from "infra/database/index.js";
// console.log(PGAdapter);

export default async function status(_, response) {
  const updatedAt = new Date().toISOString();
  return response.status(200).json({ updatedAt });
}
