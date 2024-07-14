import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  jwt: {
    secret: process.env.JWT_SECRET,
    accessExpiration: "1d",
    refreshTokenExpiration: "7d",
  },
  test_jwt: process.env.TEST_JWT,
};

export default config;
