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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZXMvanMvY2xhc3MudGVtcGxhdGUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVDbGFzc0NvbXBvbmVudCIsIkNPTVBPTkVOVF9OQU1FIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFNBQVNBLHNCQUFULENBQWdDQyxjQUFoQyxFQUFnRTtBQUM5RCxXQUFROzs7O1FBSUZBLGNBQWU7Ozs7Ozs7Ozs7OztFQVlyQkEsY0FBZTs7RUFFZkEsY0FBZTs7aUJBRUFBLGNBQWU7Q0FwQjlCO0FBc0JEOztrQkFFY0Qsc0IiLCJmaWxlIjoiY2xhc3MudGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNsYXNzQ29tcG9uZW50KENPTVBPTkVOVF9OQU1FOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzICR7Q09NUE9ORU5UX05BTUV9IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbiR7Q09NUE9ORU5UX05BTUV9LnByb3BUeXBlcyA9IHt9O1xuXG4ke0NPTVBPTkVOVF9OQU1FfS5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgJHtDT01QT05FTlRfTkFNRX07XG5gXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ2xhc3NDb21wb25lbnRcbiJdfQ==