export interface Session {
  day: string;
  time: string;
  content: string;
  isLive: boolean;
  date?: string;
}

export interface WeekSchedule {
  week: string;
  dateRange: string;
  title: string;
  description: string;
  sessions: Session[];
}

export interface FAQItem {
  question: string;
  answer: string;
}