const crypto = require("crypto")

exports.generatePassword = function(length) {
    let password = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomBytes = crypto.randomBytes(length)
    const randomArr = Array.from(randomBytes)
    randomArr.forEach(num => {
      password += possible[num % possible.length]
    })
    return password;
}
