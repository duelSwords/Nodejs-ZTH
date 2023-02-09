const TIMEOUT = 500;

function decrypt(data) {
  return `decrypted data ${data}`;
}

function read() {
  const decypting = decrypt('mumbling');
  console.log(decypting);
}

//Can directly export individual methods
// -----------------------------------------------
// exports.read2 = function read2() {
//     const decypting = decrypt('mumbling');
//     console.log(decypting);
//   }

// Can module.export directly if only one, in the require file can call the funtion directly
// const read3 = require('./response')
// read3()
// ---------------------------------------------
// module.exports = function read3() {
//   const decypting = decrypt('mumbling');
//   console.log(decypting);
// };

module.exports = {
  read,
  TIMEOUT,
};
