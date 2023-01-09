import "dotenv/config.js";
import "../../config/database.js";
import { Company } from "../Company.js";

let companies = [
  {
    name: "julian",
    logo: "https://play-lh.googleusercontent.com/COBSZTxuK1erginB771kWrtIHaJmE0sPkUqn-raTT_pozZjcabOzPfvzfwp9ThLQXd92=w2560-h1440",
    website: "https://play-lh.googleusercontent.com/COBSZTxuK1erginB771kWrtIHaJmE0sPkUqn-raTT_pozZjcabOzPfvzfwp9ThLQXd92=w2560-h1440",
    description: "tarantula",
    user_id: "63acd1e28e7c0313cba77725",
  },
];

Company.insertMany(companies)
