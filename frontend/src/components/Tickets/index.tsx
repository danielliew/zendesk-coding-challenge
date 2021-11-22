import React, { useEffect, useState } from "react";
import TicketList from "../TicketList";
import styles from "./Tickets.module.css";
import { Ticket, TicketsRes } from "./types";

const Tickets: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const ticketRes: TicketsRes = await (await fetch("/tickets")).json();
        if (ticketRes.tickets) setTickets(ticketRes.tickets);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      <header>
        <p className={styles.pre}>Daniel Liew presents</p>
        <h1>a Zendesk Ticket Viewer</h1>
      </header>

      <section>
        {loading && <p>Loading...</p>}

        {!loading && !error && !tickets.length ? <p>No tickets found</p> : null}

        {!loading && !error && tickets.length ? (
          <TicketList tickets={tickets} />
        ) : null}

        {!loading && error ? <p>Oops! Something went wrong</p> : null}
      </section>
    </div>
  );
};

export default Tickets;
