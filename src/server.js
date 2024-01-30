require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
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

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
  message: "You've sent too many requests, please try again later.",
});

const checkWhitelist = (req) => {
  const clientIp =
    req.ip ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  return process.env.ADMIN_ORIGIN === clientIp;
};

server.use(cors(corsOptions));
server.use(morgan("dev"));
server.use(express.json());
server.use(authMiddleware);
server.use(limiter);
server.use((req, res, next) => {
  if (checkWhitelist(req)) return next();
  return limiter(req, res, next);
});

server.use("/api", router);

module.exports = server;
