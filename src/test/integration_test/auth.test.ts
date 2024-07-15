import request from "supertest";
import express from "express";
import authRoutes from "../../routes/auth";

import expect from "expect";

describe.only("Auth Integration Test Suite", () => {
  const app = express();

  app.use(express.json());
  app.use("/auth", authRoutes);

  // Test login API
  describe("login API Test", () => {
    it("should login user", async () => {
      const response = await request(app).post("/auth/login").send({
        email: "rkoirala43@gmail.com",
        password: "1234",
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("accessToken");
      expect(response.body).toHaveProperty("refreshToken");
    });
  });
});
