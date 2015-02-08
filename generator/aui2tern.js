(function(root, mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("./yuidoc2tern")); // CommonJS
    if (typeof define == "function" && define.amd) return define([ "exports", "yuidoc2tern" ], mod); // AMD
    mod(root.yuidoc2tern, root.yuidoc2tern); // Plain browser env
})(this, function(exports, yuidoc2tern) {
  "use strict";
  
  var AUI = exports.AUI = {};
  AUI.generate = function(api) {
    var options = {
      "name" : "aui1.5.x",
      "initialize" : initialize,
      "getType" : getType,
      "baseURL" : "http://alloyui.com/versions/1.5.x/api/",
      "isSubModule": true
    };
    var generator = new yuidoc2tern.Generator(options);
    return generator.process(api);
  }
  
  var initialize = function(ternDef) {
    ternDef["AUI"] = "YUI";
  }
  
  var getType = function(moduleName, className, name) {
  }
  
});  