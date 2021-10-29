const request = require("supertest");
const { response } = require("../api-tdd/app");
const app = require("../api-tdd/app");
const User = require("../models/User");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const should = chai.should();

// describe("Users API Tests", () => {
//   it("GET /api/users/register/ returns an array of users", async () => {
//     const response = await request(server).get("/api/users/register/");
//     expect(response.status).to.equal(200);
//     expect(response.body).to.be.an.instanceof(Array);
//   });
// });

describe("Users Register API Tests", () => {
  const user = {
    name: "Marvin Nguyen",
    email: "nguyenmao.2912@gmail.com",
    username: "maonguyen89",
    address: "VietNam",
    password: "123456",
  };

  const postValidUser = () => {
    return request(app).post("/api/users/register").send(user);
  };

  it("return 200 OK when signup request is valid", (done) => {
    postValidUser().then(() => {
      expect(200);
      done();
    });
  });

  it("return success messsage when signup request is valid", (done) => {
    return request(app)
      .post("/api/users/register")
      .send(user)
      .then((response) => {
        expect(response.body.message).toBe("User created");
        done();
      });
  });

  it("saves the user to database", (done) => {
    return request(app)
      .post("/api/users/register")
      .send(user)
      .then(() => {
        // query user table
        User.findAll().then((userList) => {
          expect(userList.length).toBe(1);
          done();
        });
      });
  });

  // it("POST /Register --> array users", () => {
  //   return request(app)
  //     .post("/api/users/register")
  //     .send({
  //       name: 'Marvin Nguyen',
  //       email: 'nguyenmao.2912@gmail.com',
  //       username: 'maonguyen89',
  //       address: 'VietNam',
  //       password: '22334455',
  //     })
  //     .expect(200)
  //     .then((response) => {
  //       expect(response.body).toEqual(
  //         expect.arrayContaining([
  //           expect.objectContaining({
  //             name: 'Marvin Nguyen',
  //             email: 'nguyenmao.2912@gmail.com',
  //             username: 'maonguyen89',
  //             address: 'VietNam',
  //             password: '22334455',
  //           }),
  //         ])
  //       );
  //     });
  // });

  //   it("GET /todos/id --> specific todo by ID", () => {
  //     return request(app)
  //       .get('todos/1')
  //       .expect(200)
  //       .then((response) => {
  //         expect(response.body).toEqual(
  //           expect.objectContaining({
  //             name: expect.any(String),
  //             completed: expect.any(Boolean),
  //           })
  //         );
  //       });
  //   });

  //   it("GET /todos/id --> 404 if not found", () => {
  //     return request(app).get("/todos/999999").expect(404);
  //   });

  //   it("POST /todos --> created todo", () => {
  //     return request(app)
  //       .post('/api/users/register')
  //       .send({
  //         name: 'Marvin Nguyen',
  //         email: 'nguyenmao.2912@gmail.com',
  //         username: 'maonguyen89',
  //         address: 'VietNam',
  //         password: '22334455',
  //       })
  //       .expect(201)
  //       .then((response) => {
  //         expect(response.body).toEqual(
  //           expect.objectContaining({
  //             name: 'do dishes',
  //           })
  //         );
  //       });
  //   });

  //   it("GET /todos --> validates request body", () => {
  //       return request(app).post('/todos').send({ name: 123 }).expect(422);
  //   });
});

// Login: Test
describe("/POST user login", () => {
  const user = {
    email: "nguyenmao.2912@gmail.com",
    password: "123456",
  };

  const postValidUserLogin = () => {
    return request(app).post("/api/users/login").send(user);
  };

  it("it should login the user", (done) => {
    postValidUserLogin().then(() => {
      expect(200);
      done();
    });
  });
});

// logout: Test
describe("/POST user logout", () => {
  const user = {
    email: "nguyenmao.2912@gmail.com",
    password: "123456",
  };

  const postValidUserLogin = () => {
    return request(app).post("/api/users/logout").send(user);
  };

  it("it should login the user", (done) => {
    postValidUserLogin().then(() => {
      expect(200);
      done();
    });
  });
});

/**
* GET
* new-contact/:username
*/
describe("/GET user /new-contact/username", () => {
  
    const getUserContact = () => {
      return request(app).get("/api/users/new-contact/maonguyen").send(user);
    };

    it("it should login the user", (done) => {
        getUserContact().then(() => {
        expect(200);
        done();
      });
    });
  });

