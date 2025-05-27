const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../src/app");
const User = require("../src/models/user.model");

beforeAll(async () => {
  await mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/test-db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
});

afterAll(async () => {
  await mongoose.disconnect();
});

beforeEach(async () => {
  await User.deleteMany();
});

describe("User API", () => {
  it("should return empty user list", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("should create a new user", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ name: "John Doe", email: "john@example.com" });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("John Doe");
  });
});
