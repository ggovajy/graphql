// const resolvers = {
//   Query: {
//     books: () => [
//       {
//         title: "Title 1",
//         author: "Author 1",
//       },
//       {
//         title: "Title 2",
//         author: "Author 2",
//       },
//     ],
//   },
// };
// module.exports = resolvers;
const accounts = require("../../models/person");
const resolvers = {
  Query: {
    async accounts(_, args) {
      try {
        const accounts = await accounts.find();
        console.log(accounts);
        return accounts;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
  accounts: {
    _id(_, args) {
      return _._id;
    },
    name(_, args) {
      return _.name;
    },
    async friends(_, args) {
      const friends = await accounts.find({ _id: { $in: _.friendIds } });
      return friends;
    },
  },
};
