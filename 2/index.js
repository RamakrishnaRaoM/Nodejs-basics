const fs = require("fs");
const data =
  "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine.";
fs.writeFileSync("nodejs_architecture.txt", data);
