import express from "express";
import router from "./routes";
import cors from "cors";
import morgan from "morgan";

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use(router);

export default server;
