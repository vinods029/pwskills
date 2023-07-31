const events = require("events");

const eventEmitter = new events.EventEmitter();

const subscribeMessage = (channelName) =>{
    console.log(`Thanks For subscribing to ${this.channelName}`);
}

eventEmitter.addListener("subscribe", subscribeMessage);

console.log("Calling event listner before removing the event.");
eventEmitter.emit("subscribe", "College wallah")

console.log("Calling event listner after removing the event.");
eventEmitter.removeListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");