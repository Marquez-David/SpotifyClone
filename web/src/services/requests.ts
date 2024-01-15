import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, SCOPES } from "@/utils/constants";

export const authorization = () => {
  return `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES.join(' '))}&response_type=code&show_dialog=true`;
};