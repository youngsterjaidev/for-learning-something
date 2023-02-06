class User {
  constructor(username, balance) {
    this.username = username || "test"
    this.balance = balance || 0
  }
  
  login = (passcode) => {
    if(!passcode) throw new Error("Passcode is missing!")
    
    if(passcode !== "random") {
      console.log("Unauthorized user!")
      return {
        status: "FAIL",
        message: "Unauthorized users!"
      }
    }

    console.log("User login successfully :)")
    this.isLogin = true
    return {
      status: "OK",
      message: "User login successfully :)"
    }
  }

  addBalance = (amount) => {
    this.balance += amount
    return this.balance
  }

  subtBalance = (amount) => {

    if(this.balance >= 0) return this.balance

    this.balance -= amount
    return this.balance
  }

}
  
module.exports = User