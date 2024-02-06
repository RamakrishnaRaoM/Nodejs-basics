const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

console.log("Calling event listner before removing the event.");
eventEmitter.emit("subscribe", "Hello world by rk");

console.log("Calling event listner after removing the event.");
eventEmitter.removeListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "Hello world by rk");
