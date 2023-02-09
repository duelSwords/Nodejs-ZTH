const TIMEOUT = 500;

function decrypt(data) {
  return `decrypted data ${data}`;
}

function read() {
  const decypting = decrypt('mumbling');
  console.log(decypting);
}

module.exports = {
  read,
  TIMEOUT,
};
