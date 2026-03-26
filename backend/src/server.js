import express from "express";
import path from "path";
import cors from "cors";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { chatClient } from "./lib/stream.js";
import { serve } from "inngest/express"
import { inngest, functions } from "./lib/inngest.js";

const app = express();

const __dirname = path.resolve();

// middleware
app.use(express.json())
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }))

app.use("/api/inngest", serve({ client: inngest, functions }))

app.get("/", (req, res) => {
    res.status(200).json({ msg: "sucess from api" })
})

app.get("/test-stream-users", async (req, res) => {
    const response = await chatClient.queryUsers({});
    res.json(response.users);
});

//? make our app ready for deployment 
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}



const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log("Server is running on port :", ENV.PORT)
        });
    } catch (error) {
        console.error("💥 Error startinng server", error)
    }
}

startServer();