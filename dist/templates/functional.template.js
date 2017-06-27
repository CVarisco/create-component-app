"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function generateFunctionalComponent(COMPONENT_NAME) {
  return `
import React from 'react';
import PropTypes from 'prop-types';

const ${COMPONENT_NAME} = ({}) => (
  <div></div>
);

${COMPONENT_NAME}.propTypes = {};

${COMPONENT_NAME}.defaultProps = {};

export default ${COMPONENT_NAME};
`;
}

exports.default = generateFunctionalComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZXMvZnVuY3Rpb25hbC50ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUZ1bmN0aW9uYWxDb21wb25lbnQiLCJDT01QT05FTlRfTkFNRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSwyQkFBVCxDQUFxQ0MsY0FBckMsRUFBcUQ7QUFDbkQsU0FBUTs7OztRQUlGQSxjQUFlOzs7O0VBSXJCQSxjQUFlOztFQUVmQSxjQUFlOztpQkFFQUEsY0FBZTtDQVo5QjtBQWNEOztrQkFFY0QsMkIiLCJmaWxlIjoiZnVuY3Rpb25hbC50ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdlbmVyYXRlRnVuY3Rpb25hbENvbXBvbmVudChDT01QT05FTlRfTkFNRSkge1xuICByZXR1cm4gYFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0ICR7Q09NUE9ORU5UX05BTUV9ID0gKHt9KSA9PiAoXG4gIDxkaXY+PC9kaXY+XG4pO1xuXG4ke0NPTVBPTkVOVF9OQU1FfS5wcm9wVHlwZXMgPSB7fTtcblxuJHtDT01QT05FTlRfTkFNRX0uZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0ICR7Q09NUE9ORU5UX05BTUV9O1xuYFxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUZ1bmN0aW9uYWxDb21wb25lbnRcbiJdfQ==