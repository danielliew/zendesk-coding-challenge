import app from "../app";
import request from "supertest";

describe("/tickets", () => {
  it("returns an array of tickets", async () => {
    const res = await request(app).get("/tickets/25/undefined/undefined");
    expect(res.body.tickets).toHaveLength(25);
    for (let ticket of res.body.tickets) {
      expect(ticket.id).toBeDefined();
      expect(ticket.subject).toBeDefined();
    }
  });

  it("returns the meta for cursor pagination", async () => {
    const res = await request(app).get("/tickets/25/undefined/undefined");
    expect(typeof res.body.meta.has_more).toBe("boolean");
    expect(res.body.meta.after_cursor).toBeDefined();
    expect(res.body.meta.before_cursor).toBeDefined();
  });

  it("throws an error for invalid pagination cursors", async () => {
    const res = await request(app).get("/tickets/25/a/b");
    expect(res.statusCode).toEqual(500);
  });
});
