import config from "../../config/Config";

export const buildApiUrl = (path: string): string =>
  `${config.apiBaseUrl}/${path}`;