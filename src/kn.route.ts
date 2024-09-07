import { ServiceBroker } from "moleculer";
import ApiGatewayService from "moleculer-web";
import KnService from "@willsofts/will-db";
import MyHandler from "./MyHandler";

const broker = new ServiceBroker();
broker.createService({
    name: "service",
    mixins: [ApiGatewayService, KnService],
    handler: new MyHandler(), 
    settings: {
        path: "/api",
        routes: [
            {
                mappingPolicy: "all",
                aliases: {
                    "GET service/findby/:sharecode": "service.findby"
                }
            }
        ]
    },    
});

broker.start()

.then(() => broker.call("service.retrieve").then((result) => { 
    console.log("service.retrieve",result);
}))

.then(() => broker.call("service.list").then((result) => { 
    console.log("service.list",result);
}))

/*
curl http://localhost:3000/api/service/list
curl http://localhost:3000/api/service/findby/BBL
curl http://localhost:3000/api/service/collect?sharecode=BBL
*/
