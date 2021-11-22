import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../Button";
import styles from "./TicketList.module.css";
import cstyles from "../styles/Clickable.module.css";
import { TicketListProps } from "./types";

const perPage = 25;
const descriptionMax = 100;

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    if (tickets.length > perPage)
      setPages(
        tickets.length % perPage === 0
          ? tickets.length / perPage
          : tickets.length / perPage + 1
      );
    else setPages(0);
  }, [tickets.length]);

  const showPagination = pages > 1;
  const toShow = tickets.slice(page * perPage, (page + 1) * perPage);

  return (
    <div>
      <small>Showing {toShow.length} tickets</small>
      {toShow.map((ticket, i) => (
        <div key={i} className={styles.ticketContainer}>
          <div
            className={cstyles.clickable}
            onClick={() => navigate(`/${ticket.id}`)}
          >
            <h2>{ticket.subject}</h2>
            <p>
              {ticket.description.length > descriptionMax
                ? `${ticket.description.substring(0, descriptionMax)}...`
                : ticket.description}
            </p>
          </div>
          <small>{ticket.tags.length && ticket.tags.join(" • ")}</small>
        </div>
      ))}

      {showPagination ? (
        <div>
          {page > 0 && (
            <Button text="Back" onClick={() => setPage((p) => p - 1)} />
          )}
          {new Array(pages).fill(0).map((_p, i) => (
            <Button
              key={i}
              text={i + 1}
              filled={i === page}
              onClick={() => setPage(i)}
            />
          ))}
          {page + 1 < pages && (
            <Button text="Next" onClick={() => setPage((p) => p + 1)} />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default TicketList;
