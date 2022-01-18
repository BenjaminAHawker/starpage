export type dashboardLink = {};

export type dashboardService = {
  name: string;
  logo?: string;
  subtitle?: string;
  tag?: string;
  url?: string;
};

export type dashboardGroup = {
  name?: string;
  icon?: string;
  items?: dashboardService[];
};

export type configuration = {
  title?: string;
  subtitle?: string;
  logo?: string;
  header?: boolean;
  footer?: string | false;
  theme?: "default" | string;
  services?: dashboardGroup[];
};

export type THEME = {
  bg?: string;
};
