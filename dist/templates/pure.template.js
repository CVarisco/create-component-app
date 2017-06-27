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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZXMvcHVyZS50ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZVB1cmVDb21wb25lbnQiLCJDT01QT05FTlRfTkFNRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxxQkFBVCxDQUErQkMsY0FBL0IsRUFBK0M7QUFDN0MsV0FBUTs7OztRQUlGQSxjQUFlOzs7Ozs7Ozs7Ozs7RUFZckJBLGNBQWU7O0VBRWZBLGNBQWU7O2lCQUVBQSxjQUFlO0NBcEI5QjtBQXNCRDs7a0JBRWNELHFCIiwiZmlsZSI6InB1cmUudGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZW5lcmF0ZVB1cmVDb21wb25lbnQoQ09NUE9ORU5UX05BTUUpIHtcbiAgcmV0dXJuIGBcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgJHtDT01QT05FTlRfTkFNRX0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbiR7Q09NUE9ORU5UX05BTUV9LnByb3BUeXBlcyA9IHt9O1xuXG4ke0NPTVBPTkVOVF9OQU1FfS5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgJHtDT01QT05FTlRfTkFNRX07XG5gXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUHVyZUNvbXBvbmVudFxuIl19