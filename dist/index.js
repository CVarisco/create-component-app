#!/usr/bin/env node
'use strict';

let createFiles = (() => {
  var _ref = _asyncToGenerator(function* (file, generatedTemplate) {
    try {
      yield _fsExtra2.default.outputFile(file, generatedTemplate);
    } catch (e) {
      console.log(e);
    }
  });

  return function createFiles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

let start = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    try {
      var _ref3 = yield _inquirer2.default.prompt([_questions2.default[0], _questions2.default[1]]);

      const type = _ref3.type,
            path = _ref3.path;

      const generatedTemplate = (0, _templates2.default)(type, 'Test');
      const file = `${path}/test.js`;
      // Create file
      yield createFiles(file, generatedTemplate);
    } catch (e) {
      console.log(e);
    }
  });

  return function start() {
    return _ref2.apply(this, arguments);
  };
})();

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _templates = require('./templates');

var _templates2 = _interopRequireDefault(_templates);

var _questions = require('./questions');

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

start();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmaWxlIiwiZ2VuZXJhdGVkVGVtcGxhdGUiLCJvdXRwdXRGaWxlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVGaWxlcyIsInByb21wdCIsInR5cGUiLCJwYXRoIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7OzsrQkFPQSxXQUEyQkEsSUFBM0IsRUFBaUNDLGlCQUFqQyxFQUFvRDtBQUNsRCxRQUFJO0FBQ0YsWUFBTSxrQkFBR0MsVUFBSCxDQUFjRixJQUFkLEVBQW9CQyxpQkFBcEIsQ0FBTjtBQUNELEtBRkQsQ0FFRSxPQUFPRSxDQUFQLEVBQVU7QUFDVkMsY0FBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0Q7QUFDRixHOztrQkFOY0csVzs7Ozs7O2dDQVFmLGFBQXVCO0FBQ3JCLFFBQUk7QUFBQSxrQkFDcUIsTUFBTSxtQkFBU0MsTUFBVCxDQUFnQixDQUFDLG9CQUFVLENBQVYsQ0FBRCxFQUFlLG9CQUFVLENBQVYsQ0FBZixDQUFoQixDQUQzQjs7QUFBQSxZQUNNQyxJQUROLFNBQ01BLElBRE47QUFBQSxZQUNZQyxJQURaLFNBQ1lBLElBRFo7O0FBRUYsWUFBTVIsb0JBQW9CLHlCQUFpQk8sSUFBakIsRUFBdUIsTUFBdkIsQ0FBMUI7QUFDQSxZQUFNUixPQUFRLEdBQUVTLElBQUssVUFBckI7QUFDQTtBQUNBLFlBQU1ILFlBQVlOLElBQVosRUFBa0JDLGlCQUFsQixDQUFOO0FBQ0QsS0FORCxDQU1FLE9BQU9FLENBQVAsRUFBVTtBQUNWQyxjQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDRDtBQUNGLEc7O2tCQVZjTyxLOzs7OztBQWJmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQXNCQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IGlucXVpcmVyIGZyb20gJ2lucXVpcmVyJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xuaW1wb3J0IGdlbmVyYXRlVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMnXG5pbXBvcnQgcXVlc3Rpb25zIGZyb20gJy4vcXVlc3Rpb25zJ1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVGaWxlcyhmaWxlLCBnZW5lcmF0ZWRUZW1wbGF0ZSkge1xuICB0cnkge1xuICAgIGF3YWl0IGZzLm91dHB1dEZpbGUoZmlsZSwgZ2VuZXJhdGVkVGVtcGxhdGUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdHlwZSwgcGF0aCB9ID0gYXdhaXQgaW5xdWlyZXIucHJvbXB0KFtxdWVzdGlvbnNbMF0sIHF1ZXN0aW9uc1sxXV0pXG4gICAgY29uc3QgZ2VuZXJhdGVkVGVtcGxhdGUgPSBnZW5lcmF0ZVRlbXBsYXRlKHR5cGUsICdUZXN0JylcbiAgICBjb25zdCBmaWxlID0gYCR7cGF0aH0vdGVzdC5qc2BcbiAgICAvLyBDcmVhdGUgZmlsZVxuICAgIGF3YWl0IGNyZWF0ZUZpbGVzKGZpbGUsIGdlbmVyYXRlZFRlbXBsYXRlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfVxufVxuXG5zdGFydCgpXG4iXX0=