export default defineEventHandler((event) => {
  const id = [...event.node.req.url.split("/")].pop();
  const config = useRuntimeConfig();

  // NOTE: Not yet functioning (TODO)
  return $fetch(`${config.apiBaseUrl}/game/${id}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${config.apiKey}`
    }
  });
});