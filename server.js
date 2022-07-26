/*requiring the express library */
import express from "express";
/*importing my routes from user.js as userRoutes */
import userRoutes from "./routes/users.js";
/*initialzing my server */
const app = express();
/*assigning my port to a enviornment variable and if not then making th port 5001 */
const PORT = process.env.PORT || 5001;
/*using express json to parse text into json format */
app.use(express.json());

//creating an endpoint of /users that the app concatenates with the original url that has routes from users.js
app.use("/users", userRoutes)


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))