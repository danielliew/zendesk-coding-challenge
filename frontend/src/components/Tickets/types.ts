export interface Ticket {
  allow_attachments?: boolean;
  allow_channelback?: boolean;
  assignee_id?: number;
  brand_id?: number;
  collaborator_ids?: number[];
  created_at?: string;
  custom_fields?: {}[];
  description?: string;
  due_at?: string;
  email_cc_ids?: string[];
  external_id?: null;
  fields?: string[];
  follower_ids?: number[];
  followup_ids?: number[];
  forum_topic_id?: number;
  group_id?: number;
  has_incidents?: boolean;
  id?: number;
  is_public?: boolean;
  organization_id?: number;
  priority?: string;
  problem_id?: number;
  raw_subject?: string;
  recipient?: string;
  requester_id?: number;
  satisfaction_rating?: {
    comment: string;
    id: number;
    score: string;
  };
  sharing_agreement_ids?: number[];
  status?: string;
  subject?: string;
  submitter_id?: number;
  tags?: string[];
  ticket_form_id?: number;
  type?: string;
  updated_at?: string;
  url?: string;
  via?: { channel?: string; source?: {} };
}
export interface PaginationData {
  has_more?: boolean;
  after_cursor?: string;
  before_cursor?: string;
  cursor: number;
}

export interface TicketsRes {
  tickets: Ticket[];
  meta: PaginationData;
}

export interface TicketsProps {
  urlPath: string;
}
