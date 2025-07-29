const params = new URLSearchParams(window.location.search);
const env = params.get("env") || "staging";

const BOT_IDS = {
  staging: {
    id: "x1661853633268",
    label: "Staging (UAT)"
  },
  sandbox: {
    id: "x1661853666999",
    label: "Sandbox (Dev)"
  }
};

const envData = BOT_IDS[env] || BOT_IDS.staging;
document.getElementById("envName").innerText = envData.label;
document.getElementById("botId").innerText = envData.id;

// Remove old bot
const oldScript = document.querySelector("script[data-ym]");
if (oldScript) oldScript.remove();

window.ymConfig = {
  bot: envData.id,
  host: "https://chatbotcld.tvscredit.com"
};

(function () {
  const ym = function () { ym.c(arguments); };
  ym.q = [];
  ym.c = function (args) { ym.q.push(args); };
  window.YellowMessenger = ym;

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://chatbotcld.tvscredit.com/assets/plugin/widget-v2/latest/dist/main.min.js";
  script.setAttribute("data-ym", "true");

  document.body.appendChild(script);
})();
