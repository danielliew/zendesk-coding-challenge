import { rest } from "msw";
import { backendApi } from "../components/constants";
import tickets from "./tickets.json";

const mockTickets = {
  ...tickets,
  tickets: tickets.tickets.map((t, id) => ({ ...t, id })),
};

const handlers = [
  rest.get(
    `${backendApi}/tickets/:pageSize/:after/:before`,
    async (req, res, ctx) => {
      const { pageSize, after, before } = req.params;
      return res(
        ctx.json({
          tickets: mockTickets.tickets.slice(0, pageSize),
          meta: {
            has_more: false,
            after_cursor: "asdf",
            before_curosr: "asdf",
          },
        })
      );
    }
  ),
  rest.get(`${backendApi}/ticket/:id`, async (req, res, ctx) => {
    const { id } = req.params;
    const ticket = mockTickets.tickets.filter((t) => t.id === parseInt(id));
    if (!ticket.length) return res(ctx.status(500));
    return res(
      ctx.json({
        ticket: ticket[0],
      })
    );
  }),
];

export { handlers };
