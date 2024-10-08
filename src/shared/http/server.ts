import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import routes from "@shared/routes";
import AppError from "@shared/errors/AppError";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  },
);

app.listen(3333, () => console.log(`Server runing on http://localhost:3333`));
