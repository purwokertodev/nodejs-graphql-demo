export default {
  Query: {
    findAll: async (parent, args, { Cat }) => {
      const cats = await Cat.find().exec();
      return cats.map(v => {
        v._id = v._id.toString();
        return v;
      });
    },
    findOne: async (parent, args, { Cat }) => {
      const cats = await Cat.find({'_id': args.id}).exec();
      return cats[0];
    },
  },
  Mutation: {
    createCat: async (parent, args,  { Cat }) => {
      const kitty = await new Cat(args).save();
      kitty._id = kitty._id.toString();
      return kitty;
    },
  },
};
