import mongoose from "mongoose";

interface IBatMapItem {
  name: string;
  status: string;
  rank: string;
  position: string;
  id: string;
}

interface IBatMapSubStructure {
  name: string;
  id: string;
  data: IBatMapItem[];
  structure: IBatMapSubStructure[];
}

interface IBatMapStructure {
  name: string;
  id: string;
  structure: IBatMapSubStructure[];
}

interface IBatMapCombat {
  name: string;
  rank: string;
}

interface IBatMap {
  id: string;
  union_name: string;
  bat_name: string;
  vch_name: string;
  combat: IBatMapCombat;
  version: string;
  structure: IBatMapStructure[];
}

interface IBatMapDoc extends mongoose.Document {
  _id: string;
  id: string;
  union_name: string;
  bat_name: string;
  vch_name: string;
  combat: IBatMapCombat;
  version: string;
  structure: IBatMapStructure[];
}

interface IBatMapModel extends mongoose.Model<IBatMapDoc> {
  createObj(attr: IBatMap): IBatMapDoc;
}
const batMapSchema = new mongoose.Schema<IBatMap>({
  id: { type: String, require: true },
  union_name: { type: String, require: true },
  bat_name: { type: String, require: true },
  vch_name: { type: String, require: true },
  version: { type: String, require: true },
  combat: {
    name: { type: String, require: true },
    rank: { type: String, require: true },
  },
  structure: [
    {
      name: { type: String, require: true },
      id: { type: String, require: true },
      structure: [
        {
          name: { type: String, require: true },
          id: { type: String, require: true },
          data: [
            {
              name: { type: String, require: true },
              status: { type: String, require: true },
              rank: { type: String, require: true },
              position: { type: String, require: true },
              id: { type: String, require: true },
            },
          ],
          structure: [
            {
              name: { type: String, require: true },
              id: { type: String, require: true },
              data: [
                {
                  name: { type: String, require: true },
                  status: { type: String, require: true },
                  rank: { type: String, require: true },
                  position: { type: String, require: true },
                  id: { type: String, require: true },
                },
              ],
              structure: [],
            },
          ],
        },
      ],
    },
  ],
});

batMapSchema.statics.createObj = (attr: IBatMap) => new BatMap(attr);

const BatMap = mongoose.model<any, IBatMapModel>("BatMap", batMapSchema);

export { IBatMap, BatMap };
