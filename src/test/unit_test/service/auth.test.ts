import sinon from "sinon";

import expect from "expect";
import { BadRequestError, NotFoundError } from "../../../error/Error";
import { describe } from "mocha";
import { login } from "../../../service/auth";
import * as UserService from "../../../service/user";
import { Roles } from "../../../constants/Roles";
import { permissions } from "../../../constants/Permissions";

import bcrypt from "bcrypt";

// test cases for auth service
describe("Auth Service", () => {
  let getUserByEmailStub: sinon.SinonStub;
  let bcryptHashStub: sinon.SinonStub;

  beforeEach(() => {
    bcryptHashStub = sinon.stub(bcrypt, "compare");
  });

  afterEach(() => {
    sinon.restore();
  });

  // test cases for login
  describe.only("login", () => {
    it("should login user", async () => {
      bcryptHashStub.returns("hashedPassword");
      getUserByEmailStub = sinon.stub(UserService, "getUserByEmail").returns({
        id: "1",
        name: "rashik",
        email: "rkoirala43@gmail.com",
        password: "hashedPassword",
        role: Roles.USER,
        permissions: permissions[Roles.USER],
      });
      const user = {
        email: "rkoirala43@gmail.com",
        password: "hashedPassword",
      };
      const result = await login(user);
      expect(result).toHaveProperty("accessToken");
      expect(result).toHaveProperty("refreshToken");
    });

    it("should throw error if user not found", () => {
      getUserByEmailStub = sinon
        .stub(UserService, "getUserByEmail")
        .returns(null);
      const user = {
        email: "fake",
        password: "fake",
      };
      expect(async () => await login(user)).rejects.toThrow(
        new BadRequestError("User not found")
      );
    });
  });
});
