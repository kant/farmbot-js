"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var is_node_1 = require("./util/is_node");
__export(require("./util/coordinate"));
__export(require("./util/is_celery_script"));
__export(require("./util/is_node"));
__export(require("./util/pick"));
__export(require("./util/rpc_request"));
__export(require("./util/uuid"));
function stringToBuffer(str) {
    var regular_array = str.split("").map(function (x) { return x.charCodeAt(0); });
    var data16 = new Uint8Array(regular_array);
    return data16;
}
exports.stringToBuffer = stringToBuffer;
var td = new (is_node_1.isNode() ? util.TextDecoder : TextDecoder)();
/** We originally called buffer.toString(),
 *  but that suffers from inconsistent behavior
 * between environments, leading to testing
 * difficulty. */
exports.bufferToString = function (b) { return td.decode(b); };
