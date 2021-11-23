import axios from "axios";

const zendeskApi = axios.create({
  baseURL: "https://zccdanielliew.zendesk.com/api/v2/",
  headers: {
    Authorization: `Bearer ${process.env.ZENDESK_OAUTH}`,
  },
});

zendeskApi.interceptors.request.use((config) => {
  config.headers = { ["Authorization"]: `Bearer ${process.env.ZENDESK_OAUTH}` };
  return config;
});

export default zendeskApi;
