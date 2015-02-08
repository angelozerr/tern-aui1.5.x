var util = require("./util");

exports['test Y.AutoComplete completion'] = function() {
  // check AceEditor
  util.assertCompletion("AUI().use('', function(Y) { new Y.A", {
    "name":"AutoComplete",
    "type":"fn(config: {})",
    "origin":"aui1.5.x"
  }, "AutoComplete");
  
  
  // check methods of AutoComplete
  util.assertCompletion("AUI().use('', function(Y) { new Y.AutoComplete({}).", {
    "start":{"line":0,"ch":51},
    "end":{"line":0,"ch":51},
    "isProperty":true,
    "isObjectKey":false,
    "completions":[{"name":"doBeforeExpandContainer","type":"fn(query: string, allResults: yui.Object) -> bool","origin":"aui1.5.x"},
                   {"name":"doBeforeLoadData","type":"fn(event: event_custom.EventFacade) -> bool","origin":"aui1.5.x"},
                   {"name":"filterResults","type":"fn(event: event_custom.EventFacade) -> yui.Object","origin":"aui1.5.x"},
                   {"name":"formatResult","type":"fn(result: yui.Object, request: string, resultMatch: string) -> string","origin":"aui1.5.x"},
                   {"name":"generateRequest","type":"fn(query: string) -> yui.Object","origin":"aui1.5.x"},
                   {"name":"handleResponse","type":"fn(event: event_custom.EventFacade)","origin":"aui1.5.x"},
                   {"name":"sendQuery","type":"fn(query: string)","origin":"aui1.5.x"}
                  ]
  });  
}

// see https://github.com/angelozerr/tern-aui2.0.x/issues/7
/*exports['test Y.AceEditor extends Widget completion'] = function() {
  
  // Widget of YUI3 provides render, AceEditor inherits from this methods.
  // check methods of AceEditor
  util.assertCompletion("YUI().use('', function(Y) { new Y.AceEditor({}).r", {
    "start":{"line":0,"ch":48},
    "end":{"line":0,"ch":49},
    "isProperty":true,
    "isObjectKey":false,
    "completions":[{"name":"render","type":"fn(parentNode: yui.Object)","origin":"yui3"}
                  ]
  });    

  util.assertCompletion("YUI().use('', function(Y) { var editor = new Y.AceEditor({}); editor.r", {
    "start":{"line":0,"ch":69},
    "end":{"line":0,"ch":70},
    "isProperty":true,
    "isObjectKey":false,
    "completions":[{"name":"render","type":"fn(parentNode: yui.Object)","origin":"yui3"}
                  ]
  }); 
}*/

// see https://github.com/angelozerr/tern-aui2.0.x/issues/8
exports['test Y.AceEditor Config Object Literal'] = function() {
  
  util.assertCompletion("YUI().use('', function(Y) { new Y.AutoComplete({", {
    "start":{"line":0,"ch":48},
    "end":{"line":0,"ch":48},
    "isProperty":true,
    "isObjectKey":true,
    "completions":[{"name":"alwaysShowContainer","type":"bool","origin":"aui1.5.x"},
                   {"name":"applyLocalFilter","type":"bool","origin":"aui1.5.x"},
                   {"name":"autoHighlight","type":"bool","origin":"aui1.5.x"},
                   {"name":"button","type":"bool","origin":"aui1.5.x"},
                   {"name":"dataSource","type":"yui.Object","origin":"aui1.5.x"},
                   {"name":"dataSourceType","type":"string","origin":"aui1.5.x"},
                   {"name":"delimChar","type":"string","origin":"aui1.5.x"},
                   {"name":"forceSelection","type":"bool","origin":"aui1.5.x"},
                   {"name":"input","type":"string","origin":"aui1.5.x"},
                   {"name":"matchKey","type":"string","origin":"aui1.5.x"},
                   {"name":"maxResultsDisplayed","type":"number","origin":"aui1.5.x"},
                   {"name":"minQueryLength","type":"number","origin":"aui1.5.x"},
                   {"name":"queryDelay","type":"number","origin":"aui1.5.x"},
                   {"name":"queryInterval","type":"number","origin":"aui1.5.x"},
                   {"name":"queryMatchCase","type":"bool","origin":"aui1.5.x"},
                   {"name":"queryMatchContains","type":"bool","origin":"aui1.5.x"},
                   {"name":"queryQuestionMark","type":"bool","origin":"aui1.5.x"},
                   {"name":"schema","type":"yui.Object","origin":"aui1.5.x"},
                   {"name":"schemaType","type":"string","origin":"aui1.5.x"},
                   {"name":"suppressInputUpdate","type":"bool","origin":"aui1.5.x"},
                   {"name":"typeAhead","type":"bool","origin":"aui1.5.x"},
                   {"name":"typeAheadDelay","type":"number","origin":"aui1.5.x"},
                   {"name":"uniqueName","type":"string","origin":"aui1.5.x"}
                  ]
  });    

}

if (module == require.main) require("test").run(exports);