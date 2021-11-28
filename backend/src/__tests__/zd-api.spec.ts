import axios from "axios";
import { baseURL } from "../constants";

require("dotenv").config();

describe("zendeskApi connection", () => {
  it("fetches recent tickets with 200 status code using provided OAuth token", async () => {
    const res = await axios.get(`${baseURL}tickets.json`, {
      headers: {
        ["Authorization"]: `Bearer ${process.env.ZENDESK_OAUTH}`,
      },
    });
    expect(res.data.tickets).toBeDefined();
    expect(res.status).toEqual(200);
  });
});
