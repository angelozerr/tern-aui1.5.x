var util = require("./util");

exports['test Y.AutoComplete completion'] = function() {
  // check AutoComplete
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
    "completions":[{"name":"doBeforeExpandContainer","type":"fn(query: string, allResults: Object) -> bool","origin":"aui1.5.x"},
                   {"name":"doBeforeLoadData","type":"fn(event: event_custom.EventFacade) -> bool","origin":"aui1.5.x"},
                   {"name":"filterResults","type":"fn(event: event_custom.EventFacade) -> Object","origin":"aui1.5.x"},
                   {"name":"formatResult","type":"fn(result: Object, request: string, resultMatch: string) -> string","origin":"aui1.5.x"},
                   {"name":"generateRequest","type":"fn(query: string) -> Object","origin":"aui1.5.x"},
                   {"name":"handleResponse","type":"fn(event: event_custom.EventFacade)","origin":"aui1.5.x"},
                   {"name":"sendQuery","type":"fn(query: string)","origin":"aui1.5.x"}
                  ]
  });  
}

// see https://github.com/angelozerr/tern-aui2.0.x/issues/8
exports['test Y.AutoComplete Config Object Literal'] = function() {
  
  util.assertCompletion("AUI().use('', function(Y) { new Y.AutoComplete({", {
    "start":{"line":0,"ch":48},
    "end":{"line":0,"ch":48},
    "isProperty":true,
    "isObjectKey":true,
    "completions":[{"name":"alwaysShowContainer","type":"bool","origin":"aui1.5.x"},
                   {"name":"applyLocalFilter","type":"bool","origin":"aui1.5.x"},
                   {"name":"autoHighlight","type":"bool","origin":"aui1.5.x"},
                   {"name":"boundingBox","type":"string|node.Node","origin":"yui3"},
                   {"name":"button","type":"bool","origin":"aui1.5.x"},
                   {"name":"contentBox","type":"string|node.Node","origin":"yui3"},
                   {"name":"cssClass","type":"string","origin":"aui1.5.x"},
                   {"name":"dataSource","type":"?","origin":"aui1.5.x"},
                   {"name":"dataSourceType","type":"string","origin":"aui1.5.x"},
                   {"name":"delimChar","type":"string","origin":"aui1.5.x"},
                   {"name":"disabled","type":"bool","origin":"yui3"},
                   {"name":"focused","type":"bool","origin":"yui3"},
                   {"name":"forceSelection","type":"bool","origin":"aui1.5.x"},
                   {"name":"height","type":"string|number","origin":"yui3"},
                   {"name":"hideClass","type":"string","origin":"aui1.5.x"},
                   {"name":"id","type":"string","origin":"yui3"},
                   {"name":"input","type":"string|node.Node","origin":"aui1.5.x"},
                   {"name":"matchKey","type":"string|number","origin":"aui1.5.x"},
                   {"name":"maxResultsDisplayed","type":"number","origin":"aui1.5.x"},
                   {"name":"minQueryLength","type":"number","origin":"aui1.5.x"},
                   {"name":"queryDelay","type":"number","origin":"aui1.5.x"},
                   {"name":"queryInterval","type":"number","origin":"aui1.5.x"},
                   {"name":"queryMatchCase","type":"bool","origin":"aui1.5.x"},
                   {"name":"queryMatchContains","type":"bool","origin":"aui1.5.x"},
                   {"name":"queryQuestionMark","type":"bool","origin":"aui1.5.x"},
                   {"name":"render","type":"bool|node.Node","origin":"aui1.5.x"},
                   {"name":"rendered","type":"bool","origin":"yui3"},
                   {"name":"schema","type":"Object","origin":"aui1.5.x"},
                   {"name":"schemaType","type":"string","origin":"aui1.5.x"},
                   {"name":"srcNode","type":"string|node.Node","origin":"yui3"},
                   {"name":"strings","type":"Object","origin":"yui3"},
                   {"name":"suppressInputUpdate","type":"bool","origin":"aui1.5.x"},
                   {"name":"tabIndex","type":"number","origin":"yui3"},
                   {"name":"typeAhead","type":"bool","origin":"aui1.5.x"},
                   {"name":"typeAheadDelay","type":"number","origin":"aui1.5.x"},
                   {"name":"uniqueName","type":"string","origin":"aui1.5.x"},
                   {"name":"useARIA","type":"bool","origin":"aui1.5.x"},
                   {"name":"visible","type":"bool","origin":"yui3"},
                   {"name":"width","type":"string|number","origin":"yui3"}
                  ]
  });    

  util.assertCompletion("AUI().use('', function(Y) { new Y.AutoComplete({a", {
    "start":{"line":0,"ch":48},
    "end":{"line":0,"ch":49},
    "isProperty":true,
    "isObjectKey":true,
    "completions":[{"name":"alwaysShowContainer","type":"bool","origin":"aui1.5.x"},
                   {"name":"applyLocalFilter","type":"bool","origin":"aui1.5.x"},
                   {"name":"autoHighlight","type":"bool","origin":"aui1.5.x"}                   
                  ]
  });    

}


if (module == require.main) require("test").run(exports);