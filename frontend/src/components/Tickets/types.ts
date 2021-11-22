export interface Ticket {
  id: string;
  requester_id: number;
  assignee_id: number;
  subject: string;
  description: string;
  tags: string[];
}

export interface TicketsRes {
  tickets: Ticket[];
}
