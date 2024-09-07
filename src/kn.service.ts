import { ServiceBroker } from "moleculer";
import KnService from "@willsofts/will-db";

const broker = new ServiceBroker();
broker.createService({
    name: "service",
    mixins: [KnService],
    model: {
        name: "testdbx",
        alias: { privateAlias: "MYSQL" },
    }
});

broker.start()

.then(() => broker.call("service.list").then((result) => { 
    console.log("service.list",result);
}))

.then(() => broker.call("service.find",{share: "BBL"}).then((result) => { 
    console.log("service.find",result);
}))

