const ws = new WebSocket("ws://localhost:8080");

const username = document.querySelector("#username");
const payload = document.querySelector("#payload");
const btn = document.querySelector("#submit");

ws.onopen = () => {
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("[%s] %s", data.username, data.payload);
  };
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    ws.send(
      JSON.stringify({ username: username.value, payload: payload.value })
    );
    console.log("[ME] %s", payload.value);
    payload.value = "";
  });
};
