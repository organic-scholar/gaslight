import {importSchema} from '@gaslight/graphql-import';

module.exports = function ()
{
    var callback = this.async();
    this.cacheable();
    importSchema().then((source:string)=>
    {
        callback(null, "module.exports = `" + source.replace(/`/g, '\\`') + "`");

    }).catch((err)=>
    {
        callback(err);
    })
}
