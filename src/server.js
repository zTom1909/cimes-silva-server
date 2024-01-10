require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const authMiddleware = require("./utils/authMiddleware");

const router = require("./routes");

const server = express();
const allowedOrigins = [process.env.CLIENT_ORIGIN, process.env.ADMIN_ORIGIN];

const corsOptions = {
  origin: (origin, cb) => {
    if (allowedOrigins.includes(origin)) cb(null, true);
    else
      cb(
        new Error(
          "You do not have permission to access this service from your current location."
        )
      );
  },
  exposedHeaders: "X-Total-Count",
};

server.use(cors(corsOptions));
server.use(morgan("dev"));
server.use(express.json());
server.use(authMiddleware);

server.use("/api", router);

module.exports = server;
