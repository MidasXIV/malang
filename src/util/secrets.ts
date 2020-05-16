import logger from "./logger";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env["client_email"];
export const GOOGLE_PRIVATE_KEY = process.env["private_key"];

if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
  logger.error("No 'client_email' and 'private_key' provided in .env file.");
}
