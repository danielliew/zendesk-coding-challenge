import axios from "axios";
import { baseURL } from "./constants";

const zendeskApi = axios.create({
  baseURL,
});

zendeskApi.interceptors.request.use((config) => {
  config.headers = { ["Authorization"]: `Bearer ${process.env.ZENDESK_OAUTH}` };
  return config;
});

export default zendeskApi;
