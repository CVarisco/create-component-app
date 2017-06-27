'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const questions = [{
  type: 'list',
  name: 'type',
  message: 'What kind of components do you want create:',
  choices: ['stateless', 'class', 'pure component']
}, {
  type: 'input',
  name: 'path',
  message: 'Where do you want create your component?',
  default: './src/components'
}];

exports.default = questions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVzdGlvbnMuanMiXSwibmFtZXMiOlsicXVlc3Rpb25zIiwidHlwZSIsIm5hbWUiLCJtZXNzYWdlIiwiY2hvaWNlcyIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsWUFBWSxDQUNoQjtBQUNFQyxRQUFNLE1BRFI7QUFFRUMsUUFBTSxNQUZSO0FBR0VDLFdBQVMsNkNBSFg7QUFJRUMsV0FBUyxDQUFDLFdBQUQsRUFBYyxPQUFkLEVBQXVCLGdCQUF2QjtBQUpYLENBRGdCLEVBT2hCO0FBQ0VILFFBQU0sT0FEUjtBQUVFQyxRQUFNLE1BRlI7QUFHRUMsV0FBUywwQ0FIWDtBQUlFRSxXQUFTO0FBSlgsQ0FQZ0IsQ0FBbEI7O2tCQWVlTCxTIiwiZmlsZSI6InF1ZXN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHF1ZXN0aW9ucyA9IFtcbiAge1xuICAgIHR5cGU6ICdsaXN0JyxcbiAgICBuYW1lOiAndHlwZScsXG4gICAgbWVzc2FnZTogJ1doYXQga2luZCBvZiBjb21wb25lbnRzIGRvIHlvdSB3YW50IGNyZWF0ZTonLFxuICAgIGNob2ljZXM6IFsnc3RhdGVsZXNzJywgJ2NsYXNzJywgJ3B1cmUgY29tcG9uZW50J10sXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnaW5wdXQnLFxuICAgIG5hbWU6ICdwYXRoJyxcbiAgICBtZXNzYWdlOiAnV2hlcmUgZG8geW91IHdhbnQgY3JlYXRlIHlvdXIgY29tcG9uZW50PycsXG4gICAgZGVmYXVsdDogJy4vc3JjL2NvbXBvbmVudHMnLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBxdWVzdGlvbnNcbiJdfQ==