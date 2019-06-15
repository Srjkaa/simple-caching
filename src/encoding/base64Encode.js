
module.exports.base64Encode = (objectToEncode) => (
  Buffer.from(objectToEncode).toString('base64')
);
