test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const body = await response.json();
  expect(response.status).toBe(200);
  expect(body).toEqual({
    updatedAt: new Date(body.updatedAt).toISOString(),
    dependencies: {
      database: {
        version: "16.0",
        maxConnections: 100,
      },
    },
  });
});
