export default defineEventHandler((event) => {
  const id = [...event.node.req.url.split("/")].pop();
  const config = useRuntimeConfig();

  return $fetch(`${config.apiBaseUrl}/game/${id}/?api_key=${config.apiKey}&format=json`);
});