"use strict";
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["JSON"] = "application/json";
    MediaTypes["XML"] = "application/xml";
})(MediaTypes || (MediaTypes = {}));
fetch("https://example.com/api/endpoint", {
    headers: {
        Accept: MediaTypes.JSON,
    },
}).then(response => {
});
//# sourceMappingURL=index.js.map