exports['test AlloyUI 2 Tern - Type'] = require('./test_yuidoc2tern');
exports['test AlloyUI 2 Tern'] = require('./test_aui2tern');
exports['test YUI Tern completion'] = require('./test_yui_completion');
exports['test AutoComplete'] = require('./test_AutoComplete');

if (require.main === module) require("test").run(exports);