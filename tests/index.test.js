const { User } = require("../src");

const sum = (a, b) => {
  return a + b
}

describe("Writing down my first test ", () => {
  it("add the two number", () => {
    expect(sum(2, 3)).toBe(5)
  })
})

describe("Make a Object", () => {
  let user

  beforeEach(() => {
    user = new User("test", 0)
  })

  it("Creates an oject", () => {
    expect(user.username).toBe("test")
    expect(user.balance).toBe(0)
  })

  it("check if there is a login button method", () => {
    expect(user.login).toBeInstanceOf(Function)
  })

  it("Login in the User Account", () => {
    expect(user.login("random")).toMatchObject({
      status: "OK",
      message: "User login successfully :)"
    })
    expect(user.isLogin).toBe(true)
  })

  it("Increase the balance of the User", () => {
    expect(user.addBalance(5)).toEqual(5)
  })

  it("decrease the balance of the User", () => {
    expect(user.subtBalance(5)).toBeLessThanOrEqual(0)
  })

  it("check if the balance is in negative", () => {
    expect(user.subtBalance(5)).toEqual(0)
  })

  it.todo("check the login is working or not")
})