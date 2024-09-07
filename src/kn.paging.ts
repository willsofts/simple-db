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
    //as default rowsPerPage = 20 and maxRowsPerPage = 100
    //this setting will override default value
    settings: {
        //this is minimum number of records return
        rowsPerPage: 10,
        //this is maximum number of records return, 
        //so it can reach when defined rowsPerPage over as parameter
        maxRowsPerPage: 100,
    }
});

broker.start()
//default page number = 1
.then(() => broker.call("service.list").then((result) => { 
    console.log("service.list",result);
}))
//specified order by field and order direction
.then(() => broker.call("service.list",{page: 2, orderBy: "fieldchar", orderDir: "ASC"}).then((result) => { 
    console.log("service.list",result);
}))

.then(() => broker.call("service.list",{page: 3, orderBy: "fieldchar", orderDir: "DESC"}).then((result) => { 
    console.log("service.list",result);
}))

//defined paging: rowsPerPage = 10 as parameter
.then(() => broker.call("service.list",{page: 1, rowsPerPage: 10 }).then((result) => { 
    console.log("service.list",result);
}))
