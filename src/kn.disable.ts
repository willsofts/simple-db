import { ServiceBroker } from "moleculer";
import KnService from "@willsofts/will-db";

const broker = new ServiceBroker();
broker.createService({
    name: "service",
    mixins: [KnService],
    model: {
        name: "sample",
        alias: { privateAlias: "MYSQL" },
    },
    settings: {
        disableColumnSchema: true, //do not return column schema
        disablePageOffset: true, //do not return offsets
        disableQueryPaging: true, //do not paging
    }
});

broker.start()

.then(() => broker.call("service.list").then((result) => { 
    console.log("service.list",result);
}))

