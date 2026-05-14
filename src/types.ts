export type RoleKey =
  | "planner"
  | "builder"
  | "analyst"
  | "creator"
  | "connector"
  | "supporter";

export type Option = {
  text: string;
  scores: Record<RoleKey, number>;
};

export type Question = {
  id: number;
  prompt: string;
  options: Option[];
};

export type RoleProfile = {
  key: RoleKey;
  name: string;
  tagline: string;
  summary: string;
  strengths: string[];
  careers: string[];
  environments: string[];
  nextSteps: string[];
  watchOut: string;
  aura: string;
};

