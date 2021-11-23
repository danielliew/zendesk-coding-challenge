import app from "../app";
import request from "supertest";

describe("/ticket", () => {
  it("returns a ticket object with a id, subject, and description", async () => {
    const res = await request(app).get("/ticket/1");
    expect(res.body.ticket.id).toBeDefined();
    expect(res.body.ticket.subject).toBeDefined();
    expect(res.body.ticket.description).toBeDefined();
  });

  it("throws an error for invalid ticket ids", async () => {
    const res = await request(app).get("/ticket/-1");
    expect(res.statusCode).toEqual(500);
  });
});
