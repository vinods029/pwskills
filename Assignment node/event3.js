const events = require("events");

const eventEmitter = new events.EventEmitter();

const subscribeMessage = (channelName) =>{
    console.log(`Thanks For subscribing to ${this.channelName}`);
}

eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College wallah")

console.log("The default maximum number of listener are : ", eventEmitter.getMaxListeners())
eventEmitter.setMaxListeners(5)
console.log("The Update maximum number of listener are : ", eventEmitter.getMaxListeners())
