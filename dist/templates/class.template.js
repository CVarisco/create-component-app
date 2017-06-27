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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZXMvY2xhc3MudGVtcGxhdGUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVDbGFzc0NvbXBvbmVudCIsIkNPTVBPTkVOVF9OQU1FIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVNBLHNCQUFULENBQWdDQyxjQUFoQyxFQUFnRDtBQUM5QyxXQUFROzs7O1FBSUZBLGNBQWU7Ozs7Ozs7Ozs7OztFQVlyQkEsY0FBZTs7RUFFZkEsY0FBZTs7aUJBRUFBLGNBQWU7Q0FwQjlCO0FBc0JEOztrQkFFY0Qsc0IiLCJmaWxlIjoiY2xhc3MudGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZW5lcmF0ZUNsYXNzQ29tcG9uZW50KENPTVBPTkVOVF9OQU1FKSB7XG4gIHJldHVybiBgXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgJHtDT01QT05FTlRfTkFNRX0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuJHtDT01QT05FTlRfTkFNRX0ucHJvcFR5cGVzID0ge307XG5cbiR7Q09NUE9ORU5UX05BTUV9LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCAke0NPTVBPTkVOVF9OQU1FfTtcbmBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVDbGFzc0NvbXBvbmVudFxuIl19