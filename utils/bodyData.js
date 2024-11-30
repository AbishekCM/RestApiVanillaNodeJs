const getBodyData = async (req) => {
  let body = "";
  for await (const chunk of req) {
    body += chunk.toString();
  }
  return JSON.parse(body);
};

module.exports = { getBodyData };
