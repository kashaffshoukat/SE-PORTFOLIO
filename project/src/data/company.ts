export type WorkProcessStep = {
  step: string;
  title: string;
  description: string;
  details: string[];
};

export const workProcessSteps: WorkProcessStep[] = [];

export const partners: string[] = [];

export type Stat = { label: string; value: number; suffix: string };

export const stats: Stat[] = [];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  location: string;
};

export const team: TeamMember[] = [];