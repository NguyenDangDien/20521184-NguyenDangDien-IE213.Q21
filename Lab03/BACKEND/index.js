import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import MoviesDAO from "./dao/moviesDAO.js";
import ReviewDAO from "./dao/reviewDAO.js";
import UsersDAO from "./dao/usersDAO.js";
async function main() {
    dotenv.config();
    const client = new
    mongodb.MongoClient(process.env.DB_URI);
    const port = process.env.PORT || 8000;
    try {
// Connect to the MongoDB cluster
        await client.connect();
        await MoviesDAO.injectDB(client);
        //Lab03
        await ReviewDAO.injectDB(client);
        //Lab06
        await UsersDAO.injectDB(client);
        app.listen(port, () => {
            console.log('Server is running on port: ' + port);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
main().catch(console.error);