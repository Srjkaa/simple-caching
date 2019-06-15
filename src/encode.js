
module.exports.encode = (objectToEncode, characterEncoding = 'utf8') => (
  Buffer.from(objectToEncode).toString(characterEncoding)
);
