# Contribute with your templates

With this library you can create your own templates and you can share it with the community! [#34](https://github.com/CVarisco/create-component-app/pull/34)

### 1) Fork the project

You need to fork the project in order to add your templates

### 2) Create a folder for your template

Create a folder inside the [templates folder](https://github.com/CVarisco/create-component-app/tree/master/templates)
Inside this folder we will put all the files of the template.

### 3) Create your templates

Create your templates file.
The only thing that you need to set in the template is the name of the component.  

- *Note: filenames with **COMPONENT_NAME** will be replaced with the component name.*
- *Note: filename that includes "index" will not renamed*  
- *Note: the extension of the file will be used (so, use whatever you want)*  

Example of component custom template `template.js`:

```javascript
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class COMPONENT_NAME extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="COMPONENT_NAME"></div>
        );
    }
}

COMPONENT_NAME.propTypes = {}

COMPONENT_NAME.defaultProps = {}

export default COMPONENT_NAME
```

Example of custom style file `style.scss`:

```css
@import 'partials/variables'

.COMPONENT_NAME{
    background-color: $grey;
}

.container .COMPONENT_NAME{
    background-color: $yellow;
}
```

### 5) Create the PR

Thanks to your contribution 🌮!  