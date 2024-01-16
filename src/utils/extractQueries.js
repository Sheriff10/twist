const extractQueries = (url) => {
   const urlSearchParams = new URLSearchParams(url.split("?")[1]);
   // Extract all queries as an object
   const queries = {};
   for (const [key, value] of urlSearchParams) {
      queries[key] = value;
   }
   return queries;
};

module.exports = extractQueries;
