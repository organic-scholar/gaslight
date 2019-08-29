import {importSchema} from '@gaslight/graphql-import';

module.exports = function ()
{
    var callback = this.async();
    this.cacheable();
    callback(null, "module.exports = `" + importSchema(this.resourcePath).replace(/`/g, '\\`') + "`");
}
