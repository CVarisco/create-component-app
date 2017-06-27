'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class = require('./js/class.template');

var _class2 = _interopRequireDefault(_class);

var _pure = require('./js/pure.template');

var _pure2 = _interopRequireDefault(_pure);

var _functional = require('./js/functional.template');

var _functional2 = _interopRequireDefault(_functional);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateTemplate(type, name) {
  if (type === 'stateless') {
    return (0, _functional2.default)(name);
  }

  if (type === 'class') {
    return (0, _class2.default)(name);
  }

  if (type === 'pure component') {
    return (0, _pure2.default)(name);
  }

  return null;
}

exports.default = generateTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVUZW1wbGF0ZSIsInR5cGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLGdCQUFULENBQTBCQyxJQUExQixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFDcEMsTUFBSUQsU0FBUyxXQUFiLEVBQTBCO0FBQ3hCLFdBQU8sMEJBQTRCQyxJQUE1QixDQUFQO0FBQ0Q7O0FBRUQsTUFBSUQsU0FBUyxPQUFiLEVBQXNCO0FBQ3BCLFdBQU8scUJBQXVCQyxJQUF2QixDQUFQO0FBQ0Q7O0FBRUQsTUFBSUQsU0FBUyxnQkFBYixFQUErQjtBQUM3QixXQUFPLG9CQUFzQkMsSUFBdEIsQ0FBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNEOztrQkFFY0YsZ0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2VuZXJhdGVDbGFzc0NvbXBvbmVudCBmcm9tICcuL2pzL2NsYXNzLnRlbXBsYXRlJ1xuaW1wb3J0IGdlbmVyYXRlUHVyZUNvbXBvbmVudCBmcm9tICcuL2pzL3B1cmUudGVtcGxhdGUnXG5pbXBvcnQgZ2VuZXJhdGVGdW5jdGlvbmFsQ29tcG9uZW50IGZyb20gJy4vanMvZnVuY3Rpb25hbC50ZW1wbGF0ZSdcblxuZnVuY3Rpb24gZ2VuZXJhdGVUZW1wbGF0ZSh0eXBlLCBuYW1lKSB7XG4gIGlmICh0eXBlID09PSAnc3RhdGVsZXNzJykge1xuICAgIHJldHVybiBnZW5lcmF0ZUZ1bmN0aW9uYWxDb21wb25lbnQobmFtZSlcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnY2xhc3MnKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlQ2xhc3NDb21wb25lbnQobmFtZSlcbiAgfVxuXG4gIGlmICh0eXBlID09PSAncHVyZSBjb21wb25lbnQnKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlUHVyZUNvbXBvbmVudChuYW1lKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVUZW1wbGF0ZVxuIl19