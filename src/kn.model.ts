import { ServiceBroker } from "moleculer";
import KnService from "@willsofts/will-db";

const broker = new ServiceBroker();
broker.createService({
    name: "service",
    mixins: [KnService],
    model: {
        name: "testdbx",
        alias: { privateAlias: "MYSQL" },
        fields: {
            //this field make as key field
            share: { type: "STRING", key: true },
            mktid: { type: "STRING" },
            yield: { type: "DECIMAL" },
            percent: { type: "DECIMAL" },
            //this field does not in select clause
            remark: { type: "STRING", selected: false },
            //this field does not exist in table, it is user defined field  
            amount: { type: "DECIMAL", calculated: true }, 
        },
        //prefix field name with table name ex. testdbx.share,testdbx.mktid
        prefixNaming: true
    },
});

broker.start()

.then(() => broker.call("service.list").then((result) => { 
    console.log("service.list",result);
}))

.then(() => broker.call("service.find",{share: "BBL"}).then((result) => { 
    console.log("service.find",result);
}))
