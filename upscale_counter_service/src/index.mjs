export default {
  async fetch(request, env) {
    return await handleRequest(request, env);
  },
};

async function handleRequest(request, env) {
  const id = env.COUNTER.idFromName("A");
  const obj = env.COUNTER.get(id);
  const resp = await obj.fetch(request.url);
  const count = await resp.text();
  const response = new Response(count);
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  return response;
}
export class Counter {
  constructor(state, env) {
    this.state = state;
  }

  async fetch(request) {
    const url = new URL(request.url);

    let value = (await this.state.storage.get("value")) || 0;

    switch (url.pathname) {
      case "/increment":
        ++value;
        break;
      case "/":
        break;
      case "/badge":
        return new Response(
          JSON.stringify({
            schemaVersion: 1,
            label: "Images Upscaled",
            message: value.toString(),
            color: "orange",
          })
        );
      default:
        return new Response("Not found", { status: 404 });
    }
    await this.state.storage.put("value", value);

    return new Response(value);
  }
}
