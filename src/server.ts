import Express from "express";
import routes from "./routes";
import cors from "cors";

const app = Express();
app.use(Express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => console.log(`Server runing on http://localhost:3333`));
