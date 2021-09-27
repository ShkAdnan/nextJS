import nc from "next-connect";
import { getAllArticles } from "../../../src/controllers/articleController";

const handler = nc();

handler.get( getAllArticles )

export default handler;