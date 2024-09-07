import { ServiceBroker } from "moleculer";
import KnService from "@willsofts/will-db";
import MyHandler from "./MyHandler";
import ApiGatewayService from 'moleculer-web';

const broker = new ServiceBroker();
broker.createService({
    name: "service",
    mixins: [ApiGatewayService, KnService],
    handler: new MyHandler(), 
    settings: {
        port: 3000,
        cors: true,
        path: "/", 
    },       
});

broker.start()

//test db connector
.then(() => broker.call("service.collect",{sharecode: "BBL"}).then((result) => { 
    console.log("service.collect",result);
}))

/*
curl http://localhost:3000/service/collect
curl http://localhost:3000/service/collect?sharecode=BBL
curl -v -X POST -H "Content-Type: application/json" http://localhost:4000/service/collect -d "{\"sharecode\":\"BBL\"}"
*/
