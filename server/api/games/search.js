export default defineEventHandler((event) => {
  const {query} = getQuery(event);
  const config = useRuntimeConfig();

  return $fetch(`${config.apiBaseUrl}/search/?api_key=${config.apiKey}&query=${query}&format=json`);
});