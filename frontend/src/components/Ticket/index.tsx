import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Button from "../Button";
import styles from "./Ticket.module.css";

const Ticket: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/ticket/:${id}`);
        console.log(await res.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.pre}>Zendesk Ticket Viewer</p>
      <h1>Ticket: {id}</h1>

      <Button text="View all tickets" onClick={() => navigate("/")} filled />
    </div>
  );
};

export default Ticket;
