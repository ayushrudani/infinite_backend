const { connect } = require("../mongo");

let db;

connect()
  .then((database) => {
    db = database;
  })
  .catch((error) => {
    console.error(error);
  });

// Define the Basic_DataController methods
const Basic_DataController = {
  // with parameters pageNo and pageSize and returns the paginated list of basic data and if data is not found, it returns an empty array.
  getBasicData: async (req, res) => {
    try {
      const pageNo = parseInt(req.query.pageNo) || 1;
      const pageSize = parseInt(req.query.pageSize) || 8;
      const data = await db
        .collection("Basic_Data")
        .find()
        .skip((pageNo - 1) * pageSize)
        .limit(pageSize)
        .toArray();
      if (data.length === 0) {
        res.status(200).send([]);
      } else {
        res.status(200).send(data);
      }
    } catch (error) {
      console.error("Error fetching basic data", error);
      res.status(500).send("Error fetching basic data");
    }
  },
};

module.exports = Basic_DataController;
