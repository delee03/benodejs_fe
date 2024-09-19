export let isProduction = import.meta.env.VITE_IS_PRODUCTION === 'true';

export const BASE_DOMAIN_API = import.meta.env.VITE_BASE_DOMAIN_API || `http://localhost:3069/`;

export const IS_CONSOLE_LOG = "log";

export const BASE_DOMAIN_CLOUDINARY = `https://res.cloudinary.com/vulebaolong/image/upload/`;
export const FOLDER_IMAGE_BE = `images/`;

export const MOBILE_VISIBLE_DESKTOP_HIDDEN = `mantine-hidden-from-md`;
export const MOBILE_HIDDEN_DESKTOP_VISIBLE = `mantine-visible-from-md`;

export const ACCESS_TOKEN = `ACCESS_TOKEN`;
export const REFRESH_TOKEN = `REFRESH_TOKEN`;

export const TITLE_BASE = `JSM Media`;
