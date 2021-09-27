import { executeQuery } from "../../config/db";

const getAllArticles = async (req , res) => {
    let data = await executeQuery('select * from test', []);
    res.send(data);
}

export { getAllArticles };