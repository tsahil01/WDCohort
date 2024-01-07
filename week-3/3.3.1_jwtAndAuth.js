const jwt = require("jsonwebtoken");
const secret = "2323232323"; // only backend has this

// Generate==>

const value = {
  name: "sahil",
  accNo: 12334354535,
};

const token = jwt.sign(value, secret);
// this token has been generated using secret, and hence this token can only be verifide using this secret

console.log(token) // op => "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FoaWwiLCJhY2NObyI6MTIzMzQzNTQ1MzUsImlhdCI6MTcwNDYzNDUzMX0.urWnnM5_ZzhlaA_ncTdCbnaG4vfllHBfYuQMmTfuSz4"


// Decoding==>>
// To decode (same as going to jwt.io)
const decode = jwt.decode(token)
// anyone can decode or see your value using the decoding the token using https://jwt.io/ 
// It is same as Person A says to person B that he can see person B cheque book and its sign.
// But person A doesnot know how the bank verifies the cheque. So he can get stuck.
// This the same as the 'secret' Only the backend knows the secret of verifying the token.


// Suppose I create a token using jwt(using my own secret) and my friend goes to jwt.io and see the details on that token.
// Now if he tries to verify my token using backend jwt with any other key(secret) the backend would not verify it and will give error.



// Verify ==>
const verifiedData = jwt.verify(token, secret)
console.log(verifiedData)



