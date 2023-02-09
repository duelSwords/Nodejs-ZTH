const TIMEOUT = 500;

function decrypt(data) {
  return `decrypted data ${data}`;
}

function read() {
  const decypting = decrypt('mumbling');
  console.log(decypting);
}

export { read, TIMEOUT };
