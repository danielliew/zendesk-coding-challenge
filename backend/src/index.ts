import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { PORT } from "./constants";
import { tickets } from "./tickets.json";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/hi", (req: Request, res: Response) => {
  res.send("hi");
});

app.get("/tickets", (req: Request, res: Response) => {
  res.json({ tickets: tickets.map((t, i) => ({ ...t, id: i })) });
});

app.get("/ticket/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const ticket = tickets.filter((t, i) => i === parseInt(id));
  if (ticket.length) res.json({ ticket: ticket[0] });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
