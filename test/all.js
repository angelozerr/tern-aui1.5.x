exports['test AlloyUI 2 Tern - Type'] = require('./test_yuidoc2tern');
exports['test AlloyUI 2 Tern'] = require('./test_aui2tern');
exports['test YUI Tern completion'] = require('./test_yui_completion');
exports['test YUI Tern Module Completion'] = require('./test_ModuleCompletion');
exports['test YUI Tern Module Lint'] = require('./test_ModuleLint');
exports['test AutoComplete'] = require('./test_AutoComplete');
exports['test Node'] = require('./test_Node');

if (require.main === module) require("test").run(exports);