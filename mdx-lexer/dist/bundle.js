/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/chevrotain/lib/src/api.js":
/*!************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/api.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar parser_1 = __webpack_require__(/*! ./parse/parser/parser */ \"./node_modules/chevrotain/lib/src/parse/parser/parser.js\");\nvar lexer_public_1 = __webpack_require__(/*! ./scan/lexer_public */ \"./node_modules/chevrotain/lib/src/scan/lexer_public.js\");\nvar tokens_public_1 = __webpack_require__(/*! ./scan/tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nvar exceptions_public_1 = __webpack_require__(/*! ./parse/exceptions_public */ \"./node_modules/chevrotain/lib/src/parse/exceptions_public.js\");\nvar version_1 = __webpack_require__(/*! ./version */ \"./node_modules/chevrotain/lib/src/version.js\");\nvar errors_public_1 = __webpack_require__(/*! ./parse/errors_public */ \"./node_modules/chevrotain/lib/src/parse/errors_public.js\");\nvar render_public_1 = __webpack_require__(/*! ./diagrams/render_public */ \"./node_modules/chevrotain/lib/src/diagrams/render_public.js\");\nvar gast_visitor_public_1 = __webpack_require__(/*! ./parse/grammar/gast/gast_visitor_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_visitor_public.js\");\nvar gast_public_1 = __webpack_require__(/*! ./parse/grammar/gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\nvar gast_resolver_public_1 = __webpack_require__(/*! ./parse/grammar/gast/gast_resolver_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js\");\nvar generate_public_1 = __webpack_require__(/*! ./generate/generate_public */ \"./node_modules/chevrotain/lib/src/generate/generate_public.js\");\nvar lexer_errors_public_1 = __webpack_require__(/*! ./scan/lexer_errors_public */ \"./node_modules/chevrotain/lib/src/scan/lexer_errors_public.js\");\n/**\n * defines the public API of\n * changes here may require major version change. (semVer)\n */\nvar API = {};\n// semantic version\nAPI.VERSION = version_1.VERSION;\n// runtime API\nAPI.Parser = parser_1.Parser;\n// TypeCheck Multi Trait Parser API against official Chevrotain API\n// The only thing this does not check is the constructor signature.\nvar mixedDummyInstance = null;\nvar officalDummyInstance = mixedDummyInstance;\nAPI.ParserDefinitionErrorType = parser_1.ParserDefinitionErrorType;\nAPI.Lexer = lexer_public_1.Lexer;\nAPI.LexerDefinitionErrorType = lexer_public_1.LexerDefinitionErrorType;\nAPI.EOF = tokens_public_1.EOF;\n// Tokens utilities\nAPI.tokenName = tokens_public_1.tokenName;\nAPI.tokenLabel = tokens_public_1.tokenLabel;\nAPI.tokenMatcher = tokens_public_1.tokenMatcher;\nAPI.createToken = tokens_public_1.createToken;\nAPI.createTokenInstance = tokens_public_1.createTokenInstance;\n//\n// // Other Utilities\nAPI.EMPTY_ALT = parser_1.EMPTY_ALT;\nAPI.defaultParserErrorProvider = errors_public_1.defaultParserErrorProvider;\nAPI.isRecognitionException = exceptions_public_1.isRecognitionException;\nAPI.EarlyExitException = exceptions_public_1.EarlyExitException;\nAPI.MismatchedTokenException = exceptions_public_1.MismatchedTokenException;\nAPI.NotAllInputParsedException = exceptions_public_1.NotAllInputParsedException;\nAPI.NoViableAltException = exceptions_public_1.NoViableAltException;\nAPI.defaultLexerErrorProvider = lexer_errors_public_1.defaultLexerErrorProvider;\n//\n// // grammar reflection API\nAPI.Flat = gast_public_1.Flat;\nAPI.Repetition = gast_public_1.Repetition;\nAPI.RepetitionWithSeparator = gast_public_1.RepetitionWithSeparator;\nAPI.RepetitionMandatory = gast_public_1.RepetitionMandatory;\nAPI.RepetitionMandatoryWithSeparator = gast_public_1.RepetitionMandatoryWithSeparator;\nAPI.Option = gast_public_1.Option;\nAPI.Alternation = gast_public_1.Alternation;\nAPI.NonTerminal = gast_public_1.NonTerminal;\nAPI.Terminal = gast_public_1.Terminal;\nAPI.Rule = gast_public_1.Rule;\n// // GAST Utilities\nAPI.GAstVisitor = gast_visitor_public_1.GAstVisitor;\nAPI.serializeGrammar = gast_public_1.serializeGrammar;\nAPI.serializeProduction = gast_public_1.serializeProduction;\nAPI.resolveGrammar = gast_resolver_public_1.resolveGrammar;\nAPI.defaultGrammarResolverErrorProvider = errors_public_1.defaultGrammarResolverErrorProvider;\nAPI.validateGrammar = gast_resolver_public_1.validateGrammar;\nAPI.defaultGrammarValidatorErrorProvider = errors_public_1.defaultGrammarValidatorErrorProvider;\nAPI.assignOccurrenceIndices = gast_resolver_public_1.assignOccurrenceIndices;\n/* istanbul ignore next */\nAPI.clearCache = function () {\n    console.warn(\"The clearCache function was 'soft' removed from the Chevrotain API.\" +\n        \"\\n\\t It performs no action other than printing this message.\" +\n        \"\\n\\t Please avoid using it as it will be completely removed in the future\");\n};\nAPI.createSyntaxDiagramsCode = render_public_1.createSyntaxDiagramsCode;\nAPI.generateParserFactory = generate_public_1.generateParserFactory;\nAPI.generateParserModule = generate_public_1.generateParserModule;\nmodule.exports = API;\n//# sourceMappingURL=api.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/api.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/diagrams/render_public.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/diagrams/render_public.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar version_1 = __webpack_require__(/*! ../version */ \"./node_modules/chevrotain/lib/src/version.js\");\nfunction createSyntaxDiagramsCode(grammar, _a) {\n    var _b = _a === void 0 ? {} : _a, _c = _b.resourceBase, resourceBase = _c === void 0 ? \"https://unpkg.com/chevrotain@\" + version_1.VERSION + \"/diagrams/\" : _c, _d = _b.css, css = _d === void 0 ? \"https://unpkg.com/chevrotain@\" + version_1.VERSION + \"/diagrams/diagrams.css\" : _d;\n    var header = \"\\n<!-- This is a generated file -->\\n<!DOCTYPE html>\\n<meta charset=\\\"utf-8\\\">\\n<style>\\n  body {\\n    background-color: hsl(30, 20%, 95%)\\n  }\\n</style>\\n\\n\";\n    var cssHtml = \"\\n<link rel='stylesheet' href='\" + css + \"'>\\n\";\n    var scripts = \"\\n<script src='\" + resourceBase + \"vendor/railroad-diagrams.js'></script>\\n<script src='\" + resourceBase + \"src/diagrams_builder.js'></script>\\n<script src='\" + resourceBase + \"src/diagrams_behavior.js'></script>\\n<script src='\" + resourceBase + \"src/main.js'></script>\\n\";\n    var diagramsDiv = \"\\n<div id=\\\"diagrams\\\" align=\\\"center\\\"></div>    \\n\";\n    var serializedGrammar = \"\\n<script>\\n    window.serializedGrammar = \" + JSON.stringify(grammar, null, \"  \") + \";\\n</script>\\n\";\n    var initLogic = \"\\n<script>\\n    var diagramsDiv = document.getElementById(\\\"diagrams\\\");\\n    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);\\n</script>\\n\";\n    return (header + cssHtml + scripts + diagramsDiv + serializedGrammar + initLogic);\n}\nexports.createSyntaxDiagramsCode = createSyntaxDiagramsCode;\n//# sourceMappingURL=render_public.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/diagrams/render_public.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/generate/generate.js":
/*!**************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/generate/generate.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar tokens_public_1 = __webpack_require__(/*! ../scan/tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nvar gast_public_1 = __webpack_require__(/*! ../parse/grammar/gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\n/**\n * Missing features\n * 1. Rule arguments\n * 2. Gates\n * 3. embedded actions\n */\nvar NL = \"\\n\";\nfunction genUmdModule(options) {\n    return \"\\n(function (root, factory) {\\n    if (typeof define === 'function' && define.amd) {\\n        // AMD. Register as an anonymous module.\\n        define(['chevrotain'], factory);\\n    } else if (typeof module === 'object' && module.exports) {\\n        // Node. Does not work with strict CommonJS, but\\n        // only CommonJS-like environments that support module.exports,\\n        // like Node.\\n        module.exports = factory(require('chevrotain'));\\n    } else {\\n        // Browser globals (root is window)\\n        root.returnExports = factory(root.b);\\n    }\\n}(typeof self !== 'undefined' ? self : this, function (chevrotain) {\\n\\n\" + genClass(options) + \"\\n    \\nreturn {\\n    \" + options.name + \": \" + options.name + \" \\n}\\n}));\\n\";\n}\nexports.genUmdModule = genUmdModule;\nfunction genWrapperFunction(options) {\n    return \"    \\n\" + genClass(options) + \"\\nreturn new \" + options.name + \"(tokenVocabulary, config)    \\n\";\n}\nexports.genWrapperFunction = genWrapperFunction;\nfunction genClass(options) {\n    // TODO: how to pass the token vocabulary? Constructor? other?\n    // TODO: should outputCst be enabled by default?\n    var result = \"\\nfunction \" + options.name + \"(tokenVocabulary, config) {\\n    // invoke super constructor\\n    chevrotain.Parser.call(this, tokenVocabulary, config)\\n\\n    const $ = this\\n\\n    \" + genAllRules(options.rules) + \"\\n\\n    // very important to call this after all the rules have been defined.\\n    // otherwise the parser may not work correctly as it will lack information\\n    // derived during the self analysis phase.\\n    this.performSelfAnalysis(this)\\n}\\n\\n// inheritance as implemented in javascript in the previous decade... :(\\n\" + options.name + \".prototype = Object.create(chevrotain.Parser.prototype)\\n\" + options.name + \".prototype.constructor = \" + options.name + \"    \\n    \";\n    return result;\n}\nexports.genClass = genClass;\nfunction genAllRules(rules) {\n    var rulesText = utils_1.map(rules, function (currRule) {\n        return genRule(currRule, 1);\n    });\n    return rulesText.join(\"\\n\");\n}\nexports.genAllRules = genAllRules;\nfunction genRule(prod, n) {\n    var result = indent(n, \"$.RULE(\\\"\" + prod.name + \"\\\", function() {\") + NL;\n    result += genDefinition(prod.definition, n + 1);\n    result += indent(n + 1, \"})\") + NL;\n    return result;\n}\nexports.genRule = genRule;\nfunction genTerminal(prod, n) {\n    var name = tokens_public_1.tokenName(prod.terminalType);\n    // TODO: potential performance optimization, avoid tokenMap Dictionary access\n    return indent(n, \"$.CONSUME\" + prod.idx + \"(this.tokensMap.\" + name + \")\" + NL);\n}\nexports.genTerminal = genTerminal;\nfunction genNonTerminal(prod, n) {\n    return indent(n, \"$.SUBRULE\" + prod.idx + \"($.\" + prod.nonTerminalName + \")\" + NL);\n}\nexports.genNonTerminal = genNonTerminal;\nfunction genAlternation(prod, n) {\n    var result = indent(n, \"$.OR\" + prod.idx + \"([\") + NL;\n    var alts = utils_1.map(prod.definition, function (altDef) { return genSingleAlt(altDef, n + 1); });\n    result += alts.join(\",\" + NL);\n    result += NL + indent(n, \"])\" + NL);\n    return result;\n}\nexports.genAlternation = genAlternation;\nfunction genSingleAlt(prod, n) {\n    var result = indent(n, \"{\") + NL;\n    if (prod.name) {\n        result += indent(n + 1, \"NAME: \\\"\" + prod.name + \"\\\",\") + NL;\n    }\n    result += indent(n + 1, \"ALT: function() {\") + NL;\n    result += genDefinition(prod.definition, n + 1);\n    result += indent(n + 1, \"}\") + NL;\n    result += indent(n, \"}\");\n    return result;\n}\nexports.genSingleAlt = genSingleAlt;\nfunction genProd(prod, n) {\n    /* istanbul ignore else */\n    if (prod instanceof gast_public_1.NonTerminal) {\n        return genNonTerminal(prod, n);\n    }\n    else if (prod instanceof gast_public_1.Option) {\n        return genDSLRule(\"OPTION\", prod, n);\n    }\n    else if (prod instanceof gast_public_1.RepetitionMandatory) {\n        return genDSLRule(\"AT_LEAST_ONE\", prod, n);\n    }\n    else if (prod instanceof gast_public_1.RepetitionMandatoryWithSeparator) {\n        return genDSLRule(\"AT_LEAST_ONE_SEP\", prod, n);\n    }\n    else if (prod instanceof gast_public_1.RepetitionWithSeparator) {\n        return genDSLRule(\"MANY_SEP\", prod, n);\n    }\n    else if (prod instanceof gast_public_1.Repetition) {\n        return genDSLRule(\"MANY\", prod, n);\n    }\n    else if (prod instanceof gast_public_1.Alternation) {\n        return genAlternation(prod, n);\n    }\n    else if (prod instanceof gast_public_1.Terminal) {\n        return genTerminal(prod, n);\n    }\n    else if (prod instanceof gast_public_1.Flat) {\n        return genDefinition(prod.definition, n);\n    }\n    else {\n        throw Error(\"non exhaustive match\");\n    }\n}\nfunction genDSLRule(dslName, prod, n) {\n    var result = indent(n, \"$.\" + (dslName + prod.idx) + \"(\");\n    if (prod.name || prod.separator) {\n        result += \"{\" + NL;\n        if (prod.name) {\n            result += indent(n + 1, \"NAME: \\\"\" + prod.name + \"\\\"\") + \",\" + NL;\n        }\n        if (prod.separator) {\n            result +=\n                indent(n + 1, \"SEP: this.tokensMap.\" + tokens_public_1.tokenName(prod.separator)) +\n                    \",\" +\n                    NL;\n        }\n        result += \"DEF: \" + genDefFunction(prod.definition, n + 2) + NL;\n        result += indent(n, \"}\") + NL;\n    }\n    else {\n        result += genDefFunction(prod.definition, n + 1);\n    }\n    result += indent(n, \")\") + NL;\n    return result;\n}\nfunction genDefFunction(definition, n) {\n    var def = \"function() {\" + NL;\n    def += genDefinition(definition, n);\n    def += indent(n, \"}\") + NL;\n    return def;\n}\nfunction genDefinition(def, n) {\n    var result = \"\";\n    utils_1.forEach(def, function (prod) {\n        result += genProd(prod, n + 1);\n    });\n    return result;\n}\nfunction indent(howMuch, text) {\n    var spaces = Array(howMuch * 4 + 1).join(\" \");\n    return spaces + text;\n}\n//# sourceMappingURL=generate.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/generate/generate.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/generate/generate_public.js":
/*!*********************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/generate/generate_public.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar generate_1 = __webpack_require__(/*! ./generate */ \"./node_modules/chevrotain/lib/src/generate/generate.js\");\nfunction generateParserFactory(options) {\n    var wrapperText = generate_1.genWrapperFunction({\n        name: options.name,\n        rules: options.rules\n    });\n    var constructorWrapper = new Function(\"tokenVocabulary\", \"config\", \"chevrotain\", wrapperText);\n    return function (config) {\n        return constructorWrapper(options.tokenVocabulary, config, \n        // TODO: check how the require is transpiled/webpacked\n        __webpack_require__(/*! ../api */ \"./node_modules/chevrotain/lib/src/api.js\"));\n    };\n}\nexports.generateParserFactory = generateParserFactory;\nfunction generateParserModule(options) {\n    return generate_1.genUmdModule({ name: options.name, rules: options.rules });\n}\nexports.generateParserModule = generateParserModule;\n//# sourceMappingURL=generate_public.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/generate/generate_public.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/lang/lang_extensions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/lang/lang_extensions.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nfunction classNameFromInstance(instance) {\n    return functionName(instance.constructor);\n}\nexports.classNameFromInstance = classNameFromInstance;\nvar FUNC_NAME_REGEXP = /^\\s*function\\s*(\\S*)\\s*\\(/;\nvar NAME = \"name\";\n/* istanbul ignore next too many hacks for IE/old versions of node.js here*/\nfunction functionName(func) {\n    // Engines that support Function.prototype.name OR the nth (n>1) time after\n    // the name has been computed in the following else block.\n    var existingNameProp = func.name;\n    if (existingNameProp) {\n        return existingNameProp;\n    }\n    // hack for IE and engines that do not support Object.defineProperty on function.name (Node.js 0.10 && 0.12)\n    var computedName = func.toString().match(FUNC_NAME_REGEXP)[1];\n    return computedName;\n}\nexports.functionName = functionName;\n/**\n * @returns {boolean} - has the property been successfully defined\n */\nfunction defineNameProp(obj, nameValue) {\n    var namePropDescriptor = Object.getOwnPropertyDescriptor(obj, NAME);\n    /* istanbul ignore else -> will only run in old versions of node.js */\n    if (utils_1.isUndefined(namePropDescriptor) || namePropDescriptor.configurable) {\n        Object.defineProperty(obj, NAME, {\n            enumerable: false,\n            configurable: true,\n            writable: false,\n            value: nameValue\n        });\n        return true;\n    }\n    /* istanbul ignore next -> will only run in old versions of node.js */\n    return false;\n}\nexports.defineNameProp = defineNameProp;\n/**\n * simple Hashtable between a string and some generic value\n * this should be removed once typescript supports ES6 style Hashtable\n */\nvar HashTable = /** @class */ (function () {\n    function HashTable() {\n        this._state = {};\n    }\n    HashTable.prototype.keys = function () {\n        return utils_1.keys(this._state);\n    };\n    HashTable.prototype.values = function () {\n        return utils_1.values(this._state);\n    };\n    HashTable.prototype.put = function (key, value) {\n        this._state[key] = value;\n    };\n    HashTable.prototype.putAll = function (other) {\n        this._state = utils_1.assign(this._state, other._state);\n    };\n    HashTable.prototype.get = function (key) {\n        // To avoid edge case with a key called \"hasOwnProperty\" we need to perform the commented out check below\n        // -> if (Object.prototype.hasOwnProperty.call(this._state, key)) { ... } <-\n        // however this costs nearly 25% of the parser's runtime.\n        // if someone decides to name their Parser class \"hasOwnProperty\" they deserve what they will get :)\n        return this._state[key];\n    };\n    HashTable.prototype.containsKey = function (key) {\n        return utils_1.has(this._state, key);\n    };\n    HashTable.prototype.clear = function () {\n        this._state = {};\n    };\n    return HashTable;\n}());\nexports.HashTable = HashTable;\n//# sourceMappingURL=lang_extensions.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/lang/lang_extensions.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/constants.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// TODO: can this be removed? where is it used?\nexports.IN = \"_~IN~_\";\n//# sourceMappingURL=constants.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/constants.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/cst/cst.js":
/*!**********************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/cst/cst.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar lang_extensions_1 = __webpack_require__(/*! ../../lang/lang_extensions */ \"./node_modules/chevrotain/lib/src/lang/lang_extensions.js\");\nvar keys_1 = __webpack_require__(/*! ../grammar/keys */ \"./node_modules/chevrotain/lib/src/parse/grammar/keys.js\");\nvar gast_public_1 = __webpack_require__(/*! ../grammar/gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\nvar gast_visitor_public_1 = __webpack_require__(/*! ../grammar/gast/gast_visitor_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_visitor_public.js\");\nfunction addTerminalToCst(node, token, tokenTypeName) {\n    if (node.children[tokenTypeName] === undefined) {\n        node.children[tokenTypeName] = [token];\n    }\n    else {\n        node.children[tokenTypeName].push(token);\n    }\n}\nexports.addTerminalToCst = addTerminalToCst;\nfunction addNoneTerminalToCst(node, ruleName, ruleResult) {\n    if (node.children[ruleName] === undefined) {\n        node.children[ruleName] = [ruleResult];\n    }\n    else {\n        node.children[ruleName].push(ruleResult);\n    }\n}\nexports.addNoneTerminalToCst = addNoneTerminalToCst;\nvar NamedDSLMethodsCollectorVisitor = /** @class */ (function (_super) {\n    __extends(NamedDSLMethodsCollectorVisitor, _super);\n    function NamedDSLMethodsCollectorVisitor(ruleIdx) {\n        var _this = _super.call(this) || this;\n        _this.result = [];\n        _this.ruleIdx = ruleIdx;\n        return _this;\n    }\n    NamedDSLMethodsCollectorVisitor.prototype.collectNamedDSLMethod = function (node, newNodeConstructor, methodIdx) {\n        // TODO: better hack to copy what we need here...\n        if (!utils_1.isUndefined(node.name)) {\n            // copy without name so this will indeed be processed later.\n            var nameLessNode \n            /* istanbul ignore else */\n            = void 0;\n            /* istanbul ignore else */\n            if (node instanceof gast_public_1.Option ||\n                node instanceof gast_public_1.Repetition ||\n                node instanceof gast_public_1.RepetitionMandatory ||\n                node instanceof gast_public_1.Alternation) {\n                nameLessNode = new newNodeConstructor({\n                    definition: node.definition,\n                    idx: node.idx\n                });\n            }\n            else if (node instanceof gast_public_1.RepetitionMandatoryWithSeparator ||\n                node instanceof gast_public_1.RepetitionWithSeparator) {\n                nameLessNode = new newNodeConstructor({\n                    definition: node.definition,\n                    idx: node.idx,\n                    separator: node.separator\n                });\n            }\n            else {\n                throw Error(\"non exhaustive match\");\n            }\n            var def = [nameLessNode];\n            var key = keys_1.getKeyForAutomaticLookahead(this.ruleIdx, methodIdx, node.idx);\n            this.result.push({ def: def, key: key, name: node.name, orgProd: node });\n        }\n    };\n    NamedDSLMethodsCollectorVisitor.prototype.visitOption = function (node) {\n        this.collectNamedDSLMethod(node, gast_public_1.Option, keys_1.OPTION_IDX);\n    };\n    NamedDSLMethodsCollectorVisitor.prototype.visitRepetition = function (node) {\n        this.collectNamedDSLMethod(node, gast_public_1.Repetition, keys_1.MANY_IDX);\n    };\n    NamedDSLMethodsCollectorVisitor.prototype.visitRepetitionMandatory = function (node) {\n        this.collectNamedDSLMethod(node, gast_public_1.RepetitionMandatory, keys_1.AT_LEAST_ONE_IDX);\n    };\n    NamedDSLMethodsCollectorVisitor.prototype.visitRepetitionMandatoryWithSeparator = function (node) {\n        this.collectNamedDSLMethod(node, gast_public_1.RepetitionMandatoryWithSeparator, keys_1.AT_LEAST_ONE_SEP_IDX);\n    };\n    NamedDSLMethodsCollectorVisitor.prototype.visitRepetitionWithSeparator = function (node) {\n        this.collectNamedDSLMethod(node, gast_public_1.RepetitionWithSeparator, keys_1.MANY_SEP_IDX);\n    };\n    NamedDSLMethodsCollectorVisitor.prototype.visitAlternation = function (node) {\n        var _this = this;\n        this.collectNamedDSLMethod(node, gast_public_1.Alternation, keys_1.OR_IDX);\n        var hasMoreThanOneAlternative = node.definition.length > 1;\n        utils_1.forEach(node.definition, function (currFlatAlt, altIdx) {\n            if (!utils_1.isUndefined(currFlatAlt.name)) {\n                var def = currFlatAlt.definition;\n                if (hasMoreThanOneAlternative) {\n                    def = [new gast_public_1.Option({ definition: currFlatAlt.definition })];\n                }\n                else {\n                    // mandatory\n                    def = currFlatAlt.definition;\n                }\n                var key = keys_1.getKeyForAltIndex(_this.ruleIdx, keys_1.OR_IDX, node.idx, altIdx);\n                _this.result.push({\n                    def: def,\n                    key: key,\n                    name: currFlatAlt.name,\n                    orgProd: currFlatAlt\n                });\n            }\n        });\n    };\n    return NamedDSLMethodsCollectorVisitor;\n}(gast_visitor_public_1.GAstVisitor));\nexports.NamedDSLMethodsCollectorVisitor = NamedDSLMethodsCollectorVisitor;\nfunction analyzeCst(topRules, fullToShortName) {\n    var result = {\n        dictDef: new lang_extensions_1.HashTable(),\n        allRuleNames: []\n    };\n    utils_1.forEach(topRules, function (currTopRule) {\n        var currTopRuleShortName = fullToShortName.get(currTopRule.name);\n        result.allRuleNames.push(currTopRule.name);\n        var namedCollectorVisitor = new NamedDSLMethodsCollectorVisitor(currTopRuleShortName);\n        currTopRule.accept(namedCollectorVisitor);\n        utils_1.forEach(namedCollectorVisitor.result, function (_a) {\n            var def = _a.def, key = _a.key, name = _a.name;\n            result.allRuleNames.push(currTopRule.name + name);\n        });\n    });\n    return result;\n}\nexports.analyzeCst = analyzeCst;\n//# sourceMappingURL=cst.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/cst/cst.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js":
/*!******************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar lang_extensions_1 = __webpack_require__(/*! ../../lang/lang_extensions */ \"./node_modules/chevrotain/lib/src/lang/lang_extensions.js\");\nvar checks_1 = __webpack_require__(/*! ../grammar/checks */ \"./node_modules/chevrotain/lib/src/parse/grammar/checks.js\");\nfunction defaultVisit(ctx, param) {\n    var childrenNames = utils_1.keys(ctx);\n    var childrenNamesLength = childrenNames.length;\n    for (var i = 0; i < childrenNamesLength; i++) {\n        var currChildName = childrenNames[i];\n        var currChildArray = ctx[currChildName];\n        var currChildArrayLength = currChildArray.length;\n        for (var j = 0; j < currChildArrayLength; j++) {\n            var currChild = currChildArray[j];\n            // distinction between Tokens Children and CstNode children\n            if (currChild.tokenTypeIdx === undefined) {\n                if (currChild.fullName !== undefined) {\n                    this[currChild.fullName](currChild.children, param);\n                }\n                else {\n                    this[currChild.name](currChild.children, param);\n                }\n            }\n        }\n    }\n    // defaultVisit does not support generic out param\n    return undefined;\n}\nexports.defaultVisit = defaultVisit;\nfunction createBaseSemanticVisitorConstructor(grammarName, ruleNames) {\n    var derivedConstructor = function () { };\n    // can be overwritten according to:\n    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/\n    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname\n    lang_extensions_1.defineNameProp(derivedConstructor, grammarName + \"BaseSemantics\");\n    var semanticProto = {\n        visit: function (cstNode, param) {\n            // enables writing more concise visitor methods when CstNode has only a single child\n            if (utils_1.isArray(cstNode)) {\n                // A CST Node's children dictionary can never have empty arrays as values\n                // If a key is defined there will be at least one element in the corresponding value array.\n                cstNode = cstNode[0];\n            }\n            // enables passing optional CstNodes concisely.\n            if (utils_1.isUndefined(cstNode)) {\n                return undefined;\n            }\n            if (cstNode.fullName !== undefined) {\n                return this[cstNode.fullName](cstNode.children, param);\n            }\n            else {\n                return this[cstNode.name](cstNode.children, param);\n            }\n        },\n        validateVisitor: function () {\n            var semanticDefinitionErrors = validateVisitor(this, ruleNames);\n            if (!utils_1.isEmpty(semanticDefinitionErrors)) {\n                var errorMessages = utils_1.map(semanticDefinitionErrors, function (currDefError) { return currDefError.msg; });\n                throw Error(\"Errors Detected in CST Visitor <\" + lang_extensions_1.functionName(this.constructor) + \">:\\n\\t\" +\n                    (\"\" + errorMessages.join(\"\\n\\n\").replace(/\\n/g, \"\\n\\t\")));\n            }\n        }\n    };\n    derivedConstructor.prototype = semanticProto;\n    derivedConstructor.prototype.constructor = derivedConstructor;\n    derivedConstructor._RULE_NAMES = ruleNames;\n    return derivedConstructor;\n}\nexports.createBaseSemanticVisitorConstructor = createBaseSemanticVisitorConstructor;\nfunction createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {\n    var derivedConstructor = function () { };\n    // can be overwritten according to:\n    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/\n    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname\n    lang_extensions_1.defineNameProp(derivedConstructor, grammarName + \"BaseSemanticsWithDefaults\");\n    var withDefaultsProto = Object.create(baseConstructor.prototype);\n    utils_1.forEach(ruleNames, function (ruleName) {\n        withDefaultsProto[ruleName] = defaultVisit;\n    });\n    derivedConstructor.prototype = withDefaultsProto;\n    derivedConstructor.prototype.constructor = derivedConstructor;\n    return derivedConstructor;\n}\nexports.createBaseVisitorConstructorWithDefaults = createBaseVisitorConstructorWithDefaults;\nvar CstVisitorDefinitionError;\n(function (CstVisitorDefinitionError) {\n    CstVisitorDefinitionError[CstVisitorDefinitionError[\"REDUNDANT_METHOD\"] = 0] = \"REDUNDANT_METHOD\";\n    CstVisitorDefinitionError[CstVisitorDefinitionError[\"MISSING_METHOD\"] = 1] = \"MISSING_METHOD\";\n})(CstVisitorDefinitionError = exports.CstVisitorDefinitionError || (exports.CstVisitorDefinitionError = {}));\nfunction validateVisitor(visitorInstance, ruleNames) {\n    var missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);\n    var redundantErrors = validateRedundantMethods(visitorInstance, ruleNames);\n    return missingErrors.concat(redundantErrors);\n}\nexports.validateVisitor = validateVisitor;\nfunction validateMissingCstMethods(visitorInstance, ruleNames) {\n    var errors = utils_1.map(ruleNames, function (currRuleName) {\n        if (!utils_1.isFunction(visitorInstance[currRuleName])) {\n            return {\n                msg: \"Missing visitor method: <\" + currRuleName + \"> on \" + lang_extensions_1.functionName(visitorInstance.constructor) + \" CST Visitor.\",\n                type: CstVisitorDefinitionError.MISSING_METHOD,\n                methodName: currRuleName\n            };\n        }\n    });\n    return utils_1.compact(errors);\n}\nexports.validateMissingCstMethods = validateMissingCstMethods;\nvar VALID_PROP_NAMES = [\"constructor\", \"visit\", \"validateVisitor\"];\nfunction validateRedundantMethods(visitorInstance, ruleNames) {\n    var errors = [];\n    for (var prop in visitorInstance) {\n        if (checks_1.validTermsPattern.test(prop) &&\n            utils_1.isFunction(visitorInstance[prop]) &&\n            !utils_1.contains(VALID_PROP_NAMES, prop) &&\n            !utils_1.contains(ruleNames, prop)) {\n            errors.push({\n                msg: \"Redundant visitor method: <\" + prop + \"> on \" + lang_extensions_1.functionName(visitorInstance.constructor) + \" CST Visitor\\n\" +\n                    \"There is no Grammar Rule corresponding to this method's name.\\n\" +\n                    (\"For utility methods on visitor classes use methods names that do not match /\" + checks_1.validTermsPattern.source + \"/.\"),\n                type: CstVisitorDefinitionError.REDUNDANT_METHOD,\n                methodName: prop\n            });\n        }\n    }\n    return errors;\n}\nexports.validateRedundantMethods = validateRedundantMethods;\n//# sourceMappingURL=cst_visitor.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/errors_public.js":
/*!****************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/errors_public.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tokens_public_1 = __webpack_require__(/*! ../scan/tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nvar utils = __webpack_require__(/*! ../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar utils_1 = __webpack_require__(/*! ../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar gast_public_1 = __webpack_require__(/*! ./grammar/gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\nvar gast_1 = __webpack_require__(/*! ./grammar/gast/gast */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast.js\");\nvar checks_1 = __webpack_require__(/*! ./grammar/checks */ \"./node_modules/chevrotain/lib/src/parse/grammar/checks.js\");\nvar version_1 = __webpack_require__(/*! ../version */ \"./node_modules/chevrotain/lib/src/version.js\");\nvar parser_1 = __webpack_require__(/*! ./parser/parser */ \"./node_modules/chevrotain/lib/src/parse/parser/parser.js\");\nexports.defaultParserErrorProvider = {\n    buildMismatchTokenMessage: function (_a) {\n        var expected = _a.expected, actual = _a.actual, previous = _a.previous, ruleName = _a.ruleName;\n        var hasLabel = tokens_public_1.hasTokenLabel(expected);\n        var expectedMsg = hasLabel\n            ? \"--> \" + tokens_public_1.tokenLabel(expected) + \" <--\"\n            : \"token of type --> \" + tokens_public_1.tokenName(expected) + \" <--\";\n        var msg = \"Expecting \" + expectedMsg + \" but found --> '\" + actual.image + \"' <--\";\n        return msg;\n    },\n    buildNotAllInputParsedMessage: function (_a) {\n        var firstRedundant = _a.firstRedundant, ruleName = _a.ruleName;\n        return (\"Redundant input, expecting EOF but found: \" + firstRedundant.image);\n    },\n    buildNoViableAltMessage: function (_a) {\n        var expectedPathsPerAlt = _a.expectedPathsPerAlt, actual = _a.actual, previous = _a.previous, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName;\n        var errPrefix = \"Expecting: \";\n        // TODO: issue: No Viable Alternative Error may have incomplete details. #502\n        var actualText = utils_1.first(actual).image;\n        var errSuffix = \"\\nbut found: '\" + actualText + \"'\";\n        if (customUserDescription) {\n            return errPrefix + customUserDescription + errSuffix;\n        }\n        else {\n            var allLookAheadPaths = utils_1.reduce(expectedPathsPerAlt, function (result, currAltPaths) { return result.concat(currAltPaths); }, []);\n            var nextValidTokenSequences = utils_1.map(allLookAheadPaths, function (currPath) {\n                return \"[\" + utils_1.map(currPath, function (currTokenType) {\n                    return tokens_public_1.tokenLabel(currTokenType);\n                }).join(\", \") + \"]\";\n            });\n            var nextValidSequenceItems = utils_1.map(nextValidTokenSequences, function (itemMsg, idx) { return \"  \" + (idx + 1) + \". \" + itemMsg; });\n            var calculatedDescription = \"one of these possible Token sequences:\\n\" + nextValidSequenceItems.join(\"\\n\");\n            return errPrefix + calculatedDescription + errSuffix;\n        }\n    },\n    buildEarlyExitMessage: function (_a) {\n        var expectedIterationPaths = _a.expectedIterationPaths, actual = _a.actual, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName;\n        var errPrefix = \"Expecting: \";\n        // TODO: issue: No Viable Alternative Error may have incomplete details. #502\n        var actualText = utils_1.first(actual).image;\n        var errSuffix = \"\\nbut found: '\" + actualText + \"'\";\n        if (customUserDescription) {\n            return errPrefix + customUserDescription + errSuffix;\n        }\n        else {\n            var nextValidTokenSequences = utils_1.map(expectedIterationPaths, function (currPath) {\n                return \"[\" + utils_1.map(currPath, function (currTokenType) {\n                    return tokens_public_1.tokenLabel(currTokenType);\n                }).join(\",\") + \"]\";\n            });\n            var calculatedDescription = \"expecting at least one iteration which starts with one of these possible Token sequences::\\n  \" +\n                (\"<\" + nextValidTokenSequences.join(\" ,\") + \">\");\n            return errPrefix + calculatedDescription + errSuffix;\n        }\n    }\n};\nObject.freeze(exports.defaultParserErrorProvider);\nexports.defaultGrammarResolverErrorProvider = {\n    buildRuleNotFoundError: function (topLevelRule, undefinedRule) {\n        var msg = \"Invalid grammar, reference to a rule which is not defined: ->\" +\n            undefinedRule.nonTerminalName +\n            \"<-\\n\" +\n            \"inside top level rule: ->\" +\n            topLevelRule.name +\n            \"<-\";\n        return msg;\n    }\n};\nexports.defaultGrammarValidatorErrorProvider = {\n    buildDuplicateFoundError: function (topLevelRule, duplicateProds) {\n        function getExtraProductionArgument(prod) {\n            if (prod instanceof gast_public_1.Terminal) {\n                return tokens_public_1.tokenName(prod.terminalType);\n            }\n            else if (prod instanceof gast_public_1.NonTerminal) {\n                return prod.nonTerminalName;\n            }\n            else {\n                return \"\";\n            }\n        }\n        var topLevelName = topLevelRule.name;\n        var duplicateProd = utils_1.first(duplicateProds);\n        var index = duplicateProd.idx;\n        var dslName = gast_1.getProductionDslName(duplicateProd);\n        var extraArgument = getExtraProductionArgument(duplicateProd);\n        var msg = \"->\" + dslName + \"<- with numerical suffix: ->\" + index + \"<-\\n                  \" + (extraArgument ? \"and argument: ->\" + extraArgument + \"<-\" : \"\") + \"\\n                  appears more than once (\" + duplicateProds.length + \" times) in the top level rule: ->\" + topLevelName + \"<-.\\n                  \" + (index === 0\n            ? \"Also note that numerical suffix 0 means \" + dslName + \" without any suffix.\"\n            : \"\") + \"\\n                  To fix this make sure each usage of \" + dslName + \" \" + (extraArgument ? \"with the argument: ->\" + extraArgument + \"<-\" : \"\") + \"\\n                  in the rule ->\" + topLevelName + \"<- has a different occurrence index (0-5), as that combination acts as a unique\\n                  position key in the grammar, which is needed by the parsing engine.\\n                  \\n                  For further details see: https://sap.github.io/chevrotain/docs/FAQ.html#NUMERICAL_SUFFIXES \\n                  \";\n        // white space trimming time! better to trim afterwards as it allows to use WELL formatted multi line template strings...\n        msg = msg.replace(/[ \\t]+/g, \" \");\n        msg = msg.replace(/\\s\\s+/g, \"\\n\");\n        return msg;\n    },\n    buildInvalidNestedRuleNameError: function (topLevelRule, nestedProd) {\n        var msg = \"Invalid nested rule name: ->\" + nestedProd.name + \"<- inside rule: ->\" + topLevelRule.name + \"<-\\n\" +\n            (\"it must match the pattern: ->\" + checks_1.validNestedRuleName.toString() + \"<-.\\n\") +\n            \"Note that this means a nested rule name must start with the '$'(dollar) sign.\";\n        return msg;\n    },\n    buildDuplicateNestedRuleNameError: function (topLevelRule, nestedProd) {\n        var duplicateName = utils_1.first(nestedProd).name;\n        var errMsg = \"Duplicate nested rule name: ->\" + duplicateName + \"<- inside rule: ->\" + topLevelRule.name + \"<-\\n\" +\n            \"A nested name must be unique in the scope of a top level grammar rule.\";\n        return errMsg;\n    },\n    buildNamespaceConflictError: function (rule) {\n        var errMsg = \"Namespace conflict found in grammar.\\n\" +\n            (\"The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <\" + rule.name + \">.\\n\") +\n            \"To resolve this make sure each Terminal and Non-Terminal names are unique\\n\" +\n            \"This is easy to accomplish by using the convention that Terminal names start with an uppercase letter\\n\" +\n            \"and Non-Terminal names start with a lower case letter.\";\n        return errMsg;\n    },\n    buildAlternationPrefixAmbiguityError: function (options) {\n        var pathMsg = utils_1.map(options.prefixPath, function (currTok) {\n            return tokens_public_1.tokenLabel(currTok);\n        }).join(\", \");\n        var occurrence = options.alternation.idx === 0 ? \"\" : options.alternation.idx;\n        var errMsg = \"Ambiguous alternatives: <\" + options.ambiguityIndices.join(\" ,\") + \"> due to common lookahead prefix\\n\" +\n            (\"in <OR\" + occurrence + \"> inside <\" + options.topLevelRule.name + \"> Rule,\\n\") +\n            (\"<\" + pathMsg + \"> may appears as a prefix path in all these alternatives.\\n\") +\n            \"https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\\n\" +\n            \"For Further details.\";\n        return errMsg;\n    },\n    buildAlternationAmbiguityError: function (options) {\n        var pathMsg = utils_1.map(options.prefixPath, function (currtok) {\n            return tokens_public_1.tokenLabel(currtok);\n        }).join(\", \");\n        var occurrence = options.alternation.idx === 0 ? \"\" : options.alternation.idx;\n        var currMessage = \"Ambiguous alternatives: <\" + options.ambiguityIndices.join(\" ,\") + \"> in <OR\" + occurrence + \">\" +\n            (\" inside <\" + options.topLevelRule.name + \"> Rule,\\n\") +\n            (\"<\" + pathMsg + \"> may appears as a prefix path in all these alternatives.\\n\");\n        var docs_version = version_1.VERSION.replace(/\\./g, \"_\");\n        // Should this information be on the error message or in some common errors docs?\n        currMessage =\n            currMessage +\n                \"To Resolve this, try one of of the following: \\n\" +\n                (\"1. Refactor your grammar to be LL(K) for the current value of k (by default k=\" + parser_1.DEFAULT_PARSER_CONFIG.maxLookahead + \"})\\n\") +\n                \"2. Increase the value of K for your grammar by providing a larger 'maxLookahead' value in the parser's config\\n\" +\n                \"3. This issue can be ignored (if you know what you are doing...), see\" +\n                \" https://sap.github.io/chevrotain/documentation/\" +\n                docs_version +\n                \"/interfaces/iparserconfig.html#ignoredissues for more\" +\n                \" details\\n\";\n        return currMessage;\n    },\n    buildEmptyRepetitionError: function (options) {\n        var dslName = gast_1.getProductionDslName(options.repetition);\n        if (options.repetition.idx !== 0) {\n            dslName += options.repetition.idx;\n        }\n        var errMsg = \"The repetition <\" + dslName + \"> within Rule <\" + options.topLevelRule.name + \"> can never consume any tokens.\\n\" +\n            \"This could lead to an infinite loop.\";\n        return errMsg;\n    },\n    buildTokenNameError: function (options) {\n        var tokTypeName = tokens_public_1.tokenName(options.tokenType);\n        var errMsg = \"Invalid Grammar Token name: ->\" + tokTypeName + \"<- it must match the pattern: ->\" + options.expectedPattern.toString() + \"<-\";\n        return errMsg;\n    },\n    buildEmptyAlternationError: function (options) {\n        var errMsg = \"Ambiguous empty alternative: <\" + (options.emptyChoiceIdx + 1) + \">\" +\n            (\" in <OR\" + options.alternation.idx + \"> inside <\" + options.topLevelRule.name + \"> Rule.\\n\") +\n            \"Only the last alternative may be an empty alternative.\";\n        return errMsg;\n    },\n    buildTooManyAlternativesError: function (options) {\n        var errMsg = \"An Alternation cannot have more than 256 alternatives:\\n\" +\n            (\"<OR\" + options.alternation.idx + \"> inside <\" + options.topLevelRule.name + \"> Rule.\\n has \" + (options.alternation.definition.length +\n                1) + \" alternatives.\");\n        return errMsg;\n    },\n    buildLeftRecursionError: function (options) {\n        var ruleName = options.topLevelRule.name;\n        var pathNames = utils.map(options.leftRecursionPath, function (currRule) { return currRule.name; });\n        var leftRecursivePath = ruleName + \" --> \" + pathNames\n            .concat([ruleName])\n            .join(\" --> \");\n        var errMsg = \"Left Recursion found in grammar.\\n\" +\n            (\"rule: <\" + ruleName + \"> can be invoked from itself (directly or indirectly)\\n\") +\n            (\"without consuming any Tokens. The grammar path that causes this is: \\n \" + leftRecursivePath + \"\\n\") +\n            \" To fix this refactor your grammar to remove the left recursion.\\n\" +\n            \"see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.\";\n        return errMsg;\n    },\n    buildInvalidRuleNameError: function (options) {\n        var ruleName = options.topLevelRule.name;\n        var expectedPatternString = options.expectedPattern.toString();\n        var errMsg = \"Invalid grammar rule name: ->\" + ruleName + \"<- it must match the pattern: ->\" + expectedPatternString + \"<-\";\n        return errMsg;\n    },\n    buildDuplicateRuleNameError: function (options) {\n        var ruleName;\n        if (options.topLevelRule instanceof gast_public_1.Rule) {\n            ruleName = options.topLevelRule.name;\n        }\n        else {\n            ruleName = options.topLevelRule;\n        }\n        var errMsg = \"Duplicate definition, rule: ->\" + ruleName + \"<- is already defined in the grammar: ->\" + options.grammarName + \"<-\";\n        return errMsg;\n    }\n};\n//# sourceMappingURL=errors_public.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/errors_public.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/exceptions_public.js":
/*!********************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/exceptions_public.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar MISMATCHED_TOKEN_EXCEPTION = \"MismatchedTokenException\";\nvar NO_VIABLE_ALT_EXCEPTION = \"NoViableAltException\";\nvar EARLY_EXIT_EXCEPTION = \"EarlyExitException\";\nvar NOT_ALL_INPUT_PARSED_EXCEPTION = \"NotAllInputParsedException\";\nvar RECOGNITION_EXCEPTION_NAMES = [\n    MISMATCHED_TOKEN_EXCEPTION,\n    NO_VIABLE_ALT_EXCEPTION,\n    EARLY_EXIT_EXCEPTION,\n    NOT_ALL_INPUT_PARSED_EXCEPTION\n];\nObject.freeze(RECOGNITION_EXCEPTION_NAMES);\n// hacks to bypass no support for custom Errors in javascript/typescript\nfunction isRecognitionException(error) {\n    // can't do instanceof on hacked custom js exceptions\n    return utils_1.contains(RECOGNITION_EXCEPTION_NAMES, error.name);\n}\nexports.isRecognitionException = isRecognitionException;\nfunction MismatchedTokenException(message, token, previousToken) {\n    this.name = MISMATCHED_TOKEN_EXCEPTION;\n    this.message = message;\n    this.token = token;\n    this.previousToken = previousToken;\n    this.resyncedTokens = [];\n}\nexports.MismatchedTokenException = MismatchedTokenException;\n// must use the \"Error.prototype\" instead of \"new Error\"\n// because the stack trace points to where \"new Error\" was invoked\"\nMismatchedTokenException.prototype = Error.prototype;\nfunction NoViableAltException(message, token, previousToken) {\n    this.name = NO_VIABLE_ALT_EXCEPTION;\n    this.message = message;\n    this.token = token;\n    this.previousToken = previousToken;\n    this.resyncedTokens = [];\n}\nexports.NoViableAltException = NoViableAltException;\nNoViableAltException.prototype = Error.prototype;\nfunction NotAllInputParsedException(message, token) {\n    this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;\n    this.message = message;\n    this.token = token;\n    this.resyncedTokens = [];\n}\nexports.NotAllInputParsedException = NotAllInputParsedException;\nNotAllInputParsedException.prototype = Error.prototype;\nfunction EarlyExitException(message, token, previousToken) {\n    this.name = EARLY_EXIT_EXCEPTION;\n    this.message = message;\n    this.token = token;\n    this.previousToken = previousToken;\n    this.resyncedTokens = [];\n}\nexports.EarlyExitException = EarlyExitException;\nEarlyExitException.prototype = Error.prototype;\n//# sourceMappingURL=exceptions_public.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/exceptions_public.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/gast_builder.js":
/*!***************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/gast_builder.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar range_1 = __webpack_require__(/*! ../text/range */ \"./node_modules/chevrotain/lib/src/text/range.js\");\nvar utils_1 = __webpack_require__(/*! ../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar gast_public_1 = __webpack_require__(/*! ./grammar/gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\nvar ProdType;\n(function (ProdType) {\n    ProdType[ProdType[\"OPTION\"] = 0] = \"OPTION\";\n    ProdType[ProdType[\"OR\"] = 1] = \"OR\";\n    ProdType[ProdType[\"MANY\"] = 2] = \"MANY\";\n    ProdType[ProdType[\"MANY_SEP\"] = 3] = \"MANY_SEP\";\n    ProdType[ProdType[\"AT_LEAST_ONE\"] = 4] = \"AT_LEAST_ONE\";\n    ProdType[ProdType[\"AT_LEAST_ONE_SEP\"] = 5] = \"AT_LEAST_ONE_SEP\";\n    ProdType[ProdType[\"REF\"] = 6] = \"REF\";\n    ProdType[ProdType[\"TERMINAL\"] = 7] = \"TERMINAL\";\n    ProdType[ProdType[\"FLAT\"] = 8] = \"FLAT\";\n})(ProdType = exports.ProdType || (exports.ProdType = {}));\nvar namePropRegExp = /(?:\\s*{\\s*NAME\\s*:\\s*[\"'`]([\\w$]*)[\"'`])?/;\nvar namePropRegExpNoCurlyFirstOfTwo = new RegExp(namePropRegExp.source\n    // remove opening curly brackets\n    .replace(\"{\", \"\")\n    // add the comma between the NAME prop and the following prop\n    .replace(\")?\", \"\\\\s*,)?\"));\nvar terminalRegEx = /\\.\\s*CONSUME(\\d+)?\\s*\\(\\s*(?:[a-zA-Z_$]\\w*\\s*\\.\\s*)*([a-zA-Z_$]\\w*)/;\nvar terminalRegGlobal = new RegExp(terminalRegEx.source, \"g\");\nvar refRegEx = /\\.\\s*SUBRULE(\\d+)?\\s*\\(\\s*(?:[a-zA-Z_$]\\w*\\s*\\.\\s*)*([a-zA-Z_$]\\w*)/;\nvar refRegExGlobal = new RegExp(refRegEx.source, \"g\");\nvar optionPrefixRegEx = /\\.\\s*OPTION(\\d+)?\\s*\\(/;\nvar optionRegEx = new RegExp(optionPrefixRegEx.source + namePropRegExp.source);\nvar optionRegExGlobal = new RegExp(optionPrefixRegEx.source, \"g\");\nvar manyPrefixRegEx = /\\.\\s*MANY(\\d+)?\\s*\\(/;\nvar manyRegEx = new RegExp(manyPrefixRegEx.source + namePropRegExp.source);\nvar manyRegExGlobal = new RegExp(manyPrefixRegEx.source, \"g\");\nvar sepPropRegEx = /\\s*SEP\\s*:\\s*(?:[a-zA-Z_$]\\w*\\s*\\.\\s*)*([a-zA-Z_$]\\w*)/;\nvar manySepPrefixRegEx = /\\.\\s*MANY_SEP(\\d+)?\\s*\\(\\s*{/;\nvar manyWithSeparatorRegEx = new RegExp(manySepPrefixRegEx.source +\n    namePropRegExpNoCurlyFirstOfTwo.source +\n    sepPropRegEx.source);\nvar manyWithSeparatorRegExGlobal = new RegExp(manyWithSeparatorRegEx.source, \"g\");\nvar atLeastOneSepPrefixRegEx = /\\.\\s*AT_LEAST_ONE_SEP(\\d+)?\\s*\\(\\s*{/;\nvar atLeastOneWithSeparatorRegEx = new RegExp(atLeastOneSepPrefixRegEx.source +\n    namePropRegExpNoCurlyFirstOfTwo.source +\n    sepPropRegEx.source);\nvar atLeastOneWithSeparatorRegExGlobal = new RegExp(atLeastOneWithSeparatorRegEx.source, \"g\");\nvar atLeastOnePrefixRegEx = /\\.\\s*AT_LEAST_ONE(\\d+)?\\s*\\(/;\nvar atLeastOneRegEx = new RegExp(atLeastOnePrefixRegEx.source + namePropRegExp.source);\nvar atLeastOneRegExGlobal = new RegExp(atLeastOnePrefixRegEx.source, \"g\");\nvar orPrefixRegEx = /\\.\\s*OR(\\d+)?\\s*\\(/;\nvar orRegEx = new RegExp(orPrefixRegEx.source + namePropRegExp.source);\nvar orRegExGlobal = new RegExp(orPrefixRegEx.source, \"g\");\nvar orPartSuffixRegEx = /\\s*(ALT)\\s*:/;\nvar orPartRegEx = new RegExp(namePropRegExpNoCurlyFirstOfTwo.source + orPartSuffixRegEx.source);\nvar orPartRegExGlobal = new RegExp(orPartRegEx.source, \"g\");\nexports.terminalNameToConstructor = {};\nfunction buildTopProduction(impelText, name, terminals) {\n    // pseudo state. so little state does not yet mandate the complexity of wrapping in a class...\n    // TODO: this is confusing, might be time to create a class..\n    exports.terminalNameToConstructor = terminals;\n    // the top most range must strictly contain all the other ranges\n    // which is why we prefix the text with \" \" (curr Range impel is only for positive ranges)\n    var spacedImpelText = \" \" + impelText;\n    // TODO: why do we add whitespace twice?\n    var txtWithoutComments = removeComments(\" \" + spacedImpelText);\n    var textWithoutCommentsAndStrings = removeStringLiterals(txtWithoutComments);\n    var prodRanges = createRanges(textWithoutCommentsAndStrings);\n    var topRange = new range_1.Range(0, impelText.length + 2);\n    var topRule = buildTopLevel(name, topRange, prodRanges, impelText);\n    return topRule;\n}\nexports.buildTopProduction = buildTopProduction;\nfunction buildTopLevel(name, topRange, allRanges, orgText) {\n    var topLevelProd = new gast_public_1.Rule({\n        name: name,\n        definition: [],\n        orgText: orgText\n    });\n    return buildAbstractProd(topLevelProd, topRange, allRanges);\n}\nfunction buildProdGast(prodRange, allRanges) {\n    switch (prodRange.type) {\n        case ProdType.AT_LEAST_ONE:\n            return buildAtLeastOneProd(prodRange, allRanges);\n        case ProdType.AT_LEAST_ONE_SEP:\n            return buildAtLeastOneSepProd(prodRange, allRanges);\n        case ProdType.MANY_SEP:\n            return buildManySepProd(prodRange, allRanges);\n        case ProdType.MANY:\n            return buildManyProd(prodRange, allRanges);\n        case ProdType.OPTION:\n            return buildOptionProd(prodRange, allRanges);\n        case ProdType.OR:\n            return buildOrProd(prodRange, allRanges);\n        case ProdType.FLAT:\n            return buildFlatProd(prodRange, allRanges);\n        case ProdType.REF:\n            return buildRefProd(prodRange);\n        case ProdType.TERMINAL:\n            return buildTerminalProd(prodRange);\n        /* istanbul ignore next */\n        default:\n            throw Error(\"non exhaustive match\");\n    }\n}\nexports.buildProdGast = buildProdGast;\nfunction buildRefProd(prodRange) {\n    var reResult = refRegEx.exec(prodRange.text);\n    var isImplicitOccurrenceIdx = reResult[1] === undefined;\n    var refOccurrence = isImplicitOccurrenceIdx ? 0 : parseInt(reResult[1], 10);\n    var refProdName = reResult[2];\n    var newRef = new gast_public_1.NonTerminal({\n        nonTerminalName: refProdName,\n        idx: refOccurrence\n    });\n    return newRef;\n}\nfunction buildTerminalProd(prodRange) {\n    var reResult = terminalRegEx.exec(prodRange.text);\n    var isImplicitOccurrenceIdx = reResult[1] === undefined;\n    var terminalOccurrence = isImplicitOccurrenceIdx\n        ? 0\n        : parseInt(reResult[1], 10);\n    var terminalName = reResult[2];\n    var terminalType = exports.terminalNameToConstructor[terminalName];\n    if (!terminalType) {\n        throw Error(\"Terminal Token name: \" +\n            terminalName +\n            \" not found\\n\" +\n            \"\\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#TERMINAL_NAME_NOT_FOUND\\n\" +\n            \"\\tFor Further details.\");\n    }\n    var newTerminal = new gast_public_1.Terminal({\n        terminalType: terminalType,\n        idx: terminalOccurrence\n    });\n    return newTerminal;\n}\nfunction buildProdWithOccurrence(regEx, prodInstance, prodRange, allRanges) {\n    var reResult = regEx.exec(prodRange.text);\n    var isImplicitOccurrenceIdx = reResult[1] === undefined;\n    prodInstance.idx = isImplicitOccurrenceIdx ? 0 : parseInt(reResult[1], 10);\n    var nestedName = reResult[2];\n    if (!utils_1.isUndefined(nestedName)) {\n        ;\n        prodInstance.name = nestedName;\n    }\n    return buildAbstractProd(prodInstance, prodRange.range, allRanges);\n}\nfunction buildAtLeastOneProd(prodRange, allRanges) {\n    return buildProdWithOccurrence(atLeastOneRegEx, new gast_public_1.RepetitionMandatory({ definition: [] }), prodRange, allRanges);\n}\nfunction buildAtLeastOneSepProd(prodRange, allRanges) {\n    return buildRepetitionWithSep(prodRange, allRanges, gast_public_1.RepetitionMandatoryWithSeparator, atLeastOneWithSeparatorRegEx);\n}\nfunction buildManyProd(prodRange, allRanges) {\n    return buildProdWithOccurrence(manyRegEx, new gast_public_1.Repetition({ definition: [] }), prodRange, allRanges);\n}\nfunction buildManySepProd(prodRange, allRanges) {\n    return buildRepetitionWithSep(prodRange, allRanges, gast_public_1.RepetitionWithSeparator, manyWithSeparatorRegEx);\n}\nfunction buildRepetitionWithSep(prodRange, allRanges, repConstructor, regExp) {\n    var reResult = regExp.exec(prodRange.text);\n    var isImplicitOccurrenceIdx = reResult[1] === undefined;\n    var occurrenceIdx = isImplicitOccurrenceIdx ? 0 : parseInt(reResult[1], 10);\n    var sepName = reResult[3];\n    var separatorType = exports.terminalNameToConstructor[sepName];\n    if (!separatorType) {\n        throw Error(\"Separator Terminal Token name: \" + sepName + \" not found\");\n    }\n    var repetitionInstance = new repConstructor({\n        definition: [],\n        separator: separatorType,\n        idx: occurrenceIdx\n    });\n    var nestedName = reResult[2];\n    if (!utils_1.isUndefined(nestedName)) {\n        ;\n        repetitionInstance.name = nestedName;\n    }\n    return (buildAbstractProd(repetitionInstance, prodRange.range, allRanges));\n}\nfunction buildOptionProd(prodRange, allRanges) {\n    return buildProdWithOccurrence(optionRegEx, new gast_public_1.Option({ definition: [] }), prodRange, allRanges);\n}\nfunction buildOrProd(prodRange, allRanges) {\n    return buildProdWithOccurrence(orRegEx, new gast_public_1.Alternation({ definition: [] }), prodRange, allRanges);\n}\nfunction buildFlatProd(prodRange, allRanges) {\n    var prodInstance = new gast_public_1.Flat({ definition: [] });\n    var reResult = orPartRegEx.exec(prodRange.text);\n    var nestedName = reResult[1];\n    if (!utils_1.isUndefined(nestedName)) {\n        ;\n        prodInstance.name = nestedName;\n    }\n    return buildAbstractProd(prodInstance, prodRange.range, allRanges);\n}\nfunction buildAbstractProd(prod, topLevelRange, allRanges) {\n    var secondLevelProds = getDirectlyContainedRanges(topLevelRange, allRanges);\n    var secondLevelInOrder = utils_1.sortBy(secondLevelProds, function (prodRng) {\n        return prodRng.range.start;\n    });\n    var definition = [];\n    utils_1.forEach(secondLevelInOrder, function (prodRng) {\n        definition.push(buildProdGast(prodRng, allRanges));\n    });\n    prod.definition = definition;\n    return prod;\n}\nfunction getDirectlyContainedRanges(y, prodRanges) {\n    return utils_1.filter(prodRanges, function (x) {\n        var isXDescendantOfY = y.strictlyContainsRange(x.range);\n        var xDoesNotHaveAnyAncestorWhichIsDecendantOfY = utils_1.every(prodRanges, function (maybeAnotherParent) {\n            var isParentOfX = maybeAnotherParent.range.strictlyContainsRange(x.range);\n            var isChildOfY = maybeAnotherParent.range.isStrictlyContainedInRange(y);\n            return !(isParentOfX && isChildOfY);\n        });\n        return isXDescendantOfY && xDoesNotHaveAnyAncestorWhichIsDecendantOfY;\n    });\n}\nexports.getDirectlyContainedRanges = getDirectlyContainedRanges;\nvar singleLineCommentRegEx = /\\/\\/.*/g;\nvar multiLineCommentRegEx = /\\/\\*([^*]|[\\r\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+\\//g;\nvar doubleQuoteStringLiteralRegEx = /(NAME\\s*:\\s*)?\"([^\\\\\"]|\\\\([bfnrtv\"\\\\/]|u[0-9a-fA-F]{4}))*\"/g;\nvar singleQuoteStringLiteralRegEx = /(NAME\\s*:\\s*)?'([^\\\\']|\\\\([bfnrtv'\\\\/]|u[0-9a-fA-F]{4}))*'/g;\nfunction removeComments(text) {\n    var noSingleLine = text.replace(singleLineCommentRegEx, \"\");\n    var noComments = noSingleLine.replace(multiLineCommentRegEx, \"\");\n    return noComments;\n}\nexports.removeComments = removeComments;\nfunction replaceWithEmptyStringExceptNestedRules(match, nestedRuleGroup) {\n    // do not replace with empty string if a nest rule (NAME:\"bamba\") was detected\n    if (nestedRuleGroup !== undefined) {\n        return match;\n    }\n    return \"\";\n}\nfunction removeStringLiterals(text) {\n    var noDoubleQuotes = text.replace(doubleQuoteStringLiteralRegEx, replaceWithEmptyStringExceptNestedRules);\n    var noSingleQuotes = noDoubleQuotes.replace(singleQuoteStringLiteralRegEx, replaceWithEmptyStringExceptNestedRules);\n    return noSingleQuotes;\n}\nexports.removeStringLiterals = removeStringLiterals;\nfunction createRanges(text) {\n    var terminalRanges = createTerminalRanges(text);\n    var refsRanges = createRefsRanges(text);\n    var atLeastOneRanges = createAtLeastOneRanges(text);\n    var atLeastOneSepRanges = createAtLeastOneSepRanges(text);\n    var manyRanges = createManyRanges(text);\n    var manySepRanges = createManySepRanges(text);\n    var optionRanges = createOptionRanges(text);\n    var orRanges = createOrRanges(text);\n    return [].concat(terminalRanges, refsRanges, atLeastOneRanges, atLeastOneSepRanges, manyRanges, manySepRanges, optionRanges, orRanges);\n}\nexports.createRanges = createRanges;\nfunction createTerminalRanges(text) {\n    return createRefOrTerminalProdRangeInternal(text, ProdType.TERMINAL, terminalRegGlobal);\n}\nexports.createTerminalRanges = createTerminalRanges;\nfunction createRefsRanges(text) {\n    return createRefOrTerminalProdRangeInternal(text, ProdType.REF, refRegExGlobal);\n}\nexports.createRefsRanges = createRefsRanges;\nfunction createAtLeastOneRanges(text) {\n    return createOperatorProdRangeParenthesis(text, ProdType.AT_LEAST_ONE, atLeastOneRegExGlobal);\n}\nexports.createAtLeastOneRanges = createAtLeastOneRanges;\nfunction createAtLeastOneSepRanges(text) {\n    return createOperatorProdRangeParenthesis(text, ProdType.AT_LEAST_ONE_SEP, atLeastOneWithSeparatorRegExGlobal);\n}\nexports.createAtLeastOneSepRanges = createAtLeastOneSepRanges;\nfunction createManyRanges(text) {\n    return createOperatorProdRangeParenthesis(text, ProdType.MANY, manyRegExGlobal);\n}\nexports.createManyRanges = createManyRanges;\nfunction createManySepRanges(text) {\n    return createOperatorProdRangeParenthesis(text, ProdType.MANY_SEP, manyWithSeparatorRegExGlobal);\n}\nexports.createManySepRanges = createManySepRanges;\nfunction createOptionRanges(text) {\n    return createOperatorProdRangeParenthesis(text, ProdType.OPTION, optionRegExGlobal);\n}\nexports.createOptionRanges = createOptionRanges;\nfunction createOrRanges(text) {\n    var orRanges = createOperatorProdRangeParenthesis(text, ProdType.OR, orRegExGlobal);\n    // have to split up the OR cases into separate FLAT productions\n    // (A |BB | CDE) ==> or.def[0] --> FLAT(A) , or.def[1] --> FLAT(BB) , or.def[2] --> FLAT(CCDE)\n    var orSubPartsRanges = createOrPartRanges(orRanges);\n    return orRanges.concat(orSubPartsRanges);\n}\nexports.createOrRanges = createOrRanges;\nvar findClosingCurly = (utils_1.partial(findClosingOffset, \"{\", \"}\"));\nvar findClosingParen = (utils_1.partial(findClosingOffset, \"(\", \")\"));\nfunction createOrPartRanges(orRanges) {\n    var orPartRanges = [];\n    utils_1.forEach(orRanges, function (orRange) {\n        var currOrParts = createOperatorProdRangeInternal(orRange.text, ProdType.FLAT, orPartRegExGlobal, findClosingCurly);\n        var currOrRangeStart = orRange.range.start;\n        // fix offsets as we are working on a subset of the text\n        utils_1.forEach(currOrParts, function (orPart) {\n            orPart.range.start += currOrRangeStart;\n            orPart.range.end += currOrRangeStart;\n        });\n        orPartRanges = orPartRanges.concat(currOrParts);\n    });\n    var uniqueOrPartRanges = utils_1.uniq(orPartRanges, function (prodRange) {\n        // using \"~\" as a separator for the identify function as its not a valid char in javascript\n        return (prodRange.type +\n            \"~\" +\n            prodRange.range.start +\n            \"~\" +\n            prodRange.range.end +\n            \"~\" +\n            prodRange.text);\n    });\n    return uniqueOrPartRanges;\n}\nexports.createOrPartRanges = createOrPartRanges;\nfunction createRefOrTerminalProdRangeInternal(text, prodType, pattern) {\n    var prodRanges = [];\n    var matched;\n    while ((matched = pattern.exec(text))) {\n        var start = matched.index;\n        var stop_1 = pattern.lastIndex;\n        var currRange = new range_1.Range(start, stop_1);\n        var currText = matched[0];\n        prodRanges.push({\n            range: currRange,\n            text: currText,\n            type: prodType\n        });\n    }\n    return prodRanges;\n}\nfunction createOperatorProdRangeParenthesis(text, prodType, pattern) {\n    return createOperatorProdRangeInternal(text, prodType, pattern, findClosingParen);\n}\nfunction createOperatorProdRangeInternal(text, prodType, pattern, findTerminatorOffSet) {\n    var operatorRanges = [];\n    var matched;\n    while ((matched = pattern.exec(text))) {\n        var start = matched.index;\n        // note that (start + matched[0].length) is the first character AFTER the match\n        var stop_2 = findTerminatorOffSet(start + matched[0].length, text);\n        var currRange = new range_1.Range(start, stop_2);\n        var currText = text.substr(start, stop_2 - start + 1);\n        operatorRanges.push({\n            range: currRange,\n            text: currText,\n            type: prodType\n        });\n    }\n    return operatorRanges;\n}\nfunction findClosingOffset(opening, closing, start, text) {\n    var parenthesisStack = [1];\n    var i = -1;\n    while (!utils_1.isEmpty(parenthesisStack) && i + start < text.length) {\n        i++;\n        var nextChar = text.charAt(start + i);\n        if (nextChar === opening) {\n            parenthesisStack.push(1);\n        }\n        else if (nextChar === closing) {\n            parenthesisStack.pop();\n        }\n    }\n    // valid termination of the search loop\n    if (utils_1.isEmpty(parenthesisStack)) {\n        return i + start;\n    }\n    else {\n        throw new Error(\"INVALID INPUT TEXT, UNTERMINATED PARENTHESIS\");\n    }\n}\nexports.findClosingOffset = findClosingOffset;\nfunction deserializeGrammar(grammar, terminals) {\n    return utils_1.map(grammar, function (production) {\n        return deserializeProduction(production, terminals);\n    });\n}\nexports.deserializeGrammar = deserializeGrammar;\nfunction deserializeProduction(node, terminals) {\n    switch (node.type) {\n        case \"NonTerminal\":\n            return new gast_public_1.NonTerminal({\n                nonTerminalName: node.name,\n                idx: node.idx\n            });\n        case \"Flat\":\n            return new gast_public_1.Flat({\n                name: node.name,\n                definition: deserializeGrammar(node.definition, terminals)\n            });\n        case \"Option\":\n            return new gast_public_1.Option({\n                name: node.name,\n                idx: node.idx,\n                definition: deserializeGrammar(node.definition, terminals)\n            });\n        case \"RepetitionMandatory\":\n            return new gast_public_1.RepetitionMandatory({\n                name: node.name,\n                idx: node.idx,\n                definition: deserializeGrammar(node.definition, terminals)\n            });\n        case \"RepetitionMandatoryWithSeparator\":\n            return new gast_public_1.RepetitionMandatoryWithSeparator({\n                name: node.name,\n                idx: node.idx,\n                separator: terminals[node.separator.name],\n                definition: deserializeGrammar(node.definition, terminals)\n            });\n        case \"RepetitionWithSeparator\":\n            return new gast_public_1.RepetitionWithSeparator({\n                name: node.name,\n                idx: node.idx,\n                separator: terminals[node.separator.name],\n                definition: deserializeGrammar(node.definition, terminals)\n            });\n        case \"Repetition\":\n            return new gast_public_1.Repetition({\n                name: node.name,\n                idx: node.idx,\n                definition: deserializeGrammar(node.definition, terminals)\n            });\n        case \"Alternation\":\n            return new gast_public_1.Alternation({\n                name: node.name,\n                idx: node.idx,\n                definition: deserializeGrammar(node.definition, terminals)\n            });\n        case \"Terminal\":\n            return new gast_public_1.Terminal({\n                terminalType: terminals[node.name],\n                idx: node.idx\n            });\n        case \"Rule\":\n            return new gast_public_1.Rule({\n                name: node.name,\n                orgText: node.orgText,\n                definition: deserializeGrammar(node.definition, terminals)\n            });\n        /* istanbul ignore next */\n        default:\n            var _never = node;\n    }\n}\nexports.deserializeProduction = deserializeProduction;\n//# sourceMappingURL=gast_builder.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/gast_builder.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/checks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/checks.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils = __webpack_require__(/*! ../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar utils_1 = __webpack_require__(/*! ../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar parser_1 = __webpack_require__(/*! ../parser/parser */ \"./node_modules/chevrotain/lib/src/parse/parser/parser.js\");\nvar gast_1 = __webpack_require__(/*! ./gast/gast */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast.js\");\nvar tokens_public_1 = __webpack_require__(/*! ../../scan/tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nvar lookahead_1 = __webpack_require__(/*! ./lookahead */ \"./node_modules/chevrotain/lib/src/parse/grammar/lookahead.js\");\nvar cst_1 = __webpack_require__(/*! ../cst/cst */ \"./node_modules/chevrotain/lib/src/parse/cst/cst.js\");\nvar interpreter_1 = __webpack_require__(/*! ./interpreter */ \"./node_modules/chevrotain/lib/src/parse/grammar/interpreter.js\");\nvar gast_public_1 = __webpack_require__(/*! ./gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\nvar gast_visitor_public_1 = __webpack_require__(/*! ./gast/gast_visitor_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_visitor_public.js\");\nfunction validateGrammar(topLevels, maxLookahead, tokenTypes, ignoredIssues, errMsgProvider, grammarName) {\n    var duplicateErrors = utils.map(topLevels, function (currTopLevel) {\n        return validateDuplicateProductions(currTopLevel, errMsgProvider);\n    });\n    var leftRecursionErrors = utils.map(topLevels, function (currTopRule) {\n        return validateNoLeftRecursion(currTopRule, currTopRule, errMsgProvider);\n    });\n    var emptyAltErrors = [];\n    var ambiguousAltsErrors = [];\n    var emptyRepetitionErrors = [];\n    // left recursion could cause infinite loops in the following validations.\n    // It is safest to first have the user fix the left recursion errors first and only then examine Further issues.\n    if (utils_1.every(leftRecursionErrors, utils_1.isEmpty)) {\n        emptyAltErrors = utils_1.map(topLevels, function (currTopRule) {\n            return validateEmptyOrAlternative(currTopRule, errMsgProvider);\n        });\n        ambiguousAltsErrors = utils_1.map(topLevels, function (currTopRule) {\n            return validateAmbiguousAlternationAlternatives(currTopRule, maxLookahead, ignoredIssues, errMsgProvider);\n        });\n        emptyRepetitionErrors = validateSomeNonEmptyLookaheadPath(topLevels, maxLookahead, errMsgProvider);\n    }\n    var termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);\n    var tokenNameErrors = utils.map(tokenTypes, function (currTokType) {\n        return validateTokenName(currTokType, errMsgProvider);\n    });\n    var nestedRulesNameErrors = validateNestedRulesNames(topLevels, errMsgProvider);\n    var nestedRulesDuplicateErrors = validateDuplicateNestedRules(topLevels, errMsgProvider);\n    var tooManyAltsErrors = utils_1.map(topLevels, function (curRule) {\n        return validateTooManyAlts(curRule, errMsgProvider);\n    });\n    var ruleNameErrors = utils_1.map(topLevels, function (curRule) {\n        return validateRuleName(curRule, errMsgProvider);\n    });\n    var duplicateRulesError = utils_1.map(topLevels, function (curRule) {\n        return validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider);\n    });\n    return (utils.flatten(duplicateErrors.concat(tokenNameErrors, nestedRulesNameErrors, nestedRulesDuplicateErrors, emptyRepetitionErrors, leftRecursionErrors, emptyAltErrors, ambiguousAltsErrors, termsNamespaceConflictErrors, tooManyAltsErrors, ruleNameErrors, duplicateRulesError)));\n}\nexports.validateGrammar = validateGrammar;\nfunction validateNestedRulesNames(topLevels, errMsgProvider) {\n    var result = [];\n    utils_1.forEach(topLevels, function (curTopLevel) {\n        var namedCollectorVisitor = new cst_1.NamedDSLMethodsCollectorVisitor(\"\");\n        curTopLevel.accept(namedCollectorVisitor);\n        var nestedProds = utils_1.map(namedCollectorVisitor.result, function (currItem) { return currItem.orgProd; });\n        result.push(utils_1.map(nestedProds, function (currNestedProd) {\n            return validateNestedRuleName(curTopLevel, currNestedProd, errMsgProvider);\n        }));\n    });\n    return utils_1.flatten(result);\n}\nfunction validateDuplicateProductions(topLevelRule, errMsgProvider) {\n    var collectorVisitor = new OccurrenceValidationCollector();\n    topLevelRule.accept(collectorVisitor);\n    var allRuleProductions = collectorVisitor.allProductions;\n    var productionGroups = utils.groupBy(allRuleProductions, identifyProductionForDuplicates);\n    var duplicates = utils.pick(productionGroups, function (currGroup) {\n        return currGroup.length > 1;\n    });\n    var errors = utils.map(utils.values(duplicates), function (currDuplicates) {\n        var firstProd = utils.first(currDuplicates);\n        var msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);\n        var dslName = gast_1.getProductionDslName(firstProd);\n        var defError = {\n            message: msg,\n            type: parser_1.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,\n            ruleName: topLevelRule.name,\n            dslName: dslName,\n            occurrence: firstProd.idx\n        };\n        var param = getExtraProductionArgument(firstProd);\n        if (param) {\n            defError.parameter = param;\n        }\n        return defError;\n    });\n    return errors;\n}\nfunction identifyProductionForDuplicates(prod) {\n    return gast_1.getProductionDslName(prod) + \"_#_\" + prod.idx + \"_#_\" + getExtraProductionArgument(prod);\n}\nexports.identifyProductionForDuplicates = identifyProductionForDuplicates;\nfunction getExtraProductionArgument(prod) {\n    if (prod instanceof gast_public_1.Terminal) {\n        return tokens_public_1.tokenName(prod.terminalType);\n    }\n    else if (prod instanceof gast_public_1.NonTerminal) {\n        return prod.nonTerminalName;\n    }\n    else {\n        return \"\";\n    }\n}\nvar OccurrenceValidationCollector = /** @class */ (function (_super) {\n    __extends(OccurrenceValidationCollector, _super);\n    function OccurrenceValidationCollector() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.allProductions = [];\n        return _this;\n    }\n    OccurrenceValidationCollector.prototype.visitNonTerminal = function (subrule) {\n        this.allProductions.push(subrule);\n    };\n    OccurrenceValidationCollector.prototype.visitOption = function (option) {\n        this.allProductions.push(option);\n    };\n    OccurrenceValidationCollector.prototype.visitRepetitionWithSeparator = function (manySep) {\n        this.allProductions.push(manySep);\n    };\n    OccurrenceValidationCollector.prototype.visitRepetitionMandatory = function (atLeastOne) {\n        this.allProductions.push(atLeastOne);\n    };\n    OccurrenceValidationCollector.prototype.visitRepetitionMandatoryWithSeparator = function (atLeastOneSep) {\n        this.allProductions.push(atLeastOneSep);\n    };\n    OccurrenceValidationCollector.prototype.visitRepetition = function (many) {\n        this.allProductions.push(many);\n    };\n    OccurrenceValidationCollector.prototype.visitAlternation = function (or) {\n        this.allProductions.push(or);\n    };\n    OccurrenceValidationCollector.prototype.visitTerminal = function (terminal) {\n        this.allProductions.push(terminal);\n    };\n    return OccurrenceValidationCollector;\n}(gast_visitor_public_1.GAstVisitor));\nexports.OccurrenceValidationCollector = OccurrenceValidationCollector;\nexports.validTermsPattern = /^[a-zA-Z_]\\w*$/;\nexports.validNestedRuleName = new RegExp(exports.validTermsPattern.source.replace(\"^\", \"^\\\\$\"));\nfunction validateRuleName(rule, errMsgProvider) {\n    var errors = [];\n    var ruleName = rule.name;\n    if (!ruleName.match(exports.validTermsPattern)) {\n        errors.push({\n            message: errMsgProvider.buildInvalidRuleNameError({\n                topLevelRule: rule,\n                expectedPattern: exports.validTermsPattern\n            }),\n            type: parser_1.ParserDefinitionErrorType.INVALID_RULE_NAME,\n            ruleName: ruleName\n        });\n    }\n    return errors;\n}\nexports.validateRuleName = validateRuleName;\nfunction validateNestedRuleName(topLevel, nestedProd, errMsgProvider) {\n    var errors = [];\n    var errMsg;\n    if (!nestedProd.name.match(exports.validNestedRuleName)) {\n        errMsg = errMsgProvider.buildInvalidNestedRuleNameError(topLevel, nestedProd);\n        errors.push({\n            message: errMsg,\n            type: parser_1.ParserDefinitionErrorType.INVALID_NESTED_RULE_NAME,\n            ruleName: topLevel.name\n        });\n    }\n    return errors;\n}\nexports.validateNestedRuleName = validateNestedRuleName;\nfunction validateTokenName(tokenType, errMsgProvider) {\n    var errors = [];\n    var tokTypeName = tokens_public_1.tokenName(tokenType);\n    if (!tokTypeName.match(exports.validTermsPattern)) {\n        errors.push({\n            message: errMsgProvider.buildTokenNameError({\n                tokenType: tokenType,\n                expectedPattern: exports.validTermsPattern\n            }),\n            type: parser_1.ParserDefinitionErrorType.INVALID_TOKEN_NAME\n        });\n    }\n    return errors;\n}\nexports.validateTokenName = validateTokenName;\nfunction validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {\n    var errors = [];\n    var occurrences = utils_1.reduce(allRules, function (result, curRule) {\n        if (curRule.name === rule.name) {\n            return result + 1;\n        }\n        return result;\n    }, 0);\n    if (occurrences > 1) {\n        var errMsg = errMsgProvider.buildDuplicateRuleNameError({\n            topLevelRule: rule,\n            grammarName: className\n        });\n        errors.push({\n            message: errMsg,\n            type: parser_1.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,\n            ruleName: rule.name\n        });\n    }\n    return errors;\n}\nexports.validateRuleDoesNotAlreadyExist = validateRuleDoesNotAlreadyExist;\n// TODO: is there anyway to get only the rule names of rules inherited from the super grammars?\n// This is not part of the IGrammarErrorProvider because the validation cannot be performed on\n// The grammar structure, only at runtime.\nfunction validateRuleIsOverridden(ruleName, definedRulesNames, className) {\n    var errors = [];\n    var errMsg;\n    if (!utils.contains(definedRulesNames, ruleName)) {\n        errMsg =\n            \"Invalid rule override, rule: ->\" + ruleName + \"<- cannot be overridden in the grammar: ->\" + className + \"<-\" +\n                \"as it is not defined in any of the super grammars \";\n        errors.push({\n            message: errMsg,\n            type: parser_1.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,\n            ruleName: ruleName\n        });\n    }\n    return errors;\n}\nexports.validateRuleIsOverridden = validateRuleIsOverridden;\nfunction validateNoLeftRecursion(topRule, currRule, errMsgProvider, path) {\n    if (path === void 0) { path = []; }\n    var errors = [];\n    var nextNonTerminals = getFirstNoneTerminal(currRule.definition);\n    if (utils.isEmpty(nextNonTerminals)) {\n        return [];\n    }\n    else {\n        var ruleName = topRule.name;\n        var foundLeftRecursion = utils.contains(nextNonTerminals, topRule);\n        if (foundLeftRecursion) {\n            errors.push({\n                message: errMsgProvider.buildLeftRecursionError({\n                    topLevelRule: topRule,\n                    leftRecursionPath: path\n                }),\n                type: parser_1.ParserDefinitionErrorType.LEFT_RECURSION,\n                ruleName: ruleName\n            });\n        }\n        // we are only looking for cyclic paths leading back to the specific topRule\n        // other cyclic paths are ignored, we still need this difference to avoid infinite loops...\n        var validNextSteps = utils.difference(nextNonTerminals, path.concat([topRule]));\n        var errorsFromNextSteps = utils.map(validNextSteps, function (currRefRule) {\n            var newPath = utils.cloneArr(path);\n            newPath.push(currRefRule);\n            return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);\n        });\n        return errors.concat(utils.flatten(errorsFromNextSteps));\n    }\n}\nexports.validateNoLeftRecursion = validateNoLeftRecursion;\nfunction getFirstNoneTerminal(definition) {\n    var result = [];\n    if (utils.isEmpty(definition)) {\n        return result;\n    }\n    var firstProd = utils.first(definition);\n    /* istanbul ignore else */\n    if (firstProd instanceof gast_public_1.NonTerminal) {\n        result.push(firstProd.referencedRule);\n    }\n    else if (firstProd instanceof gast_public_1.Flat ||\n        firstProd instanceof gast_public_1.Option ||\n        firstProd instanceof gast_public_1.RepetitionMandatory ||\n        firstProd instanceof gast_public_1.RepetitionMandatoryWithSeparator ||\n        firstProd instanceof gast_public_1.RepetitionWithSeparator ||\n        firstProd instanceof gast_public_1.Repetition) {\n        result = result.concat(getFirstNoneTerminal(firstProd.definition));\n    }\n    else if (firstProd instanceof gast_public_1.Alternation) {\n        // each sub definition in alternation is a FLAT\n        result = utils.flatten(utils.map(firstProd.definition, function (currSubDef) {\n            return getFirstNoneTerminal(currSubDef.definition);\n        }));\n    }\n    else if (firstProd instanceof gast_public_1.Terminal) {\n        // nothing to see, move along\n    }\n    else {\n        throw Error(\"non exhaustive match\");\n    }\n    var isFirstOptional = gast_1.isOptionalProd(firstProd);\n    var hasMore = definition.length > 1;\n    if (isFirstOptional && hasMore) {\n        var rest = utils.drop(definition);\n        return result.concat(getFirstNoneTerminal(rest));\n    }\n    else {\n        return result;\n    }\n}\nexports.getFirstNoneTerminal = getFirstNoneTerminal;\nvar OrCollector = /** @class */ (function (_super) {\n    __extends(OrCollector, _super);\n    function OrCollector() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.alternations = [];\n        return _this;\n    }\n    OrCollector.prototype.visitAlternation = function (node) {\n        this.alternations.push(node);\n    };\n    return OrCollector;\n}(gast_visitor_public_1.GAstVisitor));\nfunction validateEmptyOrAlternative(topLevelRule, errMsgProvider) {\n    var orCollector = new OrCollector();\n    topLevelRule.accept(orCollector);\n    var ors = orCollector.alternations;\n    var errors = utils.reduce(ors, function (errors, currOr) {\n        var exceptLast = utils.dropRight(currOr.definition);\n        var currErrors = utils.map(exceptLast, function (currAlternative, currAltIdx) {\n            var possibleFirstInAlt = interpreter_1.nextPossibleTokensAfter([currAlternative], [], null, 1);\n            if (utils.isEmpty(possibleFirstInAlt)) {\n                return {\n                    message: errMsgProvider.buildEmptyAlternationError({\n                        topLevelRule: topLevelRule,\n                        alternation: currOr,\n                        emptyChoiceIdx: currAltIdx\n                    }),\n                    type: parser_1.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,\n                    ruleName: topLevelRule.name,\n                    occurrence: currOr.idx,\n                    alternative: currAltIdx + 1\n                };\n            }\n            else {\n                return null;\n            }\n        });\n        return errors.concat(utils.compact(currErrors));\n    }, []);\n    return errors;\n}\nexports.validateEmptyOrAlternative = validateEmptyOrAlternative;\nfunction validateAmbiguousAlternationAlternatives(topLevelRule, maxLookahead, ignoredIssues, errMsgProvider) {\n    var orCollector = new OrCollector();\n    topLevelRule.accept(orCollector);\n    var ors = orCollector.alternations;\n    var ignoredIssuesForCurrentRule = ignoredIssues[topLevelRule.name];\n    if (ignoredIssuesForCurrentRule) {\n        ors = utils_1.reject(ors, function (currOr) {\n            return ignoredIssuesForCurrentRule[gast_1.getProductionDslName(currOr) +\n                (currOr.idx === 0 ? \"\" : currOr.idx)];\n        });\n    }\n    var errors = utils.reduce(ors, function (result, currOr) {\n        var currOccurrence = currOr.idx;\n        var alternatives = lookahead_1.getLookaheadPathsForOr(currOccurrence, topLevelRule, maxLookahead);\n        var altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);\n        var altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);\n        return result.concat(altsAmbiguityErrors, altsPrefixAmbiguityErrors);\n    }, []);\n    return errors;\n}\nexports.validateAmbiguousAlternationAlternatives = validateAmbiguousAlternationAlternatives;\nvar RepetionCollector = /** @class */ (function (_super) {\n    __extends(RepetionCollector, _super);\n    function RepetionCollector() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.allProductions = [];\n        return _this;\n    }\n    RepetionCollector.prototype.visitRepetitionWithSeparator = function (manySep) {\n        this.allProductions.push(manySep);\n    };\n    RepetionCollector.prototype.visitRepetitionMandatory = function (atLeastOne) {\n        this.allProductions.push(atLeastOne);\n    };\n    RepetionCollector.prototype.visitRepetitionMandatoryWithSeparator = function (atLeastOneSep) {\n        this.allProductions.push(atLeastOneSep);\n    };\n    RepetionCollector.prototype.visitRepetition = function (many) {\n        this.allProductions.push(many);\n    };\n    return RepetionCollector;\n}(gast_visitor_public_1.GAstVisitor));\nexports.RepetionCollector = RepetionCollector;\nfunction validateTooManyAlts(topLevelRule, errMsgProvider) {\n    var orCollector = new OrCollector();\n    topLevelRule.accept(orCollector);\n    var ors = orCollector.alternations;\n    var errors = utils.reduce(ors, function (errors, currOr) {\n        if (currOr.definition.length > 255) {\n            errors.push({\n                message: errMsgProvider.buildTooManyAlternativesError({\n                    topLevelRule: topLevelRule,\n                    alternation: currOr\n                }),\n                type: parser_1.ParserDefinitionErrorType.TOO_MANY_ALTS,\n                ruleName: topLevelRule.name,\n                occurrence: currOr.idx\n            });\n        }\n        return errors;\n    }, []);\n    return errors;\n}\nexports.validateTooManyAlts = validateTooManyAlts;\nfunction validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {\n    var errors = [];\n    utils_1.forEach(topLevelRules, function (currTopRule) {\n        var collectorVisitor = new RepetionCollector();\n        currTopRule.accept(collectorVisitor);\n        var allRuleProductions = collectorVisitor.allProductions;\n        utils_1.forEach(allRuleProductions, function (currProd) {\n            var prodType = lookahead_1.getProdType(currProd);\n            var currOccurrence = currProd.idx;\n            var paths = lookahead_1.getLookaheadPathsForOptionalProd(currOccurrence, currTopRule, prodType, maxLookahead);\n            var pathsInsideProduction = paths[0];\n            if (utils_1.isEmpty(utils_1.flatten(pathsInsideProduction))) {\n                var errMsg = errMsgProvider.buildEmptyRepetitionError({\n                    topLevelRule: currTopRule,\n                    repetition: currProd\n                });\n                errors.push({\n                    message: errMsg,\n                    type: parser_1.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,\n                    ruleName: currTopRule.name\n                });\n            }\n        });\n    });\n    return errors;\n}\nexports.validateSomeNonEmptyLookaheadPath = validateSomeNonEmptyLookaheadPath;\nfunction checkAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {\n    var foundAmbiguousPaths = [];\n    var identicalAmbiguities = utils_1.reduce(alternatives, function (result, currAlt, currAltIdx) {\n        utils_1.forEach(currAlt, function (currPath) {\n            var altsCurrPathAppearsIn = [currAltIdx];\n            utils_1.forEach(alternatives, function (currOtherAlt, currOtherAltIdx) {\n                if (currAltIdx !== currOtherAltIdx &&\n                    lookahead_1.containsPath(currOtherAlt, currPath)) {\n                    altsCurrPathAppearsIn.push(currOtherAltIdx);\n                }\n            });\n            if (altsCurrPathAppearsIn.length > 1 &&\n                !lookahead_1.containsPath(foundAmbiguousPaths, currPath)) {\n                foundAmbiguousPaths.push(currPath);\n                result.push({\n                    alts: altsCurrPathAppearsIn,\n                    path: currPath\n                });\n            }\n        });\n        return result;\n    }, []);\n    var currErrors = utils.map(identicalAmbiguities, function (currAmbDescriptor) {\n        var ambgIndices = utils_1.map(currAmbDescriptor.alts, function (currAltIdx) { return currAltIdx + 1; });\n        var currMessage = errMsgProvider.buildAlternationAmbiguityError({\n            topLevelRule: rule,\n            alternation: alternation,\n            ambiguityIndices: ambgIndices,\n            prefixPath: currAmbDescriptor.path\n        });\n        return {\n            message: currMessage,\n            type: parser_1.ParserDefinitionErrorType.AMBIGUOUS_ALTS,\n            ruleName: rule.name,\n            occurrence: alternation.idx,\n            alternatives: [currAmbDescriptor.alts]\n        };\n    });\n    return currErrors;\n}\nfunction checkPrefixAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {\n    var errors = [];\n    // flatten\n    var pathsAndIndices = utils_1.reduce(alternatives, function (result, currAlt, idx) {\n        var currPathsAndIdx = utils_1.map(currAlt, function (currPath) {\n            return { idx: idx, path: currPath };\n        });\n        return result.concat(currPathsAndIdx);\n    }, []);\n    utils_1.forEach(pathsAndIndices, function (currPathAndIdx) {\n        var targetIdx = currPathAndIdx.idx;\n        var targetPath = currPathAndIdx.path;\n        var prefixAmbiguitiesPathsAndIndices = utils_1.findAll(pathsAndIndices, function (searchPathAndIdx) {\n            // prefix ambiguity can only be created from lower idx (higher priority) path\n            return (searchPathAndIdx.idx < targetIdx &&\n                // checking for strict prefix because identical lookaheads\n                // will be be detected using a different validation.\n                lookahead_1.isStrictPrefixOfPath(searchPathAndIdx.path, targetPath));\n        });\n        var currPathPrefixErrors = utils_1.map(prefixAmbiguitiesPathsAndIndices, function (currAmbPathAndIdx) {\n            var ambgIndices = [currAmbPathAndIdx.idx + 1, targetIdx + 1];\n            var occurrence = alternation.idx === 0 ? \"\" : alternation.idx;\n            var message = errMsgProvider.buildAlternationPrefixAmbiguityError({\n                topLevelRule: rule,\n                alternation: alternation,\n                ambiguityIndices: ambgIndices,\n                prefixPath: currAmbPathAndIdx.path\n            });\n            return {\n                message: message,\n                type: parser_1.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,\n                ruleName: rule.name,\n                occurrence: occurrence,\n                alternatives: ambgIndices\n            };\n        });\n        errors = errors.concat(currPathPrefixErrors);\n    });\n    return errors;\n}\nfunction checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {\n    var errors = [];\n    var tokenNames = utils_1.map(tokenTypes, function (currToken) { return tokens_public_1.tokenName(currToken); });\n    utils_1.forEach(topLevels, function (currRule) {\n        var currRuleName = currRule.name;\n        if (utils_1.contains(tokenNames, currRuleName)) {\n            var errMsg = errMsgProvider.buildNamespaceConflictError(currRule);\n            errors.push({\n                message: errMsg,\n                type: parser_1.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,\n                ruleName: currRuleName\n            });\n        }\n    });\n    return errors;\n}\nfunction validateDuplicateNestedRules(topLevelRules, errMsgProvider) {\n    var errors = [];\n    utils_1.forEach(topLevelRules, function (currTopRule) {\n        var namedCollectorVisitor = new cst_1.NamedDSLMethodsCollectorVisitor(\"\");\n        currTopRule.accept(namedCollectorVisitor);\n        var prodsByGroup = utils_1.groupBy(namedCollectorVisitor.result, function (item) { return item.name; });\n        var duplicates = utils_1.pick(prodsByGroup, function (currGroup) {\n            return currGroup.length > 1;\n        });\n        utils_1.forEach(utils_1.values(duplicates), function (currDupGroup) {\n            var currDupProds = utils_1.map(currDupGroup, function (dupGroup) { return dupGroup.orgProd; });\n            var errMsg = errMsgProvider.buildDuplicateNestedRuleNameError(currTopRule, currDupProds);\n            errors.push({\n                message: errMsg,\n                type: parser_1.ParserDefinitionErrorType.DUPLICATE_NESTED_NAME,\n                ruleName: currTopRule.name\n            });\n        });\n    });\n    return errors;\n}\n//# sourceMappingURL=checks.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/checks.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/first.js":
/*!****************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/first.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar gast_public_1 = __webpack_require__(/*! ./gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\nvar gast_1 = __webpack_require__(/*! ./gast/gast */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast.js\");\nfunction first(prod) {\n    /* istanbul ignore else */\n    if (prod instanceof gast_public_1.NonTerminal) {\n        // this could in theory cause infinite loops if\n        // (1) prod A refs prod B.\n        // (2) prod B refs prod A\n        // (3) AB can match the empty set\n        // in other words a cycle where everything is optional so the first will keep\n        // looking ahead for the next optional part and will never exit\n        // currently there is no safeguard for this unique edge case because\n        // (1) not sure a grammar in which this can happen is useful for anything (productive)\n        return first(prod.referencedRule);\n    }\n    else if (prod instanceof gast_public_1.Terminal) {\n        return firstForTerminal(prod);\n    }\n    else if (gast_1.isSequenceProd(prod)) {\n        return firstForSequence(prod);\n    }\n    else if (gast_1.isBranchingProd(prod)) {\n        return firstForBranching(prod);\n    }\n    else {\n        throw Error(\"non exhaustive match\");\n    }\n}\nexports.first = first;\nfunction firstForSequence(prod) {\n    var firstSet = [];\n    var seq = prod.definition;\n    var nextSubProdIdx = 0;\n    var hasInnerProdsRemaining = seq.length > nextSubProdIdx;\n    var currSubProd;\n    // so we enter the loop at least once (if the definition is not empty\n    var isLastInnerProdOptional = true;\n    // scan a sequence until it's end or until we have found a NONE optional production in it\n    while (hasInnerProdsRemaining && isLastInnerProdOptional) {\n        currSubProd = seq[nextSubProdIdx];\n        isLastInnerProdOptional = gast_1.isOptionalProd(currSubProd);\n        firstSet = firstSet.concat(first(currSubProd));\n        nextSubProdIdx = nextSubProdIdx + 1;\n        hasInnerProdsRemaining = seq.length > nextSubProdIdx;\n    }\n    return utils_1.uniq(firstSet);\n}\nexports.firstForSequence = firstForSequence;\nfunction firstForBranching(prod) {\n    var allAlternativesFirsts = utils_1.map(prod.definition, function (innerProd) {\n        return first(innerProd);\n    });\n    return utils_1.uniq(utils_1.flatten(allAlternativesFirsts));\n}\nexports.firstForBranching = firstForBranching;\nfunction firstForTerminal(terminal) {\n    return [terminal.terminalType];\n}\nexports.firstForTerminal = firstForTerminal;\n//# sourceMappingURL=first.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/first.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/follow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/follow.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar rest_1 = __webpack_require__(/*! ./rest */ \"./node_modules/chevrotain/lib/src/parse/grammar/rest.js\");\nvar lang_extensions_1 = __webpack_require__(/*! ../../lang/lang_extensions */ \"./node_modules/chevrotain/lib/src/lang/lang_extensions.js\");\nvar first_1 = __webpack_require__(/*! ./first */ \"./node_modules/chevrotain/lib/src/parse/grammar/first.js\");\nvar utils_1 = __webpack_require__(/*! ../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar constants_1 = __webpack_require__(/*! ../constants */ \"./node_modules/chevrotain/lib/src/parse/constants.js\");\nvar tokens_public_1 = __webpack_require__(/*! ../../scan/tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nvar gast_public_1 = __webpack_require__(/*! ./gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\n// This ResyncFollowsWalker computes all of the follows required for RESYNC\n// (skipping reference production).\nvar ResyncFollowsWalker = /** @class */ (function (_super) {\n    __extends(ResyncFollowsWalker, _super);\n    function ResyncFollowsWalker(topProd) {\n        var _this = _super.call(this) || this;\n        _this.topProd = topProd;\n        _this.follows = new lang_extensions_1.HashTable();\n        return _this;\n    }\n    ResyncFollowsWalker.prototype.startWalking = function () {\n        this.walk(this.topProd);\n        return this.follows;\n    };\n    ResyncFollowsWalker.prototype.walkTerminal = function (terminal, currRest, prevRest) {\n        // do nothing! just like in the public sector after 13:00\n    };\n    ResyncFollowsWalker.prototype.walkProdRef = function (refProd, currRest, prevRest) {\n        var followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) +\n            this.topProd.name;\n        var fullRest = currRest.concat(prevRest);\n        var restProd = new gast_public_1.Flat({ definition: fullRest });\n        var t_in_topProd_follows = first_1.first(restProd);\n        this.follows.put(followName, t_in_topProd_follows);\n    };\n    return ResyncFollowsWalker;\n}(rest_1.RestWalker));\nexports.ResyncFollowsWalker = ResyncFollowsWalker;\nfunction computeAllProdsFollows(topProductions) {\n    var reSyncFollows = new lang_extensions_1.HashTable();\n    utils_1.forEach(topProductions, function (topProd) {\n        var currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();\n        reSyncFollows.putAll(currRefsFollow);\n    });\n    return reSyncFollows;\n}\nexports.computeAllProdsFollows = computeAllProdsFollows;\nfunction buildBetweenProdsFollowPrefix(inner, occurenceInParent) {\n    return inner.name + occurenceInParent + constants_1.IN;\n}\nexports.buildBetweenProdsFollowPrefix = buildBetweenProdsFollowPrefix;\nfunction buildInProdFollowPrefix(terminal) {\n    var terminalName = tokens_public_1.tokenName(terminal.terminalType);\n    return terminalName + terminal.idx + constants_1.IN;\n}\nexports.buildInProdFollowPrefix = buildInProdFollowPrefix;\n//# sourceMappingURL=follow.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/follow.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/gast/gast.js":
/*!********************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/gast/gast.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar gast_public_1 = __webpack_require__(/*! ./gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\nvar gast_visitor_public_1 = __webpack_require__(/*! ./gast_visitor_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_visitor_public.js\");\nvar tokens_public_1 = __webpack_require__(/*! ../../../scan/tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nfunction isSequenceProd(prod) {\n    return (prod instanceof gast_public_1.Flat ||\n        prod instanceof gast_public_1.Option ||\n        prod instanceof gast_public_1.Repetition ||\n        prod instanceof gast_public_1.RepetitionMandatory ||\n        prod instanceof gast_public_1.RepetitionMandatoryWithSeparator ||\n        prod instanceof gast_public_1.RepetitionWithSeparator ||\n        prod instanceof gast_public_1.Terminal ||\n        prod instanceof gast_public_1.Rule);\n}\nexports.isSequenceProd = isSequenceProd;\nfunction isOptionalProd(prod, alreadyVisited) {\n    if (alreadyVisited === void 0) { alreadyVisited = []; }\n    var isDirectlyOptional = prod instanceof gast_public_1.Option ||\n        prod instanceof gast_public_1.Repetition ||\n        prod instanceof gast_public_1.RepetitionWithSeparator;\n    if (isDirectlyOptional) {\n        return true;\n    }\n    // note that this can cause infinite loop if one optional empty TOP production has a cyclic dependency with another\n    // empty optional top rule\n    // may be indirectly optional ((A?B?C?) | (D?E?F?))\n    if (prod instanceof gast_public_1.Alternation) {\n        // for OR its enough for just one of the alternatives to be optional\n        return utils_1.some(prod.definition, function (subProd) {\n            return isOptionalProd(subProd, alreadyVisited);\n        });\n    }\n    else if (prod instanceof gast_public_1.NonTerminal && utils_1.contains(alreadyVisited, prod)) {\n        // avoiding stack overflow due to infinite recursion\n        return false;\n    }\n    else if (prod instanceof gast_public_1.AbstractProduction) {\n        if (prod instanceof gast_public_1.NonTerminal) {\n            alreadyVisited.push(prod);\n        }\n        return utils_1.every(prod.definition, function (subProd) {\n            return isOptionalProd(subProd, alreadyVisited);\n        });\n    }\n    else {\n        return false;\n    }\n}\nexports.isOptionalProd = isOptionalProd;\nfunction isBranchingProd(prod) {\n    return prod instanceof gast_public_1.Alternation;\n}\nexports.isBranchingProd = isBranchingProd;\nfunction getProductionDslName(prod) {\n    /* istanbul ignore else */\n    if (prod instanceof gast_public_1.NonTerminal) {\n        return \"SUBRULE\";\n    }\n    else if (prod instanceof gast_public_1.Option) {\n        return \"OPTION\";\n    }\n    else if (prod instanceof gast_public_1.Alternation) {\n        return \"OR\";\n    }\n    else if (prod instanceof gast_public_1.RepetitionMandatory) {\n        return \"AT_LEAST_ONE\";\n    }\n    else if (prod instanceof gast_public_1.RepetitionMandatoryWithSeparator) {\n        return \"AT_LEAST_ONE_SEP\";\n    }\n    else if (prod instanceof gast_public_1.RepetitionWithSeparator) {\n        return \"MANY_SEP\";\n    }\n    else if (prod instanceof gast_public_1.Repetition) {\n        return \"MANY\";\n    }\n    else if (prod instanceof gast_public_1.Terminal) {\n        return \"CONSUME\";\n    }\n    else {\n        throw Error(\"non exhaustive match\");\n    }\n}\nexports.getProductionDslName = getProductionDslName;\nvar DslMethodsCollectorVisitor = /** @class */ (function (_super) {\n    __extends(DslMethodsCollectorVisitor, _super);\n    function DslMethodsCollectorVisitor() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        // A minus is never valid in an identifier name\n        _this.separator = \"-\";\n        _this.dslMethods = {\n            option: [],\n            alternation: [],\n            repetition: [],\n            repetitionWithSeparator: [],\n            repetitionMandatory: [],\n            repetitionMandatoryWithSeparator: []\n        };\n        return _this;\n    }\n    DslMethodsCollectorVisitor.prototype.visitTerminal = function (terminal) {\n        var key = tokens_public_1.tokenName(terminal.terminalType) + this.separator + \"Terminal\";\n        if (!utils_1.has(this.dslMethods, key)) {\n            this.dslMethods[key] = [];\n        }\n        this.dslMethods[key].push(terminal);\n    };\n    DslMethodsCollectorVisitor.prototype.visitNonTerminal = function (subrule) {\n        var key = subrule.nonTerminalName + this.separator + \"Terminal\";\n        if (!utils_1.has(this.dslMethods, key)) {\n            this.dslMethods[key] = [];\n        }\n        this.dslMethods[key].push(subrule);\n    };\n    DslMethodsCollectorVisitor.prototype.visitOption = function (option) {\n        this.dslMethods.option.push(option);\n    };\n    DslMethodsCollectorVisitor.prototype.visitRepetitionWithSeparator = function (manySep) {\n        this.dslMethods.repetitionWithSeparator.push(manySep);\n    };\n    DslMethodsCollectorVisitor.prototype.visitRepetitionMandatory = function (atLeastOne) {\n        this.dslMethods.repetitionMandatory.push(atLeastOne);\n    };\n    DslMethodsCollectorVisitor.prototype.visitRepetitionMandatoryWithSeparator = function (atLeastOneSep) {\n        this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);\n    };\n    DslMethodsCollectorVisitor.prototype.visitRepetition = function (many) {\n        this.dslMethods.repetition.push(many);\n    };\n    DslMethodsCollectorVisitor.prototype.visitAlternation = function (or) {\n        this.dslMethods.alternation.push(or);\n    };\n    return DslMethodsCollectorVisitor;\n}(gast_visitor_public_1.GAstVisitor));\nexports.DslMethodsCollectorVisitor = DslMethodsCollectorVisitor;\n//# sourceMappingURL=gast.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/gast/gast.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js":
/*!***************************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar tokens_public_1 = __webpack_require__(/*! ../../../scan/tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nvar AbstractProduction = /** @class */ (function () {\n    function AbstractProduction(definition) {\n        this.definition = definition;\n    }\n    AbstractProduction.prototype.accept = function (visitor) {\n        visitor.visit(this);\n        utils_1.forEach(this.definition, function (prod) {\n            prod.accept(visitor);\n        });\n    };\n    return AbstractProduction;\n}());\nexports.AbstractProduction = AbstractProduction;\nvar NonTerminal = /** @class */ (function (_super) {\n    __extends(NonTerminal, _super);\n    function NonTerminal(options) {\n        var _this = _super.call(this, []) || this;\n        _this.idx = 1;\n        utils_1.assign(_this, utils_1.pick(options, function (v) { return v !== undefined; }));\n        return _this;\n    }\n    Object.defineProperty(NonTerminal.prototype, \"definition\", {\n        get: function () {\n            if (this.referencedRule !== undefined) {\n                return this.referencedRule.definition;\n            }\n            return [];\n        },\n        set: function (definition) {\n            // immutable\n        },\n        enumerable: true,\n        configurable: true\n    });\n    NonTerminal.prototype.accept = function (visitor) {\n        visitor.visit(this);\n        // don't visit children of a reference, we will get cyclic infinite loops if we do so\n    };\n    return NonTerminal;\n}(AbstractProduction));\nexports.NonTerminal = NonTerminal;\nvar Rule = /** @class */ (function (_super) {\n    __extends(Rule, _super);\n    function Rule(options) {\n        var _this = _super.call(this, options.definition) || this;\n        _this.orgText = \"\";\n        utils_1.assign(_this, utils_1.pick(options, function (v) { return v !== undefined; }));\n        return _this;\n    }\n    return Rule;\n}(AbstractProduction));\nexports.Rule = Rule;\nvar Flat = /** @class */ (function (_super) {\n    __extends(Flat, _super);\n    // A named Flat production is used to indicate a Nested Rule in an alternation\n    function Flat(options) {\n        var _this = _super.call(this, options.definition) || this;\n        utils_1.assign(_this, utils_1.pick(options, function (v) { return v !== undefined; }));\n        return _this;\n    }\n    return Flat;\n}(AbstractProduction));\nexports.Flat = Flat;\nvar Option = /** @class */ (function (_super) {\n    __extends(Option, _super);\n    function Option(options) {\n        var _this = _super.call(this, options.definition) || this;\n        _this.idx = 1;\n        utils_1.assign(_this, utils_1.pick(options, function (v) { return v !== undefined; }));\n        return _this;\n    }\n    return Option;\n}(AbstractProduction));\nexports.Option = Option;\nvar RepetitionMandatory = /** @class */ (function (_super) {\n    __extends(RepetitionMandatory, _super);\n    function RepetitionMandatory(options) {\n        var _this = _super.call(this, options.definition) || this;\n        _this.idx = 1;\n        utils_1.assign(_this, utils_1.pick(options, function (v) { return v !== undefined; }));\n        return _this;\n    }\n    return RepetitionMandatory;\n}(AbstractProduction));\nexports.RepetitionMandatory = RepetitionMandatory;\nvar RepetitionMandatoryWithSeparator = /** @class */ (function (_super) {\n    __extends(RepetitionMandatoryWithSeparator, _super);\n    function RepetitionMandatoryWithSeparator(options) {\n        var _this = _super.call(this, options.definition) || this;\n        _this.idx = 1;\n        utils_1.assign(_this, utils_1.pick(options, function (v) { return v !== undefined; }));\n        return _this;\n    }\n    return RepetitionMandatoryWithSeparator;\n}(AbstractProduction));\nexports.RepetitionMandatoryWithSeparator = RepetitionMandatoryWithSeparator;\nvar Repetition = /** @class */ (function (_super) {\n    __extends(Repetition, _super);\n    function Repetition(options) {\n        var _this = _super.call(this, options.definition) || this;\n        _this.idx = 1;\n        utils_1.assign(_this, utils_1.pick(options, function (v) { return v !== undefined; }));\n        return _this;\n    }\n    return Repetition;\n}(AbstractProduction));\nexports.Repetition = Repetition;\nvar RepetitionWithSeparator = /** @class */ (function (_super) {\n    __extends(RepetitionWithSeparator, _super);\n    function RepetitionWithSeparator(options) {\n        var _this = _super.call(this, options.definition) || this;\n        _this.idx = 1;\n        utils_1.assign(_this, utils_1.pick(options, function (v) { return v !== undefined; }));\n        return _this;\n    }\n    return RepetitionWithSeparator;\n}(AbstractProduction));\nexports.RepetitionWithSeparator = RepetitionWithSeparator;\nvar Alternation = /** @class */ (function (_super) {\n    __extends(Alternation, _super);\n    function Alternation(options) {\n        var _this = _super.call(this, options.definition) || this;\n        _this.idx = 1;\n        utils_1.assign(_this, utils_1.pick(options, function (v) { return v !== undefined; }));\n        return _this;\n    }\n    return Alternation;\n}(AbstractProduction));\nexports.Alternation = Alternation;\nvar Terminal = /** @class */ (function () {\n    function Terminal(options) {\n        this.idx = 1;\n        utils_1.assign(this, utils_1.pick(options, function (v) { return v !== undefined; }));\n    }\n    Terminal.prototype.accept = function (visitor) {\n        visitor.visit(this);\n    };\n    return Terminal;\n}());\nexports.Terminal = Terminal;\nfunction serializeGrammar(topRules) {\n    return utils_1.map(topRules, serializeProduction);\n}\nexports.serializeGrammar = serializeGrammar;\nfunction serializeProduction(node) {\n    function convertDefinition(definition) {\n        return utils_1.map(definition, serializeProduction);\n    }\n    /* istanbul ignore else */\n    if (node instanceof NonTerminal) {\n        return {\n            type: \"NonTerminal\",\n            name: node.nonTerminalName,\n            idx: node.idx\n        };\n    }\n    else if (node instanceof Flat) {\n        return {\n            type: \"Flat\",\n            definition: convertDefinition(node.definition)\n        };\n    }\n    else if (node instanceof Option) {\n        return {\n            type: \"Option\",\n            idx: node.idx,\n            definition: convertDefinition(node.definition)\n        };\n    }\n    else if (node instanceof RepetitionMandatory) {\n        return {\n            type: \"RepetitionMandatory\",\n            name: node.name,\n            idx: node.idx,\n            definition: convertDefinition(node.definition)\n        };\n    }\n    else if (node instanceof RepetitionMandatoryWithSeparator) {\n        return {\n            type: \"RepetitionMandatoryWithSeparator\",\n            name: node.name,\n            idx: node.idx,\n            separator: (serializeProduction(new Terminal({ terminalType: node.separator }))),\n            definition: convertDefinition(node.definition)\n        };\n    }\n    else if (node instanceof RepetitionWithSeparator) {\n        return {\n            type: \"RepetitionWithSeparator\",\n            name: node.name,\n            idx: node.idx,\n            separator: (serializeProduction(new Terminal({ terminalType: node.separator }))),\n            definition: convertDefinition(node.definition)\n        };\n    }\n    else if (node instanceof Repetition) {\n        return {\n            type: \"Repetition\",\n            name: node.name,\n            idx: node.idx,\n            definition: convertDefinition(node.definition)\n        };\n    }\n    else if (node instanceof Alternation) {\n        return {\n            type: \"Alternation\",\n            name: node.name,\n            idx: node.idx,\n            definition: convertDefinition(node.definition)\n        };\n    }\n    else if (node instanceof Terminal) {\n        var serializedTerminal = {\n            type: \"Terminal\",\n            name: tokens_public_1.tokenName(node.terminalType),\n            label: tokens_public_1.tokenLabel(node.terminalType),\n            idx: node.idx\n        };\n        var pattern = node.terminalType.PATTERN;\n        if (node.terminalType.PATTERN) {\n            serializedTerminal.pattern = utils_1.isRegExp(pattern)\n                ? pattern.source\n                : pattern;\n        }\n        return serializedTerminal;\n    }\n    else if (node instanceof Rule) {\n        return {\n            type: \"Rule\",\n            name: node.name,\n            orgText: node.orgText,\n            definition: convertDefinition(node.definition)\n        };\n    }\n    else {\n        throw Error(\"non exhaustive match\");\n    }\n}\nexports.serializeProduction = serializeProduction;\n//# sourceMappingURL=gast_public.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar lang_extensions_1 = __webpack_require__(/*! ../../../lang/lang_extensions */ \"./node_modules/chevrotain/lib/src/lang/lang_extensions.js\");\nvar resolver_1 = __webpack_require__(/*! ../resolver */ \"./node_modules/chevrotain/lib/src/parse/grammar/resolver.js\");\nvar checks_1 = __webpack_require__(/*! ../checks */ \"./node_modules/chevrotain/lib/src/parse/grammar/checks.js\");\nvar errors_public_1 = __webpack_require__(/*! ../../errors_public */ \"./node_modules/chevrotain/lib/src/parse/errors_public.js\");\nvar gast_1 = __webpack_require__(/*! ./gast */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast.js\");\nfunction resolveGrammar(options) {\n    options = utils_1.defaults(options, {\n        errMsgProvider: errors_public_1.defaultGrammarResolverErrorProvider\n    });\n    var topRulesTable = new lang_extensions_1.HashTable();\n    utils_1.forEach(options.rules, function (rule) {\n        topRulesTable.put(rule.name, rule);\n    });\n    return resolver_1.resolveGrammar(topRulesTable, options.errMsgProvider);\n}\nexports.resolveGrammar = resolveGrammar;\nfunction validateGrammar(options) {\n    options = utils_1.defaults(options, {\n        errMsgProvider: errors_public_1.defaultGrammarValidatorErrorProvider,\n        ignoredIssues: {}\n    });\n    return checks_1.validateGrammar(options.rules, options.maxLookahead, options.tokenTypes, options.ignoredIssues, options.errMsgProvider, options.grammarName);\n}\nexports.validateGrammar = validateGrammar;\nfunction assignOccurrenceIndices(options) {\n    utils_1.forEach(options.rules, function (currRule) {\n        var methodsCollector = new gast_1.DslMethodsCollectorVisitor();\n        currRule.accept(methodsCollector);\n        utils_1.forEach(methodsCollector.dslMethods, function (methods) {\n            utils_1.forEach(methods, function (currMethod, arrIdx) {\n                currMethod.idx = arrIdx + 1;\n            });\n        });\n    });\n}\nexports.assignOccurrenceIndices = assignOccurrenceIndices;\n//# sourceMappingURL=gast_resolver_public.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_visitor_public.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_visitor_public.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar gast_public_1 = __webpack_require__(/*! ./gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\nvar GAstVisitor = /** @class */ (function () {\n    function GAstVisitor() {\n    }\n    GAstVisitor.prototype.visit = function (node) {\n        /* istanbul ignore next */\n        if (node instanceof gast_public_1.NonTerminal) {\n            return this.visitNonTerminal(node);\n        }\n        else if (node instanceof gast_public_1.Flat) {\n            return this.visitFlat(node);\n        }\n        else if (node instanceof gast_public_1.Option) {\n            return this.visitOption(node);\n        }\n        else if (node instanceof gast_public_1.RepetitionMandatory) {\n            return this.visitRepetitionMandatory(node);\n        }\n        else if (node instanceof gast_public_1.RepetitionMandatoryWithSeparator) {\n            return this.visitRepetitionMandatoryWithSeparator(node);\n        }\n        else if (node instanceof gast_public_1.RepetitionWithSeparator) {\n            return this.visitRepetitionWithSeparator(node);\n        }\n        else if (node instanceof gast_public_1.Repetition) {\n            return this.visitRepetition(node);\n        }\n        else if (node instanceof gast_public_1.Alternation) {\n            return this.visitAlternation(node);\n        }\n        else if (node instanceof gast_public_1.Terminal) {\n            return this.visitTerminal(node);\n        }\n        else if (node instanceof gast_public_1.Rule) {\n            return this.visitRule(node);\n        }\n        else {\n            throw Error(\"non exhaustive match\");\n        }\n    };\n    GAstVisitor.prototype.visitNonTerminal = function (node) { };\n    GAstVisitor.prototype.visitFlat = function (node) { };\n    GAstVisitor.prototype.visitOption = function (node) { };\n    GAstVisitor.prototype.visitRepetition = function (node) { };\n    GAstVisitor.prototype.visitRepetitionMandatory = function (node) { };\n    GAstVisitor.prototype.visitRepetitionMandatoryWithSeparator = function (node) { };\n    GAstVisitor.prototype.visitRepetitionWithSeparator = function (node) { };\n    GAstVisitor.prototype.visitAlternation = function (node) { };\n    GAstVisitor.prototype.visitTerminal = function (node) { };\n    GAstVisitor.prototype.visitRule = function (node) { };\n    return GAstVisitor;\n}());\nexports.GAstVisitor = GAstVisitor;\n//# sourceMappingURL=gast_visitor_public.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_visitor_public.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/interpreter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/interpreter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* istanbul ignore next */ var __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar rest_1 = __webpack_require__(/*! ./rest */ \"./node_modules/chevrotain/lib/src/parse/grammar/rest.js\");\nvar utils_1 = __webpack_require__(/*! ../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar tokens_public_1 = __webpack_require__(/*! ../../scan/tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nvar first_1 = __webpack_require__(/*! ./first */ \"./node_modules/chevrotain/lib/src/parse/grammar/first.js\");\nvar gast_public_1 = __webpack_require__(/*! ./gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\nvar AbstractNextPossibleTokensWalker = /** @class */ (function (_super) {\n    __extends(AbstractNextPossibleTokensWalker, _super);\n    function AbstractNextPossibleTokensWalker(topProd, path) {\n        var _this = _super.call(this) /* istanbul ignore next */ || this;\n        _this.topProd = topProd;\n        _this.path = path;\n        _this.possibleTokTypes = [];\n        _this.nextProductionName = \"\";\n        _this.nextProductionOccurrence = 0;\n        _this.found = false;\n        _this.isAtEndOfPath = false;\n        return _this;\n    }\n    AbstractNextPossibleTokensWalker.prototype.startWalking = function () {\n        this.found = false;\n        if (this.path.ruleStack[0] !== this.topProd.name) {\n            throw Error(\"The path does not start with the walker's top Rule!\");\n        }\n        // immutable for the win\n        this.ruleStack = utils_1.cloneArr(this.path.ruleStack).reverse(); // intelij bug requires assertion\n        this.occurrenceStack = utils_1.cloneArr(this.path.occurrenceStack).reverse(); // intelij bug requires assertion\n        // already verified that the first production is valid, we now seek the 2nd production\n        this.ruleStack.pop();\n        this.occurrenceStack.pop();\n        this.updateExpectedNext();\n        this.walk(this.topProd);\n        return this.possibleTokTypes;\n    };\n    AbstractNextPossibleTokensWalker.prototype.walk = function (prod, prevRest) {\n        if (prevRest === void 0) { prevRest = []; }\n        // stop scanning once we found the path\n        if (!this.found) {\n            _super.prototype.walk.call(this, prod, prevRest);\n        }\n    };\n    AbstractNextPossibleTokensWalker.prototype.walkProdRef = function (refProd, currRest, prevRest) {\n        // found the next production, need to keep walking in it\n        if (refProd.referencedRule.name === this.nextProductionName &&\n            refProd.idx === this.nextProductionOccurrence) {\n            var fullRest = currRest.concat(prevRest);\n            this.updateExpectedNext();\n            this.walk(refProd.referencedRule, fullRest);\n        }\n    };\n    AbstractNextPossibleTokensWalker.prototype.updateExpectedNext = function () {\n        // need to consume the Terminal\n        if (utils_1.isEmpty(this.ruleStack)) {\n            // must reset nextProductionXXX to avoid walking down another Top Level production while what we are\n            // really seeking is the last Terminal...\n            this.nextProductionName = \"\";\n            this.nextProductionOccurrence = 0;\n            this.isAtEndOfPath = true;\n        }\n        else {\n            this.nextProductionName = this.ruleStack.pop();\n            this.nextProductionOccurrence = this.occurrenceStack.pop();\n        }\n    };\n    return AbstractNextPossibleTokensWalker;\n}(rest_1.RestWalker));\nexports.AbstractNextPossibleTokensWalker = AbstractNextPossibleTokensWalker;\nvar NextAfterTokenWalker = /** @class */ (function (_super) {\n    __extends(NextAfterTokenWalker, _super);\n    function NextAfterTokenWalker(topProd, path) {\n        var _this = _super.call(this, topProd, path) /* istanbul ignore next */ || this;\n        _this.path = path;\n        _this.nextTerminalName = \"\";\n        _this.nextTerminalOccurrence = 0;\n        _this.nextTerminalName = tokens_public_1.tokenName(_this.path.lastTok);\n        _this.nextTerminalOccurrence = _this.path.lastTokOccurrence;\n        return _this;\n    }\n    NextAfterTokenWalker.prototype.walkTerminal = function (terminal, currRest, prevRest) {\n        if (this.isAtEndOfPath &&\n            tokens_public_1.tokenName(terminal.terminalType) === this.nextTerminalName &&\n            terminal.idx === this.nextTerminalOccurrence &&\n            !this.found) {\n            var fullRest = currRest.concat(prevRest);\n            var restProd = new gast_public_1.Flat({ definition: fullRest });\n            this.possibleTokTypes = first_1.first(restProd);\n            this.found = true;\n        }\n    };\n    return NextAfterTokenWalker;\n}(AbstractNextPossibleTokensWalker));\nexports.NextAfterTokenWalker = NextAfterTokenWalker;\n/**\n * This walker only \"walks\" a single \"TOP\" level in the Grammar Ast, this means\n * it never \"follows\" production refs\n */\nvar AbstractNextTerminalAfterProductionWalker = /** @class */ (function (_super) {\n    __extends(AbstractNextTerminalAfterProductionWalker, _super);\n    function AbstractNextTerminalAfterProductionWalker(topRule, occurrence) {\n        var _this = _super.call(this) /* istanbul ignore next */ || this;\n        _this.topRule = topRule;\n        _this.occurrence = occurrence;\n        _this.result = {\n            token: undefined,\n            occurrence: undefined,\n            isEndOfRule: undefined\n        };\n        return _this;\n    }\n    AbstractNextTerminalAfterProductionWalker.prototype.startWalking = function () {\n        this.walk(this.topRule);\n        return this.result;\n    };\n    return AbstractNextTerminalAfterProductionWalker;\n}(rest_1.RestWalker));\nexports.AbstractNextTerminalAfterProductionWalker = AbstractNextTerminalAfterProductionWalker;\nvar NextTerminalAfterManyWalker = /** @class */ (function (_super) {\n    __extends(NextTerminalAfterManyWalker, _super);\n    function NextTerminalAfterManyWalker() {\n        return _super !== null && _super.apply(this, arguments) /* istanbul ignore next */ || this;\n    }\n    NextTerminalAfterManyWalker.prototype.walkMany = function (manyProd, currRest, prevRest) {\n        if (manyProd.idx === this.occurrence) {\n            var firstAfterMany = utils_1.first(currRest.concat(prevRest));\n            this.result.isEndOfRule = firstAfterMany === undefined;\n            if (firstAfterMany instanceof gast_public_1.Terminal) {\n                this.result.token = firstAfterMany.terminalType;\n                this.result.occurrence = firstAfterMany.idx;\n            }\n        }\n        else {\n            _super.prototype.walkMany.call(this, manyProd, currRest, prevRest);\n        }\n    };\n    return NextTerminalAfterManyWalker;\n}(AbstractNextTerminalAfterProductionWalker));\nexports.NextTerminalAfterManyWalker = NextTerminalAfterManyWalker;\nvar NextTerminalAfterManySepWalker = /** @class */ (function (_super) {\n    __extends(NextTerminalAfterManySepWalker, _super);\n    function NextTerminalAfterManySepWalker() {\n        return _super !== null && _super.apply(this, arguments) /* istanbul ignore next */ || this;\n    }\n    NextTerminalAfterManySepWalker.prototype.walkManySep = function (manySepProd, currRest, prevRest) {\n        if (manySepProd.idx === this.occurrence) {\n            var firstAfterManySep = utils_1.first(currRest.concat(prevRest));\n            this.result.isEndOfRule = firstAfterManySep === undefined;\n            if (firstAfterManySep instanceof gast_public_1.Terminal) {\n                this.result.token = firstAfterManySep.terminalType;\n                this.result.occurrence = firstAfterManySep.idx;\n            }\n        }\n        else {\n            _super.prototype.walkManySep.call(this, manySepProd, currRest, prevRest);\n        }\n    };\n    return NextTerminalAfterManySepWalker;\n}(AbstractNextTerminalAfterProductionWalker));\nexports.NextTerminalAfterManySepWalker = NextTerminalAfterManySepWalker;\nvar NextTerminalAfterAtLeastOneWalker = /** @class */ (function (_super) {\n    __extends(NextTerminalAfterAtLeastOneWalker, _super);\n    function NextTerminalAfterAtLeastOneWalker() {\n        return _super !== null && _super.apply(this, arguments) /* istanbul ignore next */ || this;\n    }\n    NextTerminalAfterAtLeastOneWalker.prototype.walkAtLeastOne = function (atLeastOneProd, currRest, prevRest) {\n        if (atLeastOneProd.idx === this.occurrence) {\n            var firstAfterAtLeastOne = utils_1.first(currRest.concat(prevRest));\n            this.result.isEndOfRule = firstAfterAtLeastOne === undefined;\n            if (firstAfterAtLeastOne instanceof gast_public_1.Terminal) {\n                this.result.token = firstAfterAtLeastOne.terminalType;\n                this.result.occurrence = firstAfterAtLeastOne.idx;\n            }\n        }\n        else {\n            _super.prototype.walkAtLeastOne.call(this, atLeastOneProd, currRest, prevRest);\n        }\n    };\n    return NextTerminalAfterAtLeastOneWalker;\n}(AbstractNextTerminalAfterProductionWalker));\nexports.NextTerminalAfterAtLeastOneWalker = NextTerminalAfterAtLeastOneWalker;\n// TODO: reduce code duplication in the AfterWalkers\nvar NextTerminalAfterAtLeastOneSepWalker = /** @class */ (function (_super) {\n    __extends(NextTerminalAfterAtLeastOneSepWalker, _super);\n    function NextTerminalAfterAtLeastOneSepWalker() {\n        return _super !== null && _super.apply(this, arguments) /* istanbul ignore next */ || this;\n    }\n    NextTerminalAfterAtLeastOneSepWalker.prototype.walkAtLeastOneSep = function (atleastOneSepProd, currRest, prevRest) {\n        if (atleastOneSepProd.idx === this.occurrence) {\n            var firstAfterfirstAfterAtLeastOneSep = utils_1.first(currRest.concat(prevRest));\n            this.result.isEndOfRule =\n                firstAfterfirstAfterAtLeastOneSep === undefined;\n            if (firstAfterfirstAfterAtLeastOneSep instanceof gast_public_1.Terminal) {\n                this.result.token =\n                    firstAfterfirstAfterAtLeastOneSep.terminalType;\n                this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;\n            }\n        }\n        else {\n            _super.prototype.walkAtLeastOneSep.call(this, atleastOneSepProd, currRest, prevRest);\n        }\n    };\n    return NextTerminalAfterAtLeastOneSepWalker;\n}(AbstractNextTerminalAfterProductionWalker));\nexports.NextTerminalAfterAtLeastOneSepWalker = NextTerminalAfterAtLeastOneSepWalker;\nfunction possiblePathsFrom(targetDef, maxLength, currPath) {\n    if (currPath === void 0) { currPath = []; }\n    // avoid side effects\n    currPath = utils_1.cloneArr(currPath);\n    var result = [];\n    var i = 0;\n    function remainingPathWith(nextDef) {\n        return nextDef.concat(utils_1.drop(targetDef, i + 1));\n    }\n    function getAlternativesForProd(definition) {\n        var alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);\n        return result.concat(alternatives);\n    }\n    /**\n     * Mandatory productions will halt the loop as the paths computed from their recursive calls will already contain the\n     * following (rest) of the targetDef.\n     *\n     * For optional productions (Option/Repetition/...) the loop will continue to represent the paths that do not include the\n     * the optional production.\n     */\n    while (currPath.length < maxLength && i < targetDef.length) {\n        var prod = targetDef[i];\n        /* istanbul ignore else */\n        if (prod instanceof gast_public_1.Flat) {\n            return getAlternativesForProd(prod.definition);\n        }\n        else if (prod instanceof gast_public_1.NonTerminal) {\n            return getAlternativesForProd(prod.definition);\n        }\n        else if (prod instanceof gast_public_1.Option) {\n            result = getAlternativesForProd(prod.definition);\n        }\n        else if (prod instanceof gast_public_1.RepetitionMandatory) {\n            var newDef = prod.definition.concat([\n                new gast_public_1.Repetition({\n                    definition: prod.definition\n                })\n            ]);\n            return getAlternativesForProd(newDef);\n        }\n        else if (prod instanceof gast_public_1.RepetitionMandatoryWithSeparator) {\n            var newDef = [\n                new gast_public_1.Flat({ definition: prod.definition }),\n                new gast_public_1.Repetition({\n                    definition: [\n                        new gast_public_1.Terminal({ terminalType: prod.separator })\n                    ].concat(prod.definition)\n                })\n            ];\n            return getAlternativesForProd(newDef);\n        }\n        else if (prod instanceof gast_public_1.RepetitionWithSeparator) {\n            var newDef = prod.definition.concat([\n                new gast_public_1.Repetition({\n                    definition: [\n                        new gast_public_1.Terminal({ terminalType: prod.separator })\n                    ].concat(prod.definition)\n                })\n            ]);\n            result = getAlternativesForProd(newDef);\n        }\n        else if (prod instanceof gast_public_1.Repetition) {\n            var newDef = prod.definition.concat([\n                new gast_public_1.Repetition({\n                    definition: prod.definition\n                })\n            ]);\n            result = getAlternativesForProd(newDef);\n        }\n        else if (prod instanceof gast_public_1.Alternation) {\n            utils_1.forEach(prod.definition, function (currAlt) {\n                result = getAlternativesForProd(currAlt.definition);\n            });\n            return result;\n        }\n        else if (prod instanceof gast_public_1.Terminal) {\n            currPath.push(prod.terminalType);\n        }\n        else {\n            throw Error(\"non exhaustive match\");\n        }\n        i++;\n    }\n    result.push({\n        partialPath: currPath,\n        suffixDef: utils_1.drop(targetDef, i)\n    });\n    return result;\n}\nexports.possiblePathsFrom = possiblePathsFrom;\nfunction nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {\n    var EXIT_NON_TERMINAL = \"EXIT_NONE_TERMINAL\";\n    // to avoid creating a new Array each time.\n    var EXIT_NON_TERMINAL_ARR = [EXIT_NON_TERMINAL];\n    var EXIT_ALTERNATIVE = \"EXIT_ALTERNATIVE\";\n    var foundCompletePath = false;\n    var tokenVectorLength = tokenVector.length;\n    var minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;\n    var result = [];\n    var possiblePaths = [];\n    possiblePaths.push({\n        idx: -1,\n        def: initialDef,\n        ruleStack: [],\n        occurrenceStack: []\n    });\n    while (!utils_1.isEmpty(possiblePaths)) {\n        var currPath = possiblePaths.pop();\n        // skip alternatives if no more results can be found (assuming deterministic grammar with fixed lookahead)\n        if (currPath === EXIT_ALTERNATIVE) {\n            if (foundCompletePath &&\n                utils_1.last(possiblePaths).idx <= minimalAlternativesIndex) {\n                // remove irrelevant alternative\n                possiblePaths.pop();\n            }\n            continue;\n        }\n        var currDef = currPath.def;\n        var currIdx = currPath.idx;\n        var currRuleStack = currPath.ruleStack;\n        var currOccurrenceStack = currPath.occurrenceStack;\n        // For Example: an empty path could exist in a valid grammar in the case of an EMPTY_ALT\n        if (utils_1.isEmpty(currDef)) {\n            continue;\n        }\n        var prod = currDef[0];\n        /* istanbul ignore else */\n        if (prod === EXIT_NON_TERMINAL) {\n            var nextPath = {\n                idx: currIdx,\n                def: utils_1.drop(currDef),\n                ruleStack: utils_1.dropRight(currRuleStack),\n                occurrenceStack: utils_1.dropRight(currOccurrenceStack)\n            };\n            possiblePaths.push(nextPath);\n        }\n        else if (prod instanceof gast_public_1.Terminal) {\n            /* istanbul ignore else */\n            if (currIdx < tokenVectorLength - 1) {\n                var nextIdx = currIdx + 1;\n                var actualToken = tokenVector[nextIdx];\n                if (tokMatcher(actualToken, prod.terminalType)) {\n                    var nextPath = {\n                        idx: nextIdx,\n                        def: utils_1.drop(currDef),\n                        ruleStack: currRuleStack,\n                        occurrenceStack: currOccurrenceStack\n                    };\n                    possiblePaths.push(nextPath);\n                }\n                // end of the line\n            }\n            else if (currIdx === tokenVectorLength - 1) {\n                // IGNORE ABOVE ELSE\n                result.push({\n                    nextTokenType: prod.terminalType,\n                    nextTokenOccurrence: prod.idx,\n                    ruleStack: currRuleStack,\n                    occurrenceStack: currOccurrenceStack\n                });\n                foundCompletePath = true;\n            }\n            else {\n                throw Error(\"non exhaustive match\");\n            }\n        }\n        else if (prod instanceof gast_public_1.NonTerminal) {\n            var newRuleStack = utils_1.cloneArr(currRuleStack);\n            newRuleStack.push(prod.nonTerminalName);\n            var newOccurrenceStack = utils_1.cloneArr(currOccurrenceStack);\n            newOccurrenceStack.push(prod.idx);\n            var nextPath = {\n                idx: currIdx,\n                def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, utils_1.drop(currDef)),\n                ruleStack: newRuleStack,\n                occurrenceStack: newOccurrenceStack\n            };\n            possiblePaths.push(nextPath);\n        }\n        else if (prod instanceof gast_public_1.Option) {\n            // the order of alternatives is meaningful, FILO (Last path will be traversed first).\n            var nextPathWithout = {\n                idx: currIdx,\n                def: utils_1.drop(currDef),\n                ruleStack: currRuleStack,\n                occurrenceStack: currOccurrenceStack\n            };\n            possiblePaths.push(nextPathWithout);\n            // required marker to avoid backtracking paths whose higher priority alternatives already matched\n            possiblePaths.push(EXIT_ALTERNATIVE);\n            var nextPathWith = {\n                idx: currIdx,\n                def: prod.definition.concat(utils_1.drop(currDef)),\n                ruleStack: currRuleStack,\n                occurrenceStack: currOccurrenceStack\n            };\n            possiblePaths.push(nextPathWith);\n        }\n        else if (prod instanceof gast_public_1.RepetitionMandatory) {\n            // TODO:(THE NEW operators here take a while...) (convert once?)\n            var secondIteration = new gast_public_1.Repetition({\n                definition: prod.definition,\n                idx: prod.idx\n            });\n            var nextDef = prod.definition.concat([secondIteration], utils_1.drop(currDef));\n            var nextPath = {\n                idx: currIdx,\n                def: nextDef,\n                ruleStack: currRuleStack,\n                occurrenceStack: currOccurrenceStack\n            };\n            possiblePaths.push(nextPath);\n        }\n        else if (prod instanceof gast_public_1.RepetitionMandatoryWithSeparator) {\n            // TODO:(THE NEW operators here take a while...) (convert once?)\n            var separatorGast = new gast_public_1.Terminal({\n                terminalType: prod.separator\n            });\n            var secondIteration = new gast_public_1.Repetition({\n                definition: [separatorGast].concat(prod.definition),\n                idx: prod.idx\n            });\n            var nextDef = prod.definition.concat([secondIteration], utils_1.drop(currDef));\n            var nextPath = {\n                idx: currIdx,\n                def: nextDef,\n                ruleStack: currRuleStack,\n                occurrenceStack: currOccurrenceStack\n            };\n            possiblePaths.push(nextPath);\n        }\n        else if (prod instanceof gast_public_1.RepetitionWithSeparator) {\n            // the order of alternatives is meaningful, FILO (Last path will be traversed first).\n            var nextPathWithout = {\n                idx: currIdx,\n                def: utils_1.drop(currDef),\n                ruleStack: currRuleStack,\n                occurrenceStack: currOccurrenceStack\n            };\n            possiblePaths.push(nextPathWithout);\n            // required marker to avoid backtracking paths whose higher priority alternatives already matched\n            possiblePaths.push(EXIT_ALTERNATIVE);\n            var separatorGast = new gast_public_1.Terminal({\n                terminalType: prod.separator\n            });\n            var nthRepetition = new gast_public_1.Repetition({\n                definition: [separatorGast].concat(prod.definition),\n                idx: prod.idx\n            });\n            var nextDef = prod.definition.concat([nthRepetition], utils_1.drop(currDef));\n            var nextPathWith = {\n                idx: currIdx,\n                def: nextDef,\n                ruleStack: currRuleStack,\n                occurrenceStack: currOccurrenceStack\n            };\n            possiblePaths.push(nextPathWith);\n        }\n        else if (prod instanceof gast_public_1.Repetition) {\n            // the order of alternatives is meaningful, FILO (Last path will be traversed first).\n            var nextPathWithout = {\n                idx: currIdx,\n                def: utils_1.drop(currDef),\n                ruleStack: currRuleStack,\n                occurrenceStack: currOccurrenceStack\n            };\n            possiblePaths.push(nextPathWithout);\n            // required marker to avoid backtracking paths whose higher priority alternatives already matched\n            possiblePaths.push(EXIT_ALTERNATIVE);\n            // TODO: an empty repetition will cause infinite loops here, will the parser detect this in selfAnalysis?\n            var nthRepetition = new gast_public_1.Repetition({\n                definition: prod.definition,\n                idx: prod.idx\n            });\n            var nextDef = prod.definition.concat([nthRepetition], utils_1.drop(currDef));\n            var nextPathWith = {\n                idx: currIdx,\n                def: nextDef,\n                ruleStack: currRuleStack,\n                occurrenceStack: currOccurrenceStack\n            };\n            possiblePaths.push(nextPathWith);\n        }\n        else if (prod instanceof gast_public_1.Alternation) {\n            // the order of alternatives is meaningful, FILO (Last path will be traversed first).\n            for (var i = prod.definition.length - 1; i >= 0; i--) {\n                var currAlt = prod.definition[i];\n                var currAltPath = {\n                    idx: currIdx,\n                    def: currAlt.definition.concat(utils_1.drop(currDef)),\n                    ruleStack: currRuleStack,\n                    occurrenceStack: currOccurrenceStack\n                };\n                possiblePaths.push(currAltPath);\n                possiblePaths.push(EXIT_ALTERNATIVE);\n            }\n        }\n        else if (prod instanceof gast_public_1.Flat) {\n            possiblePaths.push({\n                idx: currIdx,\n                def: prod.definition.concat(utils_1.drop(currDef)),\n                ruleStack: currRuleStack,\n                occurrenceStack: currOccurrenceStack\n            });\n        }\n        else if (prod instanceof gast_public_1.Rule) {\n            // last because we should only encounter at most a single one of these per invocation.\n            possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));\n        }\n        else {\n            throw Error(\"non exhaustive match\");\n        }\n    }\n    return result;\n}\nexports.nextPossibleTokensAfter = nextPossibleTokensAfter;\nfunction expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {\n    var newRuleStack = utils_1.cloneArr(currRuleStack);\n    newRuleStack.push(topRule.name);\n    var newCurrOccurrenceStack = utils_1.cloneArr(currOccurrenceStack);\n    // top rule is always assumed to have been called with occurrence index 1\n    newCurrOccurrenceStack.push(1);\n    return {\n        idx: currIdx,\n        def: topRule.definition,\n        ruleStack: newRuleStack,\n        occurrenceStack: newCurrOccurrenceStack\n    };\n}\n//# sourceMappingURL=interpreter.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/interpreter.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/keys.js":
/*!***************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/keys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Lookahead keys are 32Bit integers in the form\n// TTTTTTTTT-ZZZZZZZZZZZZZZZ-YYYY-XXXX\n// XXXX -> Occurrence Index bitmap.\n// YYYY -> DSL Method Name bitmap.\n// ZZZZZZZZZZZZZZZ -> Rule short Index bitmap.\n// TTTTTTTTT -> alternation alternative index bitmap\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BITS_FOR_METHOD_IDX = 4;\nexports.BITS_FOR_OCCURRENCE_IDX = 4;\nexports.BITS_FOR_RULE_IDX = 24;\n// TODO: validation, this means that there may at most 2^8 --> 256 alternatives for an alternation.\nexports.BITS_FOR_ALT_IDX = 8;\n// short string used as part of mapping keys.\n// being short improves the performance when composing KEYS for maps out of these\n// The 5 - 8 bits (16 possible values, are reserved for the DSL method indices)\n/* tslint:disable */\nexports.OR_IDX = 1 << exports.BITS_FOR_METHOD_IDX;\nexports.OPTION_IDX = 2 << exports.BITS_FOR_METHOD_IDX;\nexports.MANY_IDX = 3 << exports.BITS_FOR_METHOD_IDX;\nexports.AT_LEAST_ONE_IDX = 4 << exports.BITS_FOR_METHOD_IDX;\nexports.MANY_SEP_IDX = 5 << exports.BITS_FOR_METHOD_IDX;\nexports.AT_LEAST_ONE_SEP_IDX = 6 << exports.BITS_FOR_METHOD_IDX;\n/* tslint:enable */\n// this actually returns a number, but it is always used as a string (object prop key)\nfunction getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {\n    /* tslint:disable */\n    return occurrence | dslMethodIdx | ruleIdx;\n    /* tslint:enable */\n}\nexports.getKeyForAutomaticLookahead = getKeyForAutomaticLookahead;\nvar BITS_START_FOR_ALT_IDX = 32 - exports.BITS_FOR_ALT_IDX;\nfunction getKeyForAltIndex(ruleIdx, dslMethodIdx, occurrence, altIdx) {\n    /* tslint:disable */\n    // alternative indices are zero based, thus must always add one (turn on one bit) to guarantee uniqueness.\n    var altIdxBitMap = (altIdx + 1) << BITS_START_FOR_ALT_IDX;\n    return (getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) |\n        altIdxBitMap);\n    /* tslint:enable */\n}\nexports.getKeyForAltIndex = getKeyForAltIndex;\n//# sourceMappingURL=keys.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/keys.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/lookahead.js":
/*!********************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/lookahead.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar interpreter_1 = __webpack_require__(/*! ./interpreter */ \"./node_modules/chevrotain/lib/src/parse/grammar/interpreter.js\");\nvar rest_1 = __webpack_require__(/*! ./rest */ \"./node_modules/chevrotain/lib/src/parse/grammar/rest.js\");\nvar tokens_1 = __webpack_require__(/*! ../../scan/tokens */ \"./node_modules/chevrotain/lib/src/scan/tokens.js\");\nvar gast_public_1 = __webpack_require__(/*! ./gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\nvar gast_visitor_public_1 = __webpack_require__(/*! ./gast/gast_visitor_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_visitor_public.js\");\nvar PROD_TYPE;\n(function (PROD_TYPE) {\n    PROD_TYPE[PROD_TYPE[\"OPTION\"] = 0] = \"OPTION\";\n    PROD_TYPE[PROD_TYPE[\"REPETITION\"] = 1] = \"REPETITION\";\n    PROD_TYPE[PROD_TYPE[\"REPETITION_MANDATORY\"] = 2] = \"REPETITION_MANDATORY\";\n    PROD_TYPE[PROD_TYPE[\"REPETITION_MANDATORY_WITH_SEPARATOR\"] = 3] = \"REPETITION_MANDATORY_WITH_SEPARATOR\";\n    PROD_TYPE[PROD_TYPE[\"REPETITION_WITH_SEPARATOR\"] = 4] = \"REPETITION_WITH_SEPARATOR\";\n    PROD_TYPE[PROD_TYPE[\"ALTERNATION\"] = 5] = \"ALTERNATION\";\n})(PROD_TYPE = exports.PROD_TYPE || (exports.PROD_TYPE = {}));\nfunction getProdType(prod) {\n    /* istanbul ignore else */\n    if (prod instanceof gast_public_1.Option) {\n        return PROD_TYPE.OPTION;\n    }\n    else if (prod instanceof gast_public_1.Repetition) {\n        return PROD_TYPE.REPETITION;\n    }\n    else if (prod instanceof gast_public_1.RepetitionMandatory) {\n        return PROD_TYPE.REPETITION_MANDATORY;\n    }\n    else if (prod instanceof gast_public_1.RepetitionMandatoryWithSeparator) {\n        return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;\n    }\n    else if (prod instanceof gast_public_1.RepetitionWithSeparator) {\n        return PROD_TYPE.REPETITION_WITH_SEPARATOR;\n    }\n    else if (prod instanceof gast_public_1.Alternation) {\n        return PROD_TYPE.ALTERNATION;\n    }\n    else {\n        throw Error(\"non exhaustive match\");\n    }\n}\nexports.getProdType = getProdType;\nfunction buildLookaheadFuncForOr(occurrence, ruleGrammar, k, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {\n    var lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, k);\n    var tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths)\n        ? tokens_1.tokenStructuredMatcherNoCategories\n        : tokens_1.tokenStructuredMatcher;\n    return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher, dynamicTokensEnabled);\n}\nexports.buildLookaheadFuncForOr = buildLookaheadFuncForOr;\n/**\n *  When dealing with an Optional production (OPTION/MANY/2nd iteration of AT_LEAST_ONE/...) we need to compare\n *  the lookahead \"inside\" the production and the lookahead immediately \"after\" it in the same top level rule (context free).\n *\n *  Example: given a production:\n *  ABC(DE)?DF\n *\n *  The optional '(DE)?' should only be entered if we see 'DE'. a single Token 'D' is not sufficient to distinguish between the two\n *  alternatives.\n *\n *  @returns A Lookahead function which will return true IFF the parser should parse the Optional production.\n */\nfunction buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {\n    var lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);\n    var tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths)\n        ? tokens_1.tokenStructuredMatcherNoCategories\n        : tokens_1.tokenStructuredMatcher;\n    return lookaheadBuilder(lookAheadPaths[0], tokenMatcher, dynamicTokensEnabled);\n}\nexports.buildLookaheadFuncForOptionalProd = buildLookaheadFuncForOptionalProd;\nfunction buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled) {\n    var numOfAlts = alts.length;\n    var areAllOneTokenLookahead = utils_1.every(alts, function (currAlt) {\n        return utils_1.every(currAlt, function (currPath) {\n            return currPath.length === 1;\n        });\n    });\n    // This version takes into account the predicates as well.\n    if (hasPredicates) {\n        /**\n         * @returns {number} - The chosen alternative index\n         */\n        return function (orAlts) {\n            // unfortunately the predicates must be extracted every single time\n            // as they cannot be cached due to references to parameters(vars) which are no longer valid.\n            // note that in the common case of no predicates, no cpu time will be wasted on this (see else block)\n            var predicates = utils_1.map(orAlts, function (currAlt) { return currAlt.GATE; });\n            for (var t = 0; t < numOfAlts; t++) {\n                var currAlt = alts[t];\n                var currNumOfPaths = currAlt.length;\n                var currPredicate = predicates[t];\n                if (currPredicate !== undefined &&\n                    currPredicate.call(this) === false) {\n                    // if the predicate does not match there is no point in checking the paths\n                    continue;\n                }\n                nextPath: for (var j = 0; j < currNumOfPaths; j++) {\n                    var currPath = currAlt[j];\n                    var currPathLength = currPath.length;\n                    for (var i = 0; i < currPathLength; i++) {\n                        var nextToken = this.LA(i + 1);\n                        if (tokenMatcher(nextToken, currPath[i]) === false) {\n                            // mismatch in current path\n                            // try the next pth\n                            continue nextPath;\n                        }\n                    }\n                    // found a full path that matches.\n                    // this will also work for an empty ALT as the loop will be skipped\n                    return t;\n                }\n                // none of the paths for the current alternative matched\n                // try the next alternative\n            }\n            // none of the alternatives could be matched\n            return undefined;\n        };\n    }\n    else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {\n        // optimized (common) case of all the lookaheads paths requiring only\n        // a single token lookahead. These Optimizations cannot work if dynamically defined Tokens are used.\n        var singleTokenAlts = utils_1.map(alts, function (currAlt) {\n            return utils_1.flatten(currAlt);\n        });\n        var choiceToAlt_1 = utils_1.reduce(singleTokenAlts, function (result, currAlt, idx) {\n            utils_1.forEach(currAlt, function (currTokType) {\n                if (!utils_1.has(result, currTokType.tokenTypeIdx)) {\n                    result[currTokType.tokenTypeIdx] = idx;\n                }\n                utils_1.forEach(currTokType.categoryMatches, function (currExtendingType) {\n                    if (!utils_1.has(result, currExtendingType)) {\n                        result[currExtendingType] = idx;\n                    }\n                });\n            });\n            return result;\n        }, []);\n        /**\n         * @returns {number} - The chosen alternative index\n         */\n        return function () {\n            var nextToken = this.LA(1);\n            return choiceToAlt_1[nextToken.tokenTypeIdx];\n        };\n    }\n    else {\n        // optimized lookahead without needing to check the predicates at all.\n        // this causes code duplication which is intentional to improve performance.\n        /**\n         * @returns {number} - The chosen alternative index\n         */\n        return function () {\n            for (var t = 0; t < numOfAlts; t++) {\n                var currAlt = alts[t];\n                var currNumOfPaths = currAlt.length;\n                nextPath: for (var j = 0; j < currNumOfPaths; j++) {\n                    var currPath = currAlt[j];\n                    var currPathLength = currPath.length;\n                    for (var i = 0; i < currPathLength; i++) {\n                        var nextToken = this.LA(i + 1);\n                        if (tokenMatcher(nextToken, currPath[i]) === false) {\n                            // mismatch in current path\n                            // try the next pth\n                            continue nextPath;\n                        }\n                    }\n                    // found a full path that matches.\n                    // this will also work for an empty ALT as the loop will be skipped\n                    return t;\n                }\n                // none of the paths for the current alternative matched\n                // try the next alternative\n            }\n            // none of the alternatives could be matched\n            return undefined;\n        };\n    }\n}\nexports.buildAlternativesLookAheadFunc = buildAlternativesLookAheadFunc;\nfunction buildSingleAlternativeLookaheadFunction(alt, tokenMatcher, dynamicTokensEnabled) {\n    var areAllOneTokenLookahead = utils_1.every(alt, function (currPath) {\n        return currPath.length === 1;\n    });\n    var numOfPaths = alt.length;\n    // optimized (common) case of all the lookaheads paths requiring only\n    // a single token lookahead.\n    if (areAllOneTokenLookahead && !dynamicTokensEnabled) {\n        var singleTokensTypes = utils_1.flatten(alt);\n        if (singleTokensTypes.length === 1 &&\n            utils_1.isEmpty(singleTokensTypes[0].categoryMatches)) {\n            var expectedTokenType = singleTokensTypes[0];\n            var expectedTokenUniqueKey_1 = expectedTokenType.tokenTypeIdx;\n            return function () {\n                return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey_1;\n            };\n        }\n        else {\n            var choiceToAlt_2 = utils_1.reduce(singleTokensTypes, function (result, currTokType, idx) {\n                result[currTokType.tokenTypeIdx] = true;\n                utils_1.forEach(currTokType.categoryMatches, function (currExtendingType) {\n                    result[currExtendingType] = true;\n                });\n                return result;\n            }, []);\n            return function () {\n                var nextToken = this.LA(1);\n                return choiceToAlt_2[nextToken.tokenTypeIdx] === true;\n            };\n        }\n    }\n    else {\n        return function () {\n            nextPath: for (var j = 0; j < numOfPaths; j++) {\n                var currPath = alt[j];\n                var currPathLength = currPath.length;\n                for (var i = 0; i < currPathLength; i++) {\n                    var nextToken = this.LA(i + 1);\n                    if (tokenMatcher(nextToken, currPath[i]) === false) {\n                        // mismatch in current path\n                        // try the next pth\n                        continue nextPath;\n                    }\n                }\n                // found a full path that matches.\n                return true;\n            }\n            // none of the paths matched\n            return false;\n        };\n    }\n}\nexports.buildSingleAlternativeLookaheadFunction = buildSingleAlternativeLookaheadFunction;\nvar RestDefinitionFinderWalker = /** @class */ (function (_super) {\n    __extends(RestDefinitionFinderWalker, _super);\n    function RestDefinitionFinderWalker(topProd, targetOccurrence, targetProdType) {\n        var _this = _super.call(this) || this;\n        _this.topProd = topProd;\n        _this.targetOccurrence = targetOccurrence;\n        _this.targetProdType = targetProdType;\n        return _this;\n    }\n    RestDefinitionFinderWalker.prototype.startWalking = function () {\n        this.walk(this.topProd);\n        return this.restDef;\n    };\n    RestDefinitionFinderWalker.prototype.checkIsTarget = function (node, expectedProdType, currRest, prevRest) {\n        if (node.idx === this.targetOccurrence &&\n            this.targetProdType === expectedProdType) {\n            this.restDef = currRest.concat(prevRest);\n            return true;\n        }\n        // performance optimization, do not iterate over the entire Grammar ast after we have found the target\n        return false;\n    };\n    RestDefinitionFinderWalker.prototype.walkOption = function (optionProd, currRest, prevRest) {\n        if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) {\n            _super.prototype.walkOption.call(this, optionProd, currRest, prevRest);\n        }\n    };\n    RestDefinitionFinderWalker.prototype.walkAtLeastOne = function (atLeastOneProd, currRest, prevRest) {\n        if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) {\n            _super.prototype.walkOption.call(this, atLeastOneProd, currRest, prevRest);\n        }\n    };\n    RestDefinitionFinderWalker.prototype.walkAtLeastOneSep = function (atLeastOneSepProd, currRest, prevRest) {\n        if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) {\n            _super.prototype.walkOption.call(this, atLeastOneSepProd, currRest, prevRest);\n        }\n    };\n    RestDefinitionFinderWalker.prototype.walkMany = function (manyProd, currRest, prevRest) {\n        if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) {\n            _super.prototype.walkOption.call(this, manyProd, currRest, prevRest);\n        }\n    };\n    RestDefinitionFinderWalker.prototype.walkManySep = function (manySepProd, currRest, prevRest) {\n        if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) {\n            _super.prototype.walkOption.call(this, manySepProd, currRest, prevRest);\n        }\n    };\n    return RestDefinitionFinderWalker;\n}(rest_1.RestWalker));\n/**\n * Returns the definition of a target production in a top level level rule.\n */\nvar InsideDefinitionFinderVisitor = /** @class */ (function (_super) {\n    __extends(InsideDefinitionFinderVisitor, _super);\n    function InsideDefinitionFinderVisitor(targetOccurrence, targetProdType) {\n        var _this = _super.call(this) || this;\n        _this.targetOccurrence = targetOccurrence;\n        _this.targetProdType = targetProdType;\n        _this.result = [];\n        return _this;\n    }\n    InsideDefinitionFinderVisitor.prototype.checkIsTarget = function (node, expectedProdName) {\n        if (node.idx === this.targetOccurrence &&\n            this.targetProdType === expectedProdName) {\n            this.result = node.definition;\n        }\n    };\n    InsideDefinitionFinderVisitor.prototype.visitOption = function (node) {\n        this.checkIsTarget(node, PROD_TYPE.OPTION);\n    };\n    InsideDefinitionFinderVisitor.prototype.visitRepetition = function (node) {\n        this.checkIsTarget(node, PROD_TYPE.REPETITION);\n    };\n    InsideDefinitionFinderVisitor.prototype.visitRepetitionMandatory = function (node) {\n        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);\n    };\n    InsideDefinitionFinderVisitor.prototype.visitRepetitionMandatoryWithSeparator = function (node) {\n        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);\n    };\n    InsideDefinitionFinderVisitor.prototype.visitRepetitionWithSeparator = function (node) {\n        this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);\n    };\n    InsideDefinitionFinderVisitor.prototype.visitAlternation = function (node) {\n        this.checkIsTarget(node, PROD_TYPE.ALTERNATION);\n    };\n    return InsideDefinitionFinderVisitor;\n}(gast_visitor_public_1.GAstVisitor));\nfunction lookAheadSequenceFromAlternatives(altsDefs, k) {\n    function getOtherPaths(pathsAndSuffixes, filterIdx) {\n        return utils_1.reduce(pathsAndSuffixes, function (result, currPathsAndSuffixes, currIdx) {\n            if (currIdx !== filterIdx) {\n                var currPartialPaths = utils_1.map(currPathsAndSuffixes, function (singlePathAndSuffix) { return singlePathAndSuffix.partialPath; });\n                return result.concat(currPartialPaths);\n            }\n            return result;\n        }, []);\n    }\n    function isUniquePrefix(arr, item) {\n        return (utils_1.find(arr, function (currOtherPath) {\n            return utils_1.every(item, function (currPathTok, idx) { return currPathTok === currOtherPath[idx]; });\n        }) === undefined);\n    }\n    function initializeArrayOfArrays(size) {\n        var result = [];\n        for (var i = 0; i < size; i++) {\n            result.push([]);\n        }\n        return result;\n    }\n    var partialAlts = utils_1.map(altsDefs, function (currAlt) { return interpreter_1.possiblePathsFrom([currAlt], 1); });\n    var finalResult = initializeArrayOfArrays(partialAlts.length);\n    var newData = partialAlts;\n    // maxLookahead loop\n    for (var pathLength = 1; pathLength <= k; pathLength++) {\n        var currDataset = newData;\n        newData = initializeArrayOfArrays(currDataset.length);\n        // alternatives loop\n        for (var resultIdx = 0; resultIdx < currDataset.length; resultIdx++) {\n            var currAltPathsAndSuffixes = currDataset[resultIdx];\n            var otherPaths = getOtherPaths(currDataset, resultIdx);\n            // paths in current alternative loop\n            for (var currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++) {\n                var currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;\n                var suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;\n                var isUnique = isUniquePrefix(otherPaths, currPathPrefix);\n                // even if a path is not unique, but there are no longer alternatives to try\n                // or if we have reached the maximum lookahead (k) permitted.\n                if (isUnique ||\n                    utils_1.isEmpty(suffixDef) ||\n                    currPathPrefix.length === k) {\n                    var currAltResult = finalResult[resultIdx];\n                    if (!containsPath(currAltResult, currPathPrefix)) {\n                        currAltResult.push(currPathPrefix);\n                    }\n                }\n                else {\n                    var newPartialPathsAndSuffixes = interpreter_1.possiblePathsFrom(suffixDef, pathLength + 1, currPathPrefix);\n                    newData[resultIdx] = newData[resultIdx].concat(newPartialPathsAndSuffixes);\n                }\n            }\n        }\n    }\n    return finalResult;\n}\nexports.lookAheadSequenceFromAlternatives = lookAheadSequenceFromAlternatives;\nfunction getLookaheadPathsForOr(occurrence, ruleGrammar, k) {\n    var visitor = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION);\n    ruleGrammar.accept(visitor);\n    return lookAheadSequenceFromAlternatives(visitor.result, k);\n}\nexports.getLookaheadPathsForOr = getLookaheadPathsForOr;\nfunction getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {\n    var insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);\n    ruleGrammar.accept(insideDefVisitor);\n    var insideDef = insideDefVisitor.result;\n    var afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);\n    var afterDef = afterDefWalker.startWalking();\n    var insideFlat = new gast_public_1.Flat({ definition: insideDef });\n    var afterFlat = new gast_public_1.Flat({ definition: afterDef });\n    return lookAheadSequenceFromAlternatives([insideFlat, afterFlat], k);\n}\nexports.getLookaheadPathsForOptionalProd = getLookaheadPathsForOptionalProd;\nfunction containsPath(alternative, path) {\n    var found = utils_1.find(alternative, function (otherPath) {\n        return (path.length === otherPath.length &&\n            utils_1.every(path, function (targetItem, idx) {\n                return targetItem === otherPath[idx];\n            }));\n    });\n    return found !== undefined;\n}\nexports.containsPath = containsPath;\nfunction isStrictPrefixOfPath(prefix, other) {\n    return (prefix.length < other.length &&\n        utils_1.every(prefix, function (tokType, idx) {\n            return tokType === other[idx];\n        }));\n}\nexports.isStrictPrefixOfPath = isStrictPrefixOfPath;\nfunction areTokenCategoriesNotUsed(lookAheadPaths) {\n    return utils_1.every(lookAheadPaths, function (singleAltPaths) {\n        return utils_1.every(singleAltPaths, function (singlePath) {\n            return utils_1.every(singlePath, function (token) { return utils_1.isEmpty(token.categoryMatches); });\n        });\n    });\n}\nexports.areTokenCategoriesNotUsed = areTokenCategoriesNotUsed;\n//# sourceMappingURL=lookahead.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/lookahead.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/resolver.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/resolver.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar parser_1 = __webpack_require__(/*! ../parser/parser */ \"./node_modules/chevrotain/lib/src/parse/parser/parser.js\");\nvar utils_1 = __webpack_require__(/*! ../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar gast_visitor_public_1 = __webpack_require__(/*! ./gast/gast_visitor_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_visitor_public.js\");\nfunction resolveGrammar(topLevels, errMsgProvider) {\n    var refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);\n    refResolver.resolveRefs();\n    return refResolver.errors;\n}\nexports.resolveGrammar = resolveGrammar;\nvar GastRefResolverVisitor = /** @class */ (function (_super) {\n    __extends(GastRefResolverVisitor, _super);\n    function GastRefResolverVisitor(nameToTopRule, errMsgProvider) {\n        var _this = _super.call(this) || this;\n        _this.nameToTopRule = nameToTopRule;\n        _this.errMsgProvider = errMsgProvider;\n        _this.errors = [];\n        return _this;\n    }\n    GastRefResolverVisitor.prototype.resolveRefs = function () {\n        var _this = this;\n        utils_1.forEach(this.nameToTopRule.values(), function (prod) {\n            _this.currTopLevel = prod;\n            prod.accept(_this);\n        });\n    };\n    GastRefResolverVisitor.prototype.visitNonTerminal = function (node) {\n        var ref = this.nameToTopRule.get(node.nonTerminalName);\n        if (!ref) {\n            var msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);\n            this.errors.push({\n                message: msg,\n                type: parser_1.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,\n                ruleName: this.currTopLevel.name,\n                unresolvedRefName: node.nonTerminalName\n            });\n        }\n        else {\n            node.referencedRule = ref;\n        }\n    };\n    return GastRefResolverVisitor;\n}(gast_visitor_public_1.GAstVisitor));\nexports.GastRefResolverVisitor = GastRefResolverVisitor;\n//# sourceMappingURL=resolver.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/resolver.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/grammar/rest.js":
/*!***************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/grammar/rest.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar gast_public_1 = __webpack_require__(/*! ./gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\n/**\n *  A Grammar Walker that computes the \"remaining\" grammar \"after\" a productions in the grammar.\n */\nvar RestWalker = /** @class */ (function () {\n    function RestWalker() {\n    }\n    RestWalker.prototype.walk = function (prod, prevRest) {\n        var _this = this;\n        if (prevRest === void 0) { prevRest = []; }\n        utils_1.forEach(prod.definition, function (subProd, index) {\n            var currRest = utils_1.drop(prod.definition, index + 1);\n            /* istanbul ignore else */\n            if (subProd instanceof gast_public_1.NonTerminal) {\n                _this.walkProdRef(subProd, currRest, prevRest);\n            }\n            else if (subProd instanceof gast_public_1.Terminal) {\n                _this.walkTerminal(subProd, currRest, prevRest);\n            }\n            else if (subProd instanceof gast_public_1.Flat) {\n                _this.walkFlat(subProd, currRest, prevRest);\n            }\n            else if (subProd instanceof gast_public_1.Option) {\n                _this.walkOption(subProd, currRest, prevRest);\n            }\n            else if (subProd instanceof gast_public_1.RepetitionMandatory) {\n                _this.walkAtLeastOne(subProd, currRest, prevRest);\n            }\n            else if (subProd instanceof gast_public_1.RepetitionMandatoryWithSeparator) {\n                _this.walkAtLeastOneSep(subProd, currRest, prevRest);\n            }\n            else if (subProd instanceof gast_public_1.RepetitionWithSeparator) {\n                _this.walkManySep(subProd, currRest, prevRest);\n            }\n            else if (subProd instanceof gast_public_1.Repetition) {\n                _this.walkMany(subProd, currRest, prevRest);\n            }\n            else if (subProd instanceof gast_public_1.Alternation) {\n                _this.walkOr(subProd, currRest, prevRest);\n            }\n            else {\n                throw Error(\"non exhaustive match\");\n            }\n        });\n    };\n    RestWalker.prototype.walkTerminal = function (terminal, currRest, prevRest) { };\n    RestWalker.prototype.walkProdRef = function (refProd, currRest, prevRest) { };\n    RestWalker.prototype.walkFlat = function (flatProd, currRest, prevRest) {\n        // ABCDEF => after the D the rest is EF\n        var fullOrRest = currRest.concat(prevRest);\n        this.walk(flatProd, fullOrRest);\n    };\n    RestWalker.prototype.walkOption = function (optionProd, currRest, prevRest) {\n        // ABC(DE)?F => after the (DE)? the rest is F\n        var fullOrRest = currRest.concat(prevRest);\n        this.walk(optionProd, fullOrRest);\n    };\n    RestWalker.prototype.walkAtLeastOne = function (atLeastOneProd, currRest, prevRest) {\n        // ABC(DE)+F => after the (DE)+ the rest is (DE)?F\n        var fullAtLeastOneRest = [\n            new gast_public_1.Option({ definition: atLeastOneProd.definition })\n        ].concat(currRest, prevRest);\n        this.walk(atLeastOneProd, fullAtLeastOneRest);\n    };\n    RestWalker.prototype.walkAtLeastOneSep = function (atLeastOneSepProd, currRest, prevRest) {\n        // ABC DE(,DE)* F => after the (,DE)+ the rest is (,DE)?F\n        var fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);\n        this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);\n    };\n    RestWalker.prototype.walkMany = function (manyProd, currRest, prevRest) {\n        // ABC(DE)*F => after the (DE)* the rest is (DE)?F\n        var fullManyRest = [\n            new gast_public_1.Option({ definition: manyProd.definition })\n        ].concat(currRest, prevRest);\n        this.walk(manyProd, fullManyRest);\n    };\n    RestWalker.prototype.walkManySep = function (manySepProd, currRest, prevRest) {\n        // ABC (DE(,DE)*)? F => after the (,DE)* the rest is (,DE)?F\n        var fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);\n        this.walk(manySepProd, fullManySepRest);\n    };\n    RestWalker.prototype.walkOr = function (orProd, currRest, prevRest) {\n        var _this = this;\n        // ABC(D|E|F)G => when finding the (D|E|F) the rest is G\n        var fullOrRest = currRest.concat(prevRest);\n        // walk all different alternatives\n        utils_1.forEach(orProd.definition, function (alt) {\n            // wrapping each alternative in a single definition wrapper\n            // to avoid errors in computing the rest of that alternative in the invocation to computeInProdFollows\n            // (otherwise for OR([alt1,alt2]) alt2 will be considered in 'rest' of alt1\n            var prodWrapper = new gast_public_1.Flat({ definition: [alt] });\n            _this.walk(prodWrapper, fullOrRest);\n        });\n    };\n    return RestWalker;\n}());\nexports.RestWalker = RestWalker;\nfunction restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {\n    var repSepRest = [\n        new gast_public_1.Option({\n            definition: [\n                new gast_public_1.Terminal({ terminalType: repSepProd.separator })\n            ].concat(repSepProd.definition)\n        })\n    ];\n    var fullRepSepRest = repSepRest.concat(currRest, prevRest);\n    return fullRepSepRest;\n}\n//# sourceMappingURL=rest.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/grammar/rest.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/parser/parser.js":
/*!****************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/parser/parser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar lang_extensions_1 = __webpack_require__(/*! ../../lang/lang_extensions */ \"./node_modules/chevrotain/lib/src/lang/lang_extensions.js\");\nvar utils_1 = __webpack_require__(/*! ../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar follow_1 = __webpack_require__(/*! ../grammar/follow */ \"./node_modules/chevrotain/lib/src/parse/grammar/follow.js\");\nvar tokens_public_1 = __webpack_require__(/*! ../../scan/tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nvar gast_builder_1 = __webpack_require__(/*! ../gast_builder */ \"./node_modules/chevrotain/lib/src/parse/gast_builder.js\");\nvar cst_1 = __webpack_require__(/*! ../cst/cst */ \"./node_modules/chevrotain/lib/src/parse/cst/cst.js\");\nvar errors_public_1 = __webpack_require__(/*! ../errors_public */ \"./node_modules/chevrotain/lib/src/parse/errors_public.js\");\nvar gast_resolver_public_1 = __webpack_require__(/*! ../grammar/gast/gast_resolver_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js\");\nvar recoverable_1 = __webpack_require__(/*! ./traits/recoverable */ \"./node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js\");\nvar looksahead_1 = __webpack_require__(/*! ./traits/looksahead */ \"./node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js\");\nvar tree_builder_1 = __webpack_require__(/*! ./traits/tree_builder */ \"./node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js\");\nvar lexer_adapter_1 = __webpack_require__(/*! ./traits/lexer_adapter */ \"./node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js\");\nvar recognizer_api_1 = __webpack_require__(/*! ./traits/recognizer_api */ \"./node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js\");\nvar recognizer_engine_1 = __webpack_require__(/*! ./traits/recognizer_engine */ \"./node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js\");\nvar error_handler_1 = __webpack_require__(/*! ./traits/error_handler */ \"./node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js\");\nvar context_assist_1 = __webpack_require__(/*! ./traits/context_assist */ \"./node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js\");\nexports.END_OF_FILE = tokens_public_1.createTokenInstance(tokens_public_1.EOF, \"\", NaN, NaN, NaN, NaN, NaN, NaN);\nObject.freeze(exports.END_OF_FILE);\nexports.DEFAULT_PARSER_CONFIG = Object.freeze({\n    recoveryEnabled: false,\n    maxLookahead: 4,\n    ignoredIssues: {},\n    dynamicTokensEnabled: false,\n    outputCst: true,\n    errorMessageProvider: errors_public_1.defaultParserErrorProvider,\n    serializedGrammar: null\n});\nexports.DEFAULT_RULE_CONFIG = Object.freeze({\n    recoveryValueFunc: function () { return undefined; },\n    resyncEnabled: true\n});\nvar ParserDefinitionErrorType;\n(function (ParserDefinitionErrorType) {\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"INVALID_RULE_NAME\"] = 0] = \"INVALID_RULE_NAME\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"DUPLICATE_RULE_NAME\"] = 1] = \"DUPLICATE_RULE_NAME\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"INVALID_RULE_OVERRIDE\"] = 2] = \"INVALID_RULE_OVERRIDE\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"DUPLICATE_PRODUCTIONS\"] = 3] = \"DUPLICATE_PRODUCTIONS\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"UNRESOLVED_SUBRULE_REF\"] = 4] = \"UNRESOLVED_SUBRULE_REF\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"LEFT_RECURSION\"] = 5] = \"LEFT_RECURSION\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"NONE_LAST_EMPTY_ALT\"] = 6] = \"NONE_LAST_EMPTY_ALT\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"AMBIGUOUS_ALTS\"] = 7] = \"AMBIGUOUS_ALTS\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"CONFLICT_TOKENS_RULES_NAMESPACE\"] = 8] = \"CONFLICT_TOKENS_RULES_NAMESPACE\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"INVALID_TOKEN_NAME\"] = 9] = \"INVALID_TOKEN_NAME\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"INVALID_NESTED_RULE_NAME\"] = 10] = \"INVALID_NESTED_RULE_NAME\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"DUPLICATE_NESTED_NAME\"] = 11] = \"DUPLICATE_NESTED_NAME\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"NO_NON_EMPTY_LOOKAHEAD\"] = 12] = \"NO_NON_EMPTY_LOOKAHEAD\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"AMBIGUOUS_PREFIX_ALTS\"] = 13] = \"AMBIGUOUS_PREFIX_ALTS\";\n    ParserDefinitionErrorType[ParserDefinitionErrorType[\"TOO_MANY_ALTS\"] = 14] = \"TOO_MANY_ALTS\";\n})(ParserDefinitionErrorType = exports.ParserDefinitionErrorType || (exports.ParserDefinitionErrorType = {}));\nfunction EMPTY_ALT(value) {\n    if (value === void 0) { value = undefined; }\n    return function () {\n        return value;\n    };\n}\nexports.EMPTY_ALT = EMPTY_ALT;\nvar Parser = /** @class */ (function () {\n    function Parser(tokenVocabulary, config) {\n        if (config === void 0) { config = exports.DEFAULT_PARSER_CONFIG; }\n        this.ignoredIssues = exports.DEFAULT_PARSER_CONFIG.ignoredIssues;\n        this.definitionErrors = [];\n        this.selfAnalysisDone = false;\n        var that = this;\n        that.initErrorHandler(config);\n        that.initLexerAdapter();\n        that.initLooksAhead(config);\n        that.initRecognizerEngine(tokenVocabulary, config);\n        that.initRecoverable(config);\n        that.initTreeBuilder(config);\n        that.initContentAssist();\n        this.ignoredIssues = utils_1.has(config, \"ignoredIssues\")\n            ? config.ignoredIssues\n            : exports.DEFAULT_PARSER_CONFIG.ignoredIssues;\n        // Avoid performance regressions in newer versions of V8\n        utils_1.toFastProperties(this);\n    }\n    /**\n     *  @deprecated use the **instance** method with the same name instead\n     */\n    Parser.performSelfAnalysis = function (parserInstance) {\n        ;\n        parserInstance.performSelfAnalysis();\n    };\n    Parser.prototype.performSelfAnalysis = function () {\n        var _this = this;\n        var defErrorsMsgs;\n        this.selfAnalysisDone = true;\n        var className = lang_extensions_1.classNameFromInstance(this);\n        var productions = this.gastProductionsCache;\n        if (this.serializedGrammar) {\n            var rules = gast_builder_1.deserializeGrammar(this.serializedGrammar, this.tokensMap);\n            utils_1.forEach(rules, function (rule) {\n                _this.gastProductionsCache.put(rule.name, rule);\n            });\n        }\n        var resolverErrors = gast_resolver_public_1.resolveGrammar({\n            rules: productions.values()\n        });\n        this.definitionErrors.push.apply(this.definitionErrors, resolverErrors); // mutability for the win?\n        // only perform additional grammar validations IFF no resolving errors have occurred.\n        // as unresolved grammar may lead to unhandled runtime exceptions in the follow up validations.\n        if (utils_1.isEmpty(resolverErrors)) {\n            var validationErrors = gast_resolver_public_1.validateGrammar({\n                rules: productions.values(),\n                maxLookahead: this.maxLookahead,\n                tokenTypes: utils_1.values(this.tokensMap),\n                ignoredIssues: this.ignoredIssues,\n                errMsgProvider: errors_public_1.defaultGrammarValidatorErrorProvider,\n                grammarName: className\n            });\n            this.definitionErrors.push.apply(this.definitionErrors, validationErrors); // mutability for the win?\n        }\n        if (utils_1.isEmpty(this.definitionErrors)) {\n            // this analysis may fail if the grammar is not perfectly valid\n            var allFollows = follow_1.computeAllProdsFollows(productions.values());\n            this.resyncFollows = allFollows;\n        }\n        var cstAnalysisResult = cst_1.analyzeCst(productions.values(), this.fullRuleNameToShort);\n        this.allRuleNames = cstAnalysisResult.allRuleNames;\n        if (!Parser.DEFER_DEFINITION_ERRORS_HANDLING &&\n            !utils_1.isEmpty(this.definitionErrors)) {\n            defErrorsMsgs = utils_1.map(this.definitionErrors, function (defError) { return defError.message; });\n            throw new Error(\"Parser Definition Errors detected:\\n \" + defErrorsMsgs.join(\"\\n-------------------------------\\n\"));\n        }\n    };\n    // Set this flag to true if you don't want the Parser to throw error when problems in it's definition are detected.\n    // (normally during the parser's constructor).\n    // This is a design time flag, it will not affect the runtime error handling of the parser, just design time errors,\n    // for example: duplicate rule names, referencing an unresolved subrule, ect...\n    // This flag should not be enabled during normal usage, it is used in special situations, for example when\n    // needing to display the parser definition errors in some GUI(online playground).\n    Parser.DEFER_DEFINITION_ERRORS_HANDLING = false;\n    return Parser;\n}());\nexports.Parser = Parser;\nutils_1.applyMixins(Parser, [\n    recoverable_1.Recoverable,\n    looksahead_1.LooksAhead,\n    tree_builder_1.TreeBuilder,\n    lexer_adapter_1.LexerAdapter,\n    recognizer_engine_1.RecognizerEngine,\n    recognizer_api_1.RecognizerApi,\n    error_handler_1.ErrorHandler,\n    context_assist_1.ContentAssist\n]);\n//# sourceMappingURL=parser.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/parser/parser.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar interpreter_1 = __webpack_require__(/*! ../../grammar/interpreter */ \"./node_modules/chevrotain/lib/src/parse/grammar/interpreter.js\");\nvar utils_1 = __webpack_require__(/*! ../../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar ContentAssist = /** @class */ (function () {\n    function ContentAssist() {\n    }\n    ContentAssist.prototype.initContentAssist = function () { };\n    ContentAssist.prototype.computeContentAssist = function (startRuleName, precedingInput) {\n        var startRuleGast = this.gastProductionsCache.get(startRuleName);\n        if (utils_1.isUndefined(startRuleGast)) {\n            throw Error(\"Rule ->\" + startRuleName + \"<- does not exist in this grammar.\");\n        }\n        return interpreter_1.nextPossibleTokensAfter([startRuleGast], precedingInput, this.tokenMatcher, this.maxLookahead);\n    };\n    // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...\n    // TODO: should this be more explicitly part of the public API?\n    ContentAssist.prototype.getNextPossibleTokenTypes = function (grammarPath) {\n        var topRuleName = utils_1.first(grammarPath.ruleStack);\n        var gastProductions = this.getGAstProductions();\n        var topProduction = gastProductions.get(topRuleName);\n        var nextPossibleTokenTypes = new interpreter_1.NextAfterTokenWalker(topProduction, grammarPath).startWalking();\n        return nextPossibleTokenTypes;\n    };\n    return ContentAssist;\n}());\nexports.ContentAssist = ContentAssist;\n//# sourceMappingURL=context_assist.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js":
/*!******************************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar exceptions_public_1 = __webpack_require__(/*! ../../exceptions_public */ \"./node_modules/chevrotain/lib/src/parse/exceptions_public.js\");\nvar utils_1 = __webpack_require__(/*! ../../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar lookahead_1 = __webpack_require__(/*! ../../grammar/lookahead */ \"./node_modules/chevrotain/lib/src/parse/grammar/lookahead.js\");\nvar parser_1 = __webpack_require__(/*! ../parser */ \"./node_modules/chevrotain/lib/src/parse/parser/parser.js\");\n/**\n * Trait responsible for runtime parsing errors.\n */\nvar ErrorHandler = /** @class */ (function () {\n    function ErrorHandler() {\n    }\n    ErrorHandler.prototype.initErrorHandler = function (config) {\n        this._errors = [];\n        this.errorMessageProvider = utils_1.defaults(config.errorMessageProvider, parser_1.DEFAULT_PARSER_CONFIG.errorMessageProvider);\n    };\n    ErrorHandler.prototype.SAVE_ERROR = function (error) {\n        if (exceptions_public_1.isRecognitionException(error)) {\n            error.context = {\n                ruleStack: this.getHumanReadableRuleStack(),\n                ruleOccurrenceStack: utils_1.cloneArr(this.RULE_OCCURRENCE_STACK)\n            };\n            this._errors.push(error);\n            return error;\n        }\n        else {\n            throw Error(\"Trying to save an Error which is not a RecognitionException\");\n        }\n    };\n    Object.defineProperty(ErrorHandler.prototype, \"errors\", {\n        // TODO: extract these methods to ErrorHandler Trait?\n        get: function () {\n            return utils_1.cloneArr(this._errors);\n        },\n        set: function (newErrors) {\n            this._errors = newErrors;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    // TODO: consider caching the error message computed information\n    ErrorHandler.prototype.raiseEarlyExitException = function (occurrence, prodType, userDefinedErrMsg) {\n        var ruleName = this.getCurrRuleFullName();\n        var ruleGrammar = this.getGAstProductions().get(ruleName);\n        var lookAheadPathsPerAlternative = lookahead_1.getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, this.maxLookahead);\n        var insideProdPaths = lookAheadPathsPerAlternative[0];\n        var actualTokens = [];\n        for (var i = 1; i < this.maxLookahead; i++) {\n            actualTokens.push(this.LA(i));\n        }\n        var msg = this.errorMessageProvider.buildEarlyExitMessage({\n            expectedIterationPaths: insideProdPaths,\n            actual: actualTokens,\n            previous: this.LA(0),\n            customUserDescription: userDefinedErrMsg,\n            ruleName: ruleName\n        });\n        throw this.SAVE_ERROR(new exceptions_public_1.EarlyExitException(msg, this.LA(1), this.LA(0)));\n    };\n    // TODO: consider caching the error message computed information\n    ErrorHandler.prototype.raiseNoAltException = function (occurrence, errMsgTypes) {\n        var ruleName = this.getCurrRuleFullName();\n        var ruleGrammar = this.getGAstProductions().get(ruleName);\n        // TODO: getLookaheadPathsForOr can be slow for large enough maxLookahead and certain grammars, consider caching ?\n        var lookAheadPathsPerAlternative = lookahead_1.getLookaheadPathsForOr(occurrence, ruleGrammar, this.maxLookahead);\n        var actualTokens = [];\n        for (var i = 1; i <= this.maxLookahead; i++) {\n            actualTokens.push(this.LA(i));\n        }\n        var previousToken = this.LA(0);\n        var errMsg = this.errorMessageProvider.buildNoViableAltMessage({\n            expectedPathsPerAlt: lookAheadPathsPerAlternative,\n            actual: actualTokens,\n            previous: previousToken,\n            customUserDescription: errMsgTypes,\n            ruleName: this.getCurrRuleFullName()\n        });\n        throw this.SAVE_ERROR(new exceptions_public_1.NoViableAltException(errMsg, this.LA(1), previousToken));\n    };\n    return ErrorHandler;\n}());\nexports.ErrorHandler = ErrorHandler;\n//# sourceMappingURL=error_handler.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js":
/*!******************************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar parser_1 = __webpack_require__(/*! ../parser */ \"./node_modules/chevrotain/lib/src/parse/parser/parser.js\");\n/**\n * Trait responsible abstracting over the interaction with Lexer output (Token vector).\n *\n * This could be generalized to support other kinds of lexers, e.g.\n * - Just in Time Lexing / Lexer-Less parsing.\n * - Streaming Lexer.\n */\nvar LexerAdapter = /** @class */ (function () {\n    function LexerAdapter() {\n    }\n    LexerAdapter.prototype.initLexerAdapter = function () {\n        this.tokVector = [];\n        this.tokVectorLength = 0;\n        this.currIdx = -1;\n    };\n    Object.defineProperty(LexerAdapter.prototype, \"input\", {\n        get: function () {\n            return this.tokVector;\n        },\n        set: function (newInput) {\n            this.reset();\n            this.tokVector = newInput;\n            this.tokVectorLength = newInput.length;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    // skips a token and returns the next token\n    LexerAdapter.prototype.SKIP_TOKEN = function () {\n        if (this.currIdx <= this.tokVector.length - 2) {\n            this.consumeToken();\n            return this.LA(1);\n        }\n        else {\n            return parser_1.END_OF_FILE;\n        }\n    };\n    // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers\n    // or lexers dependent on parser context.\n    LexerAdapter.prototype.LA = function (howMuch) {\n        // does: is this optimization (saving tokVectorLength benefits?)\n        if (this.currIdx + howMuch < 0 ||\n            this.tokVectorLength <= this.currIdx + howMuch) {\n            return parser_1.END_OF_FILE;\n        }\n        else {\n            return this.tokVector[this.currIdx + howMuch];\n        }\n    };\n    LexerAdapter.prototype.consumeToken = function () {\n        this.currIdx++;\n    };\n    LexerAdapter.prototype.exportLexerState = function () {\n        return this.currIdx;\n    };\n    LexerAdapter.prototype.importLexerState = function (newState) {\n        this.currIdx = newState;\n    };\n    LexerAdapter.prototype.resetLexerState = function () {\n        this.currIdx = -1;\n    };\n    LexerAdapter.prototype.moveToTerminatedState = function () {\n        this.currIdx = this.tokVector.length - 1;\n    };\n    LexerAdapter.prototype.getLexerPosition = function () {\n        return this.exportLexerState();\n    };\n    return LexerAdapter;\n}());\nexports.LexerAdapter = LexerAdapter;\n//# sourceMappingURL=lexer_adapter.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js":
/*!***************************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar lookahead_1 = __webpack_require__(/*! ../../grammar/lookahead */ \"./node_modules/chevrotain/lib/src/parse/grammar/lookahead.js\");\nvar utils_1 = __webpack_require__(/*! ../../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar parser_1 = __webpack_require__(/*! ../parser */ \"./node_modules/chevrotain/lib/src/parse/parser/parser.js\");\nvar keys_1 = __webpack_require__(/*! ../../grammar/keys */ \"./node_modules/chevrotain/lib/src/parse/grammar/keys.js\");\n/**\n * Trait responsible for the lookahead related utilities and optimizations.\n */\nvar LooksAhead = /** @class */ (function () {\n    function LooksAhead() {\n    }\n    LooksAhead.prototype.initLooksAhead = function (config) {\n        this.dynamicTokensEnabled = utils_1.has(config, \"dynamicTokensEnabled\")\n            ? config.dynamicTokensEnabled\n            : parser_1.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled;\n        this.maxLookahead = utils_1.has(config, \"maxLookahead\")\n            ? config.maxLookahead\n            : parser_1.DEFAULT_PARSER_CONFIG.maxLookahead;\n        /* istanbul ignore next - Using plain array as dictionary will be tested on older node.js versions and IE11 */\n        this.lookAheadFuncsCache = utils_1.isES2015MapSupported() ? new Map() : [];\n        // Performance optimization on newer engines that support ES6 Map\n        // For larger Maps this is slightly faster than using a plain object (array in our case).\n        /* istanbul ignore else - The else branch will be tested on older node.js versions and IE11 */\n        if (utils_1.isES2015MapSupported()) {\n            this.getLaFuncFromCache = this.getLaFuncFromMap;\n            this.setLaFuncCache = this.setLaFuncCacheUsingMap;\n        }\n        else {\n            this.getLaFuncFromCache = this.getLaFuncFromObj;\n            this.setLaFuncCache = this.setLaFuncUsingObj;\n        }\n    };\n    LooksAhead.prototype.lookAheadBuilderForOptional = function (alt, tokenMatcher, dynamicTokensEnabled) {\n        return lookahead_1.buildSingleAlternativeLookaheadFunction(alt, tokenMatcher, dynamicTokensEnabled);\n    };\n    LooksAhead.prototype.lookAheadBuilderForAlternatives = function (alts, hasPredicates, tokenMatcher, dynamicTokensEnabled) {\n        return lookahead_1.buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled);\n    };\n    // this actually returns a number, but it is always used as a string (object prop key)\n    LooksAhead.prototype.getKeyForAutomaticLookahead = function (dslMethodIdx, occurrence) {\n        var currRuleShortName = this.getLastExplicitRuleShortName();\n        return keys_1.getKeyForAutomaticLookahead(currRuleShortName, dslMethodIdx, occurrence);\n    };\n    LooksAhead.prototype.getLookaheadFuncForOr = function (occurrence, alts) {\n        var key = this.getKeyForAutomaticLookahead(keys_1.OR_IDX, occurrence);\n        var laFunc = this.getLaFuncFromCache(key);\n        if (laFunc === undefined) {\n            var ruleName = this.getCurrRuleFullName();\n            var ruleGrammar = this.getGAstProductions().get(ruleName);\n            // note that hasPredicates is only computed once.\n            var hasPredicates = utils_1.some(alts, function (currAlt) {\n                return utils_1.isFunction(currAlt.GATE);\n            });\n            laFunc = lookahead_1.buildLookaheadFuncForOr(occurrence, ruleGrammar, this.maxLookahead, hasPredicates, this.dynamicTokensEnabled, this.lookAheadBuilderForAlternatives);\n            this.setLaFuncCache(key, laFunc);\n            return laFunc;\n        }\n        else {\n            return laFunc;\n        }\n    };\n    // Automatic lookahead calculation\n    LooksAhead.prototype.getLookaheadFuncForOption = function (key, occurrence) {\n        return this.getLookaheadFuncFor(key, occurrence, this.maxLookahead, lookahead_1.PROD_TYPE.OPTION);\n    };\n    LooksAhead.prototype.getLookaheadFuncForMany = function (key, occurrence) {\n        return this.getLookaheadFuncFor(key, occurrence, this.maxLookahead, lookahead_1.PROD_TYPE.REPETITION);\n    };\n    LooksAhead.prototype.getLookaheadFuncForManySep = function (key, occurrence) {\n        return this.getLookaheadFuncFor(key, occurrence, this.maxLookahead, lookahead_1.PROD_TYPE.REPETITION_WITH_SEPARATOR);\n    };\n    LooksAhead.prototype.getLookaheadFuncForAtLeastOne = function (key, occurrence) {\n        return this.getLookaheadFuncFor(key, occurrence, this.maxLookahead, lookahead_1.PROD_TYPE.REPETITION_MANDATORY);\n    };\n    LooksAhead.prototype.getLookaheadFuncForAtLeastOneSep = function (key, occurrence) {\n        return this.getLookaheadFuncFor(key, occurrence, this.maxLookahead, lookahead_1.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);\n    };\n    LooksAhead.prototype.getLookaheadFuncFor = function (key, occurrence, maxLookahead, prodType) {\n        var laFunc = this.getLaFuncFromCache(key);\n        if (laFunc === undefined) {\n            var ruleName = this.getCurrRuleFullName();\n            var ruleGrammar = this.getGAstProductions().get(ruleName);\n            laFunc = lookahead_1.buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, maxLookahead, this.dynamicTokensEnabled, prodType, this.lookAheadBuilderForOptional);\n            this.setLaFuncCache(key, laFunc);\n            return laFunc;\n        }\n        else {\n            return laFunc;\n        }\n    };\n    /* istanbul ignore next */\n    LooksAhead.prototype.getLaFuncFromCache = function (key) {\n        return undefined;\n    };\n    LooksAhead.prototype.getLaFuncFromMap = function (key) {\n        return this.lookAheadFuncsCache.get(key);\n    };\n    /* istanbul ignore next - Using plain array as dictionary will be tested on older node.js versions and IE11 */\n    LooksAhead.prototype.getLaFuncFromObj = function (key) {\n        return this.lookAheadFuncsCache[key];\n    };\n    /* istanbul ignore next */\n    LooksAhead.prototype.setLaFuncCache = function (key, value) { };\n    LooksAhead.prototype.setLaFuncCacheUsingMap = function (key, value) {\n        this.lookAheadFuncsCache.set(key, value);\n    };\n    /* istanbul ignore next - Using plain array as dictionary will be tested on older node.js versions and IE11 */\n    LooksAhead.prototype.setLaFuncUsingObj = function (key, value) {\n        this.lookAheadFuncsCache[key] = value;\n    };\n    return LooksAhead;\n}());\nexports.LooksAhead = LooksAhead;\n//# sourceMappingURL=looksahead.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar exceptions_public_1 = __webpack_require__(/*! ../../exceptions_public */ \"./node_modules/chevrotain/lib/src/parse/exceptions_public.js\");\nvar parser_1 = __webpack_require__(/*! ../parser */ \"./node_modules/chevrotain/lib/src/parse/parser/parser.js\");\nvar errors_public_1 = __webpack_require__(/*! ../../errors_public */ \"./node_modules/chevrotain/lib/src/parse/errors_public.js\");\nvar gast_builder_1 = __webpack_require__(/*! ../../gast_builder */ \"./node_modules/chevrotain/lib/src/parse/gast_builder.js\");\nvar checks_1 = __webpack_require__(/*! ../../grammar/checks */ \"./node_modules/chevrotain/lib/src/parse/grammar/checks.js\");\nvar gast_public_1 = __webpack_require__(/*! ../../grammar/gast/gast_public */ \"./node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js\");\n/**\n * This trait is responsible for implementing the offical API\n * for defining Chevrotain parsers, i.e:\n * - CONSUME\n * - RULE\n * - OPTION\n * - ...\n */\nvar RecognizerApi = /** @class */ (function () {\n    function RecognizerApi() {\n    }\n    RecognizerApi.prototype.CONSUME = function (tokType, options) {\n        return this.consumeInternal(tokType, 0, options);\n    };\n    RecognizerApi.prototype.CONSUME1 = function (tokType, options) {\n        return this.consumeInternal(tokType, 1, options);\n    };\n    RecognizerApi.prototype.CONSUME2 = function (tokType, options) {\n        return this.consumeInternal(tokType, 2, options);\n    };\n    RecognizerApi.prototype.CONSUME3 = function (tokType, options) {\n        return this.consumeInternal(tokType, 3, options);\n    };\n    RecognizerApi.prototype.CONSUME4 = function (tokType, options) {\n        return this.consumeInternal(tokType, 4, options);\n    };\n    RecognizerApi.prototype.CONSUME5 = function (tokType, options) {\n        return this.consumeInternal(tokType, 5, options);\n    };\n    RecognizerApi.prototype.CONSUME6 = function (tokType, options) {\n        return this.consumeInternal(tokType, 6, options);\n    };\n    RecognizerApi.prototype.CONSUME7 = function (tokType, options) {\n        return this.consumeInternal(tokType, 7, options);\n    };\n    RecognizerApi.prototype.CONSUME8 = function (tokType, options) {\n        return this.consumeInternal(tokType, 8, options);\n    };\n    RecognizerApi.prototype.CONSUME9 = function (tokType, options) {\n        return this.consumeInternal(tokType, 9, options);\n    };\n    RecognizerApi.prototype.SUBRULE = function (ruleToCall, options) {\n        return this.subruleInternal(ruleToCall, 0, options);\n    };\n    RecognizerApi.prototype.SUBRULE1 = function (ruleToCall, options) {\n        return this.subruleInternal(ruleToCall, 1, options);\n    };\n    RecognizerApi.prototype.SUBRULE2 = function (ruleToCall, options) {\n        return this.subruleInternal(ruleToCall, 2, options);\n    };\n    RecognizerApi.prototype.SUBRULE3 = function (ruleToCall, options) {\n        return this.subruleInternal(ruleToCall, 3, options);\n    };\n    RecognizerApi.prototype.SUBRULE4 = function (ruleToCall, options) {\n        return this.subruleInternal(ruleToCall, 4, options);\n    };\n    RecognizerApi.prototype.SUBRULE5 = function (ruleToCall, options) {\n        return this.subruleInternal(ruleToCall, 5, options);\n    };\n    RecognizerApi.prototype.SUBRULE6 = function (ruleToCall, options) {\n        return this.subruleInternal(ruleToCall, 6, options);\n    };\n    RecognizerApi.prototype.SUBRULE7 = function (ruleToCall, options) {\n        return this.subruleInternal(ruleToCall, 7, options);\n    };\n    RecognizerApi.prototype.SUBRULE8 = function (ruleToCall, options) {\n        return this.subruleInternal(ruleToCall, 8, options);\n    };\n    RecognizerApi.prototype.SUBRULE9 = function (ruleToCall, options) {\n        return this.subruleInternal(ruleToCall, 9, options);\n    };\n    RecognizerApi.prototype.OPTION = function (actionORMethodDef) {\n        return this.optionInternal(actionORMethodDef, 0);\n    };\n    RecognizerApi.prototype.OPTION1 = function (actionORMethodDef) {\n        return this.optionInternal(actionORMethodDef, 1);\n    };\n    RecognizerApi.prototype.OPTION2 = function (actionORMethodDef) {\n        return this.optionInternal(actionORMethodDef, 2);\n    };\n    RecognizerApi.prototype.OPTION3 = function (actionORMethodDef) {\n        return this.optionInternal(actionORMethodDef, 3);\n    };\n    RecognizerApi.prototype.OPTION4 = function (actionORMethodDef) {\n        return this.optionInternal(actionORMethodDef, 4);\n    };\n    RecognizerApi.prototype.OPTION5 = function (actionORMethodDef) {\n        return this.optionInternal(actionORMethodDef, 5);\n    };\n    RecognizerApi.prototype.OPTION6 = function (actionORMethodDef) {\n        return this.optionInternal(actionORMethodDef, 6);\n    };\n    RecognizerApi.prototype.OPTION7 = function (actionORMethodDef) {\n        return this.optionInternal(actionORMethodDef, 7);\n    };\n    RecognizerApi.prototype.OPTION8 = function (actionORMethodDef) {\n        return this.optionInternal(actionORMethodDef, 8);\n    };\n    RecognizerApi.prototype.OPTION9 = function (actionORMethodDef) {\n        return this.optionInternal(actionORMethodDef, 9);\n    };\n    RecognizerApi.prototype.OR = function (altsOrOpts) {\n        return this.orInternal(altsOrOpts, 0);\n    };\n    RecognizerApi.prototype.OR1 = function (altsOrOpts) {\n        return this.orInternal(altsOrOpts, 1);\n    };\n    RecognizerApi.prototype.OR2 = function (altsOrOpts) {\n        return this.orInternal(altsOrOpts, 2);\n    };\n    RecognizerApi.prototype.OR3 = function (altsOrOpts) {\n        return this.orInternal(altsOrOpts, 3);\n    };\n    RecognizerApi.prototype.OR4 = function (altsOrOpts) {\n        return this.orInternal(altsOrOpts, 4);\n    };\n    RecognizerApi.prototype.OR5 = function (altsOrOpts) {\n        return this.orInternal(altsOrOpts, 5);\n    };\n    RecognizerApi.prototype.OR6 = function (altsOrOpts) {\n        return this.orInternal(altsOrOpts, 6);\n    };\n    RecognizerApi.prototype.OR7 = function (altsOrOpts) {\n        return this.orInternal(altsOrOpts, 7);\n    };\n    RecognizerApi.prototype.OR8 = function (altsOrOpts) {\n        return this.orInternal(altsOrOpts, 8);\n    };\n    RecognizerApi.prototype.OR9 = function (altsOrOpts) {\n        return this.orInternal(altsOrOpts, 9);\n    };\n    RecognizerApi.prototype.MANY = function (actionORMethodDef) {\n        this.manyInternal(0, actionORMethodDef);\n    };\n    RecognizerApi.prototype.MANY1 = function (actionORMethodDef) {\n        this.manyInternal(1, actionORMethodDef);\n    };\n    RecognizerApi.prototype.MANY2 = function (actionORMethodDef) {\n        this.manyInternal(2, actionORMethodDef);\n    };\n    RecognizerApi.prototype.MANY3 = function (actionORMethodDef) {\n        this.manyInternal(3, actionORMethodDef);\n    };\n    RecognizerApi.prototype.MANY4 = function (actionORMethodDef) {\n        this.manyInternal(4, actionORMethodDef);\n    };\n    RecognizerApi.prototype.MANY5 = function (actionORMethodDef) {\n        this.manyInternal(5, actionORMethodDef);\n    };\n    RecognizerApi.prototype.MANY6 = function (actionORMethodDef) {\n        this.manyInternal(6, actionORMethodDef);\n    };\n    RecognizerApi.prototype.MANY7 = function (actionORMethodDef) {\n        this.manyInternal(7, actionORMethodDef);\n    };\n    RecognizerApi.prototype.MANY8 = function (actionORMethodDef) {\n        this.manyInternal(8, actionORMethodDef);\n    };\n    RecognizerApi.prototype.MANY9 = function (actionORMethodDef) {\n        this.manyInternal(9, actionORMethodDef);\n    };\n    RecognizerApi.prototype.MANY_SEP = function (options) {\n        this.manySepFirstInternal(0, options);\n    };\n    RecognizerApi.prototype.MANY_SEP1 = function (options) {\n        this.manySepFirstInternal(1, options);\n    };\n    RecognizerApi.prototype.MANY_SEP2 = function (options) {\n        this.manySepFirstInternal(2, options);\n    };\n    RecognizerApi.prototype.MANY_SEP3 = function (options) {\n        this.manySepFirstInternal(3, options);\n    };\n    RecognizerApi.prototype.MANY_SEP4 = function (options) {\n        this.manySepFirstInternal(4, options);\n    };\n    RecognizerApi.prototype.MANY_SEP5 = function (options) {\n        this.manySepFirstInternal(5, options);\n    };\n    RecognizerApi.prototype.MANY_SEP6 = function (options) {\n        this.manySepFirstInternal(6, options);\n    };\n    RecognizerApi.prototype.MANY_SEP7 = function (options) {\n        this.manySepFirstInternal(7, options);\n    };\n    RecognizerApi.prototype.MANY_SEP8 = function (options) {\n        this.manySepFirstInternal(8, options);\n    };\n    RecognizerApi.prototype.MANY_SEP9 = function (options) {\n        this.manySepFirstInternal(9, options);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE = function (actionORMethodDef) {\n        this.atLeastOneInternal(0, actionORMethodDef);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE1 = function (actionORMethodDef) {\n        return this.atLeastOneInternal(1, actionORMethodDef);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE2 = function (actionORMethodDef) {\n        this.atLeastOneInternal(2, actionORMethodDef);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE3 = function (actionORMethodDef) {\n        this.atLeastOneInternal(3, actionORMethodDef);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE4 = function (actionORMethodDef) {\n        this.atLeastOneInternal(4, actionORMethodDef);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE5 = function (actionORMethodDef) {\n        this.atLeastOneInternal(5, actionORMethodDef);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE6 = function (actionORMethodDef) {\n        this.atLeastOneInternal(6, actionORMethodDef);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE7 = function (actionORMethodDef) {\n        this.atLeastOneInternal(7, actionORMethodDef);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE8 = function (actionORMethodDef) {\n        this.atLeastOneInternal(8, actionORMethodDef);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE9 = function (actionORMethodDef) {\n        this.atLeastOneInternal(9, actionORMethodDef);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE_SEP = function (options) {\n        this.atLeastOneSepFirstInternal(0, options);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE_SEP1 = function (options) {\n        this.atLeastOneSepFirstInternal(1, options);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE_SEP2 = function (options) {\n        this.atLeastOneSepFirstInternal(2, options);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE_SEP3 = function (options) {\n        this.atLeastOneSepFirstInternal(3, options);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE_SEP4 = function (options) {\n        this.atLeastOneSepFirstInternal(4, options);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE_SEP5 = function (options) {\n        this.atLeastOneSepFirstInternal(5, options);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE_SEP6 = function (options) {\n        this.atLeastOneSepFirstInternal(6, options);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE_SEP7 = function (options) {\n        this.atLeastOneSepFirstInternal(7, options);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE_SEP8 = function (options) {\n        this.atLeastOneSepFirstInternal(8, options);\n    };\n    RecognizerApi.prototype.AT_LEAST_ONE_SEP9 = function (options) {\n        this.atLeastOneSepFirstInternal(9, options);\n    };\n    RecognizerApi.prototype.RULE = function (name, implementation, \n    // TODO: how to describe the optional return type of CSTNode? T|CstNode is not good because it is not backward\n    // compatible, T|any is very general...\n    config) {\n        if (config === void 0) { config = parser_1.DEFAULT_RULE_CONFIG; }\n        if (utils_1.contains(this.definedRulesNames, name)) {\n            var errMsg = errors_public_1.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({\n                topLevelRule: name,\n                grammarName: this.className\n            });\n            var error = {\n                message: errMsg,\n                type: parser_1.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,\n                ruleName: name\n            };\n            this.definitionErrors.push(error);\n        }\n        this.definedRulesNames.push(name);\n        // only build the gast representation once.\n        if (!this.gastProductionsCache.containsKey(name) &&\n            !this.serializedGrammar) {\n            var gastProduction = gast_builder_1.buildTopProduction(implementation.toString(), name, this.tokensMap);\n            this.gastProductionsCache.put(name, gastProduction);\n        }\n        var ruleImplementation = this.defineRule(name, implementation, config);\n        this[name] = ruleImplementation;\n        return ruleImplementation;\n    };\n    RecognizerApi.prototype.OVERRIDE_RULE = function (name, impl, config) {\n        if (config === void 0) { config = parser_1.DEFAULT_RULE_CONFIG; }\n        var ruleErrors = [];\n        ruleErrors = ruleErrors.concat(checks_1.validateRuleIsOverridden(name, this.definedRulesNames, this.className));\n        this.definitionErrors.push.apply(this.definitionErrors, ruleErrors); // mutability for the win\n        // Avoid constructing the GAST if we have serialized it\n        if (!this.serializedGrammar) {\n            var gastProduction = gast_builder_1.buildTopProduction(impl.toString(), name, this.tokensMap);\n            this.gastProductionsCache.put(name, gastProduction);\n        }\n        var ruleImplementation = this.defineRule(name, impl, config);\n        this[name] = ruleImplementation;\n        return ruleImplementation;\n    };\n    RecognizerApi.prototype.BACKTRACK = function (grammarRule, args) {\n        return function () {\n            // save org state\n            this.isBackTrackingStack.push(1);\n            var orgState = this.saveRecogState();\n            try {\n                grammarRule.apply(this, args);\n                // if no exception was thrown we have succeed parsing the rule.\n                return true;\n            }\n            catch (e) {\n                if (exceptions_public_1.isRecognitionException(e)) {\n                    return false;\n                }\n                else {\n                    throw e;\n                }\n            }\n            finally {\n                this.reloadRecogState(orgState);\n                this.isBackTrackingStack.pop();\n            }\n        };\n    };\n    // GAST export APIs\n    RecognizerApi.prototype.getGAstProductions = function () {\n        return this.gastProductionsCache;\n    };\n    RecognizerApi.prototype.getSerializedGastProductions = function () {\n        return gast_public_1.serializeGrammar(this.gastProductionsCache.values());\n    };\n    return RecognizerApi;\n}());\nexports.RecognizerApi = RecognizerApi;\n//# sourceMappingURL=recognizer_api.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar keys_1 = __webpack_require__(/*! ../../grammar/keys */ \"./node_modules/chevrotain/lib/src/parse/grammar/keys.js\");\nvar exceptions_public_1 = __webpack_require__(/*! ../../exceptions_public */ \"./node_modules/chevrotain/lib/src/parse/exceptions_public.js\");\nvar lookahead_1 = __webpack_require__(/*! ../../grammar/lookahead */ \"./node_modules/chevrotain/lib/src/parse/grammar/lookahead.js\");\nvar interpreter_1 = __webpack_require__(/*! ../../grammar/interpreter */ \"./node_modules/chevrotain/lib/src/parse/grammar/interpreter.js\");\nvar parser_1 = __webpack_require__(/*! ../parser */ \"./node_modules/chevrotain/lib/src/parse/parser/parser.js\");\nvar recoverable_1 = __webpack_require__(/*! ./recoverable */ \"./node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js\");\nvar tokens_public_1 = __webpack_require__(/*! ../../../scan/tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nvar tokens_1 = __webpack_require__(/*! ../../../scan/tokens */ \"./node_modules/chevrotain/lib/src/scan/tokens.js\");\nvar lang_extensions_1 = __webpack_require__(/*! ../../../lang/lang_extensions */ \"./node_modules/chevrotain/lib/src/lang/lang_extensions.js\");\n/**\n * This trait is responsible for the runtime parsing engine\n * Used by the official API (recognizer_api.ts)\n */\nvar RecognizerEngine = /** @class */ (function () {\n    function RecognizerEngine() {\n    }\n    RecognizerEngine.prototype.initRecognizerEngine = function (tokenVocabulary, config) {\n        this.className = lang_extensions_1.classNameFromInstance(this);\n        // TODO: would using an ES6 Map or plain object be faster (CST building scenario)\n        this.shortRuleNameToFull = new lang_extensions_1.HashTable();\n        this.fullRuleNameToShort = new lang_extensions_1.HashTable();\n        this.ruleShortNameIdx = 256;\n        this.tokenMatcher = tokens_1.tokenStructuredMatcherNoCategories;\n        this.definedRulesNames = [];\n        this.tokensMap = {};\n        this.allRuleNames = [];\n        this.isBackTrackingStack = [];\n        this.RULE_STACK = [];\n        this.RULE_OCCURRENCE_STACK = [];\n        this.gastProductionsCache = new lang_extensions_1.HashTable();\n        this.serializedGrammar = utils_1.has(config, \"serializedGrammar\")\n            ? config.serializedGrammar\n            : parser_1.DEFAULT_PARSER_CONFIG.serializedGrammar;\n        if (utils_1.isArray(tokenVocabulary)) {\n            // This only checks for Token vocabularies provided as arrays.\n            // That is good enough because the main objective is to detect users of pre-V4.0 APIs\n            // rather than all edge cases of empty Token vocabularies.\n            if (utils_1.isEmpty(tokenVocabulary)) {\n                throw Error(\"A Token Vocabulary cannot be empty.\\n\" +\n                    \"\\tNote that the first argument for the parser constructor\\n\" +\n                    \"\\tis no longer a Token vector (since v4.0).\");\n            }\n            if (typeof tokenVocabulary[0].startOffset === \"number\") {\n                throw Error(\"The Parser constructor no longer accepts a token vector as the first argument.\\n\" +\n                    \"\\tSee: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_4-0-0\\n\" +\n                    \"\\tFor Further details.\");\n            }\n        }\n        if (utils_1.isArray(tokenVocabulary)) {\n            this.tokensMap = utils_1.reduce(tokenVocabulary, function (acc, tokenClazz) {\n                acc[tokens_public_1.tokenName(tokenClazz)] = tokenClazz;\n                return acc;\n            }, {});\n        }\n        else if (utils_1.has(tokenVocabulary, \"modes\") &&\n            utils_1.every(utils_1.flatten(utils_1.values(tokenVocabulary.modes)), tokens_1.isTokenType)) {\n            var allTokenTypes = utils_1.flatten(utils_1.values(tokenVocabulary.modes));\n            var uniqueTokens = utils_1.uniq(allTokenTypes);\n            this.tokensMap = utils_1.reduce(uniqueTokens, function (acc, tokenClazz) {\n                acc[tokens_public_1.tokenName(tokenClazz)] = tokenClazz;\n                return acc;\n            }, {});\n        }\n        else if (utils_1.isObject(tokenVocabulary)) {\n            this.tokensMap = utils_1.cloneObj(tokenVocabulary);\n        }\n        else {\n            throw new Error(\"<tokensDictionary> argument must be An Array of Token constructors,\" +\n                \" A dictionary of Token constructors or an IMultiModeLexerDefinition\");\n        }\n        // always add EOF to the tokenNames -> constructors map. it is useful to assure all the input has been\n        // parsed with a clear error message (\"expecting EOF but found ...\")\n        /* tslint:disable */\n        this.tokensMap[\"EOF\"] = tokens_public_1.EOF;\n        // TODO: This check may not be accurate for multi mode lexers\n        var noTokenCategoriesUsed = utils_1.every(utils_1.values(tokenVocabulary), function (tokenConstructor) { return utils_1.isEmpty(tokenConstructor.categoryMatches); });\n        this.tokenMatcher = noTokenCategoriesUsed\n            ? tokens_1.tokenStructuredMatcherNoCategories\n            : tokens_1.tokenStructuredMatcher;\n        // Because ES2015+ syntax should be supported for creating Token classes\n        // We cannot assume that the Token classes were created using the \"extendToken\" utilities\n        // Therefore we must augment the Token classes both on Lexer initialization and on Parser initialization\n        tokens_1.augmentTokenTypes(utils_1.values(this.tokensMap));\n    };\n    RecognizerEngine.prototype.defineRule = function (ruleName, impl, config) {\n        if (this.selfAnalysisDone) {\n            throw Error(\"Grammar rule <\" + ruleName + \"> may not be defined after the 'performSelfAnalysis' method has been called'\\n\" +\n                \"Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.\");\n        }\n        var resyncEnabled = utils_1.has(config, \"resyncEnabled\")\n            ? config.resyncEnabled\n            : parser_1.DEFAULT_RULE_CONFIG.resyncEnabled;\n        var recoveryValueFunc = utils_1.has(config, \"recoveryValueFunc\")\n            ? config.recoveryValueFunc\n            : parser_1.DEFAULT_RULE_CONFIG.recoveryValueFunc;\n        // performance optimization: Use small integers as keys for the longer human readable \"full\" rule names.\n        // this greatly improves Map access time (as much as 8% for some performance benchmarks).\n        /* tslint:disable */\n        var shortName = this.ruleShortNameIdx <<\n            (keys_1.BITS_FOR_METHOD_IDX + keys_1.BITS_FOR_OCCURRENCE_IDX);\n        /* tslint:enable */\n        this.ruleShortNameIdx++;\n        this.shortRuleNameToFull.put(shortName, ruleName);\n        this.fullRuleNameToShort.put(ruleName, shortName);\n        function invokeRuleWithTry(args) {\n            try {\n                // TODO: dynamically get rid of this?\n                if (this.outputCst === true) {\n                    impl.apply(this, args);\n                    return this.CST_STACK[this.CST_STACK.length - 1];\n                }\n                else {\n                    return impl.apply(this, args);\n                }\n            }\n            catch (e) {\n                var isFirstInvokedRule = this.RULE_STACK.length === 1;\n                // note the reSync is always enabled for the first rule invocation, because we must always be able to\n                // reSync with EOF and just output some INVALID ParseTree\n                // during backtracking reSync recovery is disabled, otherwise we can't be certain the backtracking\n                // path is really the most valid one\n                var reSyncEnabled = resyncEnabled &&\n                    !this.isBackTracking() &&\n                    this.recoveryEnabled;\n                if (exceptions_public_1.isRecognitionException(e)) {\n                    if (reSyncEnabled) {\n                        var reSyncTokType = this.findReSyncTokenType();\n                        if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {\n                            e.resyncedTokens = this.reSyncTo(reSyncTokType);\n                            if (this.outputCst) {\n                                var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];\n                                partialCstResult.recoveredNode = true;\n                                return partialCstResult;\n                            }\n                            else {\n                                return recoveryValueFunc();\n                            }\n                        }\n                        else {\n                            if (this.outputCst) {\n                                var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];\n                                partialCstResult.recoveredNode = true;\n                                e.partialCstResult = partialCstResult;\n                            }\n                            // to be handled Further up the call stack\n                            throw e;\n                        }\n                    }\n                    else if (isFirstInvokedRule) {\n                        // otherwise a Redundant input error will be created as well and we cannot guarantee that this is indeed the case\n                        this.moveToTerminatedState();\n                        // the parser should never throw one of its own errors outside its flow.\n                        // even if error recovery is disabled\n                        return recoveryValueFunc();\n                    }\n                    else {\n                        // to be handled Further up the call stack\n                        throw e;\n                    }\n                }\n                else {\n                    // some other Error type which we don't know how to handle (for example a built in JavaScript Error)\n                    throw e;\n                }\n            }\n            finally {\n                this.ruleFinallyStateUpdate();\n            }\n        }\n        var wrappedGrammarRule;\n        wrappedGrammarRule = function (idxInCallingRule, args) {\n            if (idxInCallingRule === void 0) { idxInCallingRule = 0; }\n            this.ruleInvocationStateUpdate(shortName, ruleName, idxInCallingRule);\n            return invokeRuleWithTry.call(this, args);\n        };\n        var ruleNamePropName = \"ruleName\";\n        wrappedGrammarRule[ruleNamePropName] = ruleName;\n        return wrappedGrammarRule;\n    };\n    // Implementation of parsing DSL\n    RecognizerEngine.prototype.optionInternal = function (actionORMethodDef, occurrence) {\n        var key = this.getKeyForAutomaticLookahead(keys_1.OPTION_IDX, occurrence);\n        var nestedName = this.nestedRuleBeforeClause(actionORMethodDef, key);\n        try {\n            return this.optionInternalLogic(actionORMethodDef, occurrence, key);\n        }\n        finally {\n            if (nestedName !== undefined) {\n                this.nestedRuleFinallyClause(key, nestedName);\n            }\n        }\n    };\n    RecognizerEngine.prototype.optionInternalNoCst = function (actionORMethodDef, occurrence) {\n        var key = this.getKeyForAutomaticLookahead(keys_1.OPTION_IDX, occurrence);\n        return this.optionInternalLogic(actionORMethodDef, occurrence, key);\n    };\n    RecognizerEngine.prototype.optionInternalLogic = function (actionORMethodDef, occurrence, key) {\n        var _this = this;\n        var lookAheadFunc = this.getLookaheadFuncForOption(key, occurrence);\n        var action;\n        var predicate;\n        if (actionORMethodDef.DEF !== undefined) {\n            action = actionORMethodDef.DEF;\n            predicate = actionORMethodDef.GATE;\n            // predicate present\n            if (predicate !== undefined) {\n                var orgLookaheadFunction_1 = lookAheadFunc;\n                lookAheadFunc = function () {\n                    return (predicate.call(_this) && orgLookaheadFunction_1.call(_this));\n                };\n            }\n        }\n        else {\n            action = actionORMethodDef;\n        }\n        if (lookAheadFunc.call(this) === true) {\n            return action.call(this);\n        }\n        return undefined;\n    };\n    RecognizerEngine.prototype.atLeastOneInternal = function (prodOccurrence, actionORMethodDef) {\n        var laKey = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_IDX, prodOccurrence);\n        var nestedName = this.nestedRuleBeforeClause(actionORMethodDef, laKey);\n        try {\n            return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);\n        }\n        finally {\n            if (nestedName !== undefined) {\n                this.nestedRuleFinallyClause(laKey, nestedName);\n            }\n        }\n    };\n    RecognizerEngine.prototype.atLeastOneInternalNoCst = function (prodOccurrence, actionORMethodDef) {\n        var key = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_IDX, prodOccurrence);\n        this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, key);\n    };\n    RecognizerEngine.prototype.atLeastOneInternalLogic = function (prodOccurrence, actionORMethodDef, key) {\n        var _this = this;\n        var lookAheadFunc = this.getLookaheadFuncForAtLeastOne(key, prodOccurrence);\n        var action;\n        var predicate;\n        if (actionORMethodDef.DEF !== undefined) {\n            action = actionORMethodDef.DEF;\n            predicate = actionORMethodDef.GATE;\n            // predicate present\n            if (predicate !== undefined) {\n                var orgLookaheadFunction_2 = lookAheadFunc;\n                lookAheadFunc = function () {\n                    return (predicate.call(_this) && orgLookaheadFunction_2.call(_this));\n                };\n            }\n        }\n        else {\n            action = actionORMethodDef;\n        }\n        if (lookAheadFunc.call(this) === true) {\n            ;\n            action.call(this);\n            while (lookAheadFunc.call(this) === true) {\n                this.doSingleRepetition(action);\n            }\n        }\n        else {\n            throw this.raiseEarlyExitException(prodOccurrence, lookahead_1.PROD_TYPE.REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);\n        }\n        // note that while it may seem that this can cause an error because by using a recursive call to\n        // AT_LEAST_ONE we change the grammar to AT_LEAST_TWO, AT_LEAST_THREE ... , the possible recursive call\n        // from the tryInRepetitionRecovery(...) will only happen IFF there really are TWO/THREE/.... items.\n        // Performance optimization: \"attemptInRepetitionRecovery\" will be defined as NOOP unless recovery is enabled\n        this.attemptInRepetitionRecovery(this.atLeastOneInternal, [prodOccurrence, actionORMethodDef], lookAheadFunc, keys_1.AT_LEAST_ONE_IDX, prodOccurrence, interpreter_1.NextTerminalAfterAtLeastOneWalker);\n    };\n    RecognizerEngine.prototype.atLeastOneSepFirstInternal = function (prodOccurrence, options) {\n        var laKey = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence);\n        var nestedName = this.nestedRuleBeforeClause(options, laKey);\n        try {\n            this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);\n        }\n        finally {\n            if (nestedName !== undefined) {\n                this.nestedRuleFinallyClause(laKey, nestedName);\n            }\n        }\n    };\n    RecognizerEngine.prototype.atLeastOneSepFirstInternalNoCst = function (prodOccurrence, options) {\n        var laKey = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence);\n        this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);\n    };\n    RecognizerEngine.prototype.atLeastOneSepFirstInternalLogic = function (prodOccurrence, options, key) {\n        var _this = this;\n        var action = options.DEF;\n        var separator = options.SEP;\n        var firstIterationLookaheadFunc = this.getLookaheadFuncForAtLeastOneSep(key, prodOccurrence);\n        // 1st iteration\n        if (firstIterationLookaheadFunc.call(this) === true) {\n            ;\n            action.call(this);\n            //  TODO: Optimization can move this function construction into \"attemptInRepetitionRecovery\"\n            //  because it is only needed in error recovery scenarios.\n            var separatorLookAheadFunc = function () {\n                return _this.tokenMatcher(_this.LA(1), separator);\n            };\n            // 2nd..nth iterations\n            while (this.tokenMatcher(this.LA(1), separator) === true) {\n                // note that this CONSUME will never enter recovery because\n                // the separatorLookAheadFunc checks that the separator really does exist.\n                this.CONSUME(separator);\n                action.call(this);\n            }\n            // Performance optimization: \"attemptInRepetitionRecovery\" will be defined as NOOP unless recovery is enabled\n            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [\n                prodOccurrence,\n                separator,\n                separatorLookAheadFunc,\n                action,\n                interpreter_1.NextTerminalAfterAtLeastOneSepWalker\n            ], separatorLookAheadFunc, keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence, interpreter_1.NextTerminalAfterAtLeastOneSepWalker);\n        }\n        else {\n            throw this.raiseEarlyExitException(prodOccurrence, lookahead_1.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);\n        }\n    };\n    RecognizerEngine.prototype.manyInternal = function (prodOccurrence, actionORMethodDef) {\n        var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_IDX, prodOccurrence);\n        var nestedName = this.nestedRuleBeforeClause(actionORMethodDef, laKey);\n        try {\n            return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);\n        }\n        finally {\n            if (nestedName !== undefined) {\n                this.nestedRuleFinallyClause(laKey, nestedName);\n            }\n        }\n    };\n    RecognizerEngine.prototype.manyInternalNoCst = function (prodOccurrence, actionORMethodDef) {\n        var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_IDX, prodOccurrence);\n        return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);\n    };\n    RecognizerEngine.prototype.manyInternalLogic = function (prodOccurrence, actionORMethodDef, key) {\n        var _this = this;\n        var lookaheadFunction = this.getLookaheadFuncForMany(key, prodOccurrence);\n        var action;\n        var predicate;\n        if (actionORMethodDef.DEF !== undefined) {\n            action = actionORMethodDef.DEF;\n            predicate = actionORMethodDef.GATE;\n            // predicate present\n            if (predicate !== undefined) {\n                var orgLookaheadFunction_3 = lookaheadFunction;\n                lookaheadFunction = function () {\n                    return (predicate.call(_this) && orgLookaheadFunction_3.call(_this));\n                };\n            }\n        }\n        else {\n            action = actionORMethodDef;\n        }\n        while (lookaheadFunction.call(this)) {\n            this.doSingleRepetition(action);\n        }\n        // Performance optimization: \"attemptInRepetitionRecovery\" will be defined as NOOP unless recovery is enabled\n        this.attemptInRepetitionRecovery(this.manyInternal, [prodOccurrence, actionORMethodDef], lookaheadFunction, keys_1.MANY_IDX, prodOccurrence, interpreter_1.NextTerminalAfterManyWalker);\n    };\n    RecognizerEngine.prototype.manySepFirstInternal = function (prodOccurrence, options) {\n        var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_SEP_IDX, prodOccurrence);\n        var nestedName = this.nestedRuleBeforeClause(options, laKey);\n        try {\n            this.manySepFirstInternalLogic(prodOccurrence, options, laKey);\n        }\n        finally {\n            if (nestedName !== undefined) {\n                this.nestedRuleFinallyClause(laKey, nestedName);\n            }\n        }\n    };\n    RecognizerEngine.prototype.manySepFirstInternalNoCst = function (prodOccurrence, options) {\n        var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_SEP_IDX, prodOccurrence);\n        this.manySepFirstInternalLogic(prodOccurrence, options, laKey);\n    };\n    RecognizerEngine.prototype.manySepFirstInternalLogic = function (prodOccurrence, options, key) {\n        var _this = this;\n        var action = options.DEF;\n        var separator = options.SEP;\n        var firstIterationLaFunc = this.getLookaheadFuncForManySep(key, prodOccurrence);\n        // 1st iteration\n        if (firstIterationLaFunc.call(this) === true) {\n            action.call(this);\n            var separatorLookAheadFunc = function () {\n                return _this.tokenMatcher(_this.LA(1), separator);\n            };\n            // 2nd..nth iterations\n            while (this.tokenMatcher(this.LA(1), separator) === true) {\n                // note that this CONSUME will never enter recovery because\n                // the separatorLookAheadFunc checks that the separator really does exist.\n                this.CONSUME(separator);\n                // No need for checking infinite loop here due to consuming the separator.\n                action.call(this);\n            }\n            // Performance optimization: \"attemptInRepetitionRecovery\" will be defined as NOOP unless recovery is enabled\n            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [\n                prodOccurrence,\n                separator,\n                separatorLookAheadFunc,\n                action,\n                interpreter_1.NextTerminalAfterManySepWalker\n            ], separatorLookAheadFunc, keys_1.MANY_SEP_IDX, prodOccurrence, interpreter_1.NextTerminalAfterManySepWalker);\n        }\n    };\n    RecognizerEngine.prototype.repetitionSepSecondInternal = function (prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {\n        while (separatorLookAheadFunc()) {\n            // note that this CONSUME will never enter recovery because\n            // the separatorLookAheadFunc checks that the separator really does exist.\n            this.CONSUME(separator);\n            action.call(this);\n        }\n        // we can only arrive to this function after an error\n        // has occurred (hence the name 'second') so the following\n        // IF will always be entered, its possible to remove it...\n        // however it is kept to avoid confusion and be consistent.\n        // Performance optimization: \"attemptInRepetitionRecovery\" will be defined as NOOP unless recovery is enabled\n        /* istanbul ignore else */\n        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [\n            prodOccurrence,\n            separator,\n            separatorLookAheadFunc,\n            action,\n            nextTerminalAfterWalker\n        ], separatorLookAheadFunc, keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence, nextTerminalAfterWalker);\n    };\n    RecognizerEngine.prototype.doSingleRepetition = function (action) {\n        var beforeIteration = this.getLexerPosition();\n        var result = action.call(this);\n        var afterIteration = this.getLexerPosition();\n        if (afterIteration === beforeIteration) {\n            throw Error(\"Infinite loop detected\\n\" +\n                \"\\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#INFINITE_LOOP\\n\" +\n                \"\\tFor Further details.\");\n        }\n        return result;\n    };\n    RecognizerEngine.prototype.orInternalNoCst = function (altsOrOpts, occurrence) {\n        var alts = utils_1.isArray(altsOrOpts)\n            ? altsOrOpts\n            : altsOrOpts.DEF;\n        var laFunc = this.getLookaheadFuncForOr(occurrence, alts);\n        var altIdxToTake = laFunc.call(this, alts);\n        if (altIdxToTake !== undefined) {\n            var chosenAlternative = alts[altIdxToTake];\n            return chosenAlternative.ALT.call(this);\n        }\n        this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);\n    };\n    RecognizerEngine.prototype.orInternal = function (altsOrOpts, occurrence) {\n        var laKey = this.getKeyForAutomaticLookahead(keys_1.OR_IDX, occurrence);\n        var nestedName = this.nestedRuleBeforeClause(altsOrOpts, laKey);\n        try {\n            var alts = utils_1.isArray(altsOrOpts)\n                ? altsOrOpts\n                : altsOrOpts.DEF;\n            var laFunc = this.getLookaheadFuncForOr(occurrence, alts);\n            var altIdxToTake = laFunc.call(this, alts);\n            if (altIdxToTake !== undefined) {\n                var chosenAlternative = alts[altIdxToTake];\n                var nestedAltBeforeClauseResult = this.nestedAltBeforeClause(chosenAlternative, occurrence, keys_1.OR_IDX, altIdxToTake);\n                try {\n                    return chosenAlternative.ALT.call(this);\n                }\n                finally {\n                    if (nestedAltBeforeClauseResult !== undefined) {\n                        this.nestedRuleFinallyClause(nestedAltBeforeClauseResult.shortName, nestedAltBeforeClauseResult.nestedName);\n                    }\n                }\n            }\n            this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);\n        }\n        finally {\n            if (nestedName !== undefined) {\n                this.nestedRuleFinallyClause(laKey, nestedName);\n            }\n        }\n    };\n    RecognizerEngine.prototype.ruleFinallyStateUpdate = function () {\n        this.RULE_STACK.pop();\n        this.RULE_OCCURRENCE_STACK.pop();\n        // NOOP when cst is disabled\n        this.cstFinallyStateUpdate();\n        if (this.RULE_STACK.length === 0 && !this.isAtEndOfInput()) {\n            var firstRedundantTok = this.LA(1);\n            var errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({\n                firstRedundant: firstRedundantTok,\n                ruleName: this.getCurrRuleFullName()\n            });\n            this.SAVE_ERROR(new exceptions_public_1.NotAllInputParsedException(errMsg, firstRedundantTok));\n        }\n    };\n    RecognizerEngine.prototype.subruleInternal = function (ruleToCall, idx, options) {\n        var ruleResult;\n        try {\n            var args = options !== undefined ? options.ARGS : undefined;\n            ruleResult = ruleToCall.call(this, idx, args);\n            this.cstPostNonTerminal(ruleResult, options !== undefined && options.LABEL !== undefined\n                ? options.LABEL\n                : ruleToCall.ruleName);\n            return ruleResult;\n        }\n        catch (e) {\n            if (exceptions_public_1.isRecognitionException(e) && e.partialCstResult !== undefined) {\n                this.cstPostNonTerminal(e.partialCstResult, options !== undefined && options.LABEL !== undefined\n                    ? options.LABEL\n                    : ruleToCall.ruleName);\n                delete e.partialCstResult;\n            }\n            throw e;\n        }\n    };\n    RecognizerEngine.prototype.consumeInternal = function (tokType, idx, options) {\n        var consumedToken;\n        try {\n            var nextToken = this.LA(1);\n            if (this.tokenMatcher(nextToken, tokType) === true) {\n                this.consumeToken();\n                consumedToken = nextToken;\n            }\n            else {\n                var msg = void 0;\n                var previousToken = this.LA(0);\n                if (options !== undefined && options.ERR_MSG) {\n                    msg = options.ERR_MSG;\n                }\n                else {\n                    msg = this.errorMessageProvider.buildMismatchTokenMessage({\n                        expected: tokType,\n                        actual: nextToken,\n                        previous: previousToken,\n                        ruleName: this.getCurrRuleFullName()\n                    });\n                }\n                throw this.SAVE_ERROR(new exceptions_public_1.MismatchedTokenException(msg, nextToken, previousToken));\n            }\n        }\n        catch (eFromConsumption) {\n            // no recovery allowed during backtracking, otherwise backtracking may recover invalid syntax and accept it\n            // but the original syntax could have been parsed successfully without any backtracking + recovery\n            if (this.recoveryEnabled &&\n                // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?\n                eFromConsumption.name === \"MismatchedTokenException\" &&\n                !this.isBackTracking()) {\n                var follows = this.getFollowsForInRuleRecovery(tokType, idx);\n                try {\n                    consumedToken = this.tryInRuleRecovery(tokType, follows);\n                }\n                catch (eFromInRuleRecovery) {\n                    if (eFromInRuleRecovery.name === recoverable_1.IN_RULE_RECOVERY_EXCEPTION) {\n                        // failed in RuleRecovery.\n                        // throw the original error in order to trigger reSync error recovery\n                        throw eFromConsumption;\n                    }\n                    else {\n                        throw eFromInRuleRecovery;\n                    }\n                }\n            }\n            else {\n                throw eFromConsumption;\n            }\n        }\n        this.cstPostTerminal(options !== undefined && options.LABEL !== undefined\n            ? options.LABEL\n            : tokType.tokenName, consumedToken);\n        return consumedToken;\n    };\n    RecognizerEngine.prototype.saveRecogState = function () {\n        // errors is a getter which will clone the errors array\n        var savedErrors = this.errors;\n        var savedRuleStack = utils_1.cloneArr(this.RULE_STACK);\n        return {\n            errors: savedErrors,\n            lexerState: this.exportLexerState(),\n            RULE_STACK: savedRuleStack,\n            CST_STACK: this.CST_STACK,\n            LAST_EXPLICIT_RULE_STACK: this.LAST_EXPLICIT_RULE_STACK\n        };\n    };\n    RecognizerEngine.prototype.reloadRecogState = function (newState) {\n        this.errors = newState.errors;\n        this.importLexerState(newState.lexerState);\n        this.RULE_STACK = newState.RULE_STACK;\n    };\n    RecognizerEngine.prototype.ruleInvocationStateUpdate = function (shortName, fullName, idxInCallingRule) {\n        this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);\n        this.RULE_STACK.push(shortName);\n        // NOOP when cst is disabled\n        this.cstInvocationStateUpdate(fullName, shortName);\n    };\n    RecognizerEngine.prototype.isBackTracking = function () {\n        return !utils_1.isEmpty(this.isBackTrackingStack);\n    };\n    RecognizerEngine.prototype.getCurrRuleFullName = function () {\n        var shortName = this.getLastExplicitRuleShortName();\n        return this.shortRuleNameToFull.get(shortName);\n    };\n    RecognizerEngine.prototype.shortRuleNameToFullName = function (shortName) {\n        return this.shortRuleNameToFull.get(shortName);\n    };\n    RecognizerEngine.prototype.isAtEndOfInput = function () {\n        return this.tokenMatcher(this.LA(1), tokens_public_1.EOF);\n    };\n    RecognizerEngine.prototype.reset = function () {\n        this.resetLexerState();\n        this.isBackTrackingStack = [];\n        this.errors = [];\n        this.RULE_STACK = [];\n        this.LAST_EXPLICIT_RULE_STACK = [];\n        // TODO: extract a specific rest for TreeBuilder trait\n        this.CST_STACK = [];\n        this.RULE_OCCURRENCE_STACK = [];\n    };\n    return RecognizerEngine;\n}());\nexports.RecognizerEngine = RecognizerEngine;\n//# sourceMappingURL=recognizer_engine.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js":
/*!****************************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tokens_public_1 = __webpack_require__(/*! ../../../scan/tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nvar utils_1 = __webpack_require__(/*! ../../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar exceptions_public_1 = __webpack_require__(/*! ../../exceptions_public */ \"./node_modules/chevrotain/lib/src/parse/exceptions_public.js\");\nvar constants_1 = __webpack_require__(/*! ../../constants */ \"./node_modules/chevrotain/lib/src/parse/constants.js\");\nvar lang_extensions_1 = __webpack_require__(/*! ../../../lang/lang_extensions */ \"./node_modules/chevrotain/lib/src/lang/lang_extensions.js\");\nvar parser_1 = __webpack_require__(/*! ../parser */ \"./node_modules/chevrotain/lib/src/parse/parser/parser.js\");\nexports.EOF_FOLLOW_KEY = {};\nexports.IN_RULE_RECOVERY_EXCEPTION = \"InRuleRecoveryException\";\nfunction InRuleRecoveryException(message) {\n    this.name = exports.IN_RULE_RECOVERY_EXCEPTION;\n    this.message = message;\n}\nexports.InRuleRecoveryException = InRuleRecoveryException;\nInRuleRecoveryException.prototype = Error.prototype;\n/**\n * This trait is responsible for the error recovery and fault tolerant logic\n */\nvar Recoverable = /** @class */ (function () {\n    function Recoverable() {\n    }\n    Recoverable.prototype.initRecoverable = function (config) {\n        this.firstAfterRepMap = new lang_extensions_1.HashTable();\n        this.resyncFollows = new lang_extensions_1.HashTable();\n        this.recoveryEnabled = utils_1.has(config, \"recoveryEnabled\")\n            ? config.recoveryEnabled\n            : parser_1.DEFAULT_PARSER_CONFIG.recoveryEnabled;\n        // performance optimization, NOOP will be inlined which\n        // effectively means that this optional feature does not exist\n        // when not used.\n        if (this.recoveryEnabled) {\n            this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;\n        }\n    };\n    Recoverable.prototype.getTokenToInsert = function (tokType) {\n        var tokToInsert = tokens_public_1.createTokenInstance(tokType, \"\", NaN, NaN, NaN, NaN, NaN, NaN);\n        tokToInsert.isInsertedInRecovery = true;\n        return tokToInsert;\n    };\n    Recoverable.prototype.canTokenTypeBeInsertedInRecovery = function (tokType) {\n        return true;\n    };\n    Recoverable.prototype.tryInRepetitionRecovery = function (grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {\n        var _this = this;\n        // TODO: can the resyncTokenType be cached?\n        var reSyncTokType = this.findReSyncTokenType();\n        var savedLexerState = this.exportLexerState();\n        var resyncedTokens = [];\n        var passedResyncPoint = false;\n        var nextTokenWithoutResync = this.LA(1);\n        var currToken = this.LA(1);\n        var generateErrorMessage = function () {\n            var previousToken = _this.LA(0);\n            // we are preemptively re-syncing before an error has been detected, therefor we must reproduce\n            // the error that would have been thrown\n            var msg = _this.errorMessageProvider.buildMismatchTokenMessage({\n                expected: expectedTokType,\n                actual: nextTokenWithoutResync,\n                previous: previousToken,\n                ruleName: _this.getCurrRuleFullName()\n            });\n            var error = new exceptions_public_1.MismatchedTokenException(msg, nextTokenWithoutResync, _this.LA(0));\n            // the first token here will be the original cause of the error, this is not part of the resyncedTokens property.\n            error.resyncedTokens = utils_1.dropRight(resyncedTokens);\n            _this.SAVE_ERROR(error);\n        };\n        while (!passedResyncPoint) {\n            // re-synced to a point where we can safely exit the repetition/\n            if (this.tokenMatcher(currToken, expectedTokType)) {\n                generateErrorMessage();\n                return; // must return here to avoid reverting the inputIdx\n            }\n            else if (lookAheadFunc.call(this)) {\n                // we skipped enough tokens so we can resync right back into another iteration of the repetition grammar rule\n                generateErrorMessage();\n                // recursive invocation in other to support multiple re-syncs in the same top level repetition grammar rule\n                grammarRule.apply(this, grammarRuleArgs);\n                return; // must return here to avoid reverting the inputIdx\n            }\n            else if (this.tokenMatcher(currToken, reSyncTokType)) {\n                passedResyncPoint = true;\n            }\n            else {\n                currToken = this.SKIP_TOKEN();\n                this.addToResyncTokens(currToken, resyncedTokens);\n            }\n        }\n        // we were unable to find a CLOSER point to resync inside the Repetition, reset the state.\n        // The parsing exception we were trying to prevent will happen in the NEXT parsing step. it may be handled by\n        // \"between rules\" resync recovery later in the flow.\n        this.importLexerState(savedLexerState);\n    };\n    Recoverable.prototype.shouldInRepetitionRecoveryBeTried = function (expectTokAfterLastMatch, nextTokIdx) {\n        // arguments to try and perform resync into the next iteration of the many are missing\n        if (expectTokAfterLastMatch === undefined || nextTokIdx === undefined) {\n            return false;\n        }\n        // no need to recover, next token is what we expect...\n        if (this.tokenMatcher(this.LA(1), expectTokAfterLastMatch)) {\n            return false;\n        }\n        // error recovery is disabled during backtracking as it can make the parser ignore a valid grammar path\n        // and prefer some backtracking path that includes recovered errors.\n        if (this.isBackTracking()) {\n            return false;\n        }\n        // if we can perform inRule recovery (single token insertion or deletion) we always prefer that recovery algorithm\n        // because if it works, it makes the least amount of changes to the input stream (greedy algorithm)\n        //noinspection RedundantIfStatementJS\n        if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) {\n            return false;\n        }\n        return true;\n    };\n    // Error Recovery functionality\n    Recoverable.prototype.getFollowsForInRuleRecovery = function (tokType, tokIdxInRule) {\n        var grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);\n        var follows = this.getNextPossibleTokenTypes(grammarPath);\n        return follows;\n    };\n    Recoverable.prototype.tryInRuleRecovery = function (expectedTokType, follows) {\n        if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {\n            var tokToInsert = this.getTokenToInsert(expectedTokType);\n            return tokToInsert;\n        }\n        if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {\n            var nextTok = this.SKIP_TOKEN();\n            this.consumeToken();\n            return nextTok;\n        }\n        throw new InRuleRecoveryException(\"sad sad panda\");\n    };\n    Recoverable.prototype.canPerformInRuleRecovery = function (expectedToken, follows) {\n        return (this.canRecoverWithSingleTokenInsertion(expectedToken, follows) ||\n            this.canRecoverWithSingleTokenDeletion(expectedToken));\n    };\n    Recoverable.prototype.canRecoverWithSingleTokenInsertion = function (expectedTokType, follows) {\n        var _this = this;\n        if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) {\n            return false;\n        }\n        // must know the possible following tokens to perform single token insertion\n        if (utils_1.isEmpty(follows)) {\n            return false;\n        }\n        var mismatchedTok = this.LA(1);\n        var isMisMatchedTokInFollows = utils_1.find(follows, function (possibleFollowsTokType) {\n            return _this.tokenMatcher(mismatchedTok, possibleFollowsTokType);\n        }) !== undefined;\n        return isMisMatchedTokInFollows;\n    };\n    Recoverable.prototype.canRecoverWithSingleTokenDeletion = function (expectedTokType) {\n        var isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);\n        return isNextTokenWhatIsExpected;\n    };\n    Recoverable.prototype.isInCurrentRuleReSyncSet = function (tokenTypeIdx) {\n        var followKey = this.getCurrFollowKey();\n        var currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);\n        return utils_1.contains(currentRuleReSyncSet, tokenTypeIdx);\n    };\n    Recoverable.prototype.findReSyncTokenType = function () {\n        var allPossibleReSyncTokTypes = this.flattenFollowSet();\n        // this loop will always terminate as EOF is always in the follow stack and also always (virtually) in the input\n        var nextToken = this.LA(1);\n        var k = 2;\n        while (true) {\n            var nextTokenType = nextToken.tokenType;\n            if (utils_1.contains(allPossibleReSyncTokTypes, nextTokenType)) {\n                return nextTokenType;\n            }\n            nextToken = this.LA(k);\n            k++;\n        }\n    };\n    Recoverable.prototype.getCurrFollowKey = function () {\n        // the length is at least one as we always add the ruleName to the stack before invoking the rule.\n        if (this.RULE_STACK.length === 1) {\n            return exports.EOF_FOLLOW_KEY;\n        }\n        var currRuleShortName = this.getLastExplicitRuleShortName();\n        var currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();\n        var prevRuleShortName = this.getPreviousExplicitRuleShortName();\n        return {\n            ruleName: this.shortRuleNameToFullName(currRuleShortName),\n            idxInCallingRule: currRuleIdx,\n            inRule: this.shortRuleNameToFullName(prevRuleShortName)\n        };\n    };\n    Recoverable.prototype.buildFullFollowKeyStack = function () {\n        var _this = this;\n        var explicitRuleStack = this.RULE_STACK;\n        var explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;\n        if (!utils_1.isEmpty(this.LAST_EXPLICIT_RULE_STACK)) {\n            explicitRuleStack = utils_1.map(this.LAST_EXPLICIT_RULE_STACK, function (idx) { return _this.RULE_STACK[idx]; });\n            explicitOccurrenceStack = utils_1.map(this.LAST_EXPLICIT_RULE_STACK, function (idx) { return _this.RULE_OCCURRENCE_STACK[idx]; });\n        }\n        // TODO: only iterate over explicit rules here\n        return utils_1.map(explicitRuleStack, function (ruleName, idx) {\n            if (idx === 0) {\n                return exports.EOF_FOLLOW_KEY;\n            }\n            return {\n                ruleName: _this.shortRuleNameToFullName(ruleName),\n                idxInCallingRule: explicitOccurrenceStack[idx],\n                inRule: _this.shortRuleNameToFullName(explicitRuleStack[idx - 1])\n            };\n        });\n    };\n    Recoverable.prototype.flattenFollowSet = function () {\n        var _this = this;\n        var followStack = utils_1.map(this.buildFullFollowKeyStack(), function (currKey) {\n            return _this.getFollowSetFromFollowKey(currKey);\n        });\n        return utils_1.flatten(followStack);\n    };\n    Recoverable.prototype.getFollowSetFromFollowKey = function (followKey) {\n        if (followKey === exports.EOF_FOLLOW_KEY) {\n            return [tokens_public_1.EOF];\n        }\n        var followName = followKey.ruleName +\n            followKey.idxInCallingRule +\n            constants_1.IN +\n            followKey.inRule;\n        return this.resyncFollows.get(followName);\n    };\n    // It does not make any sense to include a virtual EOF token in the list of resynced tokens\n    // as EOF does not really exist and thus does not contain any useful information (line/column numbers)\n    Recoverable.prototype.addToResyncTokens = function (token, resyncTokens) {\n        if (!this.tokenMatcher(token, tokens_public_1.EOF)) {\n            resyncTokens.push(token);\n        }\n        return resyncTokens;\n    };\n    Recoverable.prototype.reSyncTo = function (tokType) {\n        var resyncedTokens = [];\n        var nextTok = this.LA(1);\n        while (this.tokenMatcher(nextTok, tokType) === false) {\n            nextTok = this.SKIP_TOKEN();\n            this.addToResyncTokens(nextTok, resyncedTokens);\n        }\n        // the last token is not part of the error.\n        return utils_1.dropRight(resyncedTokens);\n    };\n    Recoverable.prototype.attemptInRepetitionRecovery = function (prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker) {\n        // by default this is a NO-OP\n        // The actual implementation is with the function(not method) below\n    };\n    Recoverable.prototype.getCurrentGrammarPath = function (tokType, tokIdxInRule) {\n        var pathRuleStack = this.getHumanReadableRuleStack();\n        var pathOccurrenceStack = utils_1.cloneArr(this.RULE_OCCURRENCE_STACK);\n        var grammarPath = {\n            ruleStack: pathRuleStack,\n            occurrenceStack: pathOccurrenceStack,\n            lastTok: tokType,\n            lastTokOccurrence: tokIdxInRule\n        };\n        return grammarPath;\n    };\n    Recoverable.prototype.getHumanReadableRuleStack = function () {\n        var _this = this;\n        if (!utils_1.isEmpty(this.LAST_EXPLICIT_RULE_STACK)) {\n            return utils_1.map(this.LAST_EXPLICIT_RULE_STACK, function (currIdx) {\n                return _this.shortRuleNameToFullName(_this.RULE_STACK[currIdx]);\n            });\n        }\n        else {\n            return utils_1.map(this.RULE_STACK, function (currShortName) {\n                return _this.shortRuleNameToFullName(currShortName);\n            });\n        }\n    };\n    return Recoverable;\n}());\nexports.Recoverable = Recoverable;\nfunction attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker) {\n    var key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);\n    var firstAfterRepInfo = this.firstAfterRepMap.get(key);\n    if (firstAfterRepInfo === undefined) {\n        var currRuleName = this.getCurrRuleFullName();\n        var ruleGrammar = this.getGAstProductions().get(currRuleName);\n        var walker = new nextToksWalker(ruleGrammar, prodOccurrence);\n        firstAfterRepInfo = walker.startWalking();\n        this.firstAfterRepMap.put(key, firstAfterRepInfo);\n    }\n    var expectTokAfterLastMatch = firstAfterRepInfo.token;\n    var nextTokIdx = firstAfterRepInfo.occurrence;\n    var isEndOfRule = firstAfterRepInfo.isEndOfRule;\n    // special edge case of a TOP most repetition after which the input should END.\n    // this will force an attempt for inRule recovery in that scenario.\n    if (this.RULE_STACK.length === 1 &&\n        isEndOfRule &&\n        expectTokAfterLastMatch === undefined) {\n        expectTokAfterLastMatch = tokens_public_1.EOF;\n        nextTokIdx = 1;\n    }\n    if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx)) {\n        // TODO: performance optimization: instead of passing the original args here, we modify\n        // the args param (or create a new one) and make sure the lookahead func is explicitly provided\n        // to avoid searching the cache for it once more.\n        this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);\n    }\n}\nexports.attemptInRepetitionRecovery = attemptInRepetitionRecovery;\n//# sourceMappingURL=recoverable.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar cst_1 = __webpack_require__(/*! ../../cst/cst */ \"./node_modules/chevrotain/lib/src/parse/cst/cst.js\");\nvar utils_1 = __webpack_require__(/*! ../../../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar cst_visitor_1 = __webpack_require__(/*! ../../cst/cst_visitor */ \"./node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js\");\nvar keys_1 = __webpack_require__(/*! ../../grammar/keys */ \"./node_modules/chevrotain/lib/src/parse/grammar/keys.js\");\nvar parser_1 = __webpack_require__(/*! ../parser */ \"./node_modules/chevrotain/lib/src/parse/parser/parser.js\");\n/**\n * This trait is responsible for the CST building logic.\n */\nvar TreeBuilder = /** @class */ (function () {\n    function TreeBuilder() {\n    }\n    TreeBuilder.prototype.initTreeBuilder = function (config) {\n        this.LAST_EXPLICIT_RULE_STACK = [];\n        this.CST_STACK = [];\n        this.outputCst = utils_1.has(config, \"outputCst\")\n            ? config.outputCst\n            : parser_1.DEFAULT_PARSER_CONFIG.outputCst;\n        if (!this.outputCst) {\n            this.cstInvocationStateUpdate = utils_1.NOOP;\n            this.cstFinallyStateUpdate = utils_1.NOOP;\n            this.cstPostTerminal = utils_1.NOOP;\n            this.cstPostNonTerminal = utils_1.NOOP;\n            this.getLastExplicitRuleShortName = this.getLastExplicitRuleShortNameNoCst;\n            this.getPreviousExplicitRuleShortName = this.getPreviousExplicitRuleShortNameNoCst;\n            this.getLastExplicitRuleOccurrenceIndex = this.getLastExplicitRuleOccurrenceIndexNoCst;\n            this.manyInternal = this.manyInternalNoCst;\n            this.orInternal = this.orInternalNoCst;\n            this.optionInternal = this.optionInternalNoCst;\n            this.atLeastOneInternal = this.atLeastOneInternalNoCst;\n            this.manySepFirstInternal = this.manySepFirstInternalNoCst;\n            this.atLeastOneSepFirstInternal = this.atLeastOneSepFirstInternalNoCst;\n        }\n    };\n    // CST\n    TreeBuilder.prototype.cstNestedInvocationStateUpdate = function (nestedName, shortName) {\n        this.CST_STACK.push({\n            name: nestedName,\n            fullName: this.shortRuleNameToFull.get(this.getLastExplicitRuleShortName()) + nestedName,\n            children: {}\n        });\n    };\n    TreeBuilder.prototype.cstInvocationStateUpdate = function (fullRuleName, shortName) {\n        this.LAST_EXPLICIT_RULE_STACK.push(this.RULE_STACK.length - 1);\n        this.CST_STACK.push({\n            name: fullRuleName,\n            children: {}\n        });\n    };\n    TreeBuilder.prototype.cstFinallyStateUpdate = function () {\n        this.LAST_EXPLICIT_RULE_STACK.pop();\n        this.CST_STACK.pop();\n    };\n    TreeBuilder.prototype.cstNestedFinallyStateUpdate = function () {\n        this.CST_STACK.pop();\n    };\n    TreeBuilder.prototype.cstPostTerminal = function (key, consumedToken) {\n        // TODO: would save the \"current rootCST be faster than locating it for each terminal?\n        var rootCst = this.CST_STACK[this.CST_STACK.length - 1];\n        cst_1.addTerminalToCst(rootCst, consumedToken, key);\n    };\n    TreeBuilder.prototype.cstPostNonTerminal = function (ruleCstResult, ruleName) {\n        cst_1.addNoneTerminalToCst(this.CST_STACK[this.CST_STACK.length - 1], ruleName, ruleCstResult);\n    };\n    TreeBuilder.prototype.getBaseCstVisitorConstructor = function () {\n        if (utils_1.isUndefined(this.baseCstVisitorConstructor)) {\n            var newBaseCstVisitorConstructor = cst_visitor_1.createBaseSemanticVisitorConstructor(this.className, this.allRuleNames);\n            this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;\n            return newBaseCstVisitorConstructor;\n        }\n        return this.baseCstVisitorConstructor;\n    };\n    TreeBuilder.prototype.getBaseCstVisitorConstructorWithDefaults = function () {\n        if (utils_1.isUndefined(this.baseCstVisitorWithDefaultsConstructor)) {\n            var newConstructor = cst_visitor_1.createBaseVisitorConstructorWithDefaults(this.className, this.allRuleNames, this.getBaseCstVisitorConstructor());\n            this.baseCstVisitorWithDefaultsConstructor = newConstructor;\n            return newConstructor;\n        }\n        return this.baseCstVisitorWithDefaultsConstructor;\n    };\n    TreeBuilder.prototype.nestedRuleBeforeClause = function (methodOpts, laKey) {\n        var nestedName;\n        if (methodOpts.NAME !== undefined) {\n            nestedName = methodOpts.NAME;\n            this.nestedRuleInvocationStateUpdate(nestedName, laKey);\n            return nestedName;\n        }\n        else {\n            return undefined;\n        }\n    };\n    TreeBuilder.prototype.nestedAltBeforeClause = function (methodOpts, occurrence, methodKeyIdx, altIdx) {\n        var ruleIdx = this.getLastExplicitRuleShortName();\n        var shortName = keys_1.getKeyForAltIndex(ruleIdx, methodKeyIdx, occurrence, altIdx);\n        var nestedName;\n        if (methodOpts.NAME !== undefined) {\n            nestedName = methodOpts.NAME;\n            this.nestedRuleInvocationStateUpdate(nestedName, shortName);\n            return {\n                shortName: shortName,\n                nestedName: nestedName\n            };\n        }\n        else {\n            return undefined;\n        }\n    };\n    TreeBuilder.prototype.nestedRuleFinallyClause = function (laKey, nestedName) {\n        var cstStack = this.CST_STACK;\n        var nestedRuleCst = cstStack[cstStack.length - 1];\n        this.nestedRuleFinallyStateUpdate();\n        // this return a different result than the previous invocation because \"nestedRuleFinallyStateUpdate\" pops the cst stack\n        var parentCstNode = cstStack[cstStack.length - 1];\n        cst_1.addNoneTerminalToCst(parentCstNode, nestedName, nestedRuleCst);\n    };\n    TreeBuilder.prototype.getLastExplicitRuleShortName = function () {\n        var lastExplictIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1];\n        return this.RULE_STACK[lastExplictIndex];\n    };\n    TreeBuilder.prototype.getLastExplicitRuleShortNameNoCst = function () {\n        var ruleStack = this.RULE_STACK;\n        return ruleStack[ruleStack.length - 1];\n    };\n    TreeBuilder.prototype.getPreviousExplicitRuleShortName = function () {\n        var lastExplicitIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 2];\n        return this.RULE_STACK[lastExplicitIndex];\n    };\n    TreeBuilder.prototype.getPreviousExplicitRuleShortNameNoCst = function () {\n        var ruleStack = this.RULE_STACK;\n        return ruleStack[ruleStack.length - 2];\n    };\n    TreeBuilder.prototype.getLastExplicitRuleOccurrenceIndex = function () {\n        var lastExplicitIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1];\n        return this.RULE_OCCURRENCE_STACK[lastExplicitIndex];\n    };\n    TreeBuilder.prototype.getLastExplicitRuleOccurrenceIndexNoCst = function () {\n        var occurrenceStack = this.RULE_OCCURRENCE_STACK;\n        return occurrenceStack[occurrenceStack.length - 1];\n    };\n    TreeBuilder.prototype.nestedRuleInvocationStateUpdate = function (nestedRuleName, shortNameKey) {\n        this.RULE_OCCURRENCE_STACK.push(1);\n        this.RULE_STACK.push(shortNameKey);\n        this.cstNestedInvocationStateUpdate(nestedRuleName, shortNameKey);\n    };\n    TreeBuilder.prototype.nestedRuleFinallyStateUpdate = function () {\n        this.RULE_STACK.pop();\n        this.RULE_OCCURRENCE_STACK.pop();\n        // NOOP when cst is disabled\n        this.cstNestedFinallyStateUpdate();\n    };\n    return TreeBuilder;\n}());\nexports.TreeBuilder = TreeBuilder;\n//# sourceMappingURL=tree_builder.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/scan/lexer.js":
/*!*******************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/scan/lexer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar regexp_to_ast_1 = __webpack_require__(/*! regexp-to-ast */ \"./node_modules/regexp-to-ast/lib/regexp-to-ast.js\");\nvar tokens_public_1 = __webpack_require__(/*! ./tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nvar lexer_public_1 = __webpack_require__(/*! ./lexer_public */ \"./node_modules/chevrotain/lib/src/scan/lexer_public.js\");\nvar utils_1 = __webpack_require__(/*! ../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar reg_exp_1 = __webpack_require__(/*! ./reg_exp */ \"./node_modules/chevrotain/lib/src/scan/reg_exp.js\");\nvar regExpParser = new regexp_to_ast_1.RegExpParser();\nvar PATTERN = \"PATTERN\";\nexports.DEFAULT_MODE = \"defaultMode\";\nexports.MODES = \"modes\";\nexports.SUPPORT_STICKY = typeof new RegExp(\"(?:)\").sticky === \"boolean\";\nfunction disableSticky() {\n    exports.SUPPORT_STICKY = false;\n}\nexports.disableSticky = disableSticky;\nfunction enableSticky() {\n    exports.SUPPORT_STICKY = true;\n}\nexports.enableSticky = enableSticky;\nfunction analyzeTokenTypes(tokenTypes, options) {\n    options = utils_1.defaults(options, {\n        useSticky: exports.SUPPORT_STICKY,\n        debug: false,\n        safeMode: false,\n        positionTracking: \"full\",\n        lineTerminatorCharacters: [\"\\r\", \"\\n\"]\n    });\n    var onlyRelevantTypes = utils_1.reject(tokenTypes, function (currType) {\n        return currType[PATTERN] === lexer_public_1.Lexer.NA;\n    });\n    var hasCustom = false;\n    var allTransformedPatterns = utils_1.map(onlyRelevantTypes, function (currType) {\n        var currPattern = currType[PATTERN];\n        /* istanbul ignore else */\n        if (utils_1.isRegExp(currPattern)) {\n            var regExpSource = currPattern.source;\n            if (regExpSource.length === 1 &&\n                // only these regExp meta characters which can appear in a length one regExp\n                regExpSource !== \"^\" &&\n                regExpSource !== \"$\" &&\n                regExpSource !== \".\") {\n                return regExpSource;\n            }\n            else if (regExpSource.length === 2 &&\n                regExpSource[0] === \"\\\\\" &&\n                // not a meta character\n                !utils_1.contains([\n                    \"d\",\n                    \"D\",\n                    \"s\",\n                    \"S\",\n                    \"t\",\n                    \"r\",\n                    \"n\",\n                    \"t\",\n                    \"0\",\n                    \"c\",\n                    \"b\",\n                    \"B\",\n                    \"f\",\n                    \"v\",\n                    \"w\",\n                    \"W\"\n                ], regExpSource[1])) {\n                // escaped meta Characters: /\\+/ /\\[/\n                // or redundant escaping: /\\a/\n                // without the escaping \"\\\"\n                return regExpSource[1];\n            }\n            else {\n                return options.useSticky\n                    ? addStickyFlag(currPattern)\n                    : addStartOfInput(currPattern);\n            }\n        }\n        else if (utils_1.isFunction(currPattern)) {\n            hasCustom = true;\n            // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object\n            return { exec: currPattern };\n        }\n        else if (utils_1.has(currPattern, \"exec\")) {\n            hasCustom = true;\n            // ICustomPattern\n            return currPattern;\n        }\n        else if (typeof currPattern === \"string\") {\n            // IGNORE ABOVE ELSE\n            if (currPattern.length === 1) {\n                return currPattern;\n            }\n            else {\n                var escapedRegExpString = currPattern.replace(/[\\\\^$.*+?()[\\]{}|]/g, \"\\\\$&\");\n                var wrappedRegExp = new RegExp(escapedRegExpString);\n                return options.useSticky\n                    ? addStickyFlag(wrappedRegExp)\n                    : addStartOfInput(wrappedRegExp);\n            }\n        }\n        else {\n            throw Error(\"non exhaustive match\");\n        }\n    });\n    var patternIdxToType = utils_1.map(onlyRelevantTypes, function (currType) { return currType.tokenTypeIdx; });\n    var patternIdxToGroup = utils_1.map(onlyRelevantTypes, function (clazz) {\n        var groupName = clazz.GROUP;\n        /* istanbul ignore next */\n        if (groupName === lexer_public_1.Lexer.SKIPPED) {\n            return undefined;\n        }\n        else if (utils_1.isString(groupName)) {\n            return groupName;\n        }\n        else if (utils_1.isUndefined(groupName)) {\n            return false;\n        }\n        else {\n            throw Error(\"non exhaustive match\");\n        }\n    });\n    var patternIdxToLongerAltIdx = utils_1.map(onlyRelevantTypes, function (clazz) {\n        var longerAltType = clazz.LONGER_ALT;\n        if (longerAltType) {\n            var longerAltIdx = utils_1.indexOf(onlyRelevantTypes, longerAltType);\n            return longerAltIdx;\n        }\n    });\n    var patternIdxToPushMode = utils_1.map(onlyRelevantTypes, function (clazz) { return clazz.PUSH_MODE; });\n    var patternIdxToPopMode = utils_1.map(onlyRelevantTypes, function (clazz) {\n        return utils_1.has(clazz, \"POP_MODE\");\n    });\n    var lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);\n    var patternIdxToCanLineTerminator = utils_1.map(onlyRelevantTypes, function (tokType) { return false; });\n    if (options.positionTracking !== \"onlyOffset\") {\n        patternIdxToCanLineTerminator = utils_1.map(onlyRelevantTypes, function (tokType) {\n            if (utils_1.has(tokType, \"LINE_BREAKS\")) {\n                return tokType.LINE_BREAKS;\n            }\n            else {\n                if (checkLineBreaksIssues(tokType, lineTerminatorCharCodes) ===\n                    false) {\n                    return reg_exp_1.canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);\n                }\n            }\n        });\n    }\n    var patternIdxToIsCustom = utils_1.map(onlyRelevantTypes, isCustomPattern);\n    var patternIdxToShort = utils_1.map(allTransformedPatterns, isShortPattern);\n    var emptyGroups = utils_1.reduce(onlyRelevantTypes, function (acc, clazz) {\n        var groupName = clazz.GROUP;\n        if (utils_1.isString(groupName) && !(groupName === lexer_public_1.Lexer.SKIPPED)) {\n            acc[groupName] = [];\n        }\n        return acc;\n    }, {});\n    var patternIdxToConfig = utils_1.map(allTransformedPatterns, function (x, idx) {\n        return {\n            pattern: allTransformedPatterns[idx],\n            longerAlt: patternIdxToLongerAltIdx[idx],\n            canLineTerminator: patternIdxToCanLineTerminator[idx],\n            isCustom: patternIdxToIsCustom[idx],\n            short: patternIdxToShort[idx],\n            group: patternIdxToGroup[idx],\n            push: patternIdxToPushMode[idx],\n            pop: patternIdxToPopMode[idx],\n            tokenTypeIdx: patternIdxToType[idx],\n            tokenType: onlyRelevantTypes[idx]\n        };\n    });\n    function addToMapOfArrays(map, key, value) {\n        if (map[key] === undefined) {\n            map[key] = [];\n        }\n        map[key].push(value);\n    }\n    var canBeOptimized = true;\n    var charCodeToPatternIdxToConfig = [];\n    if (!options.safeMode) {\n        charCodeToPatternIdxToConfig = utils_1.reduce(onlyRelevantTypes, function (result, currTokType, idx) {\n            if (typeof currTokType.PATTERN === \"string\") {\n                var key = currTokType.PATTERN.charCodeAt(0);\n                addToMapOfArrays(result, key, patternIdxToConfig[idx]);\n            }\n            else if (utils_1.isArray(currTokType.START_CHARS_HINT)) {\n                utils_1.forEach(currTokType.START_CHARS_HINT, function (charOrInt) {\n                    var key = typeof charOrInt === \"string\"\n                        ? charOrInt.charCodeAt(0)\n                        : charOrInt;\n                    addToMapOfArrays(result, key, patternIdxToConfig[idx]);\n                });\n            }\n            else if (utils_1.isRegExp(currTokType.PATTERN)) {\n                if (currTokType.PATTERN.unicode) {\n                    canBeOptimized = false;\n                    if (options.ensureOptimizations) {\n                        utils_1.PRINT_ERROR(\"\" + reg_exp_1.failedOptimizationPrefixMsg +\n                            (\"\\tUnable to analyze < \" + currTokType.PATTERN.toString() + \" > pattern.\\n\") +\n                            \"\\tThe regexp unicode flag is not currently supported by the regexp-to-ast library.\\n\" +\n                            \"\\tThis will disable the lexer's first char optimizations.\\n\" +\n                            \"\\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE\");\n                    }\n                }\n                else {\n                    var startCodes = reg_exp_1.getStartCodes(currTokType.PATTERN, options.ensureOptimizations);\n                    /* istanbul ignore if */\n                    // start code will only be empty given an empty regExp or failure of regexp-to-ast library\n                    // the first should be a different validation and the second cannot be tested.\n                    if (utils_1.isEmpty(startCodes)) {\n                        // we cannot understand what codes may start possible matches\n                        // The optimization correctness requires knowing start codes for ALL patterns.\n                        // Not actually sure this is an error, no debug message\n                        canBeOptimized = false;\n                    }\n                    utils_1.forEach(startCodes, function (code) {\n                        addToMapOfArrays(result, code, patternIdxToConfig[idx]);\n                    });\n                }\n            }\n            else {\n                if (options.ensureOptimizations) {\n                    utils_1.PRINT_ERROR(\"\" + reg_exp_1.failedOptimizationPrefixMsg +\n                        (\"\\tTokenType: <\" + tokens_public_1.tokenName(currTokType) + \"> is using a custom token pattern without providing <start_chars_hint> parameter.\\n\") +\n                        \"\\tThis will disable the lexer's first char optimizations.\\n\" +\n                        \"\\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE\");\n                }\n                canBeOptimized = false;\n            }\n            return result;\n        }, []);\n    }\n    if (canBeOptimized && charCodeToPatternIdxToConfig.length < 65536) {\n        charCodeToPatternIdxToConfig = utils_1.packArray(charCodeToPatternIdxToConfig);\n    }\n    return {\n        emptyGroups: emptyGroups,\n        patternIdxToConfig: patternIdxToConfig,\n        charCodeToPatternIdxToConfig: charCodeToPatternIdxToConfig,\n        hasCustom: hasCustom,\n        canBeOptimized: canBeOptimized\n    };\n}\nexports.analyzeTokenTypes = analyzeTokenTypes;\nfunction validatePatterns(tokenTypes, validModesNames) {\n    var errors = [];\n    var missingResult = findMissingPatterns(tokenTypes);\n    errors = errors.concat(missingResult.errors);\n    var invalidResult = findInvalidPatterns(missingResult.valid);\n    var validTokenTypes = invalidResult.valid;\n    errors = errors.concat(invalidResult.errors);\n    errors = errors.concat(validateRegExpPattern(validTokenTypes));\n    errors = errors.concat(findInvalidGroupType(validTokenTypes));\n    errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));\n    errors = errors.concat(findUnreachablePatterns(validTokenTypes));\n    return errors;\n}\nexports.validatePatterns = validatePatterns;\nfunction validateRegExpPattern(tokenTypes) {\n    var errors = [];\n    var withRegExpPatterns = utils_1.filter(tokenTypes, function (currTokType) {\n        return utils_1.isRegExp(currTokType[PATTERN]);\n    });\n    errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));\n    errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));\n    errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));\n    errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));\n    errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));\n    return errors;\n}\nfunction findMissingPatterns(tokenTypes) {\n    var tokenTypesWithMissingPattern = utils_1.filter(tokenTypes, function (currType) {\n        return !utils_1.has(currType, PATTERN);\n    });\n    var errors = utils_1.map(tokenTypesWithMissingPattern, function (currType) {\n        return {\n            message: \"Token Type: ->\" +\n                tokens_public_1.tokenName(currType) +\n                \"<- missing static 'PATTERN' property\",\n            type: lexer_public_1.LexerDefinitionErrorType.MISSING_PATTERN,\n            tokenTypes: [currType]\n        };\n    });\n    var valid = utils_1.difference(tokenTypes, tokenTypesWithMissingPattern);\n    return { errors: errors, valid: valid };\n}\nexports.findMissingPatterns = findMissingPatterns;\nfunction findInvalidPatterns(tokenTypes) {\n    var tokenTypesWithInvalidPattern = utils_1.filter(tokenTypes, function (currType) {\n        var pattern = currType[PATTERN];\n        return (!utils_1.isRegExp(pattern) &&\n            !utils_1.isFunction(pattern) &&\n            !utils_1.has(pattern, \"exec\") &&\n            !utils_1.isString(pattern));\n    });\n    var errors = utils_1.map(tokenTypesWithInvalidPattern, function (currType) {\n        return {\n            message: \"Token Type: ->\" +\n                tokens_public_1.tokenName(currType) +\n                \"<- static 'PATTERN' can only be a RegExp, a\" +\n                \" Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.\",\n            type: lexer_public_1.LexerDefinitionErrorType.INVALID_PATTERN,\n            tokenTypes: [currType]\n        };\n    });\n    var valid = utils_1.difference(tokenTypes, tokenTypesWithInvalidPattern);\n    return { errors: errors, valid: valid };\n}\nexports.findInvalidPatterns = findInvalidPatterns;\nvar end_of_input = /[^\\\\][\\$]/;\nfunction findEndOfInputAnchor(tokenTypes) {\n    var EndAnchorFinder = /** @class */ (function (_super) {\n        __extends(EndAnchorFinder, _super);\n        function EndAnchorFinder() {\n            var _this = _super !== null && _super.apply(this, arguments) || this;\n            _this.found = false;\n            return _this;\n        }\n        EndAnchorFinder.prototype.visitEndAnchor = function (node) {\n            this.found = true;\n        };\n        return EndAnchorFinder;\n    }(regexp_to_ast_1.BaseRegExpVisitor));\n    var invalidRegex = utils_1.filter(tokenTypes, function (currType) {\n        var pattern = currType[PATTERN];\n        try {\n            var regexpAst = regExpParser.pattern(pattern.toString());\n            var endAnchorVisitor = new EndAnchorFinder();\n            endAnchorVisitor.visit(regexpAst);\n            return endAnchorVisitor.found;\n        }\n        catch (e) {\n            // old behavior in case of runtime exceptions with regexp-to-ast.\n            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/\n            return end_of_input.test(pattern.source);\n        }\n    });\n    var errors = utils_1.map(invalidRegex, function (currType) {\n        return {\n            message: \"Unexpected RegExp Anchor Error:\\n\" +\n                \"\\tToken Type: ->\" +\n                tokens_public_1.tokenName(currType) +\n                \"<- static 'PATTERN' cannot contain end of input anchor '$'\\n\" +\n                \"\\tSee sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS\" +\n                \"\\tfor details.\",\n            type: lexer_public_1.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,\n            tokenTypes: [currType]\n        };\n    });\n    return errors;\n}\nexports.findEndOfInputAnchor = findEndOfInputAnchor;\nfunction findEmptyMatchRegExps(tokenTypes) {\n    var matchesEmptyString = utils_1.filter(tokenTypes, function (currType) {\n        var pattern = currType[PATTERN];\n        return pattern.test(\"\");\n    });\n    var errors = utils_1.map(matchesEmptyString, function (currType) {\n        return {\n            message: \"Token Type: ->\" +\n                tokens_public_1.tokenName(currType) +\n                \"<- static 'PATTERN' must not match an empty string\",\n            type: lexer_public_1.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,\n            tokenTypes: [currType]\n        };\n    });\n    return errors;\n}\nexports.findEmptyMatchRegExps = findEmptyMatchRegExps;\nvar start_of_input = /[^\\\\[][\\^]|^\\^/;\nfunction findStartOfInputAnchor(tokenTypes) {\n    var StartAnchorFinder = /** @class */ (function (_super) {\n        __extends(StartAnchorFinder, _super);\n        function StartAnchorFinder() {\n            var _this = _super !== null && _super.apply(this, arguments) || this;\n            _this.found = false;\n            return _this;\n        }\n        StartAnchorFinder.prototype.visitStartAnchor = function (node) {\n            this.found = true;\n        };\n        return StartAnchorFinder;\n    }(regexp_to_ast_1.BaseRegExpVisitor));\n    var invalidRegex = utils_1.filter(tokenTypes, function (currType) {\n        var pattern = currType[PATTERN];\n        try {\n            var regexpAst = regExpParser.pattern(pattern.toString());\n            var startAnchorVisitor = new StartAnchorFinder();\n            startAnchorVisitor.visit(regexpAst);\n            return startAnchorVisitor.found;\n        }\n        catch (e) {\n            // old behavior in case of runtime exceptions with regexp-to-ast.\n            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/\n            return start_of_input.test(pattern.source);\n        }\n    });\n    var errors = utils_1.map(invalidRegex, function (currType) {\n        return {\n            message: \"Unexpected RegExp Anchor Error:\\n\" +\n                \"\\tToken Type: ->\" +\n                tokens_public_1.tokenName(currType) +\n                \"<- static 'PATTERN' cannot contain start of input anchor '^'\\n\" +\n                \"\\tSee https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS\" +\n                \"\\tfor details.\",\n            type: lexer_public_1.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,\n            tokenTypes: [currType]\n        };\n    });\n    return errors;\n}\nexports.findStartOfInputAnchor = findStartOfInputAnchor;\nfunction findUnsupportedFlags(tokenTypes) {\n    var invalidFlags = utils_1.filter(tokenTypes, function (currType) {\n        var pattern = currType[PATTERN];\n        return (pattern instanceof RegExp && (pattern.multiline || pattern.global));\n    });\n    var errors = utils_1.map(invalidFlags, function (currType) {\n        return {\n            message: \"Token Type: ->\" +\n                tokens_public_1.tokenName(currType) +\n                \"<- static 'PATTERN' may NOT contain global('g') or multiline('m')\",\n            type: lexer_public_1.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,\n            tokenTypes: [currType]\n        };\n    });\n    return errors;\n}\nexports.findUnsupportedFlags = findUnsupportedFlags;\n// This can only test for identical duplicate RegExps, not semantically equivalent ones.\nfunction findDuplicatePatterns(tokenTypes) {\n    var found = [];\n    var identicalPatterns = utils_1.map(tokenTypes, function (outerType) {\n        return utils_1.reduce(tokenTypes, function (result, innerType) {\n            if (outerType.PATTERN.source === innerType.PATTERN.source &&\n                !utils_1.contains(found, innerType) &&\n                innerType.PATTERN !== lexer_public_1.Lexer.NA) {\n                // this avoids duplicates in the result, each Token Type may only appear in one \"set\"\n                // in essence we are creating Equivalence classes on equality relation.\n                found.push(innerType);\n                result.push(innerType);\n                return result;\n            }\n            return result;\n        }, []);\n    });\n    identicalPatterns = utils_1.compact(identicalPatterns);\n    var duplicatePatterns = utils_1.filter(identicalPatterns, function (currIdenticalSet) {\n        return currIdenticalSet.length > 1;\n    });\n    var errors = utils_1.map(duplicatePatterns, function (setOfIdentical) {\n        var tokenTypeNames = utils_1.map(setOfIdentical, function (currType) {\n            return tokens_public_1.tokenName(currType);\n        });\n        var dupPatternSrc = utils_1.first(setOfIdentical).PATTERN;\n        return {\n            message: \"The same RegExp pattern ->\" + dupPatternSrc + \"<-\" +\n                (\"has been used in all of the following Token Types: \" + tokenTypeNames.join(\", \") + \" <-\"),\n            type: lexer_public_1.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,\n            tokenTypes: setOfIdentical\n        };\n    });\n    return errors;\n}\nexports.findDuplicatePatterns = findDuplicatePatterns;\nfunction findInvalidGroupType(tokenTypes) {\n    var invalidTypes = utils_1.filter(tokenTypes, function (clazz) {\n        if (!utils_1.has(clazz, \"GROUP\")) {\n            return false;\n        }\n        var group = clazz.GROUP;\n        return group !== lexer_public_1.Lexer.SKIPPED && group !== lexer_public_1.Lexer.NA && !utils_1.isString(group);\n    });\n    var errors = utils_1.map(invalidTypes, function (currType) {\n        return {\n            message: \"Token Type: ->\" +\n                tokens_public_1.tokenName(currType) +\n                \"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String\",\n            type: lexer_public_1.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,\n            tokenTypes: [currType]\n        };\n    });\n    return errors;\n}\nexports.findInvalidGroupType = findInvalidGroupType;\nfunction findModesThatDoNotExist(tokenTypes, validModes) {\n    var invalidModes = utils_1.filter(tokenTypes, function (clazz) {\n        return (clazz.PUSH_MODE !== undefined &&\n            !utils_1.contains(validModes, clazz.PUSH_MODE));\n    });\n    var errors = utils_1.map(invalidModes, function (clazz) {\n        var msg = \"Token Type: ->\" + tokens_public_1.tokenName(clazz) + \"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->\" + clazz.PUSH_MODE + \"<-\" + \"which does not exist\";\n        return {\n            message: msg,\n            type: lexer_public_1.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,\n            tokenTypes: [clazz]\n        };\n    });\n    return errors;\n}\nexports.findModesThatDoNotExist = findModesThatDoNotExist;\nfunction findUnreachablePatterns(tokenTypes) {\n    var errors = [];\n    var canBeTested = utils_1.reduce(tokenTypes, function (result, tokType, idx) {\n        var pattern = tokType.PATTERN;\n        if (pattern === lexer_public_1.Lexer.NA) {\n            return result;\n        }\n        // a more comprehensive validation for all forms of regExps would require\n        // deeper regExp analysis capabilities\n        if (utils_1.isString(pattern)) {\n            result.push({ str: pattern, idx: idx, tokenType: tokType });\n        }\n        else if (utils_1.isRegExp(pattern) && noMetaChar(pattern)) {\n            result.push({ str: pattern.source, idx: idx, tokenType: tokType });\n        }\n        return result;\n    }, []);\n    utils_1.forEach(tokenTypes, function (tokType, testIdx) {\n        utils_1.forEach(canBeTested, function (_a) {\n            var str = _a.str, idx = _a.idx, tokenType = _a.tokenType;\n            if (testIdx < idx && testTokenType(str, tokType.PATTERN)) {\n                var msg = \"Token: ->\" + tokens_public_1.tokenName(tokenType) + \"<- can never be matched.\\n\" +\n                    (\"Because it appears AFTER the Token Type ->\" + tokens_public_1.tokenName(tokType) + \"<-\") +\n                    \"in the lexer's definition.\\n\" +\n                    \"See https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNREACHABLE\";\n                errors.push({\n                    message: msg,\n                    type: lexer_public_1.LexerDefinitionErrorType.UNREACHABLE_PATTERN,\n                    tokenTypes: [tokType, tokenType]\n                });\n            }\n        });\n    });\n    return errors;\n}\nexports.findUnreachablePatterns = findUnreachablePatterns;\nfunction testTokenType(str, pattern) {\n    /* istanbul ignore else */\n    if (utils_1.isRegExp(pattern)) {\n        var regExpArray = pattern.exec(str);\n        return regExpArray !== null && regExpArray.index === 0;\n    }\n    else if (utils_1.isFunction(pattern)) {\n        // maintain the API of custom patterns\n        return pattern(str, 0, [], {});\n    }\n    else if (utils_1.has(pattern, \"exec\")) {\n        // maintain the API of custom patterns\n        return pattern.exec(str, 0, [], {});\n    }\n    else if (typeof pattern === \"string\") {\n        return pattern === str;\n    }\n    else {\n        throw Error(\"non exhaustive match\");\n    }\n}\nfunction noMetaChar(regExp) {\n    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp\n    var metaChars = [\n        \".\",\n        \"\\\\\",\n        \"[\",\n        \"]\",\n        \"|\",\n        \"^\",\n        \"$\",\n        \"(\",\n        \")\",\n        \"?\",\n        \"*\",\n        \"+\",\n        \"{\"\n    ];\n    return (utils_1.find(metaChars, function (char) { return regExp.source.indexOf(char) !== -1; }) ===\n        undefined);\n}\nfunction addStartOfInput(pattern) {\n    var flags = pattern.ignoreCase ? \"i\" : \"\";\n    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.\n    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)\n    return new RegExp(\"^(?:\" + pattern.source + \")\", flags);\n}\nexports.addStartOfInput = addStartOfInput;\nfunction addStickyFlag(pattern) {\n    var flags = pattern.ignoreCase ? \"iy\" : \"y\";\n    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.\n    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)\n    return new RegExp(\"\" + pattern.source, flags);\n}\nexports.addStickyFlag = addStickyFlag;\nfunction performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {\n    var errors = [];\n    // some run time checks to help the end users.\n    if (!utils_1.has(lexerDefinition, exports.DEFAULT_MODE)) {\n        errors.push({\n            message: \"A MultiMode Lexer cannot be initialized without a <\" +\n                exports.DEFAULT_MODE +\n                \"> property in its definition\\n\",\n            type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE\n        });\n    }\n    if (!utils_1.has(lexerDefinition, exports.MODES)) {\n        errors.push({\n            message: \"A MultiMode Lexer cannot be initialized without a <\" +\n                exports.MODES +\n                \"> property in its definition\\n\",\n            type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY\n        });\n    }\n    if (utils_1.has(lexerDefinition, exports.MODES) &&\n        utils_1.has(lexerDefinition, exports.DEFAULT_MODE) &&\n        !utils_1.has(lexerDefinition.modes, lexerDefinition.defaultMode)) {\n        errors.push({\n            message: \"A MultiMode Lexer cannot be initialized with a \" + exports.DEFAULT_MODE + \": <\" + lexerDefinition.defaultMode + \">\" + \"which does not exist\\n\",\n            type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST\n        });\n    }\n    if (utils_1.has(lexerDefinition, exports.MODES)) {\n        utils_1.forEach(lexerDefinition.modes, function (currModeValue, currModeName) {\n            utils_1.forEach(currModeValue, function (currTokType, currIdx) {\n                if (utils_1.isUndefined(currTokType)) {\n                    errors.push({\n                        message: \"A Lexer cannot be initialized using an undefined Token Type. Mode:\" +\n                            (\"<\" + currModeName + \"> at index: <\" + currIdx + \">\\n\"),\n                        type: lexer_public_1.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED\n                    });\n                }\n            });\n        });\n    }\n    return errors;\n}\nexports.performRuntimeChecks = performRuntimeChecks;\nfunction performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {\n    var warnings = [];\n    var hasAnyLineBreak = false;\n    var allTokenTypes = utils_1.compact(utils_1.flatten(utils_1.mapValues(lexerDefinition.modes, function (tokTypes) { return tokTypes; })));\n    var concreteTokenTypes = utils_1.reject(allTokenTypes, function (currType) { return currType[PATTERN] === lexer_public_1.Lexer.NA; });\n    var terminatorCharCodes = getCharCodes(lineTerminatorCharacters);\n    if (trackLines) {\n        utils_1.forEach(concreteTokenTypes, function (tokType) {\n            var currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);\n            if (currIssue !== false) {\n                var message = buildLineBreakIssueMessage(tokType, currIssue);\n                var warningDescriptor = {\n                    message: message,\n                    type: currIssue.issue,\n                    tokenType: tokType\n                };\n                warnings.push(warningDescriptor);\n            }\n            else {\n                // we don't want to attempt to scan if the user explicitly specified the line_breaks option.\n                if (utils_1.has(tokType, \"LINE_BREAKS\")) {\n                    if (tokType.LINE_BREAKS === true) {\n                        hasAnyLineBreak = true;\n                    }\n                }\n                else {\n                    if (reg_exp_1.canMatchCharCode(terminatorCharCodes, tokType.PATTERN)) {\n                        hasAnyLineBreak = true;\n                    }\n                }\n            }\n        });\n    }\n    if (trackLines && !hasAnyLineBreak) {\n        warnings.push({\n            message: \"Warning: No LINE_BREAKS Found.\\n\" +\n                \"\\tThis Lexer has been defined to track line and column information,\\n\" +\n                \"\\tBut none of the Token Types can be identified as matching a line terminator.\\n\" +\n                \"\\tSee https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \\n\" +\n                \"\\tfor details.\",\n            type: lexer_public_1.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS\n        });\n    }\n    return warnings;\n}\nexports.performWarningRuntimeChecks = performWarningRuntimeChecks;\nfunction cloneEmptyGroups(emptyGroups) {\n    var clonedResult = {};\n    var groupKeys = utils_1.keys(emptyGroups);\n    utils_1.forEach(groupKeys, function (currKey) {\n        var currGroupValue = emptyGroups[currKey];\n        /* istanbul ignore else */\n        if (utils_1.isArray(currGroupValue)) {\n            clonedResult[currKey] = [];\n        }\n        else {\n            throw Error(\"non exhaustive match\");\n        }\n    });\n    return clonedResult;\n}\nexports.cloneEmptyGroups = cloneEmptyGroups;\n// TODO: refactor to avoid duplication\nfunction isCustomPattern(tokenType) {\n    var pattern = tokenType.PATTERN;\n    /* istanbul ignore else */\n    if (utils_1.isRegExp(pattern)) {\n        return false;\n    }\n    else if (utils_1.isFunction(pattern)) {\n        // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object\n        return true;\n    }\n    else if (utils_1.has(pattern, \"exec\")) {\n        // ICustomPattern\n        return true;\n    }\n    else if (utils_1.isString(pattern)) {\n        return false;\n    }\n    else {\n        throw Error(\"non exhaustive match\");\n    }\n}\nexports.isCustomPattern = isCustomPattern;\nfunction isShortPattern(pattern) {\n    if (utils_1.isString(pattern) && pattern.length === 1) {\n        return pattern.charCodeAt(0);\n    }\n    else {\n        return false;\n    }\n}\nexports.isShortPattern = isShortPattern;\n/**\n * Faster than using a RegExp for default newline detection during lexing.\n */\nexports.LineTerminatorOptimizedTester = {\n    // implements /\\n|\\r\\n?/g.test\n    test: function (text) {\n        var len = text.length;\n        for (var i = this.lastIndex; i < len; i++) {\n            var c = text.charCodeAt(i);\n            if (c === 10) {\n                this.lastIndex = i + 1;\n                return true;\n            }\n            else if (c === 13) {\n                if (text.charCodeAt(i + 1) === 10) {\n                    this.lastIndex = i + 2;\n                }\n                else {\n                    this.lastIndex = i + 1;\n                }\n                return true;\n            }\n        }\n        return false;\n    },\n    lastIndex: 0\n};\nfunction checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {\n    if (utils_1.has(tokType, \"LINE_BREAKS\")) {\n        // if the user explicitly declared the line_breaks option we will respect their choice\n        // and assume it is correct.\n        return false;\n    }\n    else {\n        /* istanbul ignore else */\n        if (utils_1.isRegExp(tokType.PATTERN)) {\n            try {\n                reg_exp_1.canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);\n            }\n            catch (e) {\n                /* istanbul ignore next - to test this we would have to mock <canMatchCharCode> to throw an error */\n                return {\n                    issue: lexer_public_1.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,\n                    errMsg: e.message\n                };\n            }\n            return false;\n        }\n        else if (utils_1.isString(tokType.PATTERN)) {\n            // string literal patterns can always be analyzed to detect line terminator usage\n            return false;\n        }\n        else if (isCustomPattern(tokType)) {\n            // custom token types\n            return { issue: lexer_public_1.LexerDefinitionErrorType.CUSTOM_LINE_BREAK };\n        }\n        else {\n            throw Error(\"non exhaustive match\");\n        }\n    }\n}\nfunction buildLineBreakIssueMessage(tokType, details) {\n    /* istanbul ignore else */\n    if (details.issue === lexer_public_1.LexerDefinitionErrorType.IDENTIFY_TERMINATOR) {\n        return (\"Warning: unable to identify line terminator usage in pattern.\\n\" +\n            (\"\\tThe problem is in the <\" + tokType.name + \"> Token Type\\n\") +\n            (\"\\t Root cause: \" + details.errMsg + \".\\n\") +\n            \"\\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR\");\n    }\n    else if (details.issue === lexer_public_1.LexerDefinitionErrorType.CUSTOM_LINE_BREAK) {\n        return (\"Warning: A Custom Token Pattern should specify the <line_breaks> option.\\n\" +\n            (\"\\tThe problem is in the <\" + tokType.name + \"> Token Type\\n\") +\n            \"\\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK\");\n    }\n    else {\n        throw Error(\"non exhaustive match\");\n    }\n}\nexports.buildLineBreakIssueMessage = buildLineBreakIssueMessage;\nfunction getCharCodes(charsOrCodes) {\n    var charCodes = utils_1.map(charsOrCodes, function (numOrString) {\n        if (utils_1.isString(numOrString) && numOrString.length > 0) {\n            return numOrString.charCodeAt(0);\n        }\n        else {\n            return numOrString;\n        }\n    });\n    return charCodes;\n}\n//# sourceMappingURL=lexer.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/scan/lexer.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/scan/lexer_errors_public.js":
/*!*********************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/scan/lexer_errors_public.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.defaultLexerErrorProvider = {\n    buildUnableToPopLexerModeMessage: function (token) {\n        return \"Unable to pop Lexer Mode after encountering Token ->\" + token.image + \"<- The Mode Stack is empty\";\n    },\n    buildUnexpectedCharactersMessage: function (fullText, startOffset, length, line, column) {\n        return (\"unexpected character: ->\" + fullText.charAt(startOffset) + \"<- at offset: \" + startOffset + \",\" + (\" skipped \" + length + \" characters.\"));\n    }\n};\n//# sourceMappingURL=lexer_errors_public.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/scan/lexer_errors_public.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/scan/lexer_public.js":
/*!**************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/scan/lexer_public.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar lexer_1 = __webpack_require__(/*! ./lexer */ \"./node_modules/chevrotain/lib/src/scan/lexer.js\");\nvar utils_1 = __webpack_require__(/*! ../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar tokens_1 = __webpack_require__(/*! ./tokens */ \"./node_modules/chevrotain/lib/src/scan/tokens.js\");\nvar lexer_errors_public_1 = __webpack_require__(/*! ../scan/lexer_errors_public */ \"./node_modules/chevrotain/lib/src/scan/lexer_errors_public.js\");\nvar LexerDefinitionErrorType;\n(function (LexerDefinitionErrorType) {\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"MISSING_PATTERN\"] = 0] = \"MISSING_PATTERN\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"INVALID_PATTERN\"] = 1] = \"INVALID_PATTERN\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"EOI_ANCHOR_FOUND\"] = 2] = \"EOI_ANCHOR_FOUND\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"UNSUPPORTED_FLAGS_FOUND\"] = 3] = \"UNSUPPORTED_FLAGS_FOUND\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"DUPLICATE_PATTERNS_FOUND\"] = 4] = \"DUPLICATE_PATTERNS_FOUND\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"INVALID_GROUP_TYPE_FOUND\"] = 5] = \"INVALID_GROUP_TYPE_FOUND\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"PUSH_MODE_DOES_NOT_EXIST\"] = 6] = \"PUSH_MODE_DOES_NOT_EXIST\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE\"] = 7] = \"MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY\"] = 8] = \"MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST\"] = 9] = \"MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED\"] = 10] = \"LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"SOI_ANCHOR_FOUND\"] = 11] = \"SOI_ANCHOR_FOUND\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"EMPTY_MATCH_PATTERN\"] = 12] = \"EMPTY_MATCH_PATTERN\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"NO_LINE_BREAKS_FLAGS\"] = 13] = \"NO_LINE_BREAKS_FLAGS\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"UNREACHABLE_PATTERN\"] = 14] = \"UNREACHABLE_PATTERN\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"IDENTIFY_TERMINATOR\"] = 15] = \"IDENTIFY_TERMINATOR\";\n    LexerDefinitionErrorType[LexerDefinitionErrorType[\"CUSTOM_LINE_BREAK\"] = 16] = \"CUSTOM_LINE_BREAK\";\n})(LexerDefinitionErrorType = exports.LexerDefinitionErrorType || (exports.LexerDefinitionErrorType = {}));\nvar DEFAULT_LEXER_CONFIG = {\n    deferDefinitionErrorsHandling: false,\n    positionTracking: \"full\",\n    lineTerminatorsPattern: /\\n|\\r\\n?/g,\n    lineTerminatorCharacters: [\"\\n\", \"\\r\"],\n    ensureOptimizations: false,\n    safeMode: false,\n    errorMessageProvider: lexer_errors_public_1.defaultLexerErrorProvider\n};\nObject.freeze(DEFAULT_LEXER_CONFIG);\nvar Lexer = /** @class */ (function () {\n    function Lexer(lexerDefinition, config) {\n        if (config === void 0) { config = DEFAULT_LEXER_CONFIG; }\n        var _this = this;\n        this.lexerDefinition = lexerDefinition;\n        this.lexerDefinitionErrors = [];\n        this.lexerDefinitionWarning = [];\n        this.patternIdxToConfig = {};\n        this.charCodeToPatternIdxToConfig = {};\n        this.modes = [];\n        this.emptyGroups = {};\n        this.config = undefined;\n        this.trackStartLines = true;\n        this.trackEndLines = true;\n        this.hasCustom = false;\n        this.canModeBeOptimized = {};\n        if (typeof config === \"boolean\") {\n            throw Error(\"The second argument to the Lexer constructor is now an ILexerConfig Object.\\n\" +\n                \"a boolean 2nd argument is no longer supported\");\n        }\n        // todo: defaults func?\n        this.config = utils_1.merge(DEFAULT_LEXER_CONFIG, config);\n        if (this.config.lineTerminatorsPattern ===\n            DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) {\n            // optimized built-in implementation for the defaults definition of lineTerminators\n            this.config.lineTerminatorsPattern = lexer_1.LineTerminatorOptimizedTester;\n        }\n        else {\n            if (this.config.lineTerminatorCharacters ===\n                DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) {\n                throw Error(\"Error: Missing <lineTerminatorCharacters> property on the Lexer config.\\n\" +\n                    \"\\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS\");\n            }\n        }\n        if (config.safeMode && config.ensureOptimizations) {\n            throw Error('\"safeMode\" and \"ensureOptimizations\" flags are mutually exclusive.');\n        }\n        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking);\n        this.trackEndLines = /full/i.test(this.config.positionTracking);\n        var hasOnlySingleMode = true;\n        var actualDefinition;\n        // Convert SingleModeLexerDefinition into a IMultiModeLexerDefinition.\n        if (utils_1.isArray(lexerDefinition)) {\n            actualDefinition = { modes: {} };\n            actualDefinition.modes[lexer_1.DEFAULT_MODE] = utils_1.cloneArr((lexerDefinition));\n            actualDefinition[lexer_1.DEFAULT_MODE] = lexer_1.DEFAULT_MODE;\n        }\n        else {\n            // no conversion needed, input should already be a IMultiModeLexerDefinition\n            hasOnlySingleMode = false;\n            actualDefinition = utils_1.cloneObj((lexerDefinition));\n        }\n        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(lexer_1.performRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));\n        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(lexer_1.performWarningRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));\n        // for extra robustness to avoid throwing an none informative error message\n        actualDefinition.modes = actualDefinition.modes\n            ? actualDefinition.modes\n            : {};\n        // an error of undefined TokenTypes will be detected in \"performRuntimeChecks\" above.\n        // this transformation is to increase robustness in the case of partially invalid lexer definition.\n        utils_1.forEach(actualDefinition.modes, function (currModeValue, currModeName) {\n            actualDefinition.modes[currModeName] = utils_1.reject(currModeValue, function (currTokType) { return utils_1.isUndefined(currTokType); });\n        });\n        var allModeNames = utils_1.keys(actualDefinition.modes);\n        utils_1.forEach(actualDefinition.modes, function (currModDef, currModName) {\n            _this.modes.push(currModName);\n            _this.lexerDefinitionErrors = _this.lexerDefinitionErrors.concat(lexer_1.validatePatterns(currModDef, allModeNames));\n            // If definition errors were encountered, the analysis phase may fail unexpectedly/\n            // Considering a lexer with definition errors may never be used, there is no point\n            // to performing the analysis anyhow...\n            if (utils_1.isEmpty(_this.lexerDefinitionErrors)) {\n                tokens_1.augmentTokenTypes(currModDef);\n                var currAnalyzeResult = lexer_1.analyzeTokenTypes(currModDef, {\n                    lineTerminatorCharacters: _this.config\n                        .lineTerminatorCharacters,\n                    positionTracking: config.positionTracking,\n                    ensureOptimizations: config.ensureOptimizations,\n                    safeMode: config.safeMode\n                });\n                _this.patternIdxToConfig[currModName] =\n                    currAnalyzeResult.patternIdxToConfig;\n                _this.charCodeToPatternIdxToConfig[currModName] =\n                    currAnalyzeResult.charCodeToPatternIdxToConfig;\n                _this.emptyGroups = utils_1.merge(_this.emptyGroups, currAnalyzeResult.emptyGroups);\n                _this.hasCustom =\n                    currAnalyzeResult.hasCustom || _this.hasCustom;\n                _this.canModeBeOptimized[currModName] =\n                    currAnalyzeResult.canBeOptimized;\n            }\n        });\n        this.defaultMode = actualDefinition.defaultMode;\n        if (!utils_1.isEmpty(this.lexerDefinitionErrors) &&\n            !this.config.deferDefinitionErrorsHandling) {\n            var allErrMessages = utils_1.map(this.lexerDefinitionErrors, function (error) {\n                return error.message;\n            });\n            var allErrMessagesString = allErrMessages.join(\"-----------------------\\n\");\n            throw new Error(\"Errors detected in definition of Lexer:\\n\" +\n                allErrMessagesString);\n        }\n        // Only print warning if there are no errors, This will avoid pl\n        utils_1.forEach(this.lexerDefinitionWarning, function (warningDescriptor) {\n            utils_1.PRINT_WARNING(warningDescriptor.message);\n        });\n        // Choose the relevant internal implementations for this specific parser.\n        // These implementations should be in-lined by the JavaScript engine\n        // to provide optimal performance in each scenario.\n        if (lexer_1.SUPPORT_STICKY) {\n            this.chopInput = utils_1.IDENTITY;\n            this.match = this.matchWithTest;\n        }\n        else {\n            this.updateLastIndex = utils_1.NOOP;\n            this.match = this.matchWithExec;\n        }\n        if (hasOnlySingleMode) {\n            this.handleModes = utils_1.NOOP;\n        }\n        if (this.trackStartLines === false) {\n            this.computeNewColumn = utils_1.IDENTITY;\n        }\n        if (this.trackEndLines === false) {\n            this.updateTokenEndLineColumnLocation = utils_1.NOOP;\n        }\n        if (/full/i.test(this.config.positionTracking)) {\n            this.createTokenInstance = this.createFullToken;\n        }\n        else if (/onlyStart/i.test(this.config.positionTracking)) {\n            this.createTokenInstance = this.createStartOnlyToken;\n        }\n        else if (/onlyOffset/i.test(this.config.positionTracking)) {\n            this.createTokenInstance = this.createOffsetOnlyToken;\n        }\n        else {\n            throw Error(\"Invalid <positionTracking> config option: \\\"\" + this.config.positionTracking + \"\\\"\");\n        }\n        if (this.hasCustom) {\n            this.addToken = this.addTokenUsingPush;\n        }\n        else {\n            this.addToken = this.addTokenUsingMemberAccess;\n        }\n        var unOptimizedModes = utils_1.reduce(this.canModeBeOptimized, function (cannotBeOptimized, canBeOptimized, modeName) {\n            if (canBeOptimized === false) {\n                cannotBeOptimized.push(modeName);\n            }\n            return cannotBeOptimized;\n        }, []);\n        if (config.ensureOptimizations && !utils_1.isEmpty(unOptimizedModes)) {\n            throw Error(\"Lexer Modes: < \" + unOptimizedModes.join(\", \") + \" > cannot be optimized.\\n\" +\n                '\\t Disable the \"ensureOptimizations\" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\\n' +\n                \"\\t Or inspect the console log for details on how to resolve these issues.\");\n        }\n    }\n    Lexer.prototype.tokenize = function (text, initialMode) {\n        if (initialMode === void 0) { initialMode = this.defaultMode; }\n        if (!utils_1.isEmpty(this.lexerDefinitionErrors)) {\n            var allErrMessages = utils_1.map(this.lexerDefinitionErrors, function (error) {\n                return error.message;\n            });\n            var allErrMessagesString = allErrMessages.join(\"-----------------------\\n\");\n            throw new Error(\"Unable to Tokenize because Errors detected in definition of Lexer:\\n\" +\n                allErrMessagesString);\n        }\n        var lexResult = this.tokenizeInternal(text, initialMode);\n        return lexResult;\n    };\n    // There is quite a bit of duplication between this and \"tokenizeInternalLazy\"\n    // This is intentional due to performance considerations.\n    Lexer.prototype.tokenizeInternal = function (text, initialMode) {\n        var _this = this;\n        var i, j, matchAltImage, longerAltIdx, matchedImage, imageLength, group, tokType, newToken, errLength, droppedChar, msg, match;\n        var orgText = text;\n        var orgLength = orgText.length;\n        var offset = 0;\n        var matchedTokensIndex = 0;\n        // initializing the tokensArray to the \"guessed\" size.\n        // guessing too little will still reduce the number of array re-sizes on pushes.\n        // guessing too large (Tested by guessing x4 too large) may cost a bit more of memory\n        // but would still have a faster runtime by avoiding (All but one) array resizing.\n        var guessedNumberOfTokens = this.hasCustom\n            ? 0 // will break custom token pattern APIs the matchedTokens array will contain undefined elements.\n            : Math.floor(text.length / 10);\n        var matchedTokens = new Array(guessedNumberOfTokens);\n        var errors = [];\n        var line = this.trackStartLines ? 1 : undefined;\n        var column = this.trackStartLines ? 1 : undefined;\n        var groups = lexer_1.cloneEmptyGroups(this.emptyGroups);\n        var trackLines = this.trackStartLines;\n        var lineTerminatorPattern = this.config.lineTerminatorsPattern;\n        var currModePatternsLength = 0;\n        var patternIdxToConfig = [];\n        var currCharCodeToPatternIdxToConfig = [];\n        var modeStack = [];\n        var emptyArray = [];\n        Object.freeze(emptyArray);\n        var getPossiblePatterns = undefined;\n        var pop_mode = function (popToken) {\n            // TODO: perhaps avoid this error in the edge case there is no more input?\n            if (modeStack.length === 1 &&\n                // if we have both a POP_MODE and a PUSH_MODE this is in-fact a \"transition\"\n                // So no error should occur.\n                popToken.tokenType.PUSH_MODE === undefined) {\n                // if we try to pop the last mode there lexer will no longer have ANY mode.\n                // thus the pop is ignored, an error will be created and the lexer will continue parsing in the previous mode.\n                var msg_1 = _this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);\n                errors.push({\n                    offset: popToken.startOffset,\n                    line: popToken.startLine !== undefined\n                        ? popToken.startLine\n                        : undefined,\n                    column: popToken.startColumn !== undefined\n                        ? popToken.startColumn\n                        : undefined,\n                    length: popToken.image.length,\n                    message: msg_1\n                });\n            }\n            else {\n                modeStack.pop();\n                var newMode = utils_1.last(modeStack);\n                patternIdxToConfig = _this.patternIdxToConfig[newMode];\n                currCharCodeToPatternIdxToConfig = _this\n                    .charCodeToPatternIdxToConfig[newMode];\n                currModePatternsLength = patternIdxToConfig.length;\n                var modeCanBeOptimized = _this.canModeBeOptimized[newMode] &&\n                    _this.config.safeMode === false;\n                if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {\n                    getPossiblePatterns = function (charCode) {\n                        var possiblePatterns = currCharCodeToPatternIdxToConfig[charCode];\n                        if (possiblePatterns === undefined) {\n                            return emptyArray;\n                        }\n                        else {\n                            return possiblePatterns;\n                        }\n                    };\n                }\n                else {\n                    getPossiblePatterns = function () {\n                        return patternIdxToConfig;\n                    };\n                }\n            }\n        };\n        function push_mode(newMode) {\n            modeStack.push(newMode);\n            currCharCodeToPatternIdxToConfig = this\n                .charCodeToPatternIdxToConfig[newMode];\n            patternIdxToConfig = this.patternIdxToConfig[newMode];\n            currModePatternsLength = patternIdxToConfig.length;\n            currModePatternsLength = patternIdxToConfig.length;\n            var modeCanBeOptimized = this.canModeBeOptimized[newMode] &&\n                this.config.safeMode === false;\n            if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {\n                getPossiblePatterns = function (charCode) {\n                    var possiblePatterns = currCharCodeToPatternIdxToConfig[charCode];\n                    if (possiblePatterns === undefined) {\n                        return emptyArray;\n                    }\n                    else {\n                        return possiblePatterns;\n                    }\n                };\n            }\n            else {\n                getPossiblePatterns = function () {\n                    return patternIdxToConfig;\n                };\n            }\n        }\n        // this pattern seems to avoid a V8 de-optimization, although that de-optimization does not\n        // seem to matter performance wise.\n        push_mode.call(this, initialMode);\n        var currConfig;\n        while (offset < orgLength) {\n            matchedImage = null;\n            var nextCharCode = orgText.charCodeAt(offset);\n            var chosenPatternIdxToConfig = getPossiblePatterns(nextCharCode);\n            var chosenPatternsLength = chosenPatternIdxToConfig.length;\n            for (i = 0; i < chosenPatternsLength; i++) {\n                currConfig = chosenPatternIdxToConfig[i];\n                var currPattern = currConfig.pattern;\n                // manually in-lined because > 600 chars won't be in-lined in V8\n                var singleCharCode = currConfig.short;\n                if (singleCharCode !== false) {\n                    if (nextCharCode === singleCharCode) {\n                        // single character string\n                        matchedImage = currPattern;\n                    }\n                }\n                else if (currConfig.isCustom === true) {\n                    match = currPattern.exec(orgText, offset, matchedTokens, groups);\n                    matchedImage = match !== null ? match[0] : match;\n                }\n                else {\n                    this.updateLastIndex(currPattern, offset);\n                    matchedImage = this.match(currPattern, text, offset);\n                }\n                if (matchedImage !== null) {\n                    // even though this pattern matched we must try a another longer alternative.\n                    // this can be used to prioritize keywords over identifiers\n                    longerAltIdx = currConfig.longerAlt;\n                    if (longerAltIdx !== undefined) {\n                        // TODO: micro optimize, avoid extra prop access\n                        // by saving/linking longerAlt on the original config?\n                        var longerAltConfig = patternIdxToConfig[longerAltIdx];\n                        var longerAltPattern = longerAltConfig.pattern;\n                        // single Char can never be a longer alt so no need to test it.\n                        // manually in-lined because > 600 chars won't be in-lined in V8\n                        if (longerAltConfig.isCustom === true) {\n                            match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);\n                            matchAltImage = match !== null ? match[0] : match;\n                        }\n                        else {\n                            this.updateLastIndex(longerAltPattern, offset);\n                            matchAltImage = this.match(longerAltPattern, text, offset);\n                        }\n                        if (matchAltImage &&\n                            matchAltImage.length > matchedImage.length) {\n                            matchedImage = matchAltImage;\n                            currConfig = longerAltConfig;\n                        }\n                    }\n                    break;\n                }\n            }\n            // successful match\n            if (matchedImage !== null) {\n                // matchedImage = match[0]\n                imageLength = matchedImage.length;\n                group = currConfig.group;\n                if (group !== undefined) {\n                    tokType = currConfig.tokenTypeIdx;\n                    // TODO: \"offset + imageLength\" and the new column may be computed twice in case of \"full\" location information inside\n                    // createFullToken method\n                    newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength);\n                    if (group === false) {\n                        matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);\n                    }\n                    else {\n                        groups[group].push(newToken);\n                    }\n                }\n                text = this.chopInput(text, imageLength);\n                offset = offset + imageLength;\n                // TODO: with newlines the column may be assigned twice\n                column = this.computeNewColumn(column, imageLength);\n                if (trackLines === true &&\n                    currConfig.canLineTerminator === true) {\n                    var numOfLTsInMatch = 0;\n                    var foundTerminator = void 0;\n                    var lastLTEndOffset = void 0;\n                    lineTerminatorPattern.lastIndex = 0;\n                    do {\n                        foundTerminator = lineTerminatorPattern.test(matchedImage);\n                        if (foundTerminator === true) {\n                            lastLTEndOffset =\n                                lineTerminatorPattern.lastIndex - 1;\n                            numOfLTsInMatch++;\n                        }\n                    } while (foundTerminator);\n                    if (numOfLTsInMatch !== 0) {\n                        line = line + numOfLTsInMatch;\n                        column = imageLength - lastLTEndOffset;\n                        this.updateTokenEndLineColumnLocation(newToken, group, lastLTEndOffset, numOfLTsInMatch, line, column, imageLength);\n                    }\n                }\n                // will be NOOP if no modes present\n                this.handleModes(currConfig, pop_mode, push_mode, newToken);\n            }\n            else {\n                // error recovery, drop characters until we identify a valid token's start point\n                var errorStartOffset = offset;\n                var errorLine = line;\n                var errorColumn = column;\n                var foundResyncPoint = false;\n                while (!foundResyncPoint && offset < orgLength) {\n                    // drop chars until we succeed in matching something\n                    droppedChar = orgText.charCodeAt(offset);\n                    // Identity Func (when sticky flag is enabled)\n                    text = this.chopInput(text, 1);\n                    offset++;\n                    for (j = 0; j < currModePatternsLength; j++) {\n                        var currConfig_1 = patternIdxToConfig[j];\n                        var currPattern = currConfig_1.pattern;\n                        // manually in-lined because > 600 chars won't be in-lined in V8\n                        var singleCharCode = currConfig_1.short;\n                        if (singleCharCode !== false) {\n                            if (orgText.charCodeAt(offset) === singleCharCode) {\n                                // single character string\n                                foundResyncPoint = true;\n                            }\n                        }\n                        else if (currConfig_1.isCustom === true) {\n                            foundResyncPoint =\n                                currPattern.exec(orgText, offset, matchedTokens, groups) !== null;\n                        }\n                        else {\n                            this.updateLastIndex(currPattern, offset);\n                            foundResyncPoint = currPattern.exec(text) !== null;\n                        }\n                        if (foundResyncPoint === true) {\n                            break;\n                        }\n                    }\n                }\n                errLength = offset - errorStartOffset;\n                // at this point we either re-synced or reached the end of the input text\n                msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn);\n                errors.push({\n                    offset: errorStartOffset,\n                    line: errorLine,\n                    column: errorColumn,\n                    length: errLength,\n                    message: msg\n                });\n            }\n        }\n        // if we do have custom patterns which push directly into the\n        if (!this.hasCustom) {\n            // if we guessed a too large size for the tokens array this will shrink it to the right size.\n            matchedTokens.length = matchedTokensIndex;\n        }\n        return {\n            tokens: matchedTokens,\n            groups: groups,\n            errors: errors\n        };\n    };\n    Lexer.prototype.handleModes = function (config, pop_mode, push_mode, newToken) {\n        if (config.pop === true) {\n            // need to save the PUSH_MODE property as if the mode is popped\n            // patternIdxToPopMode is updated to reflect the new mode after popping the stack\n            var pushMode = config.push;\n            pop_mode(newToken);\n            if (pushMode !== undefined) {\n                push_mode.call(this, pushMode);\n            }\n        }\n        else if (config.push !== undefined) {\n            push_mode.call(this, config.push);\n        }\n    };\n    Lexer.prototype.chopInput = function (text, length) {\n        return text.substring(length);\n    };\n    Lexer.prototype.updateLastIndex = function (regExp, newLastIndex) {\n        regExp.lastIndex = newLastIndex;\n    };\n    // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler\n    Lexer.prototype.updateTokenEndLineColumnLocation = function (newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {\n        var lastCharIsLT, fixForEndingInLT;\n        if (group !== undefined) {\n            // a none skipped multi line Token, need to update endLine/endColumn\n            lastCharIsLT = lastLTIdx === imageLength - 1;\n            fixForEndingInLT = lastCharIsLT ? -1 : 0;\n            if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {\n                // if a token ends in a LT that last LT only affects the line numbering of following Tokens\n                newToken.endLine = line + fixForEndingInLT;\n                // the last LT in a token does not affect the endColumn either as the [columnStart ... columnEnd)\n                // inclusive to exclusive range.\n                newToken.endColumn = column - 1 + -fixForEndingInLT;\n            }\n            // else single LT in the last character of a token, no need to modify the endLine/EndColumn\n        }\n    };\n    Lexer.prototype.computeNewColumn = function (oldColumn, imageLength) {\n        return oldColumn + imageLength;\n    };\n    // Place holder, will be replaced by the correct variant according to the locationTracking option at runtime.\n    /* istanbul ignore next - place holder */\n    Lexer.prototype.createTokenInstance = function () {\n        var args = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            args[_i] = arguments[_i];\n        }\n        return null;\n    };\n    Lexer.prototype.createOffsetOnlyToken = function (image, startOffset, tokenTypeIdx, tokenType) {\n        return {\n            image: image,\n            startOffset: startOffset,\n            tokenTypeIdx: tokenTypeIdx,\n            tokenType: tokenType\n        };\n    };\n    Lexer.prototype.createStartOnlyToken = function (image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {\n        return {\n            image: image,\n            startOffset: startOffset,\n            startLine: startLine,\n            startColumn: startColumn,\n            tokenTypeIdx: tokenTypeIdx,\n            tokenType: tokenType\n        };\n    };\n    Lexer.prototype.createFullToken = function (image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {\n        return {\n            image: image,\n            startOffset: startOffset,\n            endOffset: startOffset + imageLength - 1,\n            startLine: startLine,\n            endLine: startLine,\n            startColumn: startColumn,\n            endColumn: startColumn + imageLength - 1,\n            tokenTypeIdx: tokenTypeIdx,\n            tokenType: tokenType\n        };\n    };\n    // Place holder, will be replaced by the correct variant according to the locationTracking option at runtime.\n    /* istanbul ignore next - place holder */\n    Lexer.prototype.addToken = function (tokenVector, index, tokenToAdd) {\n        return 666;\n    };\n    Lexer.prototype.addTokenUsingPush = function (tokenVector, index, tokenToAdd) {\n        tokenVector.push(tokenToAdd);\n        return index;\n    };\n    Lexer.prototype.addTokenUsingMemberAccess = function (tokenVector, index, tokenToAdd) {\n        tokenVector[index] = tokenToAdd;\n        index++;\n        return index;\n    };\n    /* istanbul ignore next - place holder to be replaced with chosen alternative at runtime */\n    Lexer.prototype.match = function (pattern, text, offset) {\n        return null;\n    };\n    Lexer.prototype.matchWithTest = function (pattern, text, offset) {\n        var found = pattern.test(text);\n        if (found === true) {\n            return text.substring(offset, pattern.lastIndex);\n        }\n        return null;\n    };\n    Lexer.prototype.matchWithExec = function (pattern, text) {\n        var regExpArray = pattern.exec(text);\n        return regExpArray !== null ? regExpArray[0] : regExpArray;\n    };\n    Lexer.SKIPPED = \"This marks a skipped Token pattern, this means each token identified by it will\" +\n        \"be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.\";\n    Lexer.NA = /NOT_APPLICABLE/;\n    return Lexer;\n}());\nexports.Lexer = Lexer;\n//# sourceMappingURL=lexer_public.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/scan/lexer_public.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/scan/reg_exp.js":
/*!*********************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/scan/reg_exp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar regexp_to_ast_1 = __webpack_require__(/*! regexp-to-ast */ \"./node_modules/regexp-to-ast/lib/regexp-to-ast.js\");\nvar utils_1 = __webpack_require__(/*! ../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar regExpParser = new regexp_to_ast_1.RegExpParser();\nvar complementErrorMessage = \"Complement Sets are not supported for first char optimization\";\nexports.failedOptimizationPrefixMsg = 'Unable to use \"first char\" lexer optimizations:\\n';\nfunction getStartCodes(regExp, ensureOptimizations) {\n    if (ensureOptimizations === void 0) { ensureOptimizations = false; }\n    try {\n        var ast = regExpParser.pattern(regExp.toString());\n        var firstChars = firstChar(ast.value);\n        if (ast.flags.ignoreCase) {\n            firstChars = applyIgnoreCase(firstChars);\n        }\n        return firstChars;\n    }\n    catch (e) {\n        /* istanbul ignore next */\n        // Testing this relies on the regexp-to-ast library having a bug... */\n        // TODO: only the else branch needs to be ignored, try to fix with newer prettier / tsc\n        if (e.message === complementErrorMessage) {\n            if (ensureOptimizations) {\n                utils_1.PRINT_WARNING(\"\" + exports.failedOptimizationPrefixMsg +\n                    (\"\\tUnable to optimize: < \" + regExp.toString() + \" >\\n\") +\n                    \"\\tComplement Sets cannot be automatically optimized.\\n\" +\n                    \"\\tThis will disable the lexer's first char optimizations.\\n\" +\n                    \"\\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.\");\n            }\n        }\n        else {\n            var msgSuffix = \"\";\n            if (ensureOptimizations) {\n                msgSuffix =\n                    \"\\n\\tThis will disable the lexer's first char optimizations.\\n\" +\n                        \"\\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.\";\n            }\n            utils_1.PRINT_ERROR(exports.failedOptimizationPrefixMsg + \"\\n\" +\n                (\"\\tFailed parsing: < \" + regExp.toString() + \" >\\n\") +\n                (\"\\tUsing the regexp-to-ast library version: \" + regexp_to_ast_1.VERSION + \"\\n\") +\n                \"\\tPlease open an issue at: https://github.com/bd82/regexp-to-ast/issues\" +\n                msgSuffix);\n        }\n    }\n    return [];\n}\nexports.getStartCodes = getStartCodes;\nfunction firstChar(ast) {\n    switch (ast.type) {\n        case \"Disjunction\":\n            return utils_1.flatten(utils_1.map(ast.value, firstChar));\n        case \"Alternative\":\n            var startChars_1 = [];\n            var terms = ast.value;\n            for (var i = 0; i < terms.length; i++) {\n                var term = terms[i];\n                if (utils_1.contains([\n                    // A group back reference cannot affect potential starting char.\n                    // because if a back reference is the first production than automatically\n                    // the group being referenced has had to come BEFORE so its codes have already been added\n                    \"GroupBackReference\",\n                    // assertions do not affect potential starting codes\n                    \"Lookahead\",\n                    \"NegativeLookahead\",\n                    \"StartAnchor\",\n                    \"EndAnchor\",\n                    \"WordBoundary\",\n                    \"NonWordBoundary\"\n                ], term.type)) {\n                    continue;\n                }\n                var atom = term;\n                switch (atom.type) {\n                    case \"Character\":\n                        startChars_1.push(atom.value);\n                        break;\n                    case \"Set\":\n                        if (atom.complement === true) {\n                            throw Error(complementErrorMessage);\n                        }\n                        // TODO: this may still be slow when there are many codes\n                        utils_1.forEach(atom.value, function (code) {\n                            if (typeof code === \"number\") {\n                                startChars_1.push(code);\n                            }\n                            else {\n                                //range\n                                var range = code;\n                                for (var rangeCode = range.from; rangeCode <= range.to; rangeCode++) {\n                                    startChars_1.push(rangeCode);\n                                }\n                            }\n                        });\n                        break;\n                    case \"Group\":\n                        var groupCodes = firstChar(atom.value);\n                        utils_1.forEach(groupCodes, function (code) { return startChars_1.push(code); });\n                        break;\n                    /* istanbul ignore next */\n                    default:\n                        throw Error(\"Non Exhaustive Match\");\n                }\n                // reached a mandatory production, no more **start** codes can be found on this alternative\n                var isOptionalQuantifier = atom.quantifier !== undefined &&\n                    atom.quantifier.atLeast === 0;\n                if (\n                // A group may be optional due to empty contents /(?:)/\n                // or if everything inside it is optional /((a)?)/\n                (atom.type === \"Group\" &&\n                    isWholeOptional(atom) === false) ||\n                    // If this term is not a group it may only be optional if it has an optional quantifier\n                    (atom.type !== \"Group\" && isOptionalQuantifier === false)) {\n                    break;\n                }\n            }\n            return startChars_1;\n        /* istanbul ignore next */\n        default:\n            throw Error(\"non exhaustive match!\");\n    }\n}\nexports.firstChar = firstChar;\nfunction applyIgnoreCase(firstChars) {\n    var firstCharsCase = [];\n    utils_1.forEach(firstChars, function (charCode) {\n        firstCharsCase.push(charCode);\n        var char = String.fromCharCode(charCode);\n        /* istanbul ignore else */\n        if (char.toUpperCase() !== char) {\n            firstCharsCase.push(char.toUpperCase().charCodeAt(0));\n        }\n        else if (char.toLowerCase() !== char) {\n            firstCharsCase.push(char.toLowerCase().charCodeAt(0));\n        }\n    });\n    return firstCharsCase;\n}\nexports.applyIgnoreCase = applyIgnoreCase;\nfunction findCode(setNode, targetCharCodes) {\n    return utils_1.find(setNode.value, function (codeOrRange) {\n        if (typeof codeOrRange === \"number\") {\n            return utils_1.contains(targetCharCodes, codeOrRange);\n        }\n        else {\n            // range\n            var range_1 = codeOrRange;\n            return (utils_1.find(targetCharCodes, function (targetCode) {\n                return range_1.from <= targetCode && targetCode <= range_1.to;\n            }) !== undefined);\n        }\n    });\n}\nfunction isWholeOptional(ast) {\n    if (ast.quantifier && ast.quantifier.atLeast === 0) {\n        return true;\n    }\n    if (!ast.value) {\n        return false;\n    }\n    return utils_1.isArray(ast.value)\n        ? utils_1.every(ast.value, isWholeOptional)\n        : isWholeOptional(ast.value);\n}\nvar CharCodeFinder = /** @class */ (function (_super) {\n    __extends(CharCodeFinder, _super);\n    function CharCodeFinder(targetCharCodes) {\n        var _this = _super.call(this) || this;\n        _this.targetCharCodes = targetCharCodes;\n        _this.found = false;\n        return _this;\n    }\n    CharCodeFinder.prototype.visitChildren = function (node) {\n        // switch lookaheads as they do not actually consume any characters thus\n        // finding a charCode at lookahead context does not mean that regexp can actually contain it in a match.\n        switch (node.type) {\n            case \"Lookahead\":\n                this.visitLookahead(node);\n                return;\n            case \"NegativeLookahead\":\n                this.visitNegativeLookahead(node);\n                return;\n        }\n        _super.prototype.visitChildren.call(this, node);\n    };\n    CharCodeFinder.prototype.visitCharacter = function (node) {\n        if (utils_1.contains(this.targetCharCodes, node.value)) {\n            this.found = true;\n        }\n    };\n    CharCodeFinder.prototype.visitSet = function (node) {\n        if (node.complement) {\n            if (findCode(node, this.targetCharCodes) === undefined) {\n                this.found = true;\n            }\n        }\n        else {\n            if (findCode(node, this.targetCharCodes) !== undefined) {\n                this.found = true;\n            }\n        }\n    };\n    return CharCodeFinder;\n}(regexp_to_ast_1.BaseRegExpVisitor));\nfunction canMatchCharCode(charCodes, pattern) {\n    if (pattern instanceof RegExp) {\n        var ast = regExpParser.pattern(pattern.toString());\n        var charCodeFinder = new CharCodeFinder(charCodes);\n        charCodeFinder.visit(ast);\n        return charCodeFinder.found;\n    }\n    else {\n        return (utils_1.find(pattern, function (char) {\n            return utils_1.contains(charCodes, char.charCodeAt(0));\n        }) !== undefined);\n    }\n}\nexports.canMatchCharCode = canMatchCharCode;\n//# sourceMappingURL=reg_exp.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/scan/reg_exp.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/scan/tokens.js":
/*!********************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/scan/tokens.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar lang_extensions_1 = __webpack_require__(/*! ../lang/lang_extensions */ \"./node_modules/chevrotain/lib/src/lang/lang_extensions.js\");\nvar tokens_public_1 = __webpack_require__(/*! ./tokens_public */ \"./node_modules/chevrotain/lib/src/scan/tokens_public.js\");\nfunction tokenStructuredMatcher(tokInstance, tokConstructor) {\n    var instanceType = tokInstance.tokenTypeIdx;\n    if (instanceType === tokConstructor.tokenTypeIdx) {\n        return true;\n    }\n    else {\n        return (tokConstructor.isParent === true &&\n            tokConstructor.categoryMatchesMap[instanceType] === true);\n    }\n}\nexports.tokenStructuredMatcher = tokenStructuredMatcher;\n// Optimized tokenMatcher in case our grammar does not use token categories\n// Being so tiny it is much more likely to be in-lined and this avoid the function call overhead\nfunction tokenStructuredMatcherNoCategories(token, tokType) {\n    return token.tokenTypeIdx === tokType.tokenTypeIdx;\n}\nexports.tokenStructuredMatcherNoCategories = tokenStructuredMatcherNoCategories;\nexports.tokenShortNameIdx = 1;\nexports.tokenIdxToClass = new lang_extensions_1.HashTable();\nfunction augmentTokenTypes(tokenTypes) {\n    // collect the parent Token Types as well.\n    var tokenTypesAndParents = expandCategories(tokenTypes);\n    // add required tokenType and categoryMatches properties\n    assignTokenDefaultProps(tokenTypesAndParents);\n    // fill up the categoryMatches\n    assignCategoriesMapProp(tokenTypesAndParents);\n    assignCategoriesTokensProp(tokenTypesAndParents);\n    utils_1.forEach(tokenTypesAndParents, function (tokType) {\n        tokType.isParent = tokType.categoryMatches.length > 0;\n    });\n}\nexports.augmentTokenTypes = augmentTokenTypes;\nfunction expandCategories(tokenTypes) {\n    var result = utils_1.cloneArr(tokenTypes);\n    var categories = tokenTypes;\n    var searching = true;\n    while (searching) {\n        categories = utils_1.compact(utils_1.flatten(utils_1.map(categories, function (currTokType) { return currTokType.CATEGORIES; })));\n        var newCategories = utils_1.difference(categories, result);\n        result = result.concat(newCategories);\n        if (utils_1.isEmpty(newCategories)) {\n            searching = false;\n        }\n        else {\n            categories = newCategories;\n        }\n    }\n    return result;\n}\nexports.expandCategories = expandCategories;\nfunction assignTokenDefaultProps(tokenTypes) {\n    utils_1.forEach(tokenTypes, function (currTokType) {\n        if (!hasShortKeyProperty(currTokType)) {\n            exports.tokenIdxToClass.put(exports.tokenShortNameIdx, currTokType);\n            currTokType.tokenTypeIdx = exports.tokenShortNameIdx++;\n        }\n        // CATEGORIES? : TokenType | TokenType[]\n        if (hasCategoriesProperty(currTokType) &&\n            !utils_1.isArray(currTokType.CATEGORIES)\n        // &&\n        // !isUndefined(currTokType.CATEGORIES.PATTERN)\n        ) {\n            currTokType.CATEGORIES = [currTokType.CATEGORIES];\n        }\n        if (!hasCategoriesProperty(currTokType)) {\n            currTokType.CATEGORIES = [];\n        }\n        if (!hasExtendingTokensTypesProperty(currTokType)) {\n            currTokType.categoryMatches = [];\n        }\n        if (!hasExtendingTokensTypesMapProperty(currTokType)) {\n            currTokType.categoryMatchesMap = {};\n        }\n        if (!hasTokenNameProperty(currTokType)) {\n            // saved for fast access during CST building.\n            currTokType.tokenName = tokens_public_1.tokenName(currTokType);\n        }\n    });\n}\nexports.assignTokenDefaultProps = assignTokenDefaultProps;\nfunction assignCategoriesTokensProp(tokenTypes) {\n    utils_1.forEach(tokenTypes, function (currTokType) {\n        // avoid duplications\n        currTokType.categoryMatches = [];\n        utils_1.forEach(currTokType.categoryMatchesMap, function (val, key) {\n            currTokType.categoryMatches.push(exports.tokenIdxToClass.get(key).tokenTypeIdx);\n        });\n    });\n}\nexports.assignCategoriesTokensProp = assignCategoriesTokensProp;\nfunction assignCategoriesMapProp(tokenTypes) {\n    utils_1.forEach(tokenTypes, function (currTokType) {\n        singleAssignCategoriesToksMap([], currTokType);\n    });\n}\nexports.assignCategoriesMapProp = assignCategoriesMapProp;\nfunction singleAssignCategoriesToksMap(path, nextNode) {\n    utils_1.forEach(path, function (pathNode) {\n        nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;\n    });\n    utils_1.forEach(nextNode.CATEGORIES, function (nextCategory) {\n        var newPath = path.concat(nextNode);\n        // avoids infinite loops due to cyclic categories.\n        if (!utils_1.contains(newPath, nextCategory)) {\n            singleAssignCategoriesToksMap(newPath, nextCategory);\n        }\n    });\n}\nexports.singleAssignCategoriesToksMap = singleAssignCategoriesToksMap;\nfunction hasShortKeyProperty(tokType) {\n    return utils_1.has(tokType, \"tokenTypeIdx\");\n}\nexports.hasShortKeyProperty = hasShortKeyProperty;\nfunction hasCategoriesProperty(tokType) {\n    return utils_1.has(tokType, \"CATEGORIES\");\n}\nexports.hasCategoriesProperty = hasCategoriesProperty;\nfunction hasExtendingTokensTypesProperty(tokType) {\n    return utils_1.has(tokType, \"categoryMatches\");\n}\nexports.hasExtendingTokensTypesProperty = hasExtendingTokensTypesProperty;\nfunction hasExtendingTokensTypesMapProperty(tokType) {\n    return utils_1.has(tokType, \"categoryMatchesMap\");\n}\nexports.hasExtendingTokensTypesMapProperty = hasExtendingTokensTypesMapProperty;\nfunction hasTokenNameProperty(tokType) {\n    return utils_1.has(tokType, \"tokenName\");\n}\nexports.hasTokenNameProperty = hasTokenNameProperty;\nfunction isTokenType(tokType) {\n    return utils_1.has(tokType, \"tokenTypeIdx\");\n}\nexports.isTokenType = isTokenType;\n//# sourceMappingURL=tokens.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/scan/tokens.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/scan/tokens_public.js":
/*!***************************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/scan/tokens_public.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../utils/utils */ \"./node_modules/chevrotain/lib/src/utils/utils.js\");\nvar lang_extensions_1 = __webpack_require__(/*! ../lang/lang_extensions */ \"./node_modules/chevrotain/lib/src/lang/lang_extensions.js\");\nvar lexer_public_1 = __webpack_require__(/*! ./lexer_public */ \"./node_modules/chevrotain/lib/src/scan/lexer_public.js\");\nvar tokens_1 = __webpack_require__(/*! ./tokens */ \"./node_modules/chevrotain/lib/src/scan/tokens.js\");\nfunction tokenLabel(clazz) {\n    if (hasTokenLabel(clazz)) {\n        return clazz.LABEL;\n    }\n    else {\n        return tokenName(clazz);\n    }\n}\nexports.tokenLabel = tokenLabel;\nfunction hasTokenLabel(obj) {\n    return utils_1.isString(obj.LABEL) && obj.LABEL !== \"\";\n}\nexports.hasTokenLabel = hasTokenLabel;\nfunction tokenName(obj) {\n    // The tokenName property is needed under some old versions of node.js (0.10/0.12)\n    // where the Function.prototype.name property is not defined as a 'configurable' property\n    // enable producing readable error messages.\n    /* istanbul ignore if -> will only run in old versions of node.js */\n    if (utils_1.isObject(obj) &&\n        obj.hasOwnProperty(\"tokenName\") &&\n        utils_1.isString(obj.tokenName)) {\n        return obj.tokenName;\n    }\n    else {\n        return lang_extensions_1.functionName(obj);\n    }\n}\nexports.tokenName = tokenName;\nvar PARENT = \"parent\";\nvar CATEGORIES = \"categories\";\nvar LABEL = \"label\";\nvar GROUP = \"group\";\nvar PUSH_MODE = \"push_mode\";\nvar POP_MODE = \"pop_mode\";\nvar LONGER_ALT = \"longer_alt\";\nvar LINE_BREAKS = \"line_breaks\";\nvar START_CHARS_HINT = \"start_chars_hint\";\nfunction createToken(config) {\n    return createTokenInternal(config);\n}\nexports.createToken = createToken;\nfunction createTokenInternal(config) {\n    var tokenName = config.name;\n    var pattern = config.pattern;\n    var tokenType = {};\n    // can be overwritten according to:\n    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/\n    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname\n    /* istanbul ignore if -> will only run in old versions of node.js */\n    if (!lang_extensions_1.defineNameProp(tokenType, tokenName)) {\n        // hack to save the tokenName in situations where the constructor's name property cannot be reconfigured\n        tokenType.tokenName = tokenName;\n    }\n    if (!utils_1.isUndefined(pattern)) {\n        tokenType.PATTERN = pattern;\n    }\n    if (utils_1.has(config, PARENT)) {\n        throw \"The parent property is no longer supported.\\n\" +\n            \"See: https://github.com/SAP/chevrotain/issues/564#issuecomment-349062346 for details.\";\n    }\n    if (utils_1.has(config, CATEGORIES)) {\n        tokenType.CATEGORIES = config[CATEGORIES];\n    }\n    tokens_1.augmentTokenTypes([tokenType]);\n    if (utils_1.has(config, LABEL)) {\n        tokenType.LABEL = config[LABEL];\n    }\n    if (utils_1.has(config, GROUP)) {\n        tokenType.GROUP = config[GROUP];\n    }\n    if (utils_1.has(config, POP_MODE)) {\n        tokenType.POP_MODE = config[POP_MODE];\n    }\n    if (utils_1.has(config, PUSH_MODE)) {\n        tokenType.PUSH_MODE = config[PUSH_MODE];\n    }\n    if (utils_1.has(config, LONGER_ALT)) {\n        tokenType.LONGER_ALT = config[LONGER_ALT];\n    }\n    if (utils_1.has(config, LINE_BREAKS)) {\n        tokenType.LINE_BREAKS = config[LINE_BREAKS];\n    }\n    if (utils_1.has(config, START_CHARS_HINT)) {\n        tokenType.START_CHARS_HINT = config[START_CHARS_HINT];\n    }\n    return tokenType;\n}\nexports.EOF = createToken({ name: \"EOF\", pattern: lexer_public_1.Lexer.NA });\ntokens_1.augmentTokenTypes([exports.EOF]);\nfunction createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {\n    return {\n        image: image,\n        startOffset: startOffset,\n        endOffset: endOffset,\n        startLine: startLine,\n        endLine: endLine,\n        startColumn: startColumn,\n        endColumn: endColumn,\n        tokenTypeIdx: tokType.tokenTypeIdx,\n        tokenType: tokType\n    };\n}\nexports.createTokenInstance = createTokenInstance;\nfunction tokenMatcher(token, tokType) {\n    return tokens_1.tokenStructuredMatcher(token, tokType);\n}\nexports.tokenMatcher = tokenMatcher;\n//# sourceMappingURL=tokens_public.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/scan/tokens_public.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/text/range.js":
/*!*******************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/text/range.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Range = /** @class */ (function () {\n    function Range(start, end) {\n        this.start = start;\n        this.end = end;\n        if (!isValidRange(start, end)) {\n            throw new Error(\"INVALID RANGE\");\n        }\n    }\n    Range.prototype.contains = function (num) {\n        return this.start <= num && this.end >= num;\n    };\n    Range.prototype.containsRange = function (other) {\n        return this.start <= other.start && this.end >= other.end;\n    };\n    Range.prototype.isContainedInRange = function (other) {\n        return other.containsRange(this);\n    };\n    Range.prototype.strictlyContainsRange = function (other) {\n        return this.start < other.start && this.end > other.end;\n    };\n    Range.prototype.isStrictlyContainedInRange = function (other) {\n        return other.strictlyContainsRange(this);\n    };\n    return Range;\n}());\nexports.Range = Range;\nfunction isValidRange(start, end) {\n    return !(start < 0 || end < start);\n}\nexports.isValidRange = isValidRange;\n//# sourceMappingURL=range.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/text/range.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/utils/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/utils/utils.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n Utils using lodash style API. (not necessarily 100% compliant) for functional and other utils.\n These utils should replace usage of lodash in the production code base. not because they are any better...\n but for the purpose of being a dependency free library.\n\n The hotspots in the code are already written in imperative style for performance reasons.\n so writing several dozen utils which may be slower than the original lodash, does not matter as much\n considering they will not be invoked in hotspots...\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction isEmpty(arr) {\n    return arr && arr.length === 0;\n}\nexports.isEmpty = isEmpty;\nfunction keys(obj) {\n    if (obj === undefined || obj === null) {\n        return [];\n    }\n    return Object.keys(obj);\n}\nexports.keys = keys;\nfunction values(obj) {\n    var vals = [];\n    var keys = Object.keys(obj);\n    for (var i = 0; i < keys.length; i++) {\n        vals.push(obj[keys[i]]);\n    }\n    return vals;\n}\nexports.values = values;\nfunction mapValues(obj, callback) {\n    var result = [];\n    var objKeys = keys(obj);\n    for (var idx = 0; idx < objKeys.length; idx++) {\n        var currKey = objKeys[idx];\n        result.push(callback.call(null, obj[currKey], currKey));\n    }\n    return result;\n}\nexports.mapValues = mapValues;\nfunction map(arr, callback) {\n    var result = [];\n    for (var idx = 0; idx < arr.length; idx++) {\n        result.push(callback.call(null, arr[idx], idx));\n    }\n    return result;\n}\nexports.map = map;\nfunction flatten(arr) {\n    var result = [];\n    for (var idx = 0; idx < arr.length; idx++) {\n        var currItem = arr[idx];\n        if (Array.isArray(currItem)) {\n            result = result.concat(flatten(currItem));\n        }\n        else {\n            result.push(currItem);\n        }\n    }\n    return result;\n}\nexports.flatten = flatten;\nfunction first(arr) {\n    return isEmpty(arr) ? undefined : arr[0];\n}\nexports.first = first;\nfunction last(arr) {\n    var len = arr && arr.length;\n    return len ? arr[len - 1] : undefined;\n}\nexports.last = last;\nfunction forEach(collection, iteratorCallback) {\n    /* istanbul ignore else */\n    if (Array.isArray(collection)) {\n        for (var i = 0; i < collection.length; i++) {\n            iteratorCallback.call(null, collection[i], i);\n        }\n    }\n    else if (isObject(collection)) {\n        var colKeys = keys(collection);\n        for (var i = 0; i < colKeys.length; i++) {\n            var key = colKeys[i];\n            var value = collection[key];\n            iteratorCallback.call(null, value, key);\n        }\n    }\n    else {\n        throw Error(\"non exhaustive match\");\n    }\n}\nexports.forEach = forEach;\nfunction isString(item) {\n    return typeof item === \"string\";\n}\nexports.isString = isString;\nfunction isUndefined(item) {\n    return item === undefined;\n}\nexports.isUndefined = isUndefined;\nfunction isFunction(item) {\n    return item instanceof Function;\n}\nexports.isFunction = isFunction;\nfunction drop(arr, howMuch) {\n    if (howMuch === void 0) { howMuch = 1; }\n    return arr.slice(howMuch, arr.length);\n}\nexports.drop = drop;\nfunction dropRight(arr, howMuch) {\n    if (howMuch === void 0) { howMuch = 1; }\n    return arr.slice(0, arr.length - howMuch);\n}\nexports.dropRight = dropRight;\nfunction filter(arr, predicate) {\n    var result = [];\n    if (Array.isArray(arr)) {\n        for (var i = 0; i < arr.length; i++) {\n            var item = arr[i];\n            if (predicate.call(null, item)) {\n                result.push(item);\n            }\n        }\n    }\n    return result;\n}\nexports.filter = filter;\nfunction reject(arr, predicate) {\n    return filter(arr, function (item) { return !predicate(item); });\n}\nexports.reject = reject;\nfunction pick(obj, predicate) {\n    var keys = Object.keys(obj);\n    var result = {};\n    for (var i = 0; i < keys.length; i++) {\n        var currKey = keys[i];\n        var currItem = obj[currKey];\n        if (predicate(currItem)) {\n            result[currKey] = currItem;\n        }\n    }\n    return result;\n}\nexports.pick = pick;\nfunction has(obj, prop) {\n    if (isObject(obj)) {\n        return obj.hasOwnProperty(prop);\n    }\n    return false;\n}\nexports.has = has;\nfunction contains(arr, item) {\n    return find(arr, function (currItem) { return currItem === item; }) !== undefined ? true : false;\n}\nexports.contains = contains;\n/**\n * shallow clone\n */\nfunction cloneArr(arr) {\n    var newArr = [];\n    for (var i = 0; i < arr.length; i++) {\n        newArr.push(arr[i]);\n    }\n    return newArr;\n}\nexports.cloneArr = cloneArr;\n/**\n * shallow clone\n */\nfunction cloneObj(obj) {\n    var clonedObj = {};\n    for (var key in obj) {\n        /* istanbul ignore else */\n        if (Object.prototype.hasOwnProperty.call(obj, key)) {\n            clonedObj[key] = obj[key];\n        }\n    }\n    return clonedObj;\n}\nexports.cloneObj = cloneObj;\nfunction find(arr, predicate) {\n    for (var i = 0; i < arr.length; i++) {\n        var item = arr[i];\n        if (predicate.call(null, item)) {\n            return item;\n        }\n    }\n    return undefined;\n}\nexports.find = find;\nfunction findAll(arr, predicate) {\n    var found = [];\n    for (var i = 0; i < arr.length; i++) {\n        var item = arr[i];\n        if (predicate.call(null, item)) {\n            found.push(item);\n        }\n    }\n    return found;\n}\nexports.findAll = findAll;\nfunction reduce(arrOrObj, iterator, initial) {\n    var isArr = Array.isArray(arrOrObj);\n    var vals = isArr ? arrOrObj : values(arrOrObj);\n    var objKeys = isArr ? [] : keys(arrOrObj);\n    var accumulator = initial;\n    for (var i = 0; i < vals.length; i++) {\n        accumulator = iterator.call(null, accumulator, vals[i], isArr ? i : objKeys[i]);\n    }\n    return accumulator;\n}\nexports.reduce = reduce;\nfunction compact(arr) {\n    return reject(arr, function (item) { return item === null || item === undefined; });\n}\nexports.compact = compact;\nfunction uniq(arr, identity) {\n    if (identity === void 0) { identity = function (item) { return item; }; }\n    var identities = [];\n    return reduce(arr, function (result, currItem) {\n        var currIdentity = identity(currItem);\n        if (contains(identities, currIdentity)) {\n            return result;\n        }\n        else {\n            identities.push(currIdentity);\n            return result.concat(currItem);\n        }\n    }, []);\n}\nexports.uniq = uniq;\nfunction partial(func) {\n    var restArgs = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        restArgs[_i - 1] = arguments[_i];\n    }\n    var firstArg = [null];\n    var allArgs = firstArg.concat(restArgs);\n    return Function.bind.apply(func, allArgs);\n}\nexports.partial = partial;\nfunction isArray(obj) {\n    return Array.isArray(obj);\n}\nexports.isArray = isArray;\nfunction isRegExp(obj) {\n    return obj instanceof RegExp;\n}\nexports.isRegExp = isRegExp;\nfunction isObject(obj) {\n    return obj instanceof Object;\n}\nexports.isObject = isObject;\nfunction every(arr, predicate) {\n    for (var i = 0; i < arr.length; i++) {\n        if (!predicate(arr[i], i)) {\n            return false;\n        }\n    }\n    return true;\n}\nexports.every = every;\nfunction difference(arr, values) {\n    return reject(arr, function (item) { return contains(values, item); });\n}\nexports.difference = difference;\nfunction some(arr, predicate) {\n    for (var i = 0; i < arr.length; i++) {\n        if (predicate(arr[i])) {\n            return true;\n        }\n    }\n    return false;\n}\nexports.some = some;\nfunction indexOf(arr, value) {\n    for (var i = 0; i < arr.length; i++) {\n        if (arr[i] === value) {\n            return i;\n        }\n    }\n    return -1;\n}\nexports.indexOf = indexOf;\nfunction sortBy(arr, orderFunc) {\n    var result = cloneArr(arr);\n    result.sort(function (a, b) { return orderFunc(a) - orderFunc(b); });\n    return result;\n}\nexports.sortBy = sortBy;\nfunction zipObject(keys, values) {\n    if (keys.length !== values.length) {\n        throw Error(\"can't zipObject with different number of keys and values!\");\n    }\n    var result = {};\n    for (var i = 0; i < keys.length; i++) {\n        result[keys[i]] = values[i];\n    }\n    return result;\n}\nexports.zipObject = zipObject;\n/**\n * mutates! (and returns) target\n */\nfunction assign(target) {\n    var sources = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        sources[_i - 1] = arguments[_i];\n    }\n    for (var i = 0; i < sources.length; i++) {\n        var curSource = sources[i];\n        var currSourceKeys = keys(curSource);\n        for (var j = 0; j < currSourceKeys.length; j++) {\n            var currKey = currSourceKeys[j];\n            target[currKey] = curSource[currKey];\n        }\n    }\n    return target;\n}\nexports.assign = assign;\n/**\n * mutates! (and returns) target\n */\nfunction assignNoOverwrite(target) {\n    var sources = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        sources[_i - 1] = arguments[_i];\n    }\n    for (var i = 0; i < sources.length; i++) {\n        var curSource = sources[i];\n        if (isUndefined(curSource)) {\n            continue;\n        }\n        var currSourceKeys = keys(curSource);\n        for (var j = 0; j < currSourceKeys.length; j++) {\n            var currKey = currSourceKeys[j];\n            if (!has(target, currKey)) {\n                target[currKey] = curSource[currKey];\n            }\n        }\n    }\n    return target;\n}\nexports.assignNoOverwrite = assignNoOverwrite;\nfunction defaults() {\n    var sources = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        sources[_i] = arguments[_i];\n    }\n    return assignNoOverwrite.apply(null, [{}].concat(sources));\n}\nexports.defaults = defaults;\nfunction groupBy(arr, groupKeyFunc) {\n    var result = {};\n    forEach(arr, function (item) {\n        var currGroupKey = groupKeyFunc(item);\n        var currGroupArr = result[currGroupKey];\n        if (currGroupArr) {\n            currGroupArr.push(item);\n        }\n        else {\n            result[currGroupKey] = [item];\n        }\n    });\n    return result;\n}\nexports.groupBy = groupBy;\n/**\n * Merge obj2 into obj1.\n * Will overwrite existing properties with the same name\n */\nfunction merge(obj1, obj2) {\n    var result = cloneObj(obj1);\n    var keys2 = keys(obj2);\n    for (var i = 0; i < keys2.length; i++) {\n        var key = keys2[i];\n        var value = obj2[key];\n        result[key] = value;\n    }\n    return result;\n}\nexports.merge = merge;\nfunction NOOP() { }\nexports.NOOP = NOOP;\nfunction IDENTITY(item) {\n    return item;\n}\nexports.IDENTITY = IDENTITY;\n/**\n * Will return a new packed array with same values.\n */\nfunction packArray(holeyArr) {\n    var result = [];\n    for (var i = 0; i < holeyArr.length; i++) {\n        var orgValue = holeyArr[i];\n        result.push(orgValue !== undefined ? orgValue : undefined);\n    }\n    return result;\n}\nexports.packArray = packArray;\nfunction PRINT_ERROR(msg) {\n    /* istanbul ignore else - can't override global.console in node.js */\n    if (console && console.error) {\n        console.error(\"Error: \" + msg);\n    }\n}\nexports.PRINT_ERROR = PRINT_ERROR;\nfunction PRINT_WARNING(msg) {\n    /* istanbul ignore else - can't override global.console in node.js*/\n    if (console && console.warn) {\n        // TODO: modify docs accordingly\n        console.warn(\"Warning: \" + msg);\n    }\n}\nexports.PRINT_WARNING = PRINT_WARNING;\nfunction isES2015MapSupported() {\n    return typeof Map === \"function\";\n}\nexports.isES2015MapSupported = isES2015MapSupported;\nfunction applyMixins(derivedCtor, baseCtors) {\n    baseCtors.forEach(function (baseCtor) {\n        var baseProto = baseCtor.prototype;\n        Object.getOwnPropertyNames(baseProto).forEach(function (propName) {\n            if (propName === \"constructor\") {\n                return;\n            }\n            var basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);\n            // Handle Accessors\n            if (basePropDescriptor &&\n                (basePropDescriptor.get || basePropDescriptor.set)) {\n                Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);\n            }\n            else {\n                derivedCtor.prototype[propName] = baseCtor.prototype[propName];\n            }\n        });\n    });\n}\nexports.applyMixins = applyMixins;\n// base on: https://github.com/petkaantonov/bluebird/blob/b97c0d2d487e8c5076e8bd897e0dcd4622d31846/src/util.js#L201-L216\nfunction toFastProperties(toBecomeFast) {\n    function FakeConstructor() { }\n    // If our object is used as a constructor it would receive\n    FakeConstructor.prototype = toBecomeFast;\n    var fakeInstance = new FakeConstructor();\n    function fakeAccess() {\n        return typeof fakeInstance.bar;\n    }\n    // help V8 understand this is a \"real\" prototype by actually using\n    // the fake instance.\n    fakeAccess();\n    fakeAccess();\n    return toBecomeFast;\n    // Eval prevents optimization of this method (even though this is dead code)\n    /* istanbul ignore next */\n    // tslint:disable-next-line\n    eval(toBecomeFast);\n}\nexports.toFastProperties = toFastProperties;\n//# sourceMappingURL=utils.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/utils/utils.js?");

/***/ }),

/***/ "./node_modules/chevrotain/lib/src/version.js":
/*!****************************************************!*\
  !*** ./node_modules/chevrotain/lib/src/version.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// needs a separate module as this is required inside chevrotain productive code\n// and also in the entry point for webpack(api.ts).\n// A separate file avoids cyclic dependencies and webpack errors.\nexports.VERSION = \"4.3.3\";\n//# sourceMappingURL=version.js.map\n\n//# sourceURL=webpack:///./node_modules/chevrotain/lib/src/version.js?");

/***/ }),

/***/ "./node_modules/regexp-to-ast/lib/regexp-to-ast.js":
/*!*********************************************************!*\
  !*** ./node_modules/regexp-to-ast/lib/regexp-to-ast.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function(root, factory) {\n    // istanbul ignore next\n    if (true) {\n        // istanbul ignore next\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n    } else {}\n})(\n    typeof self !== \"undefined\"\n        ? // istanbul ignore next\n          self\n        : this,\n    function() {\n        // references\n        // https://hackernoon.com/the-madness-of-parsing-real-world-javascript-regexps-d9ee336df983\n        // https://www.ecma-international.org/ecma-262/8.0/index.html#prod-Pattern\n        function RegExpParser() {}\n\n        RegExpParser.prototype.saveState = function() {\n            return {\n                idx: this.idx,\n                input: this.input,\n                groupIdx: this.groupIdx\n            }\n        }\n\n        RegExpParser.prototype.restoreState = function(newState) {\n            this.idx = newState.idx\n            this.input = newState.input\n            this.groupIdx = newState.groupIdx\n        }\n\n        RegExpParser.prototype.pattern = function(input) {\n            // parser state\n            this.idx = 0\n            this.input = input\n            this.groupIdx = 0\n\n            this.consumeChar(\"/\")\n            var value = this.disjunction()\n            this.consumeChar(\"/\")\n\n            var flags = {\n                type: \"Flags\",\n                global: false,\n                ignoreCase: false,\n                multiLine: false,\n                unicode: false,\n                sticky: false\n            }\n\n            while (this.isRegExpFlag()) {\n                switch (this.popChar()) {\n                    case \"g\":\n                        addFlag(flags, \"global\")\n                        break\n                    case \"i\":\n                        addFlag(flags, \"ignoreCase\")\n                        break\n                    case \"m\":\n                        addFlag(flags, \"multiLine\")\n                        break\n                    case \"u\":\n                        addFlag(flags, \"unicode\")\n                        break\n                    case \"y\":\n                        addFlag(flags, \"sticky\")\n                        break\n                }\n            }\n\n            if (this.idx !== this.input.length) {\n                throw Error(\n                    \"Redundant input: \" + this.input.substring(this.idx)\n                )\n            }\n            return { type: \"Pattern\", flags: flags, value: value }\n        }\n\n        RegExpParser.prototype.disjunction = function() {\n            var alts = []\n            alts.push(this.alternative())\n\n            while (this.peekChar() === \"|\") {\n                this.consumeChar(\"|\")\n                alts.push(this.alternative())\n            }\n\n            return { type: \"Disjunction\", value: alts }\n        }\n\n        RegExpParser.prototype.alternative = function() {\n            var terms = []\n\n            while (this.isTerm()) {\n                terms.push(this.term())\n            }\n\n            return { type: \"Alternative\", value: terms }\n        }\n\n        RegExpParser.prototype.term = function() {\n            if (this.isAssertion()) {\n                return this.assertion()\n            } else {\n                return this.atom()\n            }\n        }\n\n        RegExpParser.prototype.assertion = function() {\n            switch (this.popChar()) {\n                case \"^\":\n                    return { type: \"StartAnchor\" }\n                case \"$\":\n                    return { type: \"EndAnchor\" }\n                // '\\b' or '\\B'\n                case \"\\\\\":\n                    switch (this.popChar()) {\n                        case \"b\":\n                            return { type: \"WordBoundary\" }\n                        case \"B\":\n                            return { type: \"NonWordBoundary\" }\n                    }\n                    // istanbul ignore next\n                    throw Error(\"Invalid Assertion Escape\")\n                // '(?=' or '(?!'\n                case \"(\":\n                    this.consumeChar(\"?\")\n\n                    var type\n                    switch (this.popChar()) {\n                        case \"=\":\n                            type = \"Lookahead\"\n                            break\n                        case \"!\":\n                            type = \"NegativeLookahead\"\n                            break\n                    }\n                    ASSERT_EXISTS(type)\n\n                    var disjunction = this.disjunction()\n\n                    this.consumeChar(\")\")\n\n                    return { type: type, value: disjunction }\n            }\n            // istanbul ignore next\n            ASSERT_NEVER_REACH_HERE()\n        }\n\n        RegExpParser.prototype.quantifier = function(isBacktracking) {\n            var range\n            switch (this.popChar()) {\n                case \"*\":\n                    range = {\n                        atLeast: 0,\n                        atMost: Infinity\n                    }\n                    break\n                case \"+\":\n                    range = {\n                        atLeast: 1,\n                        atMost: Infinity\n                    }\n                    break\n                case \"?\":\n                    range = {\n                        atLeast: 0,\n                        atMost: 1\n                    }\n                    break\n                case \"{\":\n                    var atLeast = this.integerIncludingZero()\n                    switch (this.popChar()) {\n                        case \"}\":\n                            range = {\n                                atLeast: atLeast,\n                                atMost: atLeast\n                            }\n                            break\n                        case \",\":\n                            var atMost\n                            if (this.isDigit()) {\n                                atMost = this.integerIncludingZero()\n                                range = {\n                                    atLeast: atLeast,\n                                    atMost: atMost\n                                }\n                            } else {\n                                range = {\n                                    atLeast: atLeast,\n                                    atMost: Infinity\n                                }\n                            }\n                            this.consumeChar(\"}\")\n                            break\n                    }\n                    // throwing exceptions from \"ASSERT_EXISTS\" during backtracking\n                    // causes severe performance degradations\n                    if (isBacktracking === true && range === undefined) {\n                        return undefined\n                    }\n                    ASSERT_EXISTS(range)\n                    break\n            }\n\n            // throwing exceptions from \"ASSERT_EXISTS\" during backtracking\n            // causes severe performance degradations\n            if (isBacktracking === true && range === undefined) {\n                return undefined\n            }\n\n            ASSERT_EXISTS(range)\n\n            if (this.peekChar(0) === \"?\") {\n                this.consumeChar(\"?\")\n                range.greedy = false\n            } else {\n                range.greedy = true\n            }\n\n            range.type = \"Quantifier\"\n            return range\n        }\n\n        RegExpParser.prototype.atom = function() {\n            var atom\n            switch (this.peekChar()) {\n                case \".\":\n                    atom = this.dotAll()\n                    break\n                case \"\\\\\":\n                    atom = this.atomEscape()\n                    break\n                case \"[\":\n                    atom = this.characterClass()\n                    break\n                case \"(\":\n                    atom = this.group()\n                    break\n            }\n\n            if (atom === undefined && this.isPatternCharacter()) {\n                atom = this.patternCharacter()\n            }\n\n            ASSERT_EXISTS(atom)\n\n            if (this.isQuantifier()) {\n                atom.quantifier = this.quantifier()\n            }\n\n            return atom\n        }\n\n        RegExpParser.prototype.dotAll = function() {\n            this.consumeChar(\".\")\n            return {\n                type: \"Set\",\n                complement: true,\n                value: [cc(\"\\n\"), cc(\"\\r\"), cc(\"\\u2028\"), cc(\"\\u2029\")]\n            }\n        }\n\n        RegExpParser.prototype.atomEscape = function() {\n            this.consumeChar(\"\\\\\")\n\n            switch (this.peekChar()) {\n                case \"1\":\n                case \"2\":\n                case \"3\":\n                case \"4\":\n                case \"5\":\n                case \"6\":\n                case \"7\":\n                case \"8\":\n                case \"9\":\n                    return this.decimalEscapeAtom()\n                case \"d\":\n                case \"D\":\n                case \"s\":\n                case \"S\":\n                case \"w\":\n                case \"W\":\n                    return this.characterClassEscape()\n                case \"f\":\n                case \"n\":\n                case \"r\":\n                case \"t\":\n                case \"v\":\n                    return this.controlEscapeAtom()\n                case \"c\":\n                    return this.controlLetterEscapeAtom()\n                case \"0\":\n                    return this.nulCharacterAtom()\n                case \"x\":\n                    return this.hexEscapeSequenceAtom()\n                case \"u\":\n                    return this.regExpUnicodeEscapeSequenceAtom()\n                default:\n                    return this.identityEscapeAtom()\n            }\n        }\n\n        RegExpParser.prototype.decimalEscapeAtom = function() {\n            var value = this.positiveInteger()\n\n            return { type: \"GroupBackReference\", value: value }\n        }\n\n        RegExpParser.prototype.characterClassEscape = function() {\n            var set\n            var complement = false\n            switch (this.popChar()) {\n                case \"d\":\n                    set = digitsCharCodes\n                    break\n                case \"D\":\n                    set = digitsCharCodes\n                    complement = true\n                    break\n                case \"s\":\n                    set = whitespaceCodes\n                    break\n                case \"S\":\n                    set = whitespaceCodes\n                    complement = true\n                    break\n                case \"w\":\n                    set = wordCharCodes\n                    break\n                case \"W\":\n                    set = wordCharCodes\n                    complement = true\n                    break\n            }\n\n            ASSERT_EXISTS(set)\n\n            return { type: \"Set\", value: set, complement: complement }\n        }\n\n        RegExpParser.prototype.controlEscapeAtom = function() {\n            var escapeCode\n            switch (this.popChar()) {\n                case \"f\":\n                    escapeCode = cc(\"\\f\")\n                    break\n                case \"n\":\n                    escapeCode = cc(\"\\n\")\n                    break\n                case \"r\":\n                    escapeCode = cc(\"\\r\")\n                    break\n                case \"t\":\n                    escapeCode = cc(\"\\t\")\n                    break\n                case \"v\":\n                    escapeCode = cc(\"\\v\")\n                    break\n            }\n            ASSERT_EXISTS(escapeCode)\n\n            return { type: \"Character\", value: escapeCode }\n        }\n\n        RegExpParser.prototype.controlLetterEscapeAtom = function() {\n            this.consumeChar(\"c\")\n            var letter = this.popChar()\n            if (/[a-zA-Z]/.test(letter) === false) {\n                throw Error(\"Invalid \")\n            }\n\n            var letterCode = letter.toUpperCase().charCodeAt(0) - 64\n            return { type: \"Character\", value: letterCode }\n        }\n\n        RegExpParser.prototype.nulCharacterAtom = function() {\n            // TODO implement '[lookahead ∉ DecimalDigit]'\n            // TODO: for the deprecated octal escape sequence\n            this.consumeChar(\"0\")\n            return { type: \"Character\", value: cc(\"\\0\") }\n        }\n\n        RegExpParser.prototype.hexEscapeSequenceAtom = function() {\n            this.consumeChar(\"x\")\n            return this.parseHexDigits(2)\n        }\n\n        RegExpParser.prototype.regExpUnicodeEscapeSequenceAtom = function() {\n            this.consumeChar(\"u\")\n            return this.parseHexDigits(4)\n        }\n\n        RegExpParser.prototype.identityEscapeAtom = function() {\n            // TODO: implement \"SourceCharacter but not UnicodeIDContinue\"\n            // // http://unicode.org/reports/tr31/#Specific_Character_Adjustments\n            var escapedChar = this.popChar()\n            return { type: \"Character\", value: cc(escapedChar) }\n        }\n\n        RegExpParser.prototype.classPatternCharacterAtom = function() {\n            switch (this.peekChar()) {\n                // istanbul ignore next\n                case \"\\n\":\n                // istanbul ignore next\n                case \"\\r\":\n                // istanbul ignore next\n                case \"\\u2028\":\n                // istanbul ignore next\n                case \"\\u2029\":\n                // istanbul ignore next\n                case \"\\\\\":\n                // istanbul ignore next\n                case \"]\":\n                    throw Error(\"TBD\")\n                default:\n                    var nextChar = this.popChar()\n                    return { type: \"Character\", value: cc(nextChar) }\n            }\n        }\n\n        RegExpParser.prototype.characterClass = function() {\n            var set = []\n            var complement = false\n            this.consumeChar(\"[\")\n            if (this.peekChar(0) === \"^\") {\n                this.consumeChar(\"^\")\n                complement = true\n            }\n\n            while (this.isClassAtom()) {\n                var from = this.classAtom()\n                var isFromSingleChar = from.type === \"Character\"\n                if (isFromSingleChar && this.isRangeDash()) {\n                    this.consumeChar(\"-\")\n                    var to = this.classAtom()\n                    var isToSingleChar = to.type === \"Character\"\n\n                    // a range can only be used when both sides are single characters\n                    if (isToSingleChar) {\n                        if (to.value < from.value) {\n                            throw Error(\"Range out of order in character class\")\n                        }\n                        set.push({ from: from.value, to: to.value })\n                    } else {\n                        // literal dash\n                        insertToSet(from.value, set)\n                        set.push(cc(\"-\"))\n                        insertToSet(to.value, set)\n                    }\n                } else {\n                    insertToSet(from.value, set)\n                }\n            }\n\n            this.consumeChar(\"]\")\n\n            return { type: \"Set\", complement: complement, value: set }\n        }\n\n        RegExpParser.prototype.classAtom = function() {\n            switch (this.peekChar()) {\n                // istanbul ignore next\n                case \"]\":\n                // istanbul ignore next\n                case \"\\n\":\n                // istanbul ignore next\n                case \"\\r\":\n                // istanbul ignore next\n                case \"\\u2028\":\n                // istanbul ignore next\n                case \"\\u2029\":\n                    throw Error(\"TBD\")\n                case \"\\\\\":\n                    return this.classEscape()\n                default:\n                    return this.classPatternCharacterAtom()\n            }\n        }\n\n        RegExpParser.prototype.classEscape = function() {\n            this.consumeChar(\"\\\\\")\n            switch (this.peekChar()) {\n                // Matches a backspace.\n                // (Not to be confused with \\b word boundary outside characterClass)\n                case \"b\":\n                    this.consumeChar(\"b\")\n                    return { type: \"Character\", value: cc(\"\\u0008\") }\n                case \"d\":\n                case \"D\":\n                case \"s\":\n                case \"S\":\n                case \"w\":\n                case \"W\":\n                    return this.characterClassEscape()\n                case \"f\":\n                case \"n\":\n                case \"r\":\n                case \"t\":\n                case \"v\":\n                    return this.controlEscapeAtom()\n                case \"c\":\n                    return this.controlLetterEscapeAtom()\n                case \"0\":\n                    return this.nulCharacterAtom()\n                case \"x\":\n                    return this.hexEscapeSequenceAtom()\n                case \"u\":\n                    return this.regExpUnicodeEscapeSequenceAtom()\n                default:\n                    return this.identityEscapeAtom()\n            }\n        }\n\n        RegExpParser.prototype.group = function() {\n            var capturing = true\n            this.consumeChar(\"(\")\n            switch (this.peekChar(0)) {\n                case \"?\":\n                    this.consumeChar(\"?\")\n                    this.consumeChar(\":\")\n                    capturing = false\n                    break\n                default:\n                    this.groupIdx++\n                    break\n            }\n            var value = this.disjunction()\n            this.consumeChar(\")\")\n\n            var groupAst = {\n                type: \"Group\",\n                capturing: capturing,\n                value: value\n            }\n\n            if (capturing) {\n                groupAst.idx = this.groupIdx\n            }\n\n            return groupAst\n        }\n\n        RegExpParser.prototype.positiveInteger = function() {\n            var number = this.popChar()\n\n            // istanbul ignore next - can't ever get here due to previous lookahead checks\n            // still implementing this error checking in case this ever changes.\n            if (decimalPatternNoZero.test(number) === false) {\n                throw Error(\"Expecting a positive integer\")\n            }\n\n            while (decimalPattern.test(this.peekChar(0))) {\n                number += this.popChar()\n            }\n\n            return parseInt(number, 10)\n        }\n\n        RegExpParser.prototype.integerIncludingZero = function() {\n            var number = this.popChar()\n            if (decimalPattern.test(number) === false) {\n                throw Error(\"Expecting an integer\")\n            }\n\n            while (decimalPattern.test(this.peekChar(0))) {\n                number += this.popChar()\n            }\n\n            return parseInt(number, 10)\n        }\n\n        RegExpParser.prototype.patternCharacter = function() {\n            var nextChar = this.popChar()\n            switch (nextChar) {\n                // istanbul ignore next\n                case \"\\n\":\n                // istanbul ignore next\n                case \"\\r\":\n                // istanbul ignore next\n                case \"\\u2028\":\n                // istanbul ignore next\n                case \"\\u2029\":\n                // istanbul ignore next\n                case \"^\":\n                // istanbul ignore next\n                case \"$\":\n                // istanbul ignore next\n                case \"\\\\\":\n                // istanbul ignore next\n                case \".\":\n                // istanbul ignore next\n                case \"*\":\n                // istanbul ignore next\n                case \"+\":\n                // istanbul ignore next\n                case \"?\":\n                // istanbul ignore next\n                case \"(\":\n                // istanbul ignore next\n                case \")\":\n                // istanbul ignore next\n                case \"[\":\n                // istanbul ignore next\n                case \"|\":\n                    // istanbul ignore next\n                    throw Error(\"TBD\")\n                default:\n                    return { type: \"Character\", value: cc(nextChar) }\n            }\n        }\n        RegExpParser.prototype.isRegExpFlag = function() {\n            switch (this.peekChar(0)) {\n                case \"g\":\n                case \"i\":\n                case \"m\":\n                case \"u\":\n                case \"y\":\n                    return true\n                default:\n                    return false\n            }\n        }\n\n        RegExpParser.prototype.isRangeDash = function() {\n            return this.peekChar() === \"-\" && this.isClassAtom(1)\n        }\n\n        RegExpParser.prototype.isDigit = function() {\n            return decimalPattern.test(this.peekChar(0))\n        }\n\n        RegExpParser.prototype.isClassAtom = function(howMuch) {\n            if (howMuch === undefined) {\n                howMuch = 0\n            }\n\n            switch (this.peekChar(howMuch)) {\n                case \"]\":\n                case \"\\n\":\n                case \"\\r\":\n                case \"\\u2028\":\n                case \"\\u2029\":\n                    return false\n                default:\n                    return true\n            }\n        }\n\n        RegExpParser.prototype.isTerm = function() {\n            return this.isAtom() || this.isAssertion()\n        }\n\n        RegExpParser.prototype.isAtom = function() {\n            if (this.isPatternCharacter()) {\n                return true\n            }\n\n            switch (this.peekChar(0)) {\n                case \".\":\n                case \"\\\\\": // atomEscape\n                case \"[\": // characterClass\n                // TODO: isAtom must be called before isAssertion - disambiguate\n                case \"(\": // group\n                    return true\n                default:\n                    return false\n            }\n        }\n\n        RegExpParser.prototype.isAssertion = function() {\n            switch (this.peekChar(0)) {\n                case \"^\":\n                case \"$\":\n                    return true\n                // '\\b' or '\\B'\n                case \"\\\\\":\n                    switch (this.peekChar(1)) {\n                        case \"b\":\n                        case \"B\":\n                            return true\n                        default:\n                            return false\n                    }\n                // '(?=' or '(?!'\n                case \"(\":\n                    return (\n                        this.peekChar(1) === \"?\" &&\n                        (this.peekChar(2) === \"=\" || this.peekChar(2) === \"!\")\n                    )\n                default:\n                    return false\n            }\n        }\n\n        RegExpParser.prototype.isQuantifier = function() {\n            var prevState = this.saveState()\n            try {\n                return this.quantifier(true) !== undefined\n            } catch (e) {\n                return false\n            } finally {\n                this.restoreState(prevState)\n            }\n        }\n\n        RegExpParser.prototype.isPatternCharacter = function() {\n            switch (this.peekChar()) {\n                case \"^\":\n                case \"$\":\n                case \"\\\\\":\n                case \".\":\n                case \"*\":\n                case \"+\":\n                case \"?\":\n                case \"(\":\n                case \")\":\n                case \"[\":\n                case \"|\":\n                case \"/\":\n                case \"\\n\":\n                case \"\\r\":\n                case \"\\u2028\":\n                case \"\\u2029\":\n                    return false\n                default:\n                    return true\n            }\n        }\n\n        RegExpParser.prototype.parseHexDigits = function(howMany) {\n            var hexString = \"\"\n            for (var i = 0; i < howMany; i++) {\n                var hexChar = this.popChar()\n                if (hexDigitPattern.test(hexChar) === false) {\n                    throw Error(\"Expecting a HexDecimal digits\")\n                }\n                hexString += hexChar\n            }\n            var charCode = parseInt(hexString, 16)\n            return { type: \"Character\", value: charCode }\n        }\n\n        RegExpParser.prototype.peekChar = function(howMuch) {\n            if (howMuch === undefined) {\n                howMuch = 0\n            }\n            return this.input[this.idx + howMuch]\n        }\n\n        RegExpParser.prototype.popChar = function() {\n            var nextChar = this.peekChar(0)\n            this.consumeChar()\n            return nextChar\n        }\n\n        RegExpParser.prototype.consumeChar = function(char) {\n            if (char !== undefined && this.input[this.idx] !== char) {\n                throw Error(\n                    \"Expected: '\" +\n                        char +\n                        \"' but found: '\" +\n                        this.input[this.idx] +\n                        \"' at offset: \" +\n                        this.idx\n                )\n            }\n\n            if (this.idx >= this.input.length) {\n                throw Error(\"Unexpected end of input\")\n            }\n            this.idx++\n        }\n\n        // consts and utilities\n        var hexDigitPattern = /[0-9a-fA-F]/\n        var decimalPattern = /[0-9]/\n        var decimalPatternNoZero = /[1-9]/\n\n        function cc(char) {\n            return char.charCodeAt(0)\n        }\n\n        function insertToSet(item, set) {\n            if (item.length !== undefined) {\n                item.forEach(function(subItem) {\n                    set.push(subItem)\n                })\n            } else {\n                set.push(item)\n            }\n        }\n\n        function addFlag(flagObj, flagKey) {\n            if (flagObj[flagKey] === true) {\n                throw \"duplicate flag \" + flagKey\n            }\n\n            flagObj[flagKey] = true\n        }\n\n        function ASSERT_EXISTS(obj) {\n            // istanbul ignore next\n            if (obj === undefined) {\n                throw Error(\"Internal Error - Should never get here!\")\n            }\n        }\n\n        // istanbul ignore next\n        function ASSERT_NEVER_REACH_HERE() {\n            throw Error(\"Internal Error - Should never get here!\")\n        }\n\n        var i\n        var digitsCharCodes = []\n        for (i = cc(\"0\"); i <= cc(\"9\"); i++) {\n            digitsCharCodes.push(i)\n        }\n\n        var wordCharCodes = [cc(\"_\")].concat(digitsCharCodes)\n        for (i = cc(\"a\"); i <= cc(\"z\"); i++) {\n            wordCharCodes.push(i)\n        }\n\n        for (i = cc(\"A\"); i <= cc(\"Z\"); i++) {\n            wordCharCodes.push(i)\n        }\n\n        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes\n        var whitespaceCodes = [\n            cc(\" \"),\n            cc(\"\\f\"),\n            cc(\"\\n\"),\n            cc(\"\\r\"),\n            cc(\"\\t\"),\n            cc(\"\\v\"),\n            cc(\"\\t\"),\n            cc(\"\\u00a0\"),\n            cc(\"\\u1680\"),\n            cc(\"\\u2000\"),\n            cc(\"\\u2001\"),\n            cc(\"\\u2002\"),\n            cc(\"\\u2003\"),\n            cc(\"\\u2004\"),\n            cc(\"\\u2005\"),\n            cc(\"\\u2006\"),\n            cc(\"\\u2007\"),\n            cc(\"\\u2008\"),\n            cc(\"\\u2009\"),\n            cc(\"\\u200a\"),\n            cc(\"\\u2028\"),\n            cc(\"\\u2029\"),\n            cc(\"\\u202f\"),\n            cc(\"\\u205f\"),\n            cc(\"\\u3000\"),\n            cc(\"\\ufeff\")\n        ]\n\n        function BaseRegExpVisitor() {}\n\n        BaseRegExpVisitor.prototype.visitChildren = function(node) {\n            for (var key in node) {\n                var child = node[key]\n                /* istanbul ignore else */\n                if (node.hasOwnProperty(key)) {\n                    if (child.type !== undefined) {\n                        this.visit(child)\n                    } else if (Array.isArray(child)) {\n                        child.forEach(function(subChild) {\n                            this.visit(subChild)\n                        }, this)\n                    }\n                }\n            }\n        }\n\n        BaseRegExpVisitor.prototype.visit = function(node) {\n            switch (node.type) {\n                case \"Pattern\":\n                    this.visitPattern(node)\n                    break\n                case \"Flags\":\n                    this.visitFlags(node)\n                    break\n                case \"Disjunction\":\n                    this.visitDisjunction(node)\n                    break\n                case \"Alternative\":\n                    this.visitAlternative(node)\n                    break\n                case \"StartAnchor\":\n                    this.visitStartAnchor(node)\n                    break\n                case \"EndAnchor\":\n                    this.visitEndAnchor(node)\n                    break\n                case \"WordBoundary\":\n                    this.visitWordBoundary(node)\n                    break\n                case \"NonWordBoundary\":\n                    this.visitNonWordBoundary(node)\n                    break\n                case \"Lookahead\":\n                    this.visitLookahead(node)\n                    break\n                case \"NegativeLookahead\":\n                    this.visitNegativeLookahead(node)\n                    break\n                case \"Character\":\n                    this.visitCharacter(node)\n                    break\n                case \"Set\":\n                    this.visitSet(node)\n                    break\n                case \"Group\":\n                    this.visitGroup(node)\n                    break\n                case \"GroupBackReference\":\n                    this.visitGroupBackReference(node)\n                    break\n                case \"Quantifier\":\n                    this.visitQuantifier(node)\n                    break\n            }\n\n            this.visitChildren(node)\n        }\n\n        BaseRegExpVisitor.prototype.visitPattern = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitFlags = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitDisjunction = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitAlternative = function(node) {}\n\n        // Assertion\n        BaseRegExpVisitor.prototype.visitStartAnchor = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitEndAnchor = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitWordBoundary = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitNonWordBoundary = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitLookahead = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitNegativeLookahead = function(node) {}\n\n        // atoms\n        BaseRegExpVisitor.prototype.visitCharacter = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitSet = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitGroup = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitGroupBackReference = function(node) {}\n\n        BaseRegExpVisitor.prototype.visitQuantifier = function(node) {}\n\n        return {\n            RegExpParser: RegExpParser,\n            BaseRegExpVisitor: BaseRegExpVisitor,\n            VERSION: \"0.4.0\"\n        }\n    }\n)\n\n\n//# sourceURL=webpack:///./node_modules/regexp-to-ast/lib/regexp-to-ast.js?");

/***/ }),

/***/ "./src/comments/DOUBLE_FORWARD_SLASHES.ts":
/*!************************************************!*\
  !*** ./src/comments/DOUBLE_FORWARD_SLASHES.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chevrotain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chevrotain */ \"./node_modules/chevrotain/lib/src/api.js\");\n/* harmony import */ var chevrotain__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chevrotain__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DOUBLE_FORWARD_SLASHES = {\n  label: \"DOUBLE_FORWARD_SLASHES comment\",\n  name: \"double forward slashes //\",\n  pattern: /\\/\\/.*/,\n  group: chevrotain__WEBPACK_IMPORTED_MODULE_0__[\"Lexer\"].SKIPPED\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOUBLE_FORWARD_SLASHES);\n\n//# sourceURL=webpack:///./src/comments/DOUBLE_FORWARD_SLASHES.ts?");

/***/ }),

/***/ "./src/comments/DOUBLE_HYPHENS.ts":
/*!****************************************!*\
  !*** ./src/comments/DOUBLE_HYPHENS.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chevrotain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chevrotain */ \"./node_modules/chevrotain/lib/src/api.js\");\n/* harmony import */ var chevrotain__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chevrotain__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DOUBLE_HYPHENS = {\n  label: \"DOUBLE_HYPHENS comment\",\n  name: \"double hyphens --\",\n  pattern: /--.*/,\n  group: chevrotain__WEBPACK_IMPORTED_MODULE_0__[\"Lexer\"].SKIPPED\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOUBLE_HYPHENS);\n\n//# sourceURL=webpack:///./src/comments/DOUBLE_HYPHENS.ts?");

/***/ }),

/***/ "./src/comments/FORWARD_SLASH_ASTERISK_PAIRS.ts":
/*!******************************************************!*\
  !*** ./src/comments/FORWARD_SLASH_ASTERISK_PAIRS.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chevrotain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chevrotain */ \"./node_modules/chevrotain/lib/src/api.js\");\n/* harmony import */ var chevrotain__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chevrotain__WEBPACK_IMPORTED_MODULE_0__);\n\nconst FORWARD_SLASH_ASTERISK_PAIRS = {\n  label: \"FORWARD_SLASH_ASTERISK_PAIRS comment\",\n  name: \"forward slash asterisk pairs /* */\",\n  pattern: /\\/\\*[^\\*\\/]*\\*\\//,\n  group: chevrotain__WEBPACK_IMPORTED_MODULE_0__[\"Lexer\"].SKIPPED\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FORWARD_SLASH_ASTERISK_PAIRS);\n\n//# sourceURL=webpack:///./src/comments/FORWARD_SLASH_ASTERISK_PAIRS.ts?");

/***/ }),

/***/ "./src/comments/index.ts":
/*!*******************************!*\
  !*** ./src/comments/index.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOUBLE_FORWARD_SLASHES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOUBLE_FORWARD_SLASHES */ \"./src/comments/DOUBLE_FORWARD_SLASHES.ts\");\n/* harmony import */ var _DOUBLE_HYPHENS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOUBLE_HYPHENS */ \"./src/comments/DOUBLE_HYPHENS.ts\");\n/* harmony import */ var _FORWARD_SLASH_ASTERISK_PAIRS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FORWARD_SLASH_ASTERISK_PAIRS */ \"./src/comments/FORWARD_SLASH_ASTERISK_PAIRS.ts\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  DOUBLE_FORWARD_SLASHES: _DOUBLE_FORWARD_SLASHES__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  DOUBLE_HYPHENS: _DOUBLE_HYPHENS__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  FORWARD_SLASH_ASTERISK_PAIRS: _FORWARD_SLASH_ASTERISK_PAIRS__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/comments/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chevrotain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chevrotain */ \"./node_modules/chevrotain/lib/src/api.js\");\n/* harmony import */ var chevrotain__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chevrotain__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _white_space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white_space */ \"./src/white_space/index.ts\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments */ \"./src/comments/index.ts\");\n/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operators */ \"./src/operators/index.ts\");\n/* harmony import */ var _reserved_words__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reserved_words */ \"./src/reserved_words/index.ts\");\n\n\n\n\n\nconst mdxTokensConfig = [_white_space__WEBPACK_IMPORTED_MODULE_1__[\"default\"].WHITE_SPACE, ...Object.values(_comments__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), ...Object.values(_operators__WEBPACK_IMPORTED_MODULE_3__[\"default\"].arithmetic_operators), ...Object.values(_operators__WEBPACK_IMPORTED_MODULE_3__[\"default\"].assignment_operators), ...Object.values(_operators__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bitwise_operators), ...Object.values(_operators__WEBPACK_IMPORTED_MODULE_3__[\"default\"].comparison_operators), ...Object.values(_operators__WEBPACK_IMPORTED_MODULE_3__[\"default\"].concatenation_operators), ...Object.values(_operators__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set_operators), ...Object.values(_operators__WEBPACK_IMPORTED_MODULE_3__[\"default\"].unary_operators), ...Object.values(_reserved_words__WEBPACK_IMPORTED_MODULE_4__[\"default\"])];\nconst mdxTokens = mdxTokensConfig.map(tokenConfig => Object(chevrotain__WEBPACK_IMPORTED_MODULE_0__[\"createToken\"])(tokenConfig));\nconst mdxLexer = new chevrotain__WEBPACK_IMPORTED_MODULE_0__[\"Lexer\"](mdxTokens);\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/operators/arithmetic_operators/ADD.ts":
/*!***************************************************!*\
  !*** ./src/operators/arithmetic_operators/ADD.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ADD = {\n  label: \"ADD arethmetic operator\",\n  name: \"add\",\n  pattern: /\\+/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ADD);\n\n//# sourceURL=webpack:///./src/operators/arithmetic_operators/ADD.ts?");

/***/ }),

/***/ "./src/operators/arithmetic_operators/DIVIDE.ts":
/*!******************************************************!*\
  !*** ./src/operators/arithmetic_operators/DIVIDE.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DIVIDE = {\n  label: \"DIVIDE arethmetic operator\",\n  name: \"divide\",\n  pattern: /\\//\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DIVIDE);\n\n//# sourceURL=webpack:///./src/operators/arithmetic_operators/DIVIDE.ts?");

/***/ }),

/***/ "./src/operators/arithmetic_operators/MULTIPLY.ts":
/*!********************************************************!*\
  !*** ./src/operators/arithmetic_operators/MULTIPLY.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MULTIPLY = {\n  label: \"MULTIPLY arethmetic operator\",\n  name: \"multiply\",\n  pattern: /\\*/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MULTIPLY);\n\n//# sourceURL=webpack:///./src/operators/arithmetic_operators/MULTIPLY.ts?");

/***/ }),

/***/ "./src/operators/arithmetic_operators/POWER.ts":
/*!*****************************************************!*\
  !*** ./src/operators/arithmetic_operators/POWER.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst POWER = {\n  label: \"POWER arethmetic operator\",\n  name: \"power\",\n  pattern: /\\^/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (POWER);\n\n//# sourceURL=webpack:///./src/operators/arithmetic_operators/POWER.ts?");

/***/ }),

/***/ "./src/operators/arithmetic_operators/SUBTRACT.ts":
/*!********************************************************!*\
  !*** ./src/operators/arithmetic_operators/SUBTRACT.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SUBTRACT = {\n  label: \"SUBTRACT arethmetic operator\",\n  name: \"subtract\",\n  pattern: /-/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SUBTRACT);\n\n//# sourceURL=webpack:///./src/operators/arithmetic_operators/SUBTRACT.ts?");

/***/ }),

/***/ "./src/operators/arithmetic_operators/index.ts":
/*!*****************************************************!*\
  !*** ./src/operators/arithmetic_operators/index.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ADD__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ADD */ \"./src/operators/arithmetic_operators/ADD.ts\");\n/* harmony import */ var _DIVIDE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DIVIDE */ \"./src/operators/arithmetic_operators/DIVIDE.ts\");\n/* harmony import */ var _MULTIPLY__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MULTIPLY */ \"./src/operators/arithmetic_operators/MULTIPLY.ts\");\n/* harmony import */ var _POWER__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./POWER */ \"./src/operators/arithmetic_operators/POWER.ts\");\n/* harmony import */ var _SUBTRACT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SUBTRACT */ \"./src/operators/arithmetic_operators/SUBTRACT.ts\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ADD: _ADD__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  DIVIDE: _DIVIDE__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  MULTIPLY: _MULTIPLY__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  POWER: _POWER__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  SUBTRACT: _SUBTRACT__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/operators/arithmetic_operators/index.ts?");

/***/ }),

/***/ "./src/operators/assignment_operators/ASSIGNMENT.ts":
/*!**********************************************************!*\
  !*** ./src/operators/assignment_operators/ASSIGNMENT.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ASSIGNEMENT = {\n  label: \"ASSIGNEMENT operator\",\n  name: \"assignement\",\n  pattern: /=/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ASSIGNEMENT);\n\n//# sourceURL=webpack:///./src/operators/assignment_operators/ASSIGNMENT.ts?");

/***/ }),

/***/ "./src/operators/assignment_operators/index.ts":
/*!*****************************************************!*\
  !*** ./src/operators/assignment_operators/index.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ASSIGNMENT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ASSIGNMENT */ \"./src/operators/assignment_operators/ASSIGNMENT.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ASSIGNMENT: _ASSIGNMENT__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/operators/assignment_operators/index.ts?");

/***/ }),

/***/ "./src/operators/bitwise_operators/AND.ts":
/*!************************************************!*\
  !*** ./src/operators/bitwise_operators/AND.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AND = {\n  label: \"AND bitwise operator\",\n  name: \"and\",\n  pattern: /AND/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AND);\n\n//# sourceURL=webpack:///./src/operators/bitwise_operators/AND.ts?");

/***/ }),

/***/ "./src/operators/bitwise_operators/IS.ts":
/*!***********************************************!*\
  !*** ./src/operators/bitwise_operators/IS.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst IS = {\n  label: \"IS bitwise operator\",\n  name: \"is\",\n  pattern: /IS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (IS);\n\n//# sourceURL=webpack:///./src/operators/bitwise_operators/IS.ts?");

/***/ }),

/***/ "./src/operators/bitwise_operators/NOT.ts":
/*!************************************************!*\
  !*** ./src/operators/bitwise_operators/NOT.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NOT = {\n  label: \"NOT bitwise operator\",\n  name: \"not//#endregion\",\n  pattern: /NOT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NOT);\n\n//# sourceURL=webpack:///./src/operators/bitwise_operators/NOT.ts?");

/***/ }),

/***/ "./src/operators/bitwise_operators/OR.ts":
/*!***********************************************!*\
  !*** ./src/operators/bitwise_operators/OR.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst OR = {\n  label: \"OR bitwise operator\",\n  name: \"or\",\n  pattern: /OR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (OR);\n\n//# sourceURL=webpack:///./src/operators/bitwise_operators/OR.ts?");

/***/ }),

/***/ "./src/operators/bitwise_operators/XOR.ts":
/*!************************************************!*\
  !*** ./src/operators/bitwise_operators/XOR.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst XOR = {\n  label: \"XOR bitwise operator\",\n  name: \"xor\",\n  pattern: /XOR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (XOR);\n\n//# sourceURL=webpack:///./src/operators/bitwise_operators/XOR.ts?");

/***/ }),

/***/ "./src/operators/bitwise_operators/index.ts":
/*!**************************************************!*\
  !*** ./src/operators/bitwise_operators/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AND__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AND */ \"./src/operators/bitwise_operators/AND.ts\");\n/* harmony import */ var _IS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IS */ \"./src/operators/bitwise_operators/IS.ts\");\n/* harmony import */ var _NOT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NOT */ \"./src/operators/bitwise_operators/NOT.ts\");\n/* harmony import */ var _OR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OR */ \"./src/operators/bitwise_operators/OR.ts\");\n/* harmony import */ var _XOR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./XOR */ \"./src/operators/bitwise_operators/XOR.ts\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  AND: _AND__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  IS: _IS__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  NOT: _NOT__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  OR: _OR__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  XOR: _XOR__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/operators/bitwise_operators/index.ts?");

/***/ }),

/***/ "./src/operators/comparison_operators/EQUAL_TO.ts":
/*!********************************************************!*\
  !*** ./src/operators/comparison_operators/EQUAL_TO.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst EQUAL_TO = {\n  label: \"EQUAL_TO comparison operator\",\n  name: \"equal to\",\n  pattern: /=/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (EQUAL_TO);\n\n//# sourceURL=webpack:///./src/operators/comparison_operators/EQUAL_TO.ts?");

/***/ }),

/***/ "./src/operators/comparison_operators/GREATER_THAN.ts":
/*!************************************************************!*\
  !*** ./src/operators/comparison_operators/GREATER_THAN.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GREATER_THAN = {\n  label: \"GREATER_THAN comparison operator\",\n  name: \"greater than\",\n  pattern: />/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GREATER_THAN);\n\n//# sourceURL=webpack:///./src/operators/comparison_operators/GREATER_THAN.ts?");

/***/ }),

/***/ "./src/operators/comparison_operators/GREATER_THAN_OR_EQUAL.ts":
/*!*********************************************************************!*\
  !*** ./src/operators/comparison_operators/GREATER_THAN_OR_EQUAL.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GREATER_THAN_OR_EQUAL = {\n  label: \"GREATER_THAN_OR_EQUAL comparison operator\",\n  name: \"greater than or equal\",\n  pattern: />=/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GREATER_THAN_OR_EQUAL);\n\n//# sourceURL=webpack:///./src/operators/comparison_operators/GREATER_THAN_OR_EQUAL.ts?");

/***/ }),

/***/ "./src/operators/comparison_operators/LESS_THAN.ts":
/*!*********************************************************!*\
  !*** ./src/operators/comparison_operators/LESS_THAN.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LESS_THAN = {\n  label: \"LESS_THAN comparison operator\",\n  name: \"less than\",\n  pattern: /</\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LESS_THAN);\n\n//# sourceURL=webpack:///./src/operators/comparison_operators/LESS_THAN.ts?");

/***/ }),

/***/ "./src/operators/comparison_operators/LESS_THAN_OR_EQUAL.ts":
/*!******************************************************************!*\
  !*** ./src/operators/comparison_operators/LESS_THAN_OR_EQUAL.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LESS_THAN_OR_EQUAL = {\n  label: \"LESS_THAN_OR_EQUAL comparison operator\",\n  name: \"less than or equal\",\n  pattern: /<=/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LESS_THAN_OR_EQUAL);\n\n//# sourceURL=webpack:///./src/operators/comparison_operators/LESS_THAN_OR_EQUAL.ts?");

/***/ }),

/***/ "./src/operators/comparison_operators/NOT_EQUAL_TO.ts":
/*!************************************************************!*\
  !*** ./src/operators/comparison_operators/NOT_EQUAL_TO.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NOT_EQUAL_TO = {\n  label: \"NOT_EQUAL_TO comparison operator\",\n  name: \"not equal to\",\n  pattern: /<>/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NOT_EQUAL_TO);\n\n//# sourceURL=webpack:///./src/operators/comparison_operators/NOT_EQUAL_TO.ts?");

/***/ }),

/***/ "./src/operators/comparison_operators/index.ts":
/*!*****************************************************!*\
  !*** ./src/operators/comparison_operators/index.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EQUAL_TO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EQUAL_TO */ \"./src/operators/comparison_operators/EQUAL_TO.ts\");\n/* harmony import */ var _GREATER_THAN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GREATER_THAN */ \"./src/operators/comparison_operators/GREATER_THAN.ts\");\n/* harmony import */ var _GREATER_THAN_OR_EQUAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GREATER_THAN_OR_EQUAL */ \"./src/operators/comparison_operators/GREATER_THAN_OR_EQUAL.ts\");\n/* harmony import */ var _LESS_THAN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LESS_THAN */ \"./src/operators/comparison_operators/LESS_THAN.ts\");\n/* harmony import */ var _LESS_THAN_OR_EQUAL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LESS_THAN_OR_EQUAL */ \"./src/operators/comparison_operators/LESS_THAN_OR_EQUAL.ts\");\n/* harmony import */ var _NOT_EQUAL_TO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NOT_EQUAL_TO */ \"./src/operators/comparison_operators/NOT_EQUAL_TO.ts\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  EQUAL_TO: _EQUAL_TO__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  GREATER_THAN: _GREATER_THAN__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  GREATER_THAN_OR_EQUAL: _GREATER_THAN_OR_EQUAL__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  LESS_THAN: _LESS_THAN__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  LESS_THAN_OR_EQUAL: _LESS_THAN_OR_EQUAL__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  NOT_EQUAL_TO: _NOT_EQUAL_TO__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/operators/comparison_operators/index.ts?");

/***/ }),

/***/ "./src/operators/concatenation_operators/CONCATENATION.ts":
/*!****************************************************************!*\
  !*** ./src/operators/concatenation_operators/CONCATENATION.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CONCATENATION = {\n  label: \"CONCATENATION operator\",\n  name: \"concatenation\",\n  pattern: /\\+/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CONCATENATION);\n\n//# sourceURL=webpack:///./src/operators/concatenation_operators/CONCATENATION.ts?");

/***/ }),

/***/ "./src/operators/concatenation_operators/index.ts":
/*!********************************************************!*\
  !*** ./src/operators/concatenation_operators/index.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CONCATENATION__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CONCATENATION */ \"./src/operators/concatenation_operators/CONCATENATION.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  CONCATENATION: _CONCATENATION__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/operators/concatenation_operators/index.ts?");

/***/ }),

/***/ "./src/operators/index.ts":
/*!********************************!*\
  !*** ./src/operators/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _arithmetic_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arithmetic_operators */ \"./src/operators/arithmetic_operators/index.ts\");\n/* harmony import */ var _assignment_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignment_operators */ \"./src/operators/assignment_operators/index.ts\");\n/* harmony import */ var _bitwise_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bitwise_operators */ \"./src/operators/bitwise_operators/index.ts\");\n/* harmony import */ var _comparison_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comparison_operators */ \"./src/operators/comparison_operators/index.ts\");\n/* harmony import */ var _concatenation_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./concatenation_operators */ \"./src/operators/concatenation_operators/index.ts\");\n/* harmony import */ var _set_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set_operators */ \"./src/operators/set_operators/index.ts\");\n/* harmony import */ var _unary_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unary_operators */ \"./src/operators/unary_operators/index.ts\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  arithmetic_operators: _arithmetic_operators__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  assignment_operators: _assignment_operators__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  bitwise_operators: _bitwise_operators__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  comparison_operators: _comparison_operators__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  concatenation_operators: _concatenation_operators__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  set_operators: _set_operators__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  unary_operators: _unary_operators__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/operators/index.ts?");

/***/ }),

/***/ "./src/operators/set_operators/EXCEPT.ts":
/*!***********************************************!*\
  !*** ./src/operators/set_operators/EXCEPT.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst EXCEPT = {\n  label: \"EXCEPT set operator\",\n  name: \"except\",\n  pattern: /-/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (EXCEPT);\n\n//# sourceURL=webpack:///./src/operators/set_operators/EXCEPT.ts?");

/***/ }),

/***/ "./src/operators/set_operators/index.ts":
/*!**********************************************!*\
  !*** ./src/operators/set_operators/index.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EXCEPT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EXCEPT */ \"./src/operators/set_operators/EXCEPT.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  EXCEPT: _EXCEPT__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/operators/set_operators/index.ts?");

/***/ }),

/***/ "./src/operators/unary_operators/NEGATIVE.ts":
/*!***************************************************!*\
  !*** ./src/operators/unary_operators/NEGATIVE.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NEGATIVE = {\n  label: \" NEGATIVE unary operator\",\n  name: \"negative\",\n  pattern: /-/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NEGATIVE);\n\n//# sourceURL=webpack:///./src/operators/unary_operators/NEGATIVE.ts?");

/***/ }),

/***/ "./src/operators/unary_operators/POSITIVE.ts":
/*!***************************************************!*\
  !*** ./src/operators/unary_operators/POSITIVE.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst POSITIVE = {\n  label: \"POSITIVE unary operator\",\n  name: \"positive\",\n  pattern: /\\+/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (POSITIVE);\n\n//# sourceURL=webpack:///./src/operators/unary_operators/POSITIVE.ts?");

/***/ }),

/***/ "./src/operators/unary_operators/index.ts":
/*!************************************************!*\
  !*** ./src/operators/unary_operators/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NEGATIVE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NEGATIVE */ \"./src/operators/unary_operators/NEGATIVE.ts\");\n/* harmony import */ var _POSITIVE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./POSITIVE */ \"./src/operators/unary_operators/POSITIVE.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  NEGATIVE: _NEGATIVE__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  POSITIVE: _POSITIVE__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/operators/unary_operators/index.ts?");

/***/ }),

/***/ "./src/reserved_words/ABSOLUTE.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/ABSOLUTE.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ABSOLUTE = {\n  label: \"ABSOLUTE key word\",\n  name: \"absolute\",\n  pattern: /ABSOLUTE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ABSOLUTE);\n\n//# sourceURL=webpack:///./src/reserved_words/ABSOLUTE.ts?");

/***/ }),

/***/ "./src/reserved_words/ACTIONPARAMETERSET.ts":
/*!**************************************************!*\
  !*** ./src/reserved_words/ACTIONPARAMETERSET.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ACTIONPARAMETERSET = {\n  label: \"ACTIONPARAMETERSET key word\",\n  name: \"action parameter set\",\n  pattern: /ACTIONPARAMETERSET/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ACTIONPARAMETERSET);\n\n//# sourceURL=webpack:///./src/reserved_words/ACTIONPARAMETERSET.ts?");

/***/ }),

/***/ "./src/reserved_words/ADDCALCULATEDMEMBERS.ts":
/*!****************************************************!*\
  !*** ./src/reserved_words/ADDCALCULATEDMEMBERS.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ADDCALCULATEDMEMBERS = {\n  label: \"ADDCALCULATEDMEMBERS key word\",\n  name: \"add calculated members\",\n  pattern: /ADDCALCULATEDMEMBERS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ADDCALCULATEDMEMBERS);\n\n//# sourceURL=webpack:///./src/reserved_words/ADDCALCULATEDMEMBERS.ts?");

/***/ }),

/***/ "./src/reserved_words/AFTER.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/AFTER.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AFTER = {\n  label: \"AFTER key word\",\n  name: \"after\",\n  pattern: /AFTER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AFTER);\n\n//# sourceURL=webpack:///./src/reserved_words/AFTER.ts?");

/***/ }),

/***/ "./src/reserved_words/AGGREGATE.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/AGGREGATE.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AGGREGATE = {\n  label: \"AGGREGATE key word\",\n  name: \"aggregate\",\n  pattern: /AGGREGATE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AGGREGATE);\n\n//# sourceURL=webpack:///./src/reserved_words/AGGREGATE.ts?");

/***/ }),

/***/ "./src/reserved_words/ALL.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/ALL.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ALL = {\n  label: \"ALL key word\",\n  name: \"all\",\n  pattern: /ALL/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ALL);\n\n//# sourceURL=webpack:///./src/reserved_words/ALL.ts?");

/***/ }),

/***/ "./src/reserved_words/ALLMEMBERS.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/ALLMEMBERS.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ALLMEMBERS = {\n  label: \"ALLMEMBERS key word\",\n  name: \"all members\",\n  pattern: /ALLMEMBERS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ALLMEMBERS);\n\n//# sourceURL=webpack:///./src/reserved_words/ALLMEMBERS.ts?");

/***/ }),

/***/ "./src/reserved_words/ANCESTOR.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/ANCESTOR.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ANCESTOR = {\n  label: \"ANCESTOR key word\",\n  name: \"ancestor\",\n  pattern: /ANCESTOR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ANCESTOR);\n\n//# sourceURL=webpack:///./src/reserved_words/ANCESTOR.ts?");

/***/ }),

/***/ "./src/reserved_words/ANCESTORS.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/ANCESTORS.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ANCESTORS = {\n  label: \"ANCESTORS key word\",\n  name: \"ancestors\",\n  pattern: /ANCESTORS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ANCESTORS);\n\n//# sourceURL=webpack:///./src/reserved_words/ANCESTORS.ts?");

/***/ }),

/***/ "./src/reserved_words/AND.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/AND.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AND = {\n  label: \"AND key word\",\n  name: \"and\",\n  pattern: /AND/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AND);\n\n//# sourceURL=webpack:///./src/reserved_words/AND.ts?");

/***/ }),

/***/ "./src/reserved_words/AS.ts":
/*!**********************************!*\
  !*** ./src/reserved_words/AS.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AS = {\n  label: \"AS key word\",\n  name: \"as\",\n  pattern: /AS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AS);\n\n//# sourceURL=webpack:///./src/reserved_words/AS.ts?");

/***/ }),

/***/ "./src/reserved_words/ASC.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/ASC.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ASC = {\n  label: \"ASC key word\",\n  name: \"asc\",\n  pattern: /ASC/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ASC);\n\n//# sourceURL=webpack:///./src/reserved_words/ASC.ts?");

/***/ }),

/***/ "./src/reserved_words/ASCENDANTS.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/ASCENDANTS.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ASCENDANTS = {\n  label: \"ASCENDANTS key word\",\n  name: \"ascendants\",\n  pattern: /ASCENDANTS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ASCENDANTS);\n\n//# sourceURL=webpack:///./src/reserved_words/ASCENDANTS.ts?");

/***/ }),

/***/ "./src/reserved_words/AVERAGE.ts":
/*!***************************************!*\
  !*** ./src/reserved_words/AVERAGE.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AVERAGE = {\n  label: \"AVERAGE key word\",\n  name: \"average\",\n  pattern: /AVERAGE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AVERAGE);\n\n//# sourceURL=webpack:///./src/reserved_words/AVERAGE.ts?");

/***/ }),

/***/ "./src/reserved_words/AXIS.ts":
/*!************************************!*\
  !*** ./src/reserved_words/AXIS.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AXIS = {\n  label: \"AXIS key word\",\n  name: \"axis\",\n  pattern: /AXIS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AXIS);\n\n//# sourceURL=webpack:///./src/reserved_words/AXIS.ts?");

/***/ }),

/***/ "./src/reserved_words/BASC.ts":
/*!************************************!*\
  !*** ./src/reserved_words/BASC.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BASC = {\n  label: \"BASC key word\",\n  name: \"basc\",\n  pattern: /BASC/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BASC);\n\n//# sourceURL=webpack:///./src/reserved_words/BASC.ts?");

/***/ }),

/***/ "./src/reserved_words/BDESC.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/BDESC.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BDESC = {\n  label: \"BDESC key word\",\n  name: \"bdesc\",\n  pattern: /BDESC/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BDESC);\n\n//# sourceURL=webpack:///./src/reserved_words/BDESC.ts?");

/***/ }),

/***/ "./src/reserved_words/BEFORE.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/BEFORE.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BEFORE = {\n  label: \"BEFORE key word\",\n  name: \"before\",\n  pattern: /BEFORE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BEFORE);\n\n//# sourceURL=webpack:///./src/reserved_words/BEFORE.ts?");

/***/ }),

/***/ "./src/reserved_words/BEFORE_AND_AFTER.ts":
/*!************************************************!*\
  !*** ./src/reserved_words/BEFORE_AND_AFTER.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BEFORE_AND_AFTER = {\n  label: \"BEFORE_AND_AFTER key word\",\n  name: \"before and after\",\n  pattern: /BEFORE_AND_AFTER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BEFORE_AND_AFTER);\n\n//# sourceURL=webpack:///./src/reserved_words/BEFORE_AND_AFTER.ts?");

/***/ }),

/***/ "./src/reserved_words/BOTTOMCOUNT.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/BOTTOMCOUNT.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BOTTOMCOUNT = {\n  label: \"BOTTOMCOUNT key word\",\n  name: \"bottom count\",\n  pattern: /BOTTOMCOUNT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BOTTOMCOUNT);\n\n//# sourceURL=webpack:///./src/reserved_words/BOTTOMCOUNT.ts?");

/***/ }),

/***/ "./src/reserved_words/BOTTOMPERCENT.ts":
/*!*********************************************!*\
  !*** ./src/reserved_words/BOTTOMPERCENT.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BOTTOMPERCENT = {\n  label: \"BOTTOMPERCENT key word\",\n  name: \"bottom precent\",\n  pattern: /BOTTOMPERCENT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BOTTOMPERCENT);\n\n//# sourceURL=webpack:///./src/reserved_words/BOTTOMPERCENT.ts?");

/***/ }),

/***/ "./src/reserved_words/BOTTOMSUM.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/BOTTOMSUM.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BOTTOMSUM = {\n  label: \"BOTTOMSUM key word\",\n  name: \"bottom sum\",\n  pattern: /BOTTOMSUM/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BOTTOMSUM);\n\n//# sourceURL=webpack:///./src/reserved_words/BOTTOMSUM.ts?");

/***/ }),

/***/ "./src/reserved_words/BY.ts":
/*!**********************************!*\
  !*** ./src/reserved_words/BY.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst BY = {\n  label: \"BY key word\",\n  name: \"by\",\n  pattern: /BY/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BY);\n\n//# sourceURL=webpack:///./src/reserved_words/BY.ts?");

/***/ }),

/***/ "./src/reserved_words/CACHE.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/CACHE.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CACHE = {\n  label: \"CACHE key word\",\n  name: \"cache\",\n  pattern: /CACHE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CACHE);\n\n//# sourceURL=webpack:///./src/reserved_words/CACHE.ts?");

/***/ }),

/***/ "./src/reserved_words/CALCULATE.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/CALCULATE.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CALCULATE = {\n  label: \"CALCULATE key word\",\n  name: \"calculate\",\n  pattern: /CALCULATE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CALCULATE);\n\n//# sourceURL=webpack:///./src/reserved_words/CALCULATE.ts?");

/***/ }),

/***/ "./src/reserved_words/CALCULATION.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/CALCULATION.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CALCULATION = {\n  label: \"CALCULATION key word\",\n  name: \"calculation on current pass\",\n  pattern: /CALCULATION/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CALCULATION);\n\n//# sourceURL=webpack:///./src/reserved_words/CALCULATION.ts?");

/***/ }),

/***/ "./src/reserved_words/CALCULATIONCURRENTPASS.ts":
/*!******************************************************!*\
  !*** ./src/reserved_words/CALCULATIONCURRENTPASS.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CALCULATIONCURRENTPASS = {\n  label: \"CALCULATIONCURRENTPASS key word\",\n  name: \"calculation on current pass\",\n  pattern: /CALCULATIONCURRENTPASS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CALCULATIONCURRENTPASS);\n\n//# sourceURL=webpack:///./src/reserved_words/CALCULATIONCURRENTPASS.ts?");

/***/ }),

/***/ "./src/reserved_words/CALCULATIONPASSVALUE.ts":
/*!****************************************************!*\
  !*** ./src/reserved_words/CALCULATIONPASSVALUE.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CALCULATIONPASSVALUE = {\n  label: \"CALCULATIONPASSVALUE key word\",\n  name: \"calculation pass value\",\n  pattern: /CALCULATIONPASSVALUE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CALCULATIONPASSVALUE);\n\n//# sourceURL=webpack:///./src/reserved_words/CALCULATIONPASSVALUE.ts?");

/***/ }),

/***/ "./src/reserved_words/CALCULATIONS.ts":
/*!********************************************!*\
  !*** ./src/reserved_words/CALCULATIONS.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CALCULATIONS = {\n  label: \"CALCULATIONS key word\",\n  name: \"calculations\",\n  pattern: /CALCULATIONS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CALCULATIONS);\n\n//# sourceURL=webpack:///./src/reserved_words/CALCULATIONS.ts?");

/***/ }),

/***/ "./src/reserved_words/CALL.ts":
/*!************************************!*\
  !*** ./src/reserved_words/CALL.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CALL = {\n  label: \"CALL key word\",\n  name: \"call\",\n  pattern: /CALL/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CALL);\n\n//# sourceURL=webpack:///./src/reserved_words/CALL.ts?");

/***/ }),

/***/ "./src/reserved_words/CELL.ts":
/*!************************************!*\
  !*** ./src/reserved_words/CELL.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CELL = {\n  label: \"CELL key word\",\n  name: \"cell\",\n  pattern: /CELL/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CELL);\n\n//# sourceURL=webpack:///./src/reserved_words/CELL.ts?");

/***/ }),

/***/ "./src/reserved_words/CELLFORMULASETLIST.ts":
/*!**************************************************!*\
  !*** ./src/reserved_words/CELLFORMULASETLIST.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CELLFORMULASETLIST = {\n  label: \"CELLFORMULASETLIST key word\",\n  name: \"cell formula as set list\",\n  pattern: /CELLFORMULASETLIST/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CELLFORMULASETLIST);\n\n//# sourceURL=webpack:///./src/reserved_words/CELLFORMULASETLIST.ts?");

/***/ }),

/***/ "./src/reserved_words/CHAPTERS.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/CHAPTERS.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CHAPTERS = {\n  label: \"CHAPTERS key word\",\n  name: \"chapters\",\n  pattern: /CHAPTERS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CHAPTERS);\n\n//# sourceURL=webpack:///./src/reserved_words/CHAPTERS.ts?");

/***/ }),

/***/ "./src/reserved_words/CHILDREN.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/CHILDREN.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CHILDREN = {\n  label: \"CHILDREN key word\",\n  name: \"children\",\n  pattern: /CHILDREN/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CHILDREN);\n\n//# sourceURL=webpack:///./src/reserved_words/CHILDREN.ts?");

/***/ }),

/***/ "./src/reserved_words/CLEAR.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/CLEAR.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CLEAR = {\n  label: \"CLEAR key word\",\n  name: \"clear\",\n  pattern: /CLEAR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CLEAR);\n\n//# sourceURL=webpack:///./src/reserved_words/CLEAR.ts?");

/***/ }),

/***/ "./src/reserved_words/CLOSINGPERIOD.ts":
/*!*********************************************!*\
  !*** ./src/reserved_words/CLOSINGPERIOD.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CLOSINGPERIOD = {\n  label: \"CLOSINGPERIOD key word\",\n  name: \"closing period\",\n  pattern: /CLOSINGPERIOD/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CLOSINGPERIOD);\n\n//# sourceURL=webpack:///./src/reserved_words/CLOSINGPERIOD.ts?");

/***/ }),

/***/ "./src/reserved_words/COALESCEEMPTY.ts":
/*!*********************************************!*\
  !*** ./src/reserved_words/COALESCEEMPTY.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst COALESCEEMPTY = {\n  label: \"COALESCEEMPTY key word\",\n  name: \"coalesce empty\",\n  pattern: /COALESCEEMPTY/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (COALESCEEMPTY);\n\n//# sourceURL=webpack:///./src/reserved_words/COALESCEEMPTY.ts?");

/***/ }),

/***/ "./src/reserved_words/COLUMN.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/COLUMN.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst COLUMN = {\n  label: \"COLUMN key word\",\n  name: \"column\",\n  pattern: /COLUMN/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (COLUMN);\n\n//# sourceURL=webpack:///./src/reserved_words/COLUMN.ts?");

/***/ }),

/***/ "./src/reserved_words/COLUMNS.ts":
/*!***************************************!*\
  !*** ./src/reserved_words/COLUMNS.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst COLUMNS = {\n  label: \"COLUMNS key word\",\n  name: \"columns\",\n  pattern: /COLUMNS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (COLUMNS);\n\n//# sourceURL=webpack:///./src/reserved_words/COLUMNS.ts?");

/***/ }),

/***/ "./src/reserved_words/CORRELATION.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/CORRELATION.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CORRELATION = {\n  label: \"CORRELATION key word\",\n  name: \"coprelation\",\n  pattern: /CORRELATION/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CORRELATION);\n\n//# sourceURL=webpack:///./src/reserved_words/CORRELATION.ts?");

/***/ }),

/***/ "./src/reserved_words/COUNT.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/COUNT.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst COUNT = {\n  label: \"COUNT key word\",\n  name: \"count\",\n  pattern: /COUNT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (COUNT);\n\n//# sourceURL=webpack:///./src/reserved_words/COUNT.ts?");

/***/ }),

/***/ "./src/reserved_words/COUSIN.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/COUSIN.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst COUSIN = {\n  label: \"COUSIN key word\",\n  name: \"cousin\",\n  pattern: /COUSIN/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (COUSIN);\n\n//# sourceURL=webpack:///./src/reserved_words/COUSIN.ts?");

/***/ }),

/***/ "./src/reserved_words/COVARIANCE.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/COVARIANCE.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst COVARIANCE = {\n  label: \"COVARIANCE key word\",\n  name: \"covariance\",\n  pattern: /COVARIANCE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (COVARIANCE);\n\n//# sourceURL=webpack:///./src/reserved_words/COVARIANCE.ts?");

/***/ }),

/***/ "./src/reserved_words/COVARIANCEN.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/COVARIANCEN.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst COVARIANCEN = {\n  label: \"COVARIANCEN key word\",\n  name: \"covariancen\",\n  pattern: /COVARIANCEN/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (COVARIANCEN);\n\n//# sourceURL=webpack:///./src/reserved_words/COVARIANCEN.ts?");

/***/ }),

/***/ "./src/reserved_words/CREATE.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/CREATE.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CREATE = {\n  label: \"CREATE key word\",\n  name: \"create\",\n  pattern: /CREATE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CREATE);\n\n//# sourceURL=webpack:///./src/reserved_words/CREATE.ts?");

/***/ }),

/***/ "./src/reserved_words/CREATEPROPERTYSET.ts":
/*!*************************************************!*\
  !*** ./src/reserved_words/CREATEPROPERTYSET.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CREATEPROPERTYSET = {\n  label: \"CREATEPROPERTYSET key word\",\n  name: \"create property set\",\n  pattern: /CREATEPROPERTYSET/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CREATEPROPERTYSET);\n\n//# sourceURL=webpack:///./src/reserved_words/CREATEPROPERTYSET.ts?");

/***/ }),

/***/ "./src/reserved_words/CREATEVIRTUALDIMENSION.ts":
/*!******************************************************!*\
  !*** ./src/reserved_words/CREATEVIRTUALDIMENSION.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CREATEVIRTUALDIMENSION = {\n  label: \"CREATEVIRTUALDIMENSION key word\",\n  name: \"create virtual dimension\",\n  pattern: /CREATEVIRTUALDIMENSION/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CREATEVIRTUALDIMENSION);\n\n//# sourceURL=webpack:///./src/reserved_words/CREATEVIRTUALDIMENSION.ts?");

/***/ }),

/***/ "./src/reserved_words/CROSSJOIN.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/CROSSJOIN.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CROSSJOIN = {\n  label: \"CROSSJOIN key word\",\n  name: \"cross join\",\n  pattern: /CROSSJOIN/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CROSSJOIN);\n\n//# sourceURL=webpack:///./src/reserved_words/CROSSJOIN.ts?");

/***/ }),

/***/ "./src/reserved_words/CUBE.ts":
/*!************************************!*\
  !*** ./src/reserved_words/CUBE.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CUBE = {\n  label: \"CUBE key word\",\n  name: \"cube\",\n  pattern: /CUBE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CUBE);\n\n//# sourceURL=webpack:///./src/reserved_words/CUBE.ts?");

/***/ }),

/***/ "./src/reserved_words/CURRENT.ts":
/*!***************************************!*\
  !*** ./src/reserved_words/CURRENT.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CURRENT = {\n  label: \"CURRENT key word\",\n  name: \"current\",\n  pattern: /CURRENT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CURRENT);\n\n//# sourceURL=webpack:///./src/reserved_words/CURRENT.ts?");

/***/ }),

/***/ "./src/reserved_words/CURRENTCUBE.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/CURRENTCUBE.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CURRENTCUBE = {\n  label: \"CURRENTCUBE key word\",\n  name: \"current cube\",\n  pattern: /CURRENTCUBE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CURRENTCUBE);\n\n//# sourceURL=webpack:///./src/reserved_words/CURRENTCUBE.ts?");

/***/ }),

/***/ "./src/reserved_words/CURRENTMEMBER.ts":
/*!*********************************************!*\
  !*** ./src/reserved_words/CURRENTMEMBER.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CURRENTMEMBER = {\n  label: \"CURRENTMEMBER key word\",\n  name: \"current member\",\n  pattern: /CURRENTMEMBER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CURRENTMEMBER);\n\n//# sourceURL=webpack:///./src/reserved_words/CURRENTMEMBER.ts?");

/***/ }),

/***/ "./src/reserved_words/DEFAULTMEMBER.ts":
/*!*********************************************!*\
  !*** ./src/reserved_words/DEFAULTMEMBER.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DEFAULTMEMBER = {\n  label: \"DEFAULTMEMBER key word\",\n  name: \"default member\",\n  pattern: /DEFAULTMEMBER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DEFAULTMEMBER);\n\n//# sourceURL=webpack:///./src/reserved_words/DEFAULTMEMBER.ts?");

/***/ }),

/***/ "./src/reserved_words/DEFAULT_MEMBER.ts":
/*!**********************************************!*\
  !*** ./src/reserved_words/DEFAULT_MEMBER.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DEFAULT_MEMBER = {\n  label: \"DEFAULT_MEMBER key word\",\n  name: \"default memeber\",\n  pattern: /DEFAULT_MEMBER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DEFAULT_MEMBER);\n\n//# sourceURL=webpack:///./src/reserved_words/DEFAULT_MEMBER.ts?");

/***/ }),

/***/ "./src/reserved_words/DESC.ts":
/*!************************************!*\
  !*** ./src/reserved_words/DESC.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DESC = {\n  label: \"DESC key word\",\n  name: \"desc\",\n  pattern: /DESC/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DESC);\n\n//# sourceURL=webpack:///./src/reserved_words/DESC.ts?");

/***/ }),

/***/ "./src/reserved_words/DESCENDANTS.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/DESCENDANTS.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DESCENDANTS = {\n  label: \"DESCENDANTS key word\",\n  name: \"descendants\",\n  pattern: /DESCENDANTS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DESCENDANTS);\n\n//# sourceURL=webpack:///./src/reserved_words/DESCENDANTS.ts?");

/***/ }),

/***/ "./src/reserved_words/DESCRIPTION.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/DESCRIPTION.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DESCRIPTION = {\n  label: \"DESCRIPTION key word\",\n  name: \"description\",\n  pattern: /DESCRIPTION/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DESCRIPTION);\n\n//# sourceURL=webpack:///./src/reserved_words/DESCRIPTION.ts?");

/***/ }),

/***/ "./src/reserved_words/DIMENSION.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/DIMENSION.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DIMENSION = {\n  label: \"DIMENSION key word\",\n  name: \"dimension\",\n  pattern: /DIMENSION/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DIMENSION);\n\n//# sourceURL=webpack:///./src/reserved_words/DIMENSION.ts?");

/***/ }),

/***/ "./src/reserved_words/DIMENSIONS.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/DIMENSIONS.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DIMENSIONS = {\n  label: \"DIMENSIONS key word\",\n  name: \"dimensions\",\n  pattern: /DIMENSIONS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DIMENSIONS);\n\n//# sourceURL=webpack:///./src/reserved_words/DIMENSIONS.ts?");

/***/ }),

/***/ "./src/reserved_words/DISTINCT.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/DISTINCT.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DISTINCT = {\n  label: \"DISTINCT key word\",\n  name: \"distinct\",\n  pattern: /DISTINCT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DISTINCT);\n\n//# sourceURL=webpack:///./src/reserved_words/DISTINCT.ts?");

/***/ }),

/***/ "./src/reserved_words/DISTINCTCOUNT.ts":
/*!*********************************************!*\
  !*** ./src/reserved_words/DISTINCTCOUNT.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DISTINCTCOUNT = {\n  label: \"DISTINCTCOUNT key word\",\n  name: \"distinct count\",\n  pattern: /DISTINCTCOUNT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DISTINCTCOUNT);\n\n//# sourceURL=webpack:///./src/reserved_words/DISTINCTCOUNT.ts?");

/***/ }),

/***/ "./src/reserved_words/DRILLDOWNLEVEL.ts":
/*!**********************************************!*\
  !*** ./src/reserved_words/DRILLDOWNLEVEL.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DRILLDOWNLEVEL = {\n  label: \"DRILLDOWNLEVEL key word\",\n  name: \"drilldown level\",\n  pattern: /DRILLDOWNLEVEL/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DRILLDOWNLEVEL);\n\n//# sourceURL=webpack:///./src/reserved_words/DRILLDOWNLEVEL.ts?");

/***/ }),

/***/ "./src/reserved_words/DRILLDOWNLEVELBOTTOM.ts":
/*!****************************************************!*\
  !*** ./src/reserved_words/DRILLDOWNLEVELBOTTOM.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DRILLDOWNLEVELBOTTOM = {\n  label: \"DRILLDOWNLEVELBOTTOM key word\",\n  name: \"drilldown level bottom\",\n  pattern: /DRILLDOWNLEVELBOTTOM/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DRILLDOWNLEVELBOTTOM);\n\n//# sourceURL=webpack:///./src/reserved_words/DRILLDOWNLEVELBOTTOM.ts?");

/***/ }),

/***/ "./src/reserved_words/DRILLDOWNLEVELTOP.ts":
/*!*************************************************!*\
  !*** ./src/reserved_words/DRILLDOWNLEVELTOP.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DRILLDOWNLEVELTOP = {\n  label: \"DRILLDOWNLEVELTOP key word\",\n  name: \"dirlldown level top\",\n  pattern: /DRILLDOWNLEVELTOP/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DRILLDOWNLEVELTOP);\n\n//# sourceURL=webpack:///./src/reserved_words/DRILLDOWNLEVELTOP.ts?");

/***/ }),

/***/ "./src/reserved_words/DRILLDOWNMEMBER.ts":
/*!***********************************************!*\
  !*** ./src/reserved_words/DRILLDOWNMEMBER.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DRILLDOWNMEMBER = {\n  label: \"DRILLDOWNMEMBER key word\",\n  name: \"drilldown member\",\n  pattern: /DRILLDOWNMEMBER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DRILLDOWNMEMBER);\n\n//# sourceURL=webpack:///./src/reserved_words/DRILLDOWNMEMBER.ts?");

/***/ }),

/***/ "./src/reserved_words/DRILLDOWNMEMBERBOTTOM.ts":
/*!*****************************************************!*\
  !*** ./src/reserved_words/DRILLDOWNMEMBERBOTTOM.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DRILLDOWNMEMBERBOTTOM = {\n  label: \"DRILLDOWNMEMBERBOTTOM key word\",\n  name: \"drilldown member bottom\",\n  pattern: /DRILLDOWNMEMBERBOTTOM/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DRILLDOWNMEMBERBOTTOM);\n\n//# sourceURL=webpack:///./src/reserved_words/DRILLDOWNMEMBERBOTTOM.ts?");

/***/ }),

/***/ "./src/reserved_words/DRILLDOWNMEMBERTOP.ts":
/*!**************************************************!*\
  !*** ./src/reserved_words/DRILLDOWNMEMBERTOP.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DRILLDOWNMEMBERTOP = {\n  label: \"DRILLDOWNMEMBERTOP key word\",\n  name: \"drilldown memeber top\",\n  pattern: /DRILLDOWNMEMBERTOP/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DRILLDOWNMEMBERTOP);\n\n//# sourceURL=webpack:///./src/reserved_words/DRILLDOWNMEMBERTOP.ts?");

/***/ }),

/***/ "./src/reserved_words/DRILLUPLEVEL.ts":
/*!********************************************!*\
  !*** ./src/reserved_words/DRILLUPLEVEL.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DRILLUPLEVEL = {\n  label: \"DRILLUPLEVEL key word\",\n  name: \"drillup level\",\n  pattern: /DRILLUPLEVEL/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DRILLUPLEVEL);\n\n//# sourceURL=webpack:///./src/reserved_words/DRILLUPLEVEL.ts?");

/***/ }),

/***/ "./src/reserved_words/DRILLUPMEMBER.ts":
/*!*********************************************!*\
  !*** ./src/reserved_words/DRILLUPMEMBER.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DRILLUPMEMBER = {\n  label: \"DRILLUPMEMBER key word\",\n  name: \"drillup member\",\n  pattern: /DRILLUPMEMBER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DRILLUPMEMBER);\n\n//# sourceURL=webpack:///./src/reserved_words/DRILLUPMEMBER.ts?");

/***/ }),

/***/ "./src/reserved_words/DROP.ts":
/*!************************************!*\
  !*** ./src/reserved_words/DROP.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DROP = {\n  label: \"DROP key word\",\n  name: \"drop\",\n  pattern: /DROP/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DROP);\n\n//# sourceURL=webpack:///./src/reserved_words/DROP.ts?");

/***/ }),

/***/ "./src/reserved_words/EMPTY.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/EMPTY.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst EMPTY = {\n  label: \"EMPTY key word\",\n  name: \"empty\",\n  pattern: /EMPTY/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (EMPTY);\n\n//# sourceURL=webpack:///./src/reserved_words/EMPTY.ts?");

/***/ }),

/***/ "./src/reserved_words/END.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/END.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst END = {\n  label: \"END key word\",\n  name: \"end\",\n  pattern: /END/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (END);\n\n//# sourceURL=webpack:///./src/reserved_words/END.ts?");

/***/ }),

/***/ "./src/reserved_words/ERROR.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/ERROR.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ERROR = {\n  label: \"ERROR key word\",\n  name: \"error\",\n  pattern: /ERROR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ERROR);\n\n//# sourceURL=webpack:///./src/reserved_words/ERROR.ts?");

/***/ }),

/***/ "./src/reserved_words/EXCEPT.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/EXCEPT.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst EXCEPT = {\n  label: \"EXCEPT key word\",\n  name: \"except\",\n  pattern: /EXCEPT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (EXCEPT);\n\n//# sourceURL=webpack:///./src/reserved_words/EXCEPT.ts?");

/***/ }),

/***/ "./src/reserved_words/EXCLUDEEMPTY.ts":
/*!********************************************!*\
  !*** ./src/reserved_words/EXCLUDEEMPTY.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst EXCLUDEEMPTY = {\n  label: \"EXCLUDEEMPTY key word\",\n  name: \"exclude empty\",\n  pattern: /EXCLUDEEMPTY/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (EXCLUDEEMPTY);\n\n//# sourceURL=webpack:///./src/reserved_words/EXCLUDEEMPTY.ts?");

/***/ }),

/***/ "./src/reserved_words/EXTRACT.ts":
/*!***************************************!*\
  !*** ./src/reserved_words/EXTRACT.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst EXTRACT = {\n  label: \"EXTRACT key word\",\n  name: \"extract\",\n  pattern: /EXTRACT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (EXTRACT);\n\n//# sourceURL=webpack:///./src/reserved_words/EXTRACT.ts?");

/***/ }),

/***/ "./src/reserved_words/FALSE.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/FALSE.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst FALSE = {\n  label: \"FALSE key word\",\n  name: \"false\",\n  pattern: /FALSE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FALSE);\n\n//# sourceURL=webpack:///./src/reserved_words/FALSE.ts?");

/***/ }),

/***/ "./src/reserved_words/FILTER.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/FILTER.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst FILTER = {\n  label: \"FILTER key word\",\n  name: \"filter\",\n  pattern: /FILTER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FILTER);\n\n//# sourceURL=webpack:///./src/reserved_words/FILTER.ts?");

/***/ }),

/***/ "./src/reserved_words/FIRSTCHILD.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/FIRSTCHILD.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst FIRSTCHILD = {\n  label: \"FIRSTCHILD key word\",\n  name: \"first child\",\n  pattern: /FIRSTCHILD/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FIRSTCHILD);\n\n//# sourceURL=webpack:///./src/reserved_words/FIRSTCHILD.ts?");

/***/ }),

/***/ "./src/reserved_words/FIRSTSIBLING.ts":
/*!********************************************!*\
  !*** ./src/reserved_words/FIRSTSIBLING.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst FIRSTSIBLING = {\n  label: \"FIRSTSIBLING key word\",\n  name: \"first sibling\",\n  pattern: /FIRSTSIBLING/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FIRSTSIBLING);\n\n//# sourceURL=webpack:///./src/reserved_words/FIRSTSIBLING.ts?");

/***/ }),

/***/ "./src/reserved_words/FOR.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/FOR.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst FOR = {\n  label: \"FOR key word\",\n  name: \"for\",\n  pattern: /FOR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FOR);\n\n//# sourceURL=webpack:///./src/reserved_words/FOR.ts?");

/***/ }),

/***/ "./src/reserved_words/FREEZE.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/FREEZE.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst FREEZE = {\n  label: \"FREEZE key word\",\n  name: \"freeze\",\n  pattern: /FREEZE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FREEZE);\n\n//# sourceURL=webpack:///./src/reserved_words/FREEZE.ts?");

/***/ }),

/***/ "./src/reserved_words/FROM.ts":
/*!************************************!*\
  !*** ./src/reserved_words/FROM.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst FROM = {\n  label: \"FROM key word\",\n  name: \"from\",\n  pattern: /FROM/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FROM);\n\n//# sourceURL=webpack:///./src/reserved_words/FROM.ts?");

/***/ }),

/***/ "./src/reserved_words/GENERATE.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/GENERATE.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GENERATE = {\n  label: \"GENERATE key word\",\n  name: \"generate\",\n  pattern: /GENERATE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GENERATE);\n\n//# sourceURL=webpack:///./src/reserved_words/GENERATE.ts?");

/***/ }),

/***/ "./src/reserved_words/GLOBAL.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/GLOBAL.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GLOBAL = {\n  label: \"GLOBAL key word\",\n  name: \"global\",\n  pattern: /GLOBAL/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GLOBAL);\n\n//# sourceURL=webpack:///./src/reserved_words/GLOBAL.ts?");

/***/ }),

/***/ "./src/reserved_words/GROUP.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/GROUP.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GROUP = {\n  label: \"GROUP key word\",\n  name: \"group\",\n  pattern: /GROUP/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GROUP);\n\n//# sourceURL=webpack:///./src/reserved_words/GROUP.ts?");

/***/ }),

/***/ "./src/reserved_words/GROUPING.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/GROUPING.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GROUPING = {\n  label: \"GROUPING key word\",\n  name: \"grouping\",\n  pattern: /GROUPING/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GROUPING);\n\n//# sourceURL=webpack:///./src/reserved_words/GROUPING.ts?");

/***/ }),

/***/ "./src/reserved_words/HEAD.ts":
/*!************************************!*\
  !*** ./src/reserved_words/HEAD.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst HEAD = {\n  label: \"HEAD key word\",\n  name: \"head\",\n  pattern: /HEAD/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HEAD);\n\n//# sourceURL=webpack:///./src/reserved_words/HEAD.ts?");

/***/ }),

/***/ "./src/reserved_words/HIDDEN.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/HIDDEN.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst HIDDEN = {\n  label: \"HIDDEN key word\",\n  name: \"hidden\",\n  pattern: /HIDDEN/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HIDDEN);\n\n//# sourceURL=webpack:///./src/reserved_words/HIDDEN.ts?");

/***/ }),

/***/ "./src/reserved_words/HIERARCHIZE.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/HIERARCHIZE.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst HIERARCHIZE = {\n  label: \"HIERARCHIZE key word\",\n  name: \"hirearchize\",\n  pattern: /HIERARCHIZE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HIERARCHIZE);\n\n//# sourceURL=webpack:///./src/reserved_words/HIERARCHIZE.ts?");

/***/ }),

/***/ "./src/reserved_words/HIERARCHY.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/HIERARCHY.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst HIERARCHY = {\n  label: \"HIERARCHY key word\",\n  name: \"hierarchy\",\n  pattern: /HIERARCHY/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HIERARCHY);\n\n//# sourceURL=webpack:///./src/reserved_words/HIERARCHY.ts?");

/***/ }),

/***/ "./src/reserved_words/IGNORE.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/IGNORE.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst IGNORE = {\n  label: \"IGNORE key word\",\n  name: \"ignore\",\n  pattern: /IGNORE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (IGNORE);\n\n//# sourceURL=webpack:///./src/reserved_words/IGNORE.ts?");

/***/ }),

/***/ "./src/reserved_words/IIF.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/IIF.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst IIF = {\n  label: \"IIF key word\",\n  name: \"iif\",\n  pattern: /IIF/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (IIF);\n\n//# sourceURL=webpack:///./src/reserved_words/IIF.ts?");

/***/ }),

/***/ "./src/reserved_words/INCLUDEEMPTY.ts":
/*!********************************************!*\
  !*** ./src/reserved_words/INCLUDEEMPTY.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst INCLUDEEMPTY = {\n  label: \"INCLUDEEMPTY key word\",\n  name: \"include empty\",\n  pattern: /INCLUDEEMPTY/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (INCLUDEEMPTY);\n\n//# sourceURL=webpack:///./src/reserved_words/INCLUDEEMPTY.ts?");

/***/ }),

/***/ "./src/reserved_words/INTERSECT.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/INTERSECT.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst INTERSECT = {\n  label: \"INTERSECT key word\",\n  name: \"intersect\",\n  pattern: /INTERSECT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (INTERSECT);\n\n//# sourceURL=webpack:///./src/reserved_words/INTERSECT.ts?");

/***/ }),

/***/ "./src/reserved_words/IS.ts":
/*!**********************************!*\
  !*** ./src/reserved_words/IS.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst IS = {\n  label: \"IS key word\",\n  name: \"is\",\n  pattern: /IS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (IS);\n\n//# sourceURL=webpack:///./src/reserved_words/IS.ts?");

/***/ }),

/***/ "./src/reserved_words/ISANCESTOR.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/ISANCESTOR.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ISANCESTOR = {\n  label: \"ISANCESTOR key word\",\n  name: \"is ancestor\",\n  pattern: /ISANCESTOR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ISANCESTOR);\n\n//# sourceURL=webpack:///./src/reserved_words/ISANCESTOR.ts?");

/***/ }),

/***/ "./src/reserved_words/ISEMPTY.ts":
/*!***************************************!*\
  !*** ./src/reserved_words/ISEMPTY.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ISEMPTY = {\n  label: \"ISEMPTY key word\",\n  name: \"is empty\",\n  pattern: /ISEMPTY/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ISEMPTY);\n\n//# sourceURL=webpack:///./src/reserved_words/ISEMPTY.ts?");

/***/ }),

/***/ "./src/reserved_words/ISGENERATION.ts":
/*!********************************************!*\
  !*** ./src/reserved_words/ISGENERATION.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ISGENERATION = {\n  label: \"ISGENERATION key word\",\n  name: \"is generation\",\n  pattern: /ISGENERATION/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ISGENERATION);\n\n//# sourceURL=webpack:///./src/reserved_words/ISGENERATION.ts?");

/***/ }),

/***/ "./src/reserved_words/ISLEAF.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/ISLEAF.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ISLEAF = {\n  label: \"ISLEAF key word\",\n  name: \"is leaf\",\n  pattern: /ISLEAF/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ISLEAF);\n\n//# sourceURL=webpack:///./src/reserved_words/ISLEAF.ts?");

/***/ }),

/***/ "./src/reserved_words/ISSIBLING.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/ISSIBLING.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ISSIBLING = {\n  label: \"ISSIBLING key word\",\n  name: \"is sibling\",\n  pattern: /ISSIBLING/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ISSIBLING);\n\n//# sourceURL=webpack:///./src/reserved_words/ISSIBLING.ts?");

/***/ }),

/***/ "./src/reserved_words/ITEM.ts":
/*!************************************!*\
  !*** ./src/reserved_words/ITEM.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ITEM = {\n  label: \"ITEM key word\",\n  name: \"item\",\n  pattern: /ITEM/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ITEM);\n\n//# sourceURL=webpack:///./src/reserved_words/ITEM.ts?");

/***/ }),

/***/ "./src/reserved_words/LAG.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/LAG.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LAG = {\n  label: \"LAG key word\",\n  name: \"lag\",\n  pattern: /LAG/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LAG);\n\n//# sourceURL=webpack:///./src/reserved_words/LAG.ts?");

/***/ }),

/***/ "./src/reserved_words/LASTCHILD.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/LASTCHILD.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LASTCHILD = {\n  label: \"LASTCHILD key word\",\n  name: \"last child\",\n  pattern: /LASTCHILD/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LASTCHILD);\n\n//# sourceURL=webpack:///./src/reserved_words/LASTCHILD.ts?");

/***/ }),

/***/ "./src/reserved_words/LASTPERIODS.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/LASTPERIODS.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LASTPERIODS = {\n  label: \"LASTPERIODS key word\",\n  name: \"last periods\",\n  pattern: /LASTPERIODS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LASTPERIODS);\n\n//# sourceURL=webpack:///./src/reserved_words/LASTPERIODS.ts?");

/***/ }),

/***/ "./src/reserved_words/LASTSIBLING.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/LASTSIBLING.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LASTSIBLING = {\n  label: \"LASTSIBLING key word\",\n  name: \"last sibling\",\n  pattern: /LASTSIBLING/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LASTSIBLING);\n\n//# sourceURL=webpack:///./src/reserved_words/LASTSIBLING.ts?");

/***/ }),

/***/ "./src/reserved_words/LEAD.ts":
/*!************************************!*\
  !*** ./src/reserved_words/LEAD.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LEAD = {\n  label: \"LEAD key word\",\n  name: \"lead\",\n  pattern: /LEAD/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LEAD);\n\n//# sourceURL=webpack:///./src/reserved_words/LEAD.ts?");

/***/ }),

/***/ "./src/reserved_words/LEAVES.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/LEAVES.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LEAVES = {\n  label: \"LEAVES key word\",\n  name: \"leaves\",\n  pattern: /LEAVES/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LEAVES);\n\n//# sourceURL=webpack:///./src/reserved_words/LEAVES.ts?");

/***/ }),

/***/ "./src/reserved_words/LEVEL.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/LEVEL.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LEVEL = {\n  label: \"LEVEL key word\",\n  name: \"level\",\n  pattern: /LEVEL/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LEVEL);\n\n//# sourceURL=webpack:///./src/reserved_words/LEVEL.ts?");

/***/ }),

/***/ "./src/reserved_words/LEVELS.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/LEVELS.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LEVELS = {\n  label: \"LEVELS key word\",\n  name: \"levels\",\n  pattern: /LEVELS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LEVELS);\n\n//# sourceURL=webpack:///./src/reserved_words/LEVELS.ts?");

/***/ }),

/***/ "./src/reserved_words/LINKMEMBER.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/LINKMEMBER.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LINKMEMBER = {\n  label: \"LINKMEMBER key word\",\n  name: \"link member\",\n  pattern: /LINKMEMBER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LINKMEMBER);\n\n//# sourceURL=webpack:///./src/reserved_words/LINKMEMBER.ts?");

/***/ }),

/***/ "./src/reserved_words/LINREGINTERCEPT.ts":
/*!***********************************************!*\
  !*** ./src/reserved_words/LINREGINTERCEPT.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LINREGINTERCEPT = {\n  label: \"LINREGINTERCEPT key word\",\n  name: \"linreg intercept\",\n  pattern: /LINREGINTERCEPT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LINREGINTERCEPT);\n\n//# sourceURL=webpack:///./src/reserved_words/LINREGINTERCEPT.ts?");

/***/ }),

/***/ "./src/reserved_words/LINREGPOINT.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/LINREGPOINT.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LINREGPOINT = {\n  label: \"LINREGPOINT key word\",\n  name: \"linreg point\",\n  pattern: /LINREGPOINT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LINREGPOINT);\n\n//# sourceURL=webpack:///./src/reserved_words/LINREGPOINT.ts?");

/***/ }),

/***/ "./src/reserved_words/LINREGR2.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/LINREGR2.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LINREGR2 = {\n  label: \"LINREGR2 key word\",\n  name: \"linreg r2\",\n  pattern: /LINREGR2/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LINREGR2);\n\n//# sourceURL=webpack:///./src/reserved_words/LINREGR2.ts?");

/***/ }),

/***/ "./src/reserved_words/LINREGSLOPE.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/LINREGSLOPE.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LINREGSLOPE = {\n  label: \"LINREGSLOPE key word\",\n  name: \"linreg slope\",\n  pattern: /LINREGSLOPE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LINREGSLOPE);\n\n//# sourceURL=webpack:///./src/reserved_words/LINREGSLOPE.ts?");

/***/ }),

/***/ "./src/reserved_words/LINREGVARIANCE.ts":
/*!**********************************************!*\
  !*** ./src/reserved_words/LINREGVARIANCE.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LINREGVARIANCE = {\n  label: \"LINREGVARIANCE key word\",\n  name: \"linreg variance\",\n  pattern: /LINREGVARIANCE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LINREGVARIANCE);\n\n//# sourceURL=webpack:///./src/reserved_words/LINREGVARIANCE.ts?");

/***/ }),

/***/ "./src/reserved_words/LOOKUPCUBE.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/LOOKUPCUBE.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LOOKUPCUBE = {\n  label: \"LOOKUPCUBE key word\",\n  name: \"lookup cube\",\n  pattern: /LOOKUPCUBE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LOOKUPCUBE);\n\n//# sourceURL=webpack:///./src/reserved_words/LOOKUPCUBE.ts?");

/***/ }),

/***/ "./src/reserved_words/MAX.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/MAX.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MAX = {\n  label: \"MAX key word\",\n  name: \"max\",\n  pattern: /MAX/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MAX);\n\n//# sourceURL=webpack:///./src/reserved_words/MAX.ts?");

/***/ }),

/***/ "./src/reserved_words/MEASURE.ts":
/*!***************************************!*\
  !*** ./src/reserved_words/MEASURE.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MEASURE = {\n  label: \"MEASURE key word\",\n  name: \"measure\",\n  pattern: /MEASURE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MEASURE);\n\n//# sourceURL=webpack:///./src/reserved_words/MEASURE.ts?");

/***/ }),

/***/ "./src/reserved_words/MEDIAN.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/MEDIAN.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MEDIAN = {\n  label: \"MEDIAN key word\",\n  name: \"median\",\n  pattern: /MEDIAN/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MEDIAN);\n\n//# sourceURL=webpack:///./src/reserved_words/MEDIAN.ts?");

/***/ }),

/***/ "./src/reserved_words/MEMBER.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/MEMBER.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MEMBER = {\n  label: \"MEMBER key word\",\n  name: \"member\",\n  pattern: /MEMBER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MEMBER);\n\n//# sourceURL=webpack:///./src/reserved_words/MEMBER.ts?");

/***/ }),

/***/ "./src/reserved_words/MEMBERS.ts":
/*!***************************************!*\
  !*** ./src/reserved_words/MEMBERS.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MEMBERS = {\n  label: \"MEMBERS key word\",\n  name: \"members\",\n  pattern: /MEMBERS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MEMBERS);\n\n//# sourceURL=webpack:///./src/reserved_words/MEMBERS.ts?");

/***/ }),

/***/ "./src/reserved_words/MEMBERTOSTR.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/MEMBERTOSTR.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MEMBERTOSTR = {\n  label: \"MEMBERTOSTR key word\",\n  name: \"member to string\",\n  pattern: /MEMBERTOSTR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MEMBERTOSTR);\n\n//# sourceURL=webpack:///./src/reserved_words/MEMBERTOSTR.ts?");

/***/ }),

/***/ "./src/reserved_words/MIN.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/MIN.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MIN = {\n  label: \"MIN key word\",\n  name: \"min\",\n  pattern: /MIN/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MIN);\n\n//# sourceURL=webpack:///./src/reserved_words/MIN.ts?");

/***/ }),

/***/ "./src/reserved_words/MTD.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/MTD.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MTD = {\n  label: \"MTD key word\",\n  name: \"mtd\",\n  pattern: /MTD/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MTD);\n\n//# sourceURL=webpack:///./src/reserved_words/MTD.ts?");

/***/ }),

/***/ "./src/reserved_words/NAME.ts":
/*!************************************!*\
  !*** ./src/reserved_words/NAME.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NAME = {\n  label: \"NAME key word\",\n  name: \"name\",\n  pattern: /NAME/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NAME);\n\n//# sourceURL=webpack:///./src/reserved_words/NAME.ts?");

/***/ }),

/***/ "./src/reserved_words/NAMETOSET.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/NAMETOSET.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NAMETOSET = {\n  label: \"NAMETOSET key word\",\n  name: \"name to set\",\n  pattern: /NAMETOSET/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NAMETOSET);\n\n//# sourceURL=webpack:///./src/reserved_words/NAMETOSET.ts?");

/***/ }),

/***/ "./src/reserved_words/NEST.ts":
/*!************************************!*\
  !*** ./src/reserved_words/NEST.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NEST = {\n  label: \"NEST key word\",\n  name: \"nest\",\n  pattern: /NEST/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NEST);\n\n//# sourceURL=webpack:///./src/reserved_words/NEST.ts?");

/***/ }),

/***/ "./src/reserved_words/NEXTMEMBER.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/NEXTMEMBER.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NEXTMEMBER = {\n  label: \"NEXTMEMBER key word\",\n  name: \"next member\",\n  pattern: /NEXTMEMBER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NEXTMEMBER);\n\n//# sourceURL=webpack:///./src/reserved_words/NEXTMEMBER.ts?");

/***/ }),

/***/ "./src/reserved_words/NON.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/NON.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NON = {\n  label: \"NON key word\",\n  name: \"non\",\n  pattern: /NON/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NON);\n\n//# sourceURL=webpack:///./src/reserved_words/NON.ts?");

/***/ }),

/***/ "./src/reserved_words/NONEMPTYCROSSJOIN.ts":
/*!*************************************************!*\
  !*** ./src/reserved_words/NONEMPTYCROSSJOIN.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NONEMPTYCROSSJOIN = {\n  label: \"NONEMPTYCROSSJOIN key word\",\n  name: \"non empty crossjoin\",\n  pattern: /NONEMPTYCROSSJOIN/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NONEMPTYCROSSJOIN);\n\n//# sourceURL=webpack:///./src/reserved_words/NONEMPTYCROSSJOIN.ts?");

/***/ }),

/***/ "./src/reserved_words/NOT_RELATED_TO_FACTS.ts":
/*!****************************************************!*\
  !*** ./src/reserved_words/NOT_RELATED_TO_FACTS.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NOT_RELATED_TO_FACTS = {\n  label: \"NOT_RELATED_TO_FACTS key word\",\n  name: \"not related to facts\",\n  pattern: /NOT_RELATED_TO_FACTS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NOT_RELATED_TO_FACTS);\n\n//# sourceURL=webpack:///./src/reserved_words/NOT_RELATED_TO_FACTS.ts?");

/***/ }),

/***/ "./src/reserved_words/NO_ALLOCATION.ts":
/*!*********************************************!*\
  !*** ./src/reserved_words/NO_ALLOCATION.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NO_ALLOCATION = {\n  label: \"NO_ALLOCATION key word\",\n  name: \"no allocation\",\n  pattern: /NO_ALLOCATION/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NO_ALLOCATION);\n\n//# sourceURL=webpack:///./src/reserved_words/NO_ALLOCATION.ts?");

/***/ }),

/***/ "./src/reserved_words/NO_PROPERTIES.ts":
/*!*********************************************!*\
  !*** ./src/reserved_words/NO_PROPERTIES.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NO_PROPERTIES = {\n  label: \"NO_PROPERTIES key word\",\n  name: \"no properties\",\n  pattern: /NO_PROPERTIES/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NO_PROPERTIES);\n\n//# sourceURL=webpack:///./src/reserved_words/NO_PROPERTIES.ts?");

/***/ }),

/***/ "./src/reserved_words/NULL.ts":
/*!************************************!*\
  !*** ./src/reserved_words/NULL.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NULL = {\n  label: \"NULL key word\",\n  name: \"null\",\n  pattern: /NULL/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NULL);\n\n//# sourceURL=webpack:///./src/reserved_words/NULL.ts?");

/***/ }),

/***/ "./src/reserved_words/ON.ts":
/*!**********************************!*\
  !*** ./src/reserved_words/ON.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ON = {\n  label: \"ON key word\",\n  name: \"on\",\n  pattern: /ON/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ON);\n\n//# sourceURL=webpack:///./src/reserved_words/ON.ts?");

/***/ }),

/***/ "./src/reserved_words/OPENINGPERIOD.ts":
/*!*********************************************!*\
  !*** ./src/reserved_words/OPENINGPERIOD.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst OPENINGPERIOD = {\n  label: \"OPENINGPERIOD key word\",\n  name: \"opening period\",\n  pattern: /OPENINGPERIOD/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (OPENINGPERIOD);\n\n//# sourceURL=webpack:///./src/reserved_words/OPENINGPERIOD.ts?");

/***/ }),

/***/ "./src/reserved_words/OR.ts":
/*!**********************************!*\
  !*** ./src/reserved_words/OR.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst OR = {\n  label: \"OR key word\",\n  name: \"or\",\n  pattern: /OR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (OR);\n\n//# sourceURL=webpack:///./src/reserved_words/OR.ts?");

/***/ }),

/***/ "./src/reserved_words/PAGES.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/PAGES.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PAGES = {\n  label: \"PAGES key word\",\n  name: \"pages\",\n  pattern: /PAGES/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PAGES);\n\n//# sourceURL=webpack:///./src/reserved_words/PAGES.ts?");

/***/ }),

/***/ "./src/reserved_words/PARALLELPERIOD.ts":
/*!**********************************************!*\
  !*** ./src/reserved_words/PARALLELPERIOD.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PARALLELPERIOD = {\n  label: \"PARALLELPERIOD key word\",\n  name: \"parallel period\",\n  pattern: /PARALLELPERIOD/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PARALLELPERIOD);\n\n//# sourceURL=webpack:///./src/reserved_words/PARALLELPERIOD.ts?");

/***/ }),

/***/ "./src/reserved_words/PARENT.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/PARENT.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PARENT = {\n  label: \"PARENT key word\",\n  name: \"parent\",\n  pattern: /PARENT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PARENT);\n\n//# sourceURL=webpack:///./src/reserved_words/PARENT.ts?");

/***/ }),

/***/ "./src/reserved_words/PASS.ts":
/*!************************************!*\
  !*** ./src/reserved_words/PASS.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PASS = {\n  label: \"PASS key word\",\n  name: \"pass\",\n  pattern: /PASS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PASS);\n\n//# sourceURL=webpack:///./src/reserved_words/PASS.ts?");

/***/ }),

/***/ "./src/reserved_words/PERIODSTODATE.ts":
/*!*********************************************!*\
  !*** ./src/reserved_words/PERIODSTODATE.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PERIODSTODATE = {\n  label: \"PERIODSTODATE key word\",\n  name: \"periods to date\",\n  pattern: /PERIODSTODATE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PERIODSTODATE);\n\n//# sourceURL=webpack:///./src/reserved_words/PERIODSTODATE.ts?");

/***/ }),

/***/ "./src/reserved_words/POST.ts":
/*!************************************!*\
  !*** ./src/reserved_words/POST.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst POST = {\n  label: \"POST key word\",\n  name: \"post\",\n  pattern: /POST/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (POST);\n\n//# sourceURL=webpack:///./src/reserved_words/POST.ts?");

/***/ }),

/***/ "./src/reserved_words/PREDICT.ts":
/*!***************************************!*\
  !*** ./src/reserved_words/PREDICT.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PREDICT = {\n  label: \"PREDICT key word\",\n  name: \"predict\",\n  pattern: /PREDICT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PREDICT);\n\n//# sourceURL=webpack:///./src/reserved_words/PREDICT.ts?");

/***/ }),

/***/ "./src/reserved_words/PREVMEMBER.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/PREVMEMBER.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PREVMEMBER = {\n  label: \"PREVMEMBER key word\",\n  name: \"previous member\",\n  pattern: /PREVMEMBER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PREVMEMBER);\n\n//# sourceURL=webpack:///./src/reserved_words/PREVMEMBER.ts?");

/***/ }),

/***/ "./src/reserved_words/PROPERTIES.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/PROPERTIES.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PROPERTIES = {\n  label: \"PROPERTIES key word\",\n  name: \"properties\",\n  pattern: /PROPERTIES/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PROPERTIES);\n\n//# sourceURL=webpack:///./src/reserved_words/PROPERTIES.ts?");

/***/ }),

/***/ "./src/reserved_words/PROPERTY.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/PROPERTY.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PROPERTY = {\n  label: \"PROPERTY key word\",\n  name: \"property\",\n  pattern: /PROPERTY/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PROPERTY);\n\n//# sourceURL=webpack:///./src/reserved_words/PROPERTY.ts?");

/***/ }),

/***/ "./src/reserved_words/QTD.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/QTD.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst QTD = {\n  label: \"QTD key word\",\n  name: \"qtd\",\n  pattern: /QTD/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (QTD);\n\n//# sourceURL=webpack:///./src/reserved_words/QTD.ts?");

/***/ }),

/***/ "./src/reserved_words/RANK.ts":
/*!************************************!*\
  !*** ./src/reserved_words/RANK.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst RANK = {\n  label: \"RANK key word\",\n  name: \"rank\",\n  pattern: /RANK/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RANK);\n\n//# sourceURL=webpack:///./src/reserved_words/RANK.ts?");

/***/ }),

/***/ "./src/reserved_words/RECURSIVE.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/RECURSIVE.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst RECURSIVE = {\n  label: \"RECURSIVE key word\",\n  name: \"recursive\",\n  pattern: /RECURSIVE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RECURSIVE);\n\n//# sourceURL=webpack:///./src/reserved_words/RECURSIVE.ts?");

/***/ }),

/***/ "./src/reserved_words/RELATIVE.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/RELATIVE.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst RELATIVE = {\n  label: \"RELATIVE key word\",\n  name: \"relative\",\n  pattern: /RELATIVE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RELATIVE);\n\n//# sourceURL=webpack:///./src/reserved_words/RELATIVE.ts?");

/***/ }),

/***/ "./src/reserved_words/ROLLUPCHILDREN.ts":
/*!**********************************************!*\
  !*** ./src/reserved_words/ROLLUPCHILDREN.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ROLLUPCHILDREN = {\n  label: \"ROLLUPCHILDREN key word\",\n  name: \"rollup children\",\n  pattern: /ROLLUPCHILDREN/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ROLLUPCHILDREN);\n\n//# sourceURL=webpack:///./src/reserved_words/ROLLUPCHILDREN.ts?");

/***/ }),

/***/ "./src/reserved_words/ROOT.ts":
/*!************************************!*\
  !*** ./src/reserved_words/ROOT.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ROOT = {\n  label: \"ROOT key word\",\n  name: \"root\",\n  pattern: /ROOT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ROOT);\n\n//# sourceURL=webpack:///./src/reserved_words/ROOT.ts?");

/***/ }),

/***/ "./src/reserved_words/ROWS.ts":
/*!************************************!*\
  !*** ./src/reserved_words/ROWS.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ROWS = {\n  label: \"ROWS key word\",\n  name: \"rows\",\n  pattern: /ROWS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ROWS);\n\n//# sourceURL=webpack:///./src/reserved_words/ROWS.ts?");

/***/ }),

/***/ "./src/reserved_words/SCOPE.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/SCOPE.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SCOPE = {\n  label: \"SCOPE key word\",\n  name: \"scope\",\n  pattern: /SCOPE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SCOPE);\n\n//# sourceURL=webpack:///./src/reserved_words/SCOPE.ts?");

/***/ }),

/***/ "./src/reserved_words/SECTIONS.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/SECTIONS.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SECTIONS = {\n  label: \"SECTIONS key word\",\n  name: \"sections\",\n  pattern: /SECTIONS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SECTIONS);\n\n//# sourceURL=webpack:///./src/reserved_words/SECTIONS.ts?");

/***/ }),

/***/ "./src/reserved_words/SELECT.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/SELECT.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SELECT = {\n  label: \"SELECT key word\",\n  name: \"select\",\n  pattern: /SELECT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SELECT);\n\n//# sourceURL=webpack:///./src/reserved_words/SELECT.ts?");

/***/ }),

/***/ "./src/reserved_words/SELF.ts":
/*!************************************!*\
  !*** ./src/reserved_words/SELF.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SELF = {\n  label: \"SELF key word\",\n  name: \"self\",\n  pattern: /SELF/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SELF);\n\n//# sourceURL=webpack:///./src/reserved_words/SELF.ts?");

/***/ }),

/***/ "./src/reserved_words/SELF_AND_AFTER.ts":
/*!**********************************************!*\
  !*** ./src/reserved_words/SELF_AND_AFTER.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SELF_AND_AFTER = {\n  label: \"SELF_AND_AFTER key word\",\n  name: \"self and after\",\n  pattern: /SELF_AND_AFTER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SELF_AND_AFTER);\n\n//# sourceURL=webpack:///./src/reserved_words/SELF_AND_AFTER.ts?");

/***/ }),

/***/ "./src/reserved_words/SELF_AND_BEFORE.ts":
/*!***********************************************!*\
  !*** ./src/reserved_words/SELF_AND_BEFORE.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SELF_AND_BEFORE = {\n  label: \"SELF_AND_BEFORE key word\",\n  name: \"self and before\",\n  pattern: /SELF_AND_BEFORE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SELF_AND_BEFORE);\n\n//# sourceURL=webpack:///./src/reserved_words/SELF_AND_BEFORE.ts?");

/***/ }),

/***/ "./src/reserved_words/SELF_BEFORE_AFTER.ts":
/*!*************************************************!*\
  !*** ./src/reserved_words/SELF_BEFORE_AFTER.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SELF_BEFORE_AFTER = {\n  label: \"SELF_BEFORE_AFTER key word\",\n  name: \"self before after\",\n  pattern: /SELF_BEFORE_AFTER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SELF_BEFORE_AFTER);\n\n//# sourceURL=webpack:///./src/reserved_words/SELF_BEFORE_AFTER.ts?");

/***/ }),

/***/ "./src/reserved_words/SESSION.ts":
/*!***************************************!*\
  !*** ./src/reserved_words/SESSION.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SESSION = {\n  label: \"SESSION key word\",\n  name: \"session\",\n  pattern: /SESSION/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SESSION);\n\n//# sourceURL=webpack:///./src/reserved_words/SESSION.ts?");

/***/ }),

/***/ "./src/reserved_words/SET.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/SET.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SET = {\n  label: \"SET key word\",\n  name: \"set\",\n  pattern: /SET/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SET);\n\n//# sourceURL=webpack:///./src/reserved_words/SET.ts?");

/***/ }),

/***/ "./src/reserved_words/SETTOARRAY.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/SETTOARRAY.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SETTOARRAY = {\n  label: \"SETTOARRAY key word\",\n  name: \"set to array\",\n  pattern: /SETTOARRAY/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SETTOARRAY);\n\n//# sourceURL=webpack:///./src/reserved_words/SETTOARRAY.ts?");

/***/ }),

/***/ "./src/reserved_words/SETTOSTR.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/SETTOSTR.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SETTOSTR = {\n  label: \"SETTOSTR key word\",\n  name: \"set to string\",\n  pattern: /SETTOSTR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SETTOSTR);\n\n//# sourceURL=webpack:///./src/reserved_words/SETTOSTR.ts?");

/***/ }),

/***/ "./src/reserved_words/SORT.ts":
/*!************************************!*\
  !*** ./src/reserved_words/SORT.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SORT = {\n  label: \"SORT key word\",\n  name: \"sort\",\n  pattern: /SORT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SORT);\n\n//# sourceURL=webpack:///./src/reserved_words/SORT.ts?");

/***/ }),

/***/ "./src/reserved_words/STDDEV.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/STDDEV.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst STDDEV = {\n  label: \"STDDEV key word\",\n  name: \"stddev\",\n  pattern: /STDDEV/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (STDDEV);\n\n//# sourceURL=webpack:///./src/reserved_words/STDDEV.ts?");

/***/ }),

/***/ "./src/reserved_words/STDDEVP.ts":
/*!***************************************!*\
  !*** ./src/reserved_words/STDDEVP.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst STDDEVP = {\n  label: \"STDDEVP key word\",\n  name: \"stddevp\",\n  pattern: /STDDEVP/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (STDDEVP);\n\n//# sourceURL=webpack:///./src/reserved_words/STDDEVP.ts?");

/***/ }),

/***/ "./src/reserved_words/STDEV.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/STDEV.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst STDEV = {\n  label: \"STDEV key word\",\n  name: \"stdev\",\n  pattern: /STDEV/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (STDEV);\n\n//# sourceURL=webpack:///./src/reserved_words/STDEV.ts?");

/***/ }),

/***/ "./src/reserved_words/STDEVP.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/STDEVP.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst STDEVP = {\n  label: \"STDEVP key word\",\n  name: \"stdevp\",\n  pattern: /STDEVP/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (STDEVP);\n\n//# sourceURL=webpack:///./src/reserved_words/STDEVP.ts?");

/***/ }),

/***/ "./src/reserved_words/STORAGE.ts":
/*!***************************************!*\
  !*** ./src/reserved_words/STORAGE.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst STORAGE = {\n  label: \"STORAGE key word\",\n  name: \"storage\",\n  pattern: /STORAGE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (STORAGE);\n\n//# sourceURL=webpack:///./src/reserved_words/STORAGE.ts?");

/***/ }),

/***/ "./src/reserved_words/STRIPCALCULATEDMEMBERS.ts":
/*!******************************************************!*\
  !*** ./src/reserved_words/STRIPCALCULATEDMEMBERS.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst STRIPCALCULATEDMEMBERS = {\n  label: \"STRIPCALCULATEDMEMBERS key word\",\n  name: \"strip calculated members\",\n  pattern: /STRIPCALCULATEDMEMBERS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (STRIPCALCULATEDMEMBERS);\n\n//# sourceURL=webpack:///./src/reserved_words/STRIPCALCULATEDMEMBERS.ts?");

/***/ }),

/***/ "./src/reserved_words/STRTOMEMBER.ts":
/*!*******************************************!*\
  !*** ./src/reserved_words/STRTOMEMBER.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst STRTOMEMBER = {\n  label: \"STRTOMEMBER key word\",\n  name: \"string to member\",\n  pattern: /STRTOMEMBER/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (STRTOMEMBER);\n\n//# sourceURL=webpack:///./src/reserved_words/STRTOMEMBER.ts?");

/***/ }),

/***/ "./src/reserved_words/STRTOSET.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/STRTOSET.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst STRTOSET = {\n  label: \"STRTOSET key word\",\n  name: \"string to set\",\n  pattern: /STRTOSET/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (STRTOSET);\n\n//# sourceURL=webpack:///./src/reserved_words/STRTOSET.ts?");

/***/ }),

/***/ "./src/reserved_words/STRTOTUPLE.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/STRTOTUPLE.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst STRTOTUPLE = {\n  label: \"STRTOTUPLE key word\",\n  name: \"string to tuple\",\n  pattern: /STRTOTUPLE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (STRTOTUPLE);\n\n//# sourceURL=webpack:///./src/reserved_words/STRTOTUPLE.ts?");

/***/ }),

/***/ "./src/reserved_words/STRTOVAL.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/STRTOVAL.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst STRTOVAL = {\n  label: \"STRTOVAL key word\",\n  name: \"string to value\",\n  pattern: /STRTOVAL/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (STRTOVAL);\n\n//# sourceURL=webpack:///./src/reserved_words/STRTOVAL.ts?");

/***/ }),

/***/ "./src/reserved_words/STRTOVALUE.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/STRTOVALUE.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst STRTOVALUE = {\n  label: \"STRTOVALUE key word\",\n  name: \"string to value\",\n  pattern: /STRTOVALUE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (STRTOVALUE);\n\n//# sourceURL=webpack:///./src/reserved_words/STRTOVALUE.ts?");

/***/ }),

/***/ "./src/reserved_words/SUBSET.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/SUBSET.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SUBSET = {\n  label: \"SUBSET key word\",\n  name: \"subset\",\n  pattern: /SUBSET/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SUBSET);\n\n//# sourceURL=webpack:///./src/reserved_words/SUBSET.ts?");

/***/ }),

/***/ "./src/reserved_words/SUM.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/SUM.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SUM = {\n  label: \"SUM key word\",\n  name: \"sum\",\n  pattern: /SUM/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SUM);\n\n//# sourceURL=webpack:///./src/reserved_words/SUM.ts?");

/***/ }),

/***/ "./src/reserved_words/TAIL.ts":
/*!************************************!*\
  !*** ./src/reserved_words/TAIL.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TAIL = {\n  label: \"TAIL key word\",\n  name: \"tail\",\n  pattern: /TAIL/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TAIL);\n\n//# sourceURL=webpack:///./src/reserved_words/TAIL.ts?");

/***/ }),

/***/ "./src/reserved_words/THIS.ts":
/*!************************************!*\
  !*** ./src/reserved_words/THIS.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst THIS = {\n  label: \"THIS key word\",\n  name: \"this\",\n  pattern: /THIS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (THIS);\n\n//# sourceURL=webpack:///./src/reserved_words/THIS.ts?");

/***/ }),

/***/ "./src/reserved_words/TOGGLEDRILLSTATE.ts":
/*!************************************************!*\
  !*** ./src/reserved_words/TOGGLEDRILLSTATE.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TOGGLEDRILLSTATE = {\n  label: \"TOGGLEDRILLSTATE key word\",\n  name: \"toggle drill state\",\n  pattern: /TOGGLEDRILLSTATE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TOGGLEDRILLSTATE);\n\n//# sourceURL=webpack:///./src/reserved_words/TOGGLEDRILLSTATE.ts?");

/***/ }),

/***/ "./src/reserved_words/TOPCOUNT.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/TOPCOUNT.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TOPCOUNT = {\n  label: \"TOPCOUNT key word\",\n  name: \"top count\",\n  pattern: /TOPCOUNT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TOPCOUNT);\n\n//# sourceURL=webpack:///./src/reserved_words/TOPCOUNT.ts?");

/***/ }),

/***/ "./src/reserved_words/TOPPERCENT.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/TOPPERCENT.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TOPPERCENT = {\n  label: \"TOPPERCENT key word\",\n  name: \"top percent\",\n  pattern: /TOPPERCENT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TOPPERCENT);\n\n//# sourceURL=webpack:///./src/reserved_words/TOPPERCENT.ts?");

/***/ }),

/***/ "./src/reserved_words/TOPSUM.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/TOPSUM.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TOPSUM = {\n  label: \"TOPSUM key word\",\n  name: \"top sum\",\n  pattern: /TOPSUM/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TOPSUM);\n\n//# sourceURL=webpack:///./src/reserved_words/TOPSUM.ts?");

/***/ }),

/***/ "./src/reserved_words/TOTALS.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/TOTALS.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TOTALS = {\n  label: \"TOTALS key word\",\n  name: \"totals\",\n  pattern: /TOTALS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TOTALS);\n\n//# sourceURL=webpack:///./src/reserved_words/TOTALS.ts?");

/***/ }),

/***/ "./src/reserved_words/TREE.ts":
/*!************************************!*\
  !*** ./src/reserved_words/TREE.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TREE = {\n  label: \"TREE key word\",\n  name: \"tree\",\n  pattern: /TREE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TREE);\n\n//# sourceURL=webpack:///./src/reserved_words/TREE.ts?");

/***/ }),

/***/ "./src/reserved_words/TRUE.ts":
/*!************************************!*\
  !*** ./src/reserved_words/TRUE.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TRUE = {\n  label: \"TRUE key word\",\n  name: \"true\",\n  pattern: /TRUE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TRUE);\n\n//# sourceURL=webpack:///./src/reserved_words/TRUE.ts?");

/***/ }),

/***/ "./src/reserved_words/TUPLETOSTR.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/TUPLETOSTR.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TUPLETOSTR = {\n  label: \"TUPLETOSTR key word\",\n  name: \"tuple to string\",\n  pattern: /TUPLETOSTR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TUPLETOSTR);\n\n//# sourceURL=webpack:///./src/reserved_words/TUPLETOSTR.ts?");

/***/ }),

/***/ "./src/reserved_words/TYPE.ts":
/*!************************************!*\
  !*** ./src/reserved_words/TYPE.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TYPE = {\n  label: \"TYPE key word\",\n  name: \"type\",\n  pattern: /TYPE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TYPE);\n\n//# sourceURL=webpack:///./src/reserved_words/TYPE.ts?");

/***/ }),

/***/ "./src/reserved_words/UNION.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/UNION.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst UNION = {\n  label: \"UNION key word\",\n  name: \"union\",\n  pattern: /UNION/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UNION);\n\n//# sourceURL=webpack:///./src/reserved_words/UNION.ts?");

/***/ }),

/***/ "./src/reserved_words/UNIQUE.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/UNIQUE.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst UNIQUE = {\n  label: \"UNIQUE key word\",\n  name: \"unique\",\n  pattern: /UNIQUE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UNIQUE);\n\n//# sourceURL=webpack:///./src/reserved_words/UNIQUE.ts?");

/***/ }),

/***/ "./src/reserved_words/UNIQUENAME.ts":
/*!******************************************!*\
  !*** ./src/reserved_words/UNIQUENAME.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst UNIQUENAME = {\n  label: \"UNIQUENAME key word\",\n  name: \"unique name\",\n  pattern: /UNIQUENAME/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UNIQUENAME);\n\n//# sourceURL=webpack:///./src/reserved_words/UNIQUENAME.ts?");

/***/ }),

/***/ "./src/reserved_words/UPDATE.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/UPDATE.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst UPDATE = {\n  label: \"UPDATE key word\",\n  name: \"update\",\n  pattern: /UPDATE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UPDATE);\n\n//# sourceURL=webpack:///./src/reserved_words/UPDATE.ts?");

/***/ }),

/***/ "./src/reserved_words/USE.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/USE.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst USE = {\n  label: \"USE key word\",\n  name: \"use\",\n  pattern: /USE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (USE);\n\n//# sourceURL=webpack:///./src/reserved_words/USE.ts?");

/***/ }),

/***/ "./src/reserved_words/USERNAME.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/USERNAME.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst USERNAME = {\n  label: \"USERNAME key word\",\n  name: \"username\",\n  pattern: /USERNAME/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (USERNAME);\n\n//# sourceURL=webpack:///./src/reserved_words/USERNAME.ts?");

/***/ }),

/***/ "./src/reserved_words/USE_EQUAL_ALLOCATION.ts":
/*!****************************************************!*\
  !*** ./src/reserved_words/USE_EQUAL_ALLOCATION.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst USE_EQUAL_ALLOCATION = {\n  label: \"USE_EQUAL_ALLOCATION key word\",\n  name: \"use equal allocation\",\n  pattern: /USE_EQUAL_ALLOCATION/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (USE_EQUAL_ALLOCATION);\n\n//# sourceURL=webpack:///./src/reserved_words/USE_EQUAL_ALLOCATION.ts?");

/***/ }),

/***/ "./src/reserved_words/USE_WEIGHTED_ALLOCATION.ts":
/*!*******************************************************!*\
  !*** ./src/reserved_words/USE_WEIGHTED_ALLOCATION.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst USE_WEIGHTED_ALLOCATION = {\n  label: \"USE_WEIGHTED_ALLOCATION key word\",\n  name: \"use weighted allocation\",\n  pattern: /USE_WEIGHTED_ALLOCATION/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (USE_WEIGHTED_ALLOCATION);\n\n//# sourceURL=webpack:///./src/reserved_words/USE_WEIGHTED_ALLOCATION.ts?");

/***/ }),

/***/ "./src/reserved_words/USE_WEIGHTED_INCREMENT.ts":
/*!******************************************************!*\
  !*** ./src/reserved_words/USE_WEIGHTED_INCREMENT.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst USE_WEIGHTED_INCREMENT = {\n  label: \"USE_WEIGHTED_INCREMENT key word\",\n  name: \"use weighted increment\",\n  pattern: /USE_WEIGHTED_INCREMENT/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (USE_WEIGHTED_INCREMENT);\n\n//# sourceURL=webpack:///./src/reserved_words/USE_WEIGHTED_INCREMENT.ts?");

/***/ }),

/***/ "./src/reserved_words/VALIDMEASURE.ts":
/*!********************************************!*\
  !*** ./src/reserved_words/VALIDMEASURE.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst VALIDMEASURE = {\n  label: \"VALIDMEASURE key word\",\n  name: \"valid measure\",\n  pattern: /VALIDMEASURE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (VALIDMEASURE);\n\n//# sourceURL=webpack:///./src/reserved_words/VALIDMEASURE.ts?");

/***/ }),

/***/ "./src/reserved_words/VALUE.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/VALUE.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst VALUE = {\n  label: \"VALUE key word\",\n  name: \"value\",\n  pattern: /VALUE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (VALUE);\n\n//# sourceURL=webpack:///./src/reserved_words/VALUE.ts?");

/***/ }),

/***/ "./src/reserved_words/VAR.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/VAR.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst VAR = {\n  label: \"VAR key word\",\n  name: \"var\",\n  pattern: /VAR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (VAR);\n\n//# sourceURL=webpack:///./src/reserved_words/VAR.ts?");

/***/ }),

/***/ "./src/reserved_words/VARIANCE.ts":
/*!****************************************!*\
  !*** ./src/reserved_words/VARIANCE.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst VARIANCE = {\n  label: \"VARIANCE key word\",\n  name: \"variance\",\n  pattern: /VARIANCE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (VARIANCE);\n\n//# sourceURL=webpack:///./src/reserved_words/VARIANCE.ts?");

/***/ }),

/***/ "./src/reserved_words/VARIANCEP.ts":
/*!*****************************************!*\
  !*** ./src/reserved_words/VARIANCEP.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst VARIANCEP = {\n  label: \"VARIANCEP key word\",\n  name: \"variancep\",\n  pattern: /VARIANCEP/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (VARIANCEP);\n\n//# sourceURL=webpack:///./src/reserved_words/VARIANCEP.ts?");

/***/ }),

/***/ "./src/reserved_words/VARP.ts":
/*!************************************!*\
  !*** ./src/reserved_words/VARP.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst VARP = {\n  label: \"VARP key word\",\n  name: \"varp\",\n  pattern: /VARP/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (VARP);\n\n//# sourceURL=webpack:///./src/reserved_words/VARP.ts?");

/***/ }),

/***/ "./src/reserved_words/VISUAL.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/VISUAL.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst VISUAL = {\n  label: \"VISUAL key word\",\n  name: \"visual\",\n  pattern: /VISUAL/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (VISUAL);\n\n//# sourceURL=webpack:///./src/reserved_words/VISUAL.ts?");

/***/ }),

/***/ "./src/reserved_words/VISUALTOTALS.ts":
/*!********************************************!*\
  !*** ./src/reserved_words/VISUALTOTALS.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst VISUALTOTALS = {\n  label: \"VISUALTOTALS key word\",\n  name: \"visual totals\",\n  pattern: /VISUALTOTALS/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (VISUALTOTALS);\n\n//# sourceURL=webpack:///./src/reserved_words/VISUALTOTALS.ts?");

/***/ }),

/***/ "./src/reserved_words/WHERE.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/WHERE.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst WHERE = {\n  label: \"WHERE key word\",\n  name: \"where\",\n  pattern: /WHERE/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WHERE);\n\n//# sourceURL=webpack:///./src/reserved_words/WHERE.ts?");

/***/ }),

/***/ "./src/reserved_words/WITH.ts":
/*!************************************!*\
  !*** ./src/reserved_words/WITH.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst WITH = {\n  label: \"WITH key word\",\n  name: \"with\",\n  pattern: /WITH/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WITH);\n\n//# sourceURL=webpack:///./src/reserved_words/WITH.ts?");

/***/ }),

/***/ "./src/reserved_words/WTD.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/WTD.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst WTD = {\n  label: \"WTD key word\",\n  name: \"wtd\",\n  pattern: /WTD/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WTD);\n\n//# sourceURL=webpack:///./src/reserved_words/WTD.ts?");

/***/ }),

/***/ "./src/reserved_words/XOR.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/XOR.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst XOR = {\n  label: \"XOR key word\",\n  name: \"xor\",\n  pattern: /XOR/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (XOR);\n\n//# sourceURL=webpack:///./src/reserved_words/XOR.ts?");

/***/ }),

/***/ "./src/reserved_words/YTD.ts":
/*!***********************************!*\
  !*** ./src/reserved_words/YTD.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst YTD = {\n  label: \"YTD key word\",\n  name: \"ytd\",\n  pattern: /YTD/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (YTD);\n\n//# sourceURL=webpack:///./src/reserved_words/YTD.ts?");

/***/ }),

/***/ "./src/reserved_words/_INDEX.ts":
/*!**************************************!*\
  !*** ./src/reserved_words/_INDEX.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst INDEX = {\n  label: \"INDEX key word\",\n  name: \"index\",\n  pattern: /INDEX/\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (INDEX);\n\n//# sourceURL=webpack:///./src/reserved_words/_INDEX.ts?");

/***/ }),

/***/ "./src/reserved_words/index.ts":
/*!*************************************!*\
  !*** ./src/reserved_words/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ABSOLUTE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ABSOLUTE */ \"./src/reserved_words/ABSOLUTE.ts\");\n/* harmony import */ var _ACTIONPARAMETERSET__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ACTIONPARAMETERSET */ \"./src/reserved_words/ACTIONPARAMETERSET.ts\");\n/* harmony import */ var _ADDCALCULATEDMEMBERS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ADDCALCULATEDMEMBERS */ \"./src/reserved_words/ADDCALCULATEDMEMBERS.ts\");\n/* harmony import */ var _AFTER__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AFTER */ \"./src/reserved_words/AFTER.ts\");\n/* harmony import */ var _AGGREGATE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AGGREGATE */ \"./src/reserved_words/AGGREGATE.ts\");\n/* harmony import */ var _ALL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ALL */ \"./src/reserved_words/ALL.ts\");\n/* harmony import */ var _ALLMEMBERS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ALLMEMBERS */ \"./src/reserved_words/ALLMEMBERS.ts\");\n/* harmony import */ var _ANCESTOR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ANCESTOR */ \"./src/reserved_words/ANCESTOR.ts\");\n/* harmony import */ var _ANCESTORS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ANCESTORS */ \"./src/reserved_words/ANCESTORS.ts\");\n/* harmony import */ var _AND__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AND */ \"./src/reserved_words/AND.ts\");\n/* harmony import */ var _AS__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AS */ \"./src/reserved_words/AS.ts\");\n/* harmony import */ var _ASC__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ASC */ \"./src/reserved_words/ASC.ts\");\n/* harmony import */ var _ASCENDANTS__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ASCENDANTS */ \"./src/reserved_words/ASCENDANTS.ts\");\n/* harmony import */ var _AVERAGE__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AVERAGE */ \"./src/reserved_words/AVERAGE.ts\");\n/* harmony import */ var _AXIS__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AXIS */ \"./src/reserved_words/AXIS.ts\");\n/* harmony import */ var _BASC__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BASC */ \"./src/reserved_words/BASC.ts\");\n/* harmony import */ var _BDESC__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./BDESC */ \"./src/reserved_words/BDESC.ts\");\n/* harmony import */ var _BEFORE__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./BEFORE */ \"./src/reserved_words/BEFORE.ts\");\n/* harmony import */ var _BEFORE_AND_AFTER__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./BEFORE_AND_AFTER */ \"./src/reserved_words/BEFORE_AND_AFTER.ts\");\n/* harmony import */ var _BOTTOMCOUNT__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./BOTTOMCOUNT */ \"./src/reserved_words/BOTTOMCOUNT.ts\");\n/* harmony import */ var _BOTTOMPERCENT__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./BOTTOMPERCENT */ \"./src/reserved_words/BOTTOMPERCENT.ts\");\n/* harmony import */ var _BOTTOMSUM__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./BOTTOMSUM */ \"./src/reserved_words/BOTTOMSUM.ts\");\n/* harmony import */ var _BY__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./BY */ \"./src/reserved_words/BY.ts\");\n/* harmony import */ var _CACHE__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./CACHE */ \"./src/reserved_words/CACHE.ts\");\n/* harmony import */ var _CALCULATE__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./CALCULATE */ \"./src/reserved_words/CALCULATE.ts\");\n/* harmony import */ var _CALCULATION__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./CALCULATION */ \"./src/reserved_words/CALCULATION.ts\");\n/* harmony import */ var _CALCULATIONCURRENTPASS__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./CALCULATIONCURRENTPASS */ \"./src/reserved_words/CALCULATIONCURRENTPASS.ts\");\n/* harmony import */ var _CALCULATIONPASSVALUE__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./CALCULATIONPASSVALUE */ \"./src/reserved_words/CALCULATIONPASSVALUE.ts\");\n/* harmony import */ var _CALCULATIONS__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./CALCULATIONS */ \"./src/reserved_words/CALCULATIONS.ts\");\n/* harmony import */ var _CALL__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./CALL */ \"./src/reserved_words/CALL.ts\");\n/* harmony import */ var _CELL__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./CELL */ \"./src/reserved_words/CELL.ts\");\n/* harmony import */ var _CELLFORMULASETLIST__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./CELLFORMULASETLIST */ \"./src/reserved_words/CELLFORMULASETLIST.ts\");\n/* harmony import */ var _CHAPTERS__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./CHAPTERS */ \"./src/reserved_words/CHAPTERS.ts\");\n/* harmony import */ var _CHILDREN__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./CHILDREN */ \"./src/reserved_words/CHILDREN.ts\");\n/* harmony import */ var _CLEAR__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./CLEAR */ \"./src/reserved_words/CLEAR.ts\");\n/* harmony import */ var _CLOSINGPERIOD__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./CLOSINGPERIOD */ \"./src/reserved_words/CLOSINGPERIOD.ts\");\n/* harmony import */ var _COALESCEEMPTY__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./COALESCEEMPTY */ \"./src/reserved_words/COALESCEEMPTY.ts\");\n/* harmony import */ var _COLUMN__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./COLUMN */ \"./src/reserved_words/COLUMN.ts\");\n/* harmony import */ var _COLUMNS__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./COLUMNS */ \"./src/reserved_words/COLUMNS.ts\");\n/* harmony import */ var _CORRELATION__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./CORRELATION */ \"./src/reserved_words/CORRELATION.ts\");\n/* harmony import */ var _COUNT__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./COUNT */ \"./src/reserved_words/COUNT.ts\");\n/* harmony import */ var _COUSIN__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./COUSIN */ \"./src/reserved_words/COUSIN.ts\");\n/* harmony import */ var _COVARIANCE__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./COVARIANCE */ \"./src/reserved_words/COVARIANCE.ts\");\n/* harmony import */ var _COVARIANCEN__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./COVARIANCEN */ \"./src/reserved_words/COVARIANCEN.ts\");\n/* harmony import */ var _CREATE__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./CREATE */ \"./src/reserved_words/CREATE.ts\");\n/* harmony import */ var _CREATEPROPERTYSET__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./CREATEPROPERTYSET */ \"./src/reserved_words/CREATEPROPERTYSET.ts\");\n/* harmony import */ var _CREATEVIRTUALDIMENSION__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./CREATEVIRTUALDIMENSION */ \"./src/reserved_words/CREATEVIRTUALDIMENSION.ts\");\n/* harmony import */ var _CROSSJOIN__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./CROSSJOIN */ \"./src/reserved_words/CROSSJOIN.ts\");\n/* harmony import */ var _CUBE__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./CUBE */ \"./src/reserved_words/CUBE.ts\");\n/* harmony import */ var _CURRENT__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./CURRENT */ \"./src/reserved_words/CURRENT.ts\");\n/* harmony import */ var _CURRENTCUBE__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./CURRENTCUBE */ \"./src/reserved_words/CURRENTCUBE.ts\");\n/* harmony import */ var _CURRENTMEMBER__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./CURRENTMEMBER */ \"./src/reserved_words/CURRENTMEMBER.ts\");\n/* harmony import */ var _DEFAULTMEMBER__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./DEFAULTMEMBER */ \"./src/reserved_words/DEFAULTMEMBER.ts\");\n/* harmony import */ var _DEFAULT_MEMBER__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./DEFAULT_MEMBER */ \"./src/reserved_words/DEFAULT_MEMBER.ts\");\n/* harmony import */ var _DESC__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./DESC */ \"./src/reserved_words/DESC.ts\");\n/* harmony import */ var _DESCENDANTS__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./DESCENDANTS */ \"./src/reserved_words/DESCENDANTS.ts\");\n/* harmony import */ var _DESCRIPTION__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./DESCRIPTION */ \"./src/reserved_words/DESCRIPTION.ts\");\n/* harmony import */ var _DIMENSION__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./DIMENSION */ \"./src/reserved_words/DIMENSION.ts\");\n/* harmony import */ var _DIMENSIONS__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./DIMENSIONS */ \"./src/reserved_words/DIMENSIONS.ts\");\n/* harmony import */ var _DISTINCT__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./DISTINCT */ \"./src/reserved_words/DISTINCT.ts\");\n/* harmony import */ var _DISTINCTCOUNT__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./DISTINCTCOUNT */ \"./src/reserved_words/DISTINCTCOUNT.ts\");\n/* harmony import */ var _DRILLDOWNLEVEL__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./DRILLDOWNLEVEL */ \"./src/reserved_words/DRILLDOWNLEVEL.ts\");\n/* harmony import */ var _DRILLDOWNLEVELBOTTOM__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./DRILLDOWNLEVELBOTTOM */ \"./src/reserved_words/DRILLDOWNLEVELBOTTOM.ts\");\n/* harmony import */ var _DRILLDOWNLEVELTOP__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./DRILLDOWNLEVELTOP */ \"./src/reserved_words/DRILLDOWNLEVELTOP.ts\");\n/* harmony import */ var _DRILLDOWNMEMBER__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./DRILLDOWNMEMBER */ \"./src/reserved_words/DRILLDOWNMEMBER.ts\");\n/* harmony import */ var _DRILLDOWNMEMBERBOTTOM__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./DRILLDOWNMEMBERBOTTOM */ \"./src/reserved_words/DRILLDOWNMEMBERBOTTOM.ts\");\n/* harmony import */ var _DRILLDOWNMEMBERTOP__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./DRILLDOWNMEMBERTOP */ \"./src/reserved_words/DRILLDOWNMEMBERTOP.ts\");\n/* harmony import */ var _DRILLUPLEVEL__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./DRILLUPLEVEL */ \"./src/reserved_words/DRILLUPLEVEL.ts\");\n/* harmony import */ var _DRILLUPMEMBER__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./DRILLUPMEMBER */ \"./src/reserved_words/DRILLUPMEMBER.ts\");\n/* harmony import */ var _DROP__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./DROP */ \"./src/reserved_words/DROP.ts\");\n/* harmony import */ var _EMPTY__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./EMPTY */ \"./src/reserved_words/EMPTY.ts\");\n/* harmony import */ var _END__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./END */ \"./src/reserved_words/END.ts\");\n/* harmony import */ var _ERROR__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./ERROR */ \"./src/reserved_words/ERROR.ts\");\n/* harmony import */ var _EXCEPT__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./EXCEPT */ \"./src/reserved_words/EXCEPT.ts\");\n/* harmony import */ var _EXCLUDEEMPTY__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./EXCLUDEEMPTY */ \"./src/reserved_words/EXCLUDEEMPTY.ts\");\n/* harmony import */ var _EXTRACT__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./EXTRACT */ \"./src/reserved_words/EXTRACT.ts\");\n/* harmony import */ var _FALSE__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./FALSE */ \"./src/reserved_words/FALSE.ts\");\n/* harmony import */ var _FILTER__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./FILTER */ \"./src/reserved_words/FILTER.ts\");\n/* harmony import */ var _FIRSTCHILD__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./FIRSTCHILD */ \"./src/reserved_words/FIRSTCHILD.ts\");\n/* harmony import */ var _FIRSTSIBLING__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./FIRSTSIBLING */ \"./src/reserved_words/FIRSTSIBLING.ts\");\n/* harmony import */ var _FOR__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./FOR */ \"./src/reserved_words/FOR.ts\");\n/* harmony import */ var _FREEZE__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./FREEZE */ \"./src/reserved_words/FREEZE.ts\");\n/* harmony import */ var _FROM__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./FROM */ \"./src/reserved_words/FROM.ts\");\n/* harmony import */ var _GENERATE__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./GENERATE */ \"./src/reserved_words/GENERATE.ts\");\n/* harmony import */ var _GLOBAL__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./GLOBAL */ \"./src/reserved_words/GLOBAL.ts\");\n/* harmony import */ var _GROUP__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./GROUP */ \"./src/reserved_words/GROUP.ts\");\n/* harmony import */ var _GROUPING__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./GROUPING */ \"./src/reserved_words/GROUPING.ts\");\n/* harmony import */ var _HEAD__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./HEAD */ \"./src/reserved_words/HEAD.ts\");\n/* harmony import */ var _HIDDEN__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./HIDDEN */ \"./src/reserved_words/HIDDEN.ts\");\n/* harmony import */ var _HIERARCHIZE__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./HIERARCHIZE */ \"./src/reserved_words/HIERARCHIZE.ts\");\n/* harmony import */ var _HIERARCHY__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./HIERARCHY */ \"./src/reserved_words/HIERARCHY.ts\");\n/* harmony import */ var _IGNORE__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./IGNORE */ \"./src/reserved_words/IGNORE.ts\");\n/* harmony import */ var _IIF__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./IIF */ \"./src/reserved_words/IIF.ts\");\n/* harmony import */ var _INCLUDEEMPTY__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./INCLUDEEMPTY */ \"./src/reserved_words/INCLUDEEMPTY.ts\");\n/* harmony import */ var _INDEX__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./_INDEX */ \"./src/reserved_words/_INDEX.ts\");\n/* harmony import */ var _INTERSECT__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./INTERSECT */ \"./src/reserved_words/INTERSECT.ts\");\n/* harmony import */ var _IS__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./IS */ \"./src/reserved_words/IS.ts\");\n/* harmony import */ var _ISANCESTOR__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./ISANCESTOR */ \"./src/reserved_words/ISANCESTOR.ts\");\n/* harmony import */ var _ISEMPTY__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./ISEMPTY */ \"./src/reserved_words/ISEMPTY.ts\");\n/* harmony import */ var _ISGENERATION__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./ISGENERATION */ \"./src/reserved_words/ISGENERATION.ts\");\n/* harmony import */ var _ISLEAF__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./ISLEAF */ \"./src/reserved_words/ISLEAF.ts\");\n/* harmony import */ var _ISSIBLING__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./ISSIBLING */ \"./src/reserved_words/ISSIBLING.ts\");\n/* harmony import */ var _ITEM__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./ITEM */ \"./src/reserved_words/ITEM.ts\");\n/* harmony import */ var _LAG__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./LAG */ \"./src/reserved_words/LAG.ts\");\n/* harmony import */ var _LASTCHILD__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./LASTCHILD */ \"./src/reserved_words/LASTCHILD.ts\");\n/* harmony import */ var _LASTPERIODS__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./LASTPERIODS */ \"./src/reserved_words/LASTPERIODS.ts\");\n/* harmony import */ var _LASTSIBLING__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./LASTSIBLING */ \"./src/reserved_words/LASTSIBLING.ts\");\n/* harmony import */ var _LEAD__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./LEAD */ \"./src/reserved_words/LEAD.ts\");\n/* harmony import */ var _LEAVES__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./LEAVES */ \"./src/reserved_words/LEAVES.ts\");\n/* harmony import */ var _LEVEL__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./LEVEL */ \"./src/reserved_words/LEVEL.ts\");\n/* harmony import */ var _LEVELS__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./LEVELS */ \"./src/reserved_words/LEVELS.ts\");\n/* harmony import */ var _LINKMEMBER__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./LINKMEMBER */ \"./src/reserved_words/LINKMEMBER.ts\");\n/* harmony import */ var _LINREGINTERCEPT__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./LINREGINTERCEPT */ \"./src/reserved_words/LINREGINTERCEPT.ts\");\n/* harmony import */ var _LINREGPOINT__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./LINREGPOINT */ \"./src/reserved_words/LINREGPOINT.ts\");\n/* harmony import */ var _LINREGR2__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./LINREGR2 */ \"./src/reserved_words/LINREGR2.ts\");\n/* harmony import */ var _LINREGSLOPE__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./LINREGSLOPE */ \"./src/reserved_words/LINREGSLOPE.ts\");\n/* harmony import */ var _LINREGVARIANCE__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./LINREGVARIANCE */ \"./src/reserved_words/LINREGVARIANCE.ts\");\n/* harmony import */ var _LOOKUPCUBE__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./LOOKUPCUBE */ \"./src/reserved_words/LOOKUPCUBE.ts\");\n/* harmony import */ var _MAX__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./MAX */ \"./src/reserved_words/MAX.ts\");\n/* harmony import */ var _MEASURE__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./MEASURE */ \"./src/reserved_words/MEASURE.ts\");\n/* harmony import */ var _MEDIAN__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./MEDIAN */ \"./src/reserved_words/MEDIAN.ts\");\n/* harmony import */ var _MEMBER__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./MEMBER */ \"./src/reserved_words/MEMBER.ts\");\n/* harmony import */ var _MEMBERS__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./MEMBERS */ \"./src/reserved_words/MEMBERS.ts\");\n/* harmony import */ var _MEMBERTOSTR__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./MEMBERTOSTR */ \"./src/reserved_words/MEMBERTOSTR.ts\");\n/* harmony import */ var _MIN__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./MIN */ \"./src/reserved_words/MIN.ts\");\n/* harmony import */ var _MTD__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./MTD */ \"./src/reserved_words/MTD.ts\");\n/* harmony import */ var _NAME__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./NAME */ \"./src/reserved_words/NAME.ts\");\n/* harmony import */ var _NAMETOSET__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./NAMETOSET */ \"./src/reserved_words/NAMETOSET.ts\");\n/* harmony import */ var _NEST__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./NEST */ \"./src/reserved_words/NEST.ts\");\n/* harmony import */ var _NEXTMEMBER__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./NEXTMEMBER */ \"./src/reserved_words/NEXTMEMBER.ts\");\n/* harmony import */ var _NON__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./NON */ \"./src/reserved_words/NON.ts\");\n/* harmony import */ var _NONEMPTYCROSSJOIN__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./NONEMPTYCROSSJOIN */ \"./src/reserved_words/NONEMPTYCROSSJOIN.ts\");\n/* harmony import */ var _NOT_RELATED_TO_FACTS__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./NOT_RELATED_TO_FACTS */ \"./src/reserved_words/NOT_RELATED_TO_FACTS.ts\");\n/* harmony import */ var _NO_ALLOCATION__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./NO_ALLOCATION */ \"./src/reserved_words/NO_ALLOCATION.ts\");\n/* harmony import */ var _NO_PROPERTIES__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./NO_PROPERTIES */ \"./src/reserved_words/NO_PROPERTIES.ts\");\n/* harmony import */ var _NULL__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./NULL */ \"./src/reserved_words/NULL.ts\");\n/* harmony import */ var _ON__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./ON */ \"./src/reserved_words/ON.ts\");\n/* harmony import */ var _OPENINGPERIOD__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./OPENINGPERIOD */ \"./src/reserved_words/OPENINGPERIOD.ts\");\n/* harmony import */ var _OR__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./OR */ \"./src/reserved_words/OR.ts\");\n/* harmony import */ var _PAGES__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./PAGES */ \"./src/reserved_words/PAGES.ts\");\n/* harmony import */ var _PARALLELPERIOD__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./PARALLELPERIOD */ \"./src/reserved_words/PARALLELPERIOD.ts\");\n/* harmony import */ var _PARENT__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./PARENT */ \"./src/reserved_words/PARENT.ts\");\n/* harmony import */ var _PASS__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./PASS */ \"./src/reserved_words/PASS.ts\");\n/* harmony import */ var _PERIODSTODATE__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./PERIODSTODATE */ \"./src/reserved_words/PERIODSTODATE.ts\");\n/* harmony import */ var _POST__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./POST */ \"./src/reserved_words/POST.ts\");\n/* harmony import */ var _PREDICT__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./PREDICT */ \"./src/reserved_words/PREDICT.ts\");\n/* harmony import */ var _PREVMEMBER__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./PREVMEMBER */ \"./src/reserved_words/PREVMEMBER.ts\");\n/* harmony import */ var _PROPERTIES__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./PROPERTIES */ \"./src/reserved_words/PROPERTIES.ts\");\n/* harmony import */ var _PROPERTY__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./PROPERTY */ \"./src/reserved_words/PROPERTY.ts\");\n/* harmony import */ var _QTD__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./QTD */ \"./src/reserved_words/QTD.ts\");\n/* harmony import */ var _RANK__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./RANK */ \"./src/reserved_words/RANK.ts\");\n/* harmony import */ var _RECURSIVE__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./RECURSIVE */ \"./src/reserved_words/RECURSIVE.ts\");\n/* harmony import */ var _RELATIVE__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./RELATIVE */ \"./src/reserved_words/RELATIVE.ts\");\n/* harmony import */ var _ROLLUPCHILDREN__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./ROLLUPCHILDREN */ \"./src/reserved_words/ROLLUPCHILDREN.ts\");\n/* harmony import */ var _ROOT__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./ROOT */ \"./src/reserved_words/ROOT.ts\");\n/* harmony import */ var _ROWS__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./ROWS */ \"./src/reserved_words/ROWS.ts\");\n/* harmony import */ var _SCOPE__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./SCOPE */ \"./src/reserved_words/SCOPE.ts\");\n/* harmony import */ var _SECTIONS__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./SECTIONS */ \"./src/reserved_words/SECTIONS.ts\");\n/* harmony import */ var _SELECT__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./SELECT */ \"./src/reserved_words/SELECT.ts\");\n/* harmony import */ var _SELF__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./SELF */ \"./src/reserved_words/SELF.ts\");\n/* harmony import */ var _SELF_AND_AFTER__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./SELF_AND_AFTER */ \"./src/reserved_words/SELF_AND_AFTER.ts\");\n/* harmony import */ var _SELF_AND_BEFORE__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./SELF_AND_BEFORE */ \"./src/reserved_words/SELF_AND_BEFORE.ts\");\n/* harmony import */ var _SELF_BEFORE_AFTER__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./SELF_BEFORE_AFTER */ \"./src/reserved_words/SELF_BEFORE_AFTER.ts\");\n/* harmony import */ var _SESSION__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./SESSION */ \"./src/reserved_words/SESSION.ts\");\n/* harmony import */ var _SET__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./SET */ \"./src/reserved_words/SET.ts\");\n/* harmony import */ var _SETTOARRAY__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./SETTOARRAY */ \"./src/reserved_words/SETTOARRAY.ts\");\n/* harmony import */ var _SETTOSTR__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./SETTOSTR */ \"./src/reserved_words/SETTOSTR.ts\");\n/* harmony import */ var _SORT__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./SORT */ \"./src/reserved_words/SORT.ts\");\n/* harmony import */ var _STDDEV__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./STDDEV */ \"./src/reserved_words/STDDEV.ts\");\n/* harmony import */ var _STDDEVP__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./STDDEVP */ \"./src/reserved_words/STDDEVP.ts\");\n/* harmony import */ var _STDEV__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./STDEV */ \"./src/reserved_words/STDEV.ts\");\n/* harmony import */ var _STDEVP__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./STDEVP */ \"./src/reserved_words/STDEVP.ts\");\n/* harmony import */ var _STORAGE__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./STORAGE */ \"./src/reserved_words/STORAGE.ts\");\n/* harmony import */ var _STRIPCALCULATEDMEMBERS__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./STRIPCALCULATEDMEMBERS */ \"./src/reserved_words/STRIPCALCULATEDMEMBERS.ts\");\n/* harmony import */ var _STRTOMEMBER__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./STRTOMEMBER */ \"./src/reserved_words/STRTOMEMBER.ts\");\n/* harmony import */ var _STRTOSET__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./STRTOSET */ \"./src/reserved_words/STRTOSET.ts\");\n/* harmony import */ var _STRTOTUPLE__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./STRTOTUPLE */ \"./src/reserved_words/STRTOTUPLE.ts\");\n/* harmony import */ var _STRTOVAL__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./STRTOVAL */ \"./src/reserved_words/STRTOVAL.ts\");\n/* harmony import */ var _STRTOVALUE__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./STRTOVALUE */ \"./src/reserved_words/STRTOVALUE.ts\");\n/* harmony import */ var _SUBSET__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./SUBSET */ \"./src/reserved_words/SUBSET.ts\");\n/* harmony import */ var _SUM__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./SUM */ \"./src/reserved_words/SUM.ts\");\n/* harmony import */ var _TAIL__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./TAIL */ \"./src/reserved_words/TAIL.ts\");\n/* harmony import */ var _THIS__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./THIS */ \"./src/reserved_words/THIS.ts\");\n/* harmony import */ var _TOGGLEDRILLSTATE__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./TOGGLEDRILLSTATE */ \"./src/reserved_words/TOGGLEDRILLSTATE.ts\");\n/* harmony import */ var _TOPCOUNT__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./TOPCOUNT */ \"./src/reserved_words/TOPCOUNT.ts\");\n/* harmony import */ var _TOPPERCENT__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./TOPPERCENT */ \"./src/reserved_words/TOPPERCENT.ts\");\n/* harmony import */ var _TOPSUM__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./TOPSUM */ \"./src/reserved_words/TOPSUM.ts\");\n/* harmony import */ var _TOTALS__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./TOTALS */ \"./src/reserved_words/TOTALS.ts\");\n/* harmony import */ var _TREE__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./TREE */ \"./src/reserved_words/TREE.ts\");\n/* harmony import */ var _TRUE__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./TRUE */ \"./src/reserved_words/TRUE.ts\");\n/* harmony import */ var _TUPLETOSTR__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./TUPLETOSTR */ \"./src/reserved_words/TUPLETOSTR.ts\");\n/* harmony import */ var _TYPE__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./TYPE */ \"./src/reserved_words/TYPE.ts\");\n/* harmony import */ var _UNION__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./UNION */ \"./src/reserved_words/UNION.ts\");\n/* harmony import */ var _UNIQUE__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./UNIQUE */ \"./src/reserved_words/UNIQUE.ts\");\n/* harmony import */ var _UNIQUENAME__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./UNIQUENAME */ \"./src/reserved_words/UNIQUENAME.ts\");\n/* harmony import */ var _UPDATE__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./UPDATE */ \"./src/reserved_words/UPDATE.ts\");\n/* harmony import */ var _USE__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./USE */ \"./src/reserved_words/USE.ts\");\n/* harmony import */ var _USERNAME__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./USERNAME */ \"./src/reserved_words/USERNAME.ts\");\n/* harmony import */ var _USE_EQUAL_ALLOCATION__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./USE_EQUAL_ALLOCATION */ \"./src/reserved_words/USE_EQUAL_ALLOCATION.ts\");\n/* harmony import */ var _USE_WEIGHTED_ALLOCATION__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./USE_WEIGHTED_ALLOCATION */ \"./src/reserved_words/USE_WEIGHTED_ALLOCATION.ts\");\n/* harmony import */ var _USE_WEIGHTED_INCREMENT__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./USE_WEIGHTED_INCREMENT */ \"./src/reserved_words/USE_WEIGHTED_INCREMENT.ts\");\n/* harmony import */ var _VALIDMEASURE__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./VALIDMEASURE */ \"./src/reserved_words/VALIDMEASURE.ts\");\n/* harmony import */ var _VALUE__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./VALUE */ \"./src/reserved_words/VALUE.ts\");\n/* harmony import */ var _VAR__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./VAR */ \"./src/reserved_words/VAR.ts\");\n/* harmony import */ var _VARIANCE__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./VARIANCE */ \"./src/reserved_words/VARIANCE.ts\");\n/* harmony import */ var _VARIANCEP__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./VARIANCEP */ \"./src/reserved_words/VARIANCEP.ts\");\n/* harmony import */ var _VARP__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./VARP */ \"./src/reserved_words/VARP.ts\");\n/* harmony import */ var _VISUAL__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./VISUAL */ \"./src/reserved_words/VISUAL.ts\");\n/* harmony import */ var _VISUALTOTALS__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./VISUALTOTALS */ \"./src/reserved_words/VISUALTOTALS.ts\");\n/* harmony import */ var _WHERE__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./WHERE */ \"./src/reserved_words/WHERE.ts\");\n/* harmony import */ var _WITH__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./WITH */ \"./src/reserved_words/WITH.ts\");\n/* harmony import */ var _WTD__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./WTD */ \"./src/reserved_words/WTD.ts\");\n/* harmony import */ var _XOR__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./XOR */ \"./src/reserved_words/XOR.ts\");\n/* harmony import */ var _YTD__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./YTD */ \"./src/reserved_words/YTD.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ABSOLUTE: _ABSOLUTE__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ACTIONPARAMETERSET: _ACTIONPARAMETERSET__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  ADDCALCULATEDMEMBERS: _ADDCALCULATEDMEMBERS__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  AFTER: _AFTER__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  AGGREGATE: _AGGREGATE__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  ALL: _ALL__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  ALLMEMBERS: _ALLMEMBERS__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  ANCESTOR: _ANCESTOR__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  ANCESTORS: _ANCESTORS__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  AND: _AND__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  AS: _AS__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  ASC: _ASC__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  ASCENDANTS: _ASCENDANTS__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  AVERAGE: _AVERAGE__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  AXIS: _AXIS__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  BASC: _BASC__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  BDESC: _BDESC__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  BEFORE: _BEFORE__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  BEFORE_AND_AFTER: _BEFORE_AND_AFTER__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  BOTTOMCOUNT: _BOTTOMCOUNT__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  BOTTOMPERCENT: _BOTTOMPERCENT__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n  BOTTOMSUM: _BOTTOMSUM__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  BY: _BY__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  CACHE: _CACHE__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n  CALCULATE: _CALCULATE__WEBPACK_IMPORTED_MODULE_24__[\"default\"],\n  CALCULATION: _CALCULATION__WEBPACK_IMPORTED_MODULE_25__[\"default\"],\n  CALCULATIONCURRENTPASS: _CALCULATIONCURRENTPASS__WEBPACK_IMPORTED_MODULE_26__[\"default\"],\n  CALCULATIONPASSVALUE: _CALCULATIONPASSVALUE__WEBPACK_IMPORTED_MODULE_27__[\"default\"],\n  CALCULATIONS: _CALCULATIONS__WEBPACK_IMPORTED_MODULE_28__[\"default\"],\n  CALL: _CALL__WEBPACK_IMPORTED_MODULE_29__[\"default\"],\n  CELL: _CELL__WEBPACK_IMPORTED_MODULE_30__[\"default\"],\n  CELLFORMULASETLIST: _CELLFORMULASETLIST__WEBPACK_IMPORTED_MODULE_31__[\"default\"],\n  CHAPTERS: _CHAPTERS__WEBPACK_IMPORTED_MODULE_32__[\"default\"],\n  CHILDREN: _CHILDREN__WEBPACK_IMPORTED_MODULE_33__[\"default\"],\n  CLEAR: _CLEAR__WEBPACK_IMPORTED_MODULE_34__[\"default\"],\n  CLOSINGPERIOD: _CLOSINGPERIOD__WEBPACK_IMPORTED_MODULE_35__[\"default\"],\n  COALESCEEMPTY: _COALESCEEMPTY__WEBPACK_IMPORTED_MODULE_36__[\"default\"],\n  COLUMN: _COLUMN__WEBPACK_IMPORTED_MODULE_37__[\"default\"],\n  COLUMNS: _COLUMNS__WEBPACK_IMPORTED_MODULE_38__[\"default\"],\n  CORRELATION: _CORRELATION__WEBPACK_IMPORTED_MODULE_39__[\"default\"],\n  COUNT: _COUNT__WEBPACK_IMPORTED_MODULE_40__[\"default\"],\n  COUSIN: _COUSIN__WEBPACK_IMPORTED_MODULE_41__[\"default\"],\n  COVARIANCE: _COVARIANCE__WEBPACK_IMPORTED_MODULE_42__[\"default\"],\n  COVARIANCEN: _COVARIANCEN__WEBPACK_IMPORTED_MODULE_43__[\"default\"],\n  CREATE: _CREATE__WEBPACK_IMPORTED_MODULE_44__[\"default\"],\n  CREATEPROPERTYSET: _CREATEPROPERTYSET__WEBPACK_IMPORTED_MODULE_45__[\"default\"],\n  CREATEVIRTUALDIMENSION: _CREATEVIRTUALDIMENSION__WEBPACK_IMPORTED_MODULE_46__[\"default\"],\n  CROSSJOIN: _CROSSJOIN__WEBPACK_IMPORTED_MODULE_47__[\"default\"],\n  CUBE: _CUBE__WEBPACK_IMPORTED_MODULE_48__[\"default\"],\n  CURRENT: _CURRENT__WEBPACK_IMPORTED_MODULE_49__[\"default\"],\n  CURRENTCUBE: _CURRENTCUBE__WEBPACK_IMPORTED_MODULE_50__[\"default\"],\n  CURRENTMEMBER: _CURRENTMEMBER__WEBPACK_IMPORTED_MODULE_51__[\"default\"],\n  DEFAULTMEMBER: _DEFAULTMEMBER__WEBPACK_IMPORTED_MODULE_52__[\"default\"],\n  DEFAULT_MEMBER: _DEFAULT_MEMBER__WEBPACK_IMPORTED_MODULE_53__[\"default\"],\n  DESC: _DESC__WEBPACK_IMPORTED_MODULE_54__[\"default\"],\n  DESCENDANTS: _DESCENDANTS__WEBPACK_IMPORTED_MODULE_55__[\"default\"],\n  DESCRIPTION: _DESCRIPTION__WEBPACK_IMPORTED_MODULE_56__[\"default\"],\n  DIMENSION: _DIMENSION__WEBPACK_IMPORTED_MODULE_57__[\"default\"],\n  DIMENSIONS: _DIMENSIONS__WEBPACK_IMPORTED_MODULE_58__[\"default\"],\n  DISTINCT: _DISTINCT__WEBPACK_IMPORTED_MODULE_59__[\"default\"],\n  DISTINCTCOUNT: _DISTINCTCOUNT__WEBPACK_IMPORTED_MODULE_60__[\"default\"],\n  DRILLDOWNLEVEL: _DRILLDOWNLEVEL__WEBPACK_IMPORTED_MODULE_61__[\"default\"],\n  DRILLDOWNLEVELBOTTOM: _DRILLDOWNLEVELBOTTOM__WEBPACK_IMPORTED_MODULE_62__[\"default\"],\n  DRILLDOWNLEVELTOP: _DRILLDOWNLEVELTOP__WEBPACK_IMPORTED_MODULE_63__[\"default\"],\n  DRILLDOWNMEMBER: _DRILLDOWNMEMBER__WEBPACK_IMPORTED_MODULE_64__[\"default\"],\n  DRILLDOWNMEMBERBOTTOM: _DRILLDOWNMEMBERBOTTOM__WEBPACK_IMPORTED_MODULE_65__[\"default\"],\n  DRILLDOWNMEMBERTOP: _DRILLDOWNMEMBERTOP__WEBPACK_IMPORTED_MODULE_66__[\"default\"],\n  DRILLUPLEVEL: _DRILLUPLEVEL__WEBPACK_IMPORTED_MODULE_67__[\"default\"],\n  DRILLUPMEMBER: _DRILLUPMEMBER__WEBPACK_IMPORTED_MODULE_68__[\"default\"],\n  DROP: _DROP__WEBPACK_IMPORTED_MODULE_69__[\"default\"],\n  EMPTY: _EMPTY__WEBPACK_IMPORTED_MODULE_70__[\"default\"],\n  END: _END__WEBPACK_IMPORTED_MODULE_71__[\"default\"],\n  ERROR: _ERROR__WEBPACK_IMPORTED_MODULE_72__[\"default\"],\n  EXCEPT: _EXCEPT__WEBPACK_IMPORTED_MODULE_73__[\"default\"],\n  EXCLUDEEMPTY: _EXCLUDEEMPTY__WEBPACK_IMPORTED_MODULE_74__[\"default\"],\n  EXTRACT: _EXTRACT__WEBPACK_IMPORTED_MODULE_75__[\"default\"],\n  FALSE: _FALSE__WEBPACK_IMPORTED_MODULE_76__[\"default\"],\n  FILTER: _FILTER__WEBPACK_IMPORTED_MODULE_77__[\"default\"],\n  FIRSTCHILD: _FIRSTCHILD__WEBPACK_IMPORTED_MODULE_78__[\"default\"],\n  FIRSTSIBLING: _FIRSTSIBLING__WEBPACK_IMPORTED_MODULE_79__[\"default\"],\n  FOR: _FOR__WEBPACK_IMPORTED_MODULE_80__[\"default\"],\n  FREEZE: _FREEZE__WEBPACK_IMPORTED_MODULE_81__[\"default\"],\n  FROM: _FROM__WEBPACK_IMPORTED_MODULE_82__[\"default\"],\n  GENERATE: _GENERATE__WEBPACK_IMPORTED_MODULE_83__[\"default\"],\n  GLOBAL: _GLOBAL__WEBPACK_IMPORTED_MODULE_84__[\"default\"],\n  GROUP: _GROUP__WEBPACK_IMPORTED_MODULE_85__[\"default\"],\n  GROUPING: _GROUPING__WEBPACK_IMPORTED_MODULE_86__[\"default\"],\n  HEAD: _HEAD__WEBPACK_IMPORTED_MODULE_87__[\"default\"],\n  HIDDEN: _HIDDEN__WEBPACK_IMPORTED_MODULE_88__[\"default\"],\n  HIERARCHIZE: _HIERARCHIZE__WEBPACK_IMPORTED_MODULE_89__[\"default\"],\n  HIERARCHY: _HIERARCHY__WEBPACK_IMPORTED_MODULE_90__[\"default\"],\n  IGNORE: _IGNORE__WEBPACK_IMPORTED_MODULE_91__[\"default\"],\n  IIF: _IIF__WEBPACK_IMPORTED_MODULE_92__[\"default\"],\n  INCLUDEEMPTY: _INCLUDEEMPTY__WEBPACK_IMPORTED_MODULE_93__[\"default\"],\n  INDEX: _INDEX__WEBPACK_IMPORTED_MODULE_94__[\"default\"],\n  INTERSECT: _INTERSECT__WEBPACK_IMPORTED_MODULE_95__[\"default\"],\n  IS: _IS__WEBPACK_IMPORTED_MODULE_96__[\"default\"],\n  ISANCESTOR: _ISANCESTOR__WEBPACK_IMPORTED_MODULE_97__[\"default\"],\n  ISEMPTY: _ISEMPTY__WEBPACK_IMPORTED_MODULE_98__[\"default\"],\n  ISGENERATION: _ISGENERATION__WEBPACK_IMPORTED_MODULE_99__[\"default\"],\n  ISLEAF: _ISLEAF__WEBPACK_IMPORTED_MODULE_100__[\"default\"],\n  ISSIBLING: _ISSIBLING__WEBPACK_IMPORTED_MODULE_101__[\"default\"],\n  ITEM: _ITEM__WEBPACK_IMPORTED_MODULE_102__[\"default\"],\n  LAG: _LAG__WEBPACK_IMPORTED_MODULE_103__[\"default\"],\n  LASTCHILD: _LASTCHILD__WEBPACK_IMPORTED_MODULE_104__[\"default\"],\n  LASTPERIODS: _LASTPERIODS__WEBPACK_IMPORTED_MODULE_105__[\"default\"],\n  LASTSIBLING: _LASTSIBLING__WEBPACK_IMPORTED_MODULE_106__[\"default\"],\n  LEAD: _LEAD__WEBPACK_IMPORTED_MODULE_107__[\"default\"],\n  LEAVES: _LEAVES__WEBPACK_IMPORTED_MODULE_108__[\"default\"],\n  LEVEL: _LEVEL__WEBPACK_IMPORTED_MODULE_109__[\"default\"],\n  LEVELS: _LEVELS__WEBPACK_IMPORTED_MODULE_110__[\"default\"],\n  LINKMEMBER: _LINKMEMBER__WEBPACK_IMPORTED_MODULE_111__[\"default\"],\n  LINREGINTERCEPT: _LINREGINTERCEPT__WEBPACK_IMPORTED_MODULE_112__[\"default\"],\n  LINREGPOINT: _LINREGPOINT__WEBPACK_IMPORTED_MODULE_113__[\"default\"],\n  LINREGR2: _LINREGR2__WEBPACK_IMPORTED_MODULE_114__[\"default\"],\n  LINREGSLOPE: _LINREGSLOPE__WEBPACK_IMPORTED_MODULE_115__[\"default\"],\n  LINREGVARIANCE: _LINREGVARIANCE__WEBPACK_IMPORTED_MODULE_116__[\"default\"],\n  LOOKUPCUBE: _LOOKUPCUBE__WEBPACK_IMPORTED_MODULE_117__[\"default\"],\n  MAX: _MAX__WEBPACK_IMPORTED_MODULE_118__[\"default\"],\n  MEASURE: _MEASURE__WEBPACK_IMPORTED_MODULE_119__[\"default\"],\n  MEDIAN: _MEDIAN__WEBPACK_IMPORTED_MODULE_120__[\"default\"],\n  MEMBER: _MEMBER__WEBPACK_IMPORTED_MODULE_121__[\"default\"],\n  MEMBERS: _MEMBERS__WEBPACK_IMPORTED_MODULE_122__[\"default\"],\n  MEMBERTOSTR: _MEMBERTOSTR__WEBPACK_IMPORTED_MODULE_123__[\"default\"],\n  MIN: _MIN__WEBPACK_IMPORTED_MODULE_124__[\"default\"],\n  MTD: _MTD__WEBPACK_IMPORTED_MODULE_125__[\"default\"],\n  NAME: _NAME__WEBPACK_IMPORTED_MODULE_126__[\"default\"],\n  NAMETOSET: _NAMETOSET__WEBPACK_IMPORTED_MODULE_127__[\"default\"],\n  NEST: _NEST__WEBPACK_IMPORTED_MODULE_128__[\"default\"],\n  NEXTMEMBER: _NEXTMEMBER__WEBPACK_IMPORTED_MODULE_129__[\"default\"],\n  NON: _NON__WEBPACK_IMPORTED_MODULE_130__[\"default\"],\n  NONEMPTYCROSSJOIN: _NONEMPTYCROSSJOIN__WEBPACK_IMPORTED_MODULE_131__[\"default\"],\n  NOT_RELATED_TO_FACTS: _NOT_RELATED_TO_FACTS__WEBPACK_IMPORTED_MODULE_132__[\"default\"],\n  NO_ALLOCATION: _NO_ALLOCATION__WEBPACK_IMPORTED_MODULE_133__[\"default\"],\n  NO_PROPERTIES: _NO_PROPERTIES__WEBPACK_IMPORTED_MODULE_134__[\"default\"],\n  NULL: _NULL__WEBPACK_IMPORTED_MODULE_135__[\"default\"],\n  ON: _ON__WEBPACK_IMPORTED_MODULE_136__[\"default\"],\n  OPENINGPERIOD: _OPENINGPERIOD__WEBPACK_IMPORTED_MODULE_137__[\"default\"],\n  OR: _OR__WEBPACK_IMPORTED_MODULE_138__[\"default\"],\n  PAGES: _PAGES__WEBPACK_IMPORTED_MODULE_139__[\"default\"],\n  PARALLELPERIOD: _PARALLELPERIOD__WEBPACK_IMPORTED_MODULE_140__[\"default\"],\n  PARENT: _PARENT__WEBPACK_IMPORTED_MODULE_141__[\"default\"],\n  PASS: _PASS__WEBPACK_IMPORTED_MODULE_142__[\"default\"],\n  PERIODSTODATE: _PERIODSTODATE__WEBPACK_IMPORTED_MODULE_143__[\"default\"],\n  POST: _POST__WEBPACK_IMPORTED_MODULE_144__[\"default\"],\n  PREDICT: _PREDICT__WEBPACK_IMPORTED_MODULE_145__[\"default\"],\n  PREVMEMBER: _PREVMEMBER__WEBPACK_IMPORTED_MODULE_146__[\"default\"],\n  PROPERTIES: _PROPERTIES__WEBPACK_IMPORTED_MODULE_147__[\"default\"],\n  PROPERTY: _PROPERTY__WEBPACK_IMPORTED_MODULE_148__[\"default\"],\n  QTD: _QTD__WEBPACK_IMPORTED_MODULE_149__[\"default\"],\n  RANK: _RANK__WEBPACK_IMPORTED_MODULE_150__[\"default\"],\n  RECURSIVE: _RECURSIVE__WEBPACK_IMPORTED_MODULE_151__[\"default\"],\n  RELATIVE: _RELATIVE__WEBPACK_IMPORTED_MODULE_152__[\"default\"],\n  ROLLUPCHILDREN: _ROLLUPCHILDREN__WEBPACK_IMPORTED_MODULE_153__[\"default\"],\n  ROOT: _ROOT__WEBPACK_IMPORTED_MODULE_154__[\"default\"],\n  ROWS: _ROWS__WEBPACK_IMPORTED_MODULE_155__[\"default\"],\n  SCOPE: _SCOPE__WEBPACK_IMPORTED_MODULE_156__[\"default\"],\n  SECTIONS: _SECTIONS__WEBPACK_IMPORTED_MODULE_157__[\"default\"],\n  SELECT: _SELECT__WEBPACK_IMPORTED_MODULE_158__[\"default\"],\n  SELF: _SELF__WEBPACK_IMPORTED_MODULE_159__[\"default\"],\n  SELF_AND_AFTER: _SELF_AND_AFTER__WEBPACK_IMPORTED_MODULE_160__[\"default\"],\n  SELF_AND_BEFORE: _SELF_AND_BEFORE__WEBPACK_IMPORTED_MODULE_161__[\"default\"],\n  SELF_BEFORE_AFTER: _SELF_BEFORE_AFTER__WEBPACK_IMPORTED_MODULE_162__[\"default\"],\n  SESSION: _SESSION__WEBPACK_IMPORTED_MODULE_163__[\"default\"],\n  SET: _SET__WEBPACK_IMPORTED_MODULE_164__[\"default\"],\n  SETTOARRAY: _SETTOARRAY__WEBPACK_IMPORTED_MODULE_165__[\"default\"],\n  SETTOSTR: _SETTOSTR__WEBPACK_IMPORTED_MODULE_166__[\"default\"],\n  SORT: _SORT__WEBPACK_IMPORTED_MODULE_167__[\"default\"],\n  STDDEV: _STDDEV__WEBPACK_IMPORTED_MODULE_168__[\"default\"],\n  STDDEVP: _STDDEVP__WEBPACK_IMPORTED_MODULE_169__[\"default\"],\n  STDEV: _STDEV__WEBPACK_IMPORTED_MODULE_170__[\"default\"],\n  STDEVP: _STDEVP__WEBPACK_IMPORTED_MODULE_171__[\"default\"],\n  STORAGE: _STORAGE__WEBPACK_IMPORTED_MODULE_172__[\"default\"],\n  STRIPCALCULATEDMEMBERS: _STRIPCALCULATEDMEMBERS__WEBPACK_IMPORTED_MODULE_173__[\"default\"],\n  STRTOMEMBER: _STRTOMEMBER__WEBPACK_IMPORTED_MODULE_174__[\"default\"],\n  STRTOSET: _STRTOSET__WEBPACK_IMPORTED_MODULE_175__[\"default\"],\n  STRTOTUPLE: _STRTOTUPLE__WEBPACK_IMPORTED_MODULE_176__[\"default\"],\n  STRTOVAL: _STRTOVAL__WEBPACK_IMPORTED_MODULE_177__[\"default\"],\n  STRTOVALUE: _STRTOVALUE__WEBPACK_IMPORTED_MODULE_178__[\"default\"],\n  SUBSET: _SUBSET__WEBPACK_IMPORTED_MODULE_179__[\"default\"],\n  SUM: _SUM__WEBPACK_IMPORTED_MODULE_180__[\"default\"],\n  TAIL: _TAIL__WEBPACK_IMPORTED_MODULE_181__[\"default\"],\n  THIS: _THIS__WEBPACK_IMPORTED_MODULE_182__[\"default\"],\n  TOGGLEDRILLSTATE: _TOGGLEDRILLSTATE__WEBPACK_IMPORTED_MODULE_183__[\"default\"],\n  TOPCOUNT: _TOPCOUNT__WEBPACK_IMPORTED_MODULE_184__[\"default\"],\n  TOPPERCENT: _TOPPERCENT__WEBPACK_IMPORTED_MODULE_185__[\"default\"],\n  TOPSUM: _TOPSUM__WEBPACK_IMPORTED_MODULE_186__[\"default\"],\n  TOTALS: _TOTALS__WEBPACK_IMPORTED_MODULE_187__[\"default\"],\n  TREE: _TREE__WEBPACK_IMPORTED_MODULE_188__[\"default\"],\n  TRUE: _TRUE__WEBPACK_IMPORTED_MODULE_189__[\"default\"],\n  TUPLETOSTR: _TUPLETOSTR__WEBPACK_IMPORTED_MODULE_190__[\"default\"],\n  TYPE: _TYPE__WEBPACK_IMPORTED_MODULE_191__[\"default\"],\n  UNION: _UNION__WEBPACK_IMPORTED_MODULE_192__[\"default\"],\n  UNIQUE: _UNIQUE__WEBPACK_IMPORTED_MODULE_193__[\"default\"],\n  UNIQUENAME: _UNIQUENAME__WEBPACK_IMPORTED_MODULE_194__[\"default\"],\n  UPDATE: _UPDATE__WEBPACK_IMPORTED_MODULE_195__[\"default\"],\n  USE: _USE__WEBPACK_IMPORTED_MODULE_196__[\"default\"],\n  USERNAME: _USERNAME__WEBPACK_IMPORTED_MODULE_197__[\"default\"],\n  USE_EQUAL_ALLOCATION: _USE_EQUAL_ALLOCATION__WEBPACK_IMPORTED_MODULE_198__[\"default\"],\n  USE_WEIGHTED_ALLOCATION: _USE_WEIGHTED_ALLOCATION__WEBPACK_IMPORTED_MODULE_199__[\"default\"],\n  USE_WEIGHTED_INCREMENT: _USE_WEIGHTED_INCREMENT__WEBPACK_IMPORTED_MODULE_200__[\"default\"],\n  VALIDMEASURE: _VALIDMEASURE__WEBPACK_IMPORTED_MODULE_201__[\"default\"],\n  VALUE: _VALUE__WEBPACK_IMPORTED_MODULE_202__[\"default\"],\n  VAR: _VAR__WEBPACK_IMPORTED_MODULE_203__[\"default\"],\n  VARIANCE: _VARIANCE__WEBPACK_IMPORTED_MODULE_204__[\"default\"],\n  VARIANCEP: _VARIANCEP__WEBPACK_IMPORTED_MODULE_205__[\"default\"],\n  VARP: _VARP__WEBPACK_IMPORTED_MODULE_206__[\"default\"],\n  VISUAL: _VISUAL__WEBPACK_IMPORTED_MODULE_207__[\"default\"],\n  VISUALTOTALS: _VISUALTOTALS__WEBPACK_IMPORTED_MODULE_208__[\"default\"],\n  WHERE: _WHERE__WEBPACK_IMPORTED_MODULE_209__[\"default\"],\n  WITH: _WITH__WEBPACK_IMPORTED_MODULE_210__[\"default\"],\n  WTD: _WTD__WEBPACK_IMPORTED_MODULE_211__[\"default\"],\n  XOR: _XOR__WEBPACK_IMPORTED_MODULE_212__[\"default\"],\n  YTD: _YTD__WEBPACK_IMPORTED_MODULE_213__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/reserved_words/index.ts?");

/***/ }),

/***/ "./src/white_space/WHITE_SPACE.ts":
/*!****************************************!*\
  !*** ./src/white_space/WHITE_SPACE.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chevrotain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chevrotain */ \"./node_modules/chevrotain/lib/src/api.js\");\n/* harmony import */ var chevrotain__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chevrotain__WEBPACK_IMPORTED_MODULE_0__);\n\nconst WHITE_SPACE = {\n  label: \"WHITE_SPACE\",\n  name: \"white space\",\n  pattern: /\\s+/,\n  group: chevrotain__WEBPACK_IMPORTED_MODULE_0__[\"Lexer\"].SKIPPED\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WHITE_SPACE);\n\n//# sourceURL=webpack:///./src/white_space/WHITE_SPACE.ts?");

/***/ }),

/***/ "./src/white_space/index.ts":
/*!**********************************!*\
  !*** ./src/white_space/index.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WHITE_SPACE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WHITE_SPACE */ \"./src/white_space/WHITE_SPACE.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  WHITE_SPACE: _WHITE_SPACE__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/white_space/index.ts?");

/***/ })

/******/ });