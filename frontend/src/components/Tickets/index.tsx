import React, { useEffect, useState } from "react";
import styles from "./Tickets.module.css";
import cstyles from "../styles/Clickable.module.css";
import { Ticket, TicketsRes, PaginationData } from "./types";
import { useNavigate } from "react-router";
import Button from "../Button";

const perPage = 25;
const descriptionMax = 100;

const Tickets: React.FC = () => {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    cursor: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onBack = () => {
    getTickets({
      before: pagination.before_cursor,
    });
  };
  const onNext = () => {
    getTickets({
      after: pagination.after_cursor,
    });
  };

  const getTickets = async ({
    after,
    before,
  }: {
    after?: string;
    before?: string;
  }) => {
    try {
      setLoading(true);
      const ticketRes: TicketsRes = await (
        await fetch(`/tickets/${perPage}/${after}/${before}`)
      ).json();
      setTickets(ticketRes.tickets);
      setPagination((p) => ({
        has_more: ticketRes.meta.has_more,
        after_cursor: ticketRes.meta.after_cursor,
        before_cursor: ticketRes.meta.before_cursor,
        cursor: after ? (p.cursor = 1) : before ? p.cursor - 1 : p.cursor,
      }));
      setError(false);
    } catch (e) {
      setPagination({
        has_more: undefined,
        after_cursor: undefined,
        before_cursor: undefined,
        cursor: 0,
      });
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTickets({});
  }, []);

  return (
    <div>
      <header>
        <p className={styles.pre}>This is</p>
        <h1>Zendesk Tickets</h1>
        <small>Built by Daniel Liew</small>
      </header>

      <section>
        {loading && <p>Loading...</p>}

        {!loading && !error && !tickets.length ? <p>No tickets found</p> : null}

        {!loading && !error && tickets.length ? (
          <div className={styles.ticketsContainer}>
            <small>Showing {tickets.length} tickets</small>
            {tickets.map((ticket, i) => (
              <div key={i} className={styles.ticketContainer}>
                <div
                  className={cstyles.clickable}
                  onClick={() => navigate(`/${ticket.id}`)}
                >
                  <h2>{ticket.subject}</h2>
                  <p>
                    {ticket.description &&
                    ticket.description.length > descriptionMax
                      ? `${ticket.description.substring(0, descriptionMax)}...`
                      : ticket.description}
                  </p>
                </div>
                <small>{ticket.tags && ticket.tags.join(" • ")}</small>
              </div>
            ))}
            <div className={styles.paginationContainer}>
              <Button
                text="Back"
                onClick={onBack}
                disabled={pagination.cursor === 0}
              />
              <Button
                text="Next"
                onClick={onNext}
                disabled={!pagination.has_more}
              />
            </div>
          </div>
        ) : null}

        {!loading && error ? <p>Oops! Something went wrong</p> : null}
      </section>
    </div>
  );
};

export default Tickets;
