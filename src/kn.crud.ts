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
            //define default value when no parameter passing
            editdate: { type: "DATE", defaultValue: new Date() },
            edittime: { type: "TIME", defaultValue: new Date() },
        },
        //disable this fields to be saved
        disableFields: ["language"],
    },
});

broker.start()

.then(() => broker.call("service.create",{share: "AXA", yield: 45, percent: 35, mktid: "TST", remark: "Testing", language: "EN"}).then((result) => { 
    console.log("service.create",result);
}))

.then(() => broker.call("service.update",{share: "AXA", yield: 55, remark: "Update Testing"}).then((result) => { 
    console.log("service.update",result);
}))

.then(() => broker.call("service.find",{share: "AXA"}).then((result) => { 
    console.log("service.find",result);
}))

.then(() => broker.call("service.clear",{share: "AXA"}).then((result) => { 
    console.log("service.clear",result);
}))

