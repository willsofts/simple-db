import { ServiceBroker } from "moleculer";
import KnService from "@willsofts/will-db";
import { KnHandler, KnModel, KnPageSetting, KnSetting } from "@willsofts/will-db";
import { KnResultSet, KnDBConnector } from "@willsofts/will-sql";

const DATA_LISTS = [
    {fieldchar: "SAMPLE-1", fieldint: 100, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 1"},
    {fieldchar: "SAMPLE-2", fieldint: 200, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 2"},
    {fieldchar: "SAMPLE-3", fieldint: 300, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 3"},
    {fieldchar: "SAMPLE-4", fieldint: 400, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 4"},
    {fieldchar: "SAMPLE-5", fieldint: 500, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 5"},
    {fieldchar: "SAMPLE-6", fieldint: 600, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 6"},
    {fieldchar: "SAMPLE-7", fieldint: 700, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 7"},
    {fieldchar: "SAMPLE-8", fieldint: 800, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 8"},
    {fieldchar: "SAMPLE-9", fieldint: 900, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 9"},
    {fieldchar: "SAMPLE-10", fieldint: 100, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 10"},
    {fieldchar: "SAMPLE-11", fieldint: 200, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 11"},
    {fieldchar: "SAMPLE-12", fieldint: 300, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 12"},
    {fieldchar: "SAMPLE-13", fieldint: 400, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 13"},
    {fieldchar: "SAMPLE-14", fieldint: 500, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 14"},
    {fieldchar: "SAMPLE-15", fieldint: 600, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 15"},
    {fieldchar: "SAMPLE-16", fieldint: 700, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 16"},
    {fieldchar: "SAMPLE-17", fieldint: 800, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 17"},
    {fieldchar: "SAMPLE-18", fieldint: 900, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 18"},
    {fieldchar: "SAMPLE-19", fieldint: 100, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 19"},
    {fieldchar: "SAMPLE-20", fieldint: 200, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 20"},
    {fieldchar: "SAMPLE-21", fieldint: 300, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 21"},
    {fieldchar: "SAMPLE-22", fieldint: 400, fieldbigint: 1000, fielddecimal: 1000.50, fieldbit: true, fielddate: new Date(), fieldtime: new Date(), fieldstamp: new Date, fieldtext: "Testing 22"},
];
class SampleHandler extends KnHandler {
    public model : KnModel = { 
        name: "sample", 
        alias: { privateAlias: "MYSQL" }, 
        fields: {
            fieldchar: { type: "STRING", key: true },
            fieldint: { type: "INTEGER", nullable: true },
            fieldbigint: { type: "BIGINT" },
            fielddecimal: { type: "DECIMAL" },
            fieldbit: { type: "BOOLEAN" },
            fielddate: { type: "DATE", created: true, updated: true, defaultValue: new Date() },
            fieldtime: { type: "TIME", created: true, updated: true, defaultValue: new Date() },
            fieldstamp: { type: "DATETIME", created: true, updated: true, nullable: false }, //nullable false = defaultValue: new Date()
            fieldtext: { type: "TEXT" },
        },
    };

    public settings : KnSetting = { 
        rowsPerPage: 10, maxRowsPerPage: 100, maxLimit: 10,  
        disableQueryPaging: true, //define to disable select count(*)
    };
    
    protected override async performQuerySelecting(context: any, model: KnModel, db: KnDBConnector, action: string, pageSetting: KnPageSetting) : Promise<KnResultSet> {
        let page = pageSetting.page;
        let rows : any = [];
        let offset = page * pageSetting.rowsPerPage;
        let maxOffset = offset + pageSetting.limit;
        for(let index=offset; index<maxOffset; index++) {
            if(index<DATA_LISTS.length) rows.push(DATA_LISTS[index]);
        }
        let rs = {rows: rows, columns: null};
        this.calculatePageOffset(pageSetting,DATA_LISTS.length);
        this.buildResultSet(rs, pageSetting);
        return rs;
    }

}

const broker = new ServiceBroker({
    logLevel: "debug"
});
broker.createService({
    name: "service",
    mixins: [KnService],
    handler: new SampleHandler(), 
});

broker.start()
.then(() => broker.call("service.list",{}).then((result) => { console.log("service.list",result);}))
.then(() => broker.call("service.list",{page:2}).then((result) => { console.log("service.list page=2",result);}))
.then(() => broker.call("service.list",{page:3}).then((result) => { console.log("service.list page=3",result);}))
.then(() => broker.call("service.list",{page:4}).then((result) => { console.log("service.list page=4",result);}))
