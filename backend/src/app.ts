import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import zendeskApi from "./zendeskApi";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

/**
 * a route to get all tickets from zendesk via cursor pagination
 */
app.get(
  "/tickets/:pageSize/:after/:before",
  async (req: Request, res: Response) => {
    const { pageSize, after, before } = req.params;
    try {
      const zd = await zendeskApi.get(
        `tickets.json?page[size]=${pageSize}${
          after !== "undefined" ? `&page[after]=${after}` : ""
        }${before !== "undefined" ? `&page[before]=${before}` : ""}`
      );
      res.json(zd.data);
    } catch (e) {
      res.sendStatus(500);
    }
  }
);

/**
 * shows a single ticket for a valid ticket id
 */
app.get("/ticket/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const zd = await zendeskApi.get(`tickets/${id}.json`);
    res.json(zd.data);
  } catch (e) {
    res.sendStatus(500);
  }
});

export default app;
