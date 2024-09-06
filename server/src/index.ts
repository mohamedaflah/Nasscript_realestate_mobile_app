import express, { Application } from "express";
import { createServer } from "http";
import "dotenv/config";
import "./infra/socket/index";
import cors from "cors";
import "./config/mongo.config";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.router";
import propertyRoute from "./routes/property.route";
import serverInstance from "./infra/socket/index";
import chatRouter from "./routes/chatandMessage";
const app: Application = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/property", propertyRoute);
app.use("/api/chat", chatRouter);

const server = createServer(app);

serverInstance(server);
const PORT = 3003;
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

export default app;
