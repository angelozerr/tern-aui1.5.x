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
      "isClass" : isClass,
      "getType" : getType,
      "isSubModule": true
    };
    var generator = new yuidoc2tern.Generator(options);
    return generator.process(api);
  }
  
  var initialize = function(ternDef) {
    ternDef["AUI"] = "YUI";
  }
  
  var isClass = function(entry) {
    if (entry.ctx != null  && entry.ctx.type == 'function') return true;
  }
  
  var overrideDef = {
      "Mongoose" : {
        
      }
  }
  
  var getType = function(moduleName, className, methodName, staticMethod) {
    switch(className) {
    case 'Mongoose':
      if (!methodName) {
      }
      else {
        // type for Mongoose methods
        switch(methodName) {
        case 'model':
          return "fn(name: string, schema?: +schema.Schema, collection?: string, skipInit?: bool) -> model.Model";
        }
      }
      break;     
    case 'Model':
      if (!methodName) {
      }
      else {
        // type for Model methods
        switch(methodName) {
        case 'save':
          return "fn(fn?: fn(err: +Error, product: +model.Model, numberAffected: number))";
        case 'remove':
          return "fn(conditions: +Object, callback?: fn(err: +Error))";
        }
      }
      break;           
    case 'Db':
      
      break;
    }
  }
  
});  