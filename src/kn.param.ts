import { ServiceBroker } from "moleculer";
import KnService from "@willsofts/will-db";
import { KnHandler } from "@willsofts/will-db";
import { KnModel } from "@willsofts/will-db";
import { KnSQLInterface } from "@willsofts/will-sql";

class DbxHandler extends KnHandler {
    public model : KnModel = { 
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
            //this always force compose sql when create and update
            editdate: { type: "DATE", created: true, updated: true },
            edittime: { type: "TIME", created: true, updated: true },
        },
    };

    protected override async assignParameters(context: any, sql: KnSQLInterface, action?: string, mode?: string): Promise<void> {
        //try to manual assign parameters
        let now = new Date();
        sql.set("editdate", now, "DATE");
        sql.set("edittime", now, "TIME");
    }

}

const broker = new ServiceBroker();
broker.createService({
    name: "service",
    mixins: [KnService],
    handler: new DbxHandler(), 
});

broker.start()

.then(() => broker.call("service.update",{share: "BBL", yield: 45, percent: 35, remark: "Testing"}).then((result) => { 
    console.log("service.update",result);
}))
