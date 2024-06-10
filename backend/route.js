import express from "express";
import { createNews, getallnews } from "./controller.js";
const router = express.Router()


router.post("/news", createNews);//ADD NEWS TO THE DB
router.post("/getallnews", getallnews)//THe main api

export default router
