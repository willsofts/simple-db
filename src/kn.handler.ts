import { ServiceBroker } from "moleculer";
import KnService from "@willsofts/will-db";
import MyHandler from "./MyHandler";

const broker = new ServiceBroker();
broker.createService({
    name: "service",
    mixins: [KnService],
    handler: new MyHandler(), 
});

broker.start()

// support dynamic handler, findby service actions not in base handler
.then(() => broker.call("service.findby",{sharecode:"BBL"}).then((result) => { 
    console.log("service.findby",result);
}))

.then(() => broker.call("service.retrieve").then((result) => { 
    console.log("service.retrieve",result);
}))

.then(() => broker.call("service.list").then((result) => { 
    console.log("service.list",result);
}))

.then(() => broker.call("service.collect",{sharecode: "BBL"}).then((result) => { 
    console.log("service.collect",result);
}))
