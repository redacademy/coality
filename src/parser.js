const parseData = (data) => {
  if (data.length <= 1) return;
  return JSON.parse(data).results;
}

const generateErrorLocation = (fileData) => {
  let location = `${fileData.file} Line:${fileData.start.line}`;
  if (fileData.start.column) location += ` Column:${fileData.start.column}`;
  return location;
};

module.exports = {
  parseData,
  generateErrorLocation
}
