import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Button from "../Button";
import { backendApi } from "../constants";
import { Ticket as TicketType } from "../Tickets/types";
import styles from "./Ticket.module.css";

const Ticket: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState<TicketType>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [viewJson, setViewJson] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const ticketRes = await (
          await fetch(`${backendApi}/ticket/${id}`)
        ).json();
        setTicket(ticketRes.ticket);
        setError(false);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <p className={styles.pre}>Zendesk Ticket</p>

      {loading && <p>Loading...</p>}

      {!loading && !error ? (
        <div className={styles.ticketContainer}>
          <h1 data-testid="ticket-subject">{ticket.subject}</h1>

          <p data-testid="ticket-desc">{ticket.description}</p>
          <small>Tags: {ticket.tags ? ticket.tags.join(" • ") : "None"}</small>
          <p>
            Created at {ticket.created_at}
            {ticket.updated_at ? `, last updated at ${ticket.updated_at}` : ""}
          </p>
          {ticket.due_at ? `Due at ${ticket.due_at}` : ""}
          <p>Priority: {ticket.priority}</p>
          <p>Status: {ticket.status}</p>

          <Button
            text={`${viewJson ? "Hide" : "View"} full JSON`}
            onClick={() => setViewJson((j) => !j)}
          />

          {viewJson ? (
            <div className={styles.jsonContainer}>
              <hr />
              <pre>{JSON.stringify(ticket, null, 2)}</pre>
            </div>
          ) : null}
        </div>
      ) : null}

      {!loading && error ? <p>Oops! Something went wrong</p> : null}

      <Button text="Back to all tickets" onClick={() => navigate("/")} filled />
    </div>
  );
};

export default Ticket;
