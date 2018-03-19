# How to create custom template

With this library you can create your own templates and use them to generate your components in a second!

`create-component-app` offers 4 replacement keys which can be used in the names of the files in your template, as well as within the templates themselves.  Each key corresponds to a formatted transformation of the component name that you enter when running `create-component-app`.

#### Keys and Replacements
  Replacement Key | Description
  --- | ---
  `COMPONENT_NAME` | Each instance of the string is replaced with the component name that you entered without modification.  This is the standard behavior.  (eg: `MyComponent` => `MyComponent` and replaces all instances of `COMPONENT_NAME` in files and file names.)
  `COMPONENT_CAP_NAME` | Each instance of the string is replaced with an uppercased transformation of the component name that you entered. (eg: `MyComponent` => `MYCOMPONENTNAME` and replaces all instances of `COMPONENT_CAP_NAME` in files and file names.)
  `component_name` | Each instance of the string is replaced with a lowercased transformation of the component name that you entered. (eg: `MyComponent` => `mycomponentname` and replaces all instances of `component_name` in files and file names.)
  `cOMPONENT_NAME` | Each instance of the string is replaced with a lower camel case transformation of the component name that you entered. For clarity, the first letter is simply lowercased.  (eg: `MyComponent` => `myComponent` and replaces all instances of `cOMPONENT_NAME` in files and file names.)


### 1) Create your custom template folder

Create a folder to contain all your custom templates.
In this folder we will put the custom templates folders.

### 2) Add the folder to the config

Create a [config file](https://github.com/CVarisco/create-component-app#you-can-create-a-configuration-file-in-your-current-project-directory) where you write the options to generate your components from the custom templates folder

config:

```json
{
  "type": "custom",
  "templatesDirPath": "PATH/OF/CUSTOM/TEMPLATES/FOLDER",
  "templateName": "NAME_OF_TEMPLATE_FOLDER"
}
```

### 3) Create a folder for your template

Create a folder inside the templates folder
Inside this folder we will put all the files of the template.
[Examples](https://github.com/CVarisco/create-component-app/tree/master/templates)

### 4) Create your templates

Create your templates file.
The only thing that you need to set in the template is the name of the component.

* _Note: filenames with **COMPONENT_NAME** will be replaced with the component name._
* _Note: filename that includes "index" will not renamed_
* _Note: the extension of the file will be used (so, use whatever you want)_

#### (Optional) You can create a configuration file in your template directory

Create-component-app uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for configuration file support.
This means you can configure cca via:

* A `.ccarc` file, written in YAML or JSON, with optional extensions: `.yaml/.yml/.json/.js`.
* A `cca.config.js` file that exports an object.

The configuration file will be resolved starting from the root of your project,
and searching up the file tree until a config file is (or isn't) found.

Example of component custom template `.ccarc`:

```js
{
  "noMkdir": true, // will spread the template files in the output directory
}
```

Example of component custom template `template.js`:

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

class COMPONENT_NAME extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="COMPONENT_NAME" />;
  }
}

COMPONENT_NAME.propTypes = {};

COMPONENT_NAME.defaultProps = {};

export default COMPONENT_NAME;
```

Example of custom style file `style.scss`:

```css
@import "partials/variables" .COMPONENT_NAME {
  background-color: $grey;
}

.container .COMPONENT_NAME {
  background-color: $yellow;
}
```

### 5) Launch the tool

Launch the tool to generate components or pass a arg

```bash
create-component-app
```

Optional:

```bash
create-component-app --template $TEMPLATE_NAME
```

$TEMPLATE_NAME should be the name of the subfolder.  
This argument override the `templateName` option in your config file.

**NOTE: With this configuration, you can add only the `path` parameter to set the default destination. The others parameters will be ignored**
