"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function generateClassComponent(COMPONENT_NAME) {
    return `
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ${COMPONENT_NAME} extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}

${COMPONENT_NAME}.propTypes = {};

${COMPONENT_NAME}.defaultProps = {};

export default ${COMPONENT_NAME};
`;
}

exports.default = generateClassComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZXMvY2xhc3MwLnRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlQ2xhc3NDb21wb25lbnQiLCJDT01QT05FTlRfTkFNRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxzQkFBVCxDQUFnQ0MsY0FBaEMsRUFBZ0Q7QUFDOUMsV0FBUTs7OztRQUlGQSxjQUFlOzs7Ozs7Ozs7Ozs7RUFZckJBLGNBQWU7O0VBRWZBLGNBQWU7O2lCQUVBQSxjQUFlO0NBcEI5QjtBQXNCRDs7a0JBRWNELHNCIiwiZmlsZSI6ImNsYXNzMC50ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdlbmVyYXRlQ2xhc3NDb21wb25lbnQoQ09NUE9ORU5UX05BTUUpIHtcbiAgcmV0dXJuIGBcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyAke0NPTVBPTkVOVF9OQU1FfSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4ke0NPTVBPTkVOVF9OQU1FfS5wcm9wVHlwZXMgPSB7fTtcblxuJHtDT01QT05FTlRfTkFNRX0uZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0ICR7Q09NUE9ORU5UX05BTUV9O1xuYFxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUNsYXNzQ29tcG9uZW50XG4iXX0=