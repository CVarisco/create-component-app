# How to create custom template

With this library you can create your own templates and use them to generate your components in a second!

### 1) Create your custom templates folder

Create a folder where you want.
In this folder we will put the custom templates.

### 2) Add the folder to the config

Create a `config.json` (in the `.ccarc` folder or where you want) file where you write the options to generate your components from the custom templates.

config.json:

```json
{
    "templatesDirPath": "PATH/OF/CUSTOM/TEMPLATES/FOLDER",
    "templateName": "NAME_OF_TEMPLATE_FOLDER"
}
```

### 3) Create a folder for your template

Create a folder inside the templates folder
Inside this folder we will put all the files of the template.

### 4) Create your templates

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


### 5) Launch the tool

Launch the tool to generate components or pass a arg

```bash
create-component-app --template $TEMPLATE_NAME
```

**$TEMPLATE_NAME should be the name of the subfolder

Select the name and the destination path of your templates.

**NOTE: With this configuration, you can add only the `path` parameter to set the default destination. The others parameters will be ignored**
