import { ServiceBroker } from "moleculer";
import KnService from "@willsofts/will-db";
import MyHandler from "./MyHandler";
import KnAPI from "@willsofts/will-api";

const broker = new ServiceBroker();
broker.createService({
    name: "service",
    mixins: [KnService],
    handler: new MyHandler(), 
    settings: {
        disableColumnSchema: true,
    }    
});

broker.createService({
    name: "api",
    mixins: [KnAPI],
    settings: {
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

.then(() => broker.call("service.collect",{sharecode: "BBL"}).then((result) => { 
    console.log("service.collect",result);
}))

/*
curl http://localhost:8080/api/service/list
curl http://localhost:8080/api/service/findby/BBL
curl http://localhost:8080/api/service/collect?sharecode=BBL
curl -v -X POST -H "Content-Type: application/json" http://localhost:4000/service/collect -d "{\"sharecode\":\"BBL\"}"
*/
