"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function generatePureComponent(COMPONENT_NAME) {
    return `
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ${COMPONENT_NAME} extends PureComponent {
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

exports.default = generatePureComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZXMvanMvcHVyZS50ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZVB1cmVDb21wb25lbnQiLCJDT01QT05FTlRfTkFNRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxTQUFTQSxxQkFBVCxDQUErQkMsY0FBL0IsRUFBK0Q7QUFDN0QsV0FBUTs7OztRQUlGQSxjQUFlOzs7Ozs7Ozs7Ozs7RUFZckJBLGNBQWU7O0VBRWZBLGNBQWU7O2lCQUVBQSxjQUFlO0NBcEI5QjtBQXNCRDs7a0JBRWNELHFCIiwiZmlsZSI6InB1cmUudGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVB1cmVDb21wb25lbnQoQ09NUE9ORU5UX05BTUU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzICR7Q09NUE9ORU5UX05BTUV9IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4ke0NPTVBPTkVOVF9OQU1FfS5wcm9wVHlwZXMgPSB7fTtcblxuJHtDT01QT05FTlRfTkFNRX0uZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0ICR7Q09NUE9ORU5UX05BTUV9O1xuYFxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVB1cmVDb21wb25lbnRcbiJdfQ==