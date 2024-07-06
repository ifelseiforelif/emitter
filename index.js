import events from "events";
const emitter = new events.EventEmitter(); //створюємо об'єкт

const listener1 = (msg) => {
  //observer
  console.log("Sale " + msg);
};

emitter.on("sale", listener1); //реєстрація події

emitter.emit("sale", "20%"); //факт події
