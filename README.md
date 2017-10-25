<p align="center">
  <img src="https://user-images.githubusercontent.com/7335613/31996536-29195b54-b989-11e7-84af-25744b154345.png" width="500" alt="create-component-app"/>
</p>

<p align="center">

[![npm version](https://badge.fury.io/js/create-component-app.svg)](https://badge.fury.io/js/create-component-app)
[![Code Climate](https://codeclimate.com/github/CVarisco/create-component-app/badges/gpa.svg)](https://codeclimate.com/github/CVarisco/create-component-app)
[![npm](https://img.shields.io/npm/dw/create-component-app.svg)](https://www.npmjs.com/package/create-component-app)
[![Build Status](https://travis-ci.org/CVarisco/create-component-app.svg?branch=master)](https://travis-ci.org/CVarisco/create-component-app)

</p>

**How much time do you spend copying and pasting the component folder to create a new one ?**<br />
This is a tool to generate different types of React components from the terminal.<br />
### Available extension 
<a href="https://github.com/CVarisco/vs-component-app"><img src="http://ubuntuhandbook.org/wp-content/uploads/2017/05/vscode-icon245.png" width="50px"> </a><br />

What you can do with this tool ?<br />

- [You can use templates from the community 🎉](#you-can-use-templates-from-the-community)
- [Create your components guided from terminal with a lot of choices](#create-your-components-guided-from-terminal-with-a-lot-of-choices)
- [You can create a configuration file in your current project directory](#you-can-create-a-configuration-file-in-your-current-project-directory)
- [You can also pass a configuration file from params](#you-can-also-pass-a-config-file)
- [You can use your own custom templates](#you-can-use-your-own-custom-templates)
- [Share your template to the community](https://github.com/CVarisco/create-component-app/blob/master/docs/CUSTOM-TEMPLATES-COMMUNITY.md)
<br />

<p align="center">
  <img src="https://user-images.githubusercontent.com/7335613/32014712-2c0d8a8e-b9bf-11e7-97de-ea873edb6530.gif" alt="create-component-app" width="1024" />
</p>

## Install

```sh
$ npm install -g create-component-app
```

## Usage

```sh
$ cd ~/my-projects
$ create-component-app
```    

### Create your components guided from terminal with a lot of choices

- Create different kind of components:
    - stateless
    - class
    - pure
    - custom
- Set name of the new component
- Integrate `connect` function of redux
- Include an index file
- Set a different component extension
    - `js`
    - `jsx`
- Set a different style extension
    - `css`
    - `scss`
    - `sass`
    - `less`
- Include a storybook file
- Include a test file (with enzyme)
- Set the destionation `path` of the new component

### You can create a configuration file in your current project directory

Create a file in your project folder named `.ccarc`:    

```javascript
{
    "type": "class",
    "path": "./src/components",
    "jsExtension": "js",
    "cssExtension": "scss",
    "includeTests": false,
    "includeStories": false,
    "indexFile": false,
    "connected": false,
    "componentMethods": [
        "componentDidMount",
        "shouldComponentUpdate",
        "onClick"
    ],
    "fileNames": {
        "testFileMatch": "spec",
        "testFileName": "myTest",
        "componentFileName": "template",
        "styleFileName": "style"
    }
}
```

### You can also pass a config file

1) Create a JSON file `config.json`:  

```javascript
{   
    // Default type of component ["stateless", "class", "pure"]
    "type": "stateless",

    // Default path to get the templates from the custom templates folder
    "templatesDirPath": "./templates",

    // Default path to create component file and folder
    "path": "./src/components",

    // Default extension for your javascript file ["js", "jsx"]
    "jsExtension": "js",

    // Default extension for your css file ["css", "scss", "sass", "less", false]
    // Set to false if you don't want a style file
    "cssExtension": "css",

    // Default flag to include a test file in the folder [true, false]
    "includeTests": true,

    // Default flag to include a storybook file in the folder [true, false]
    "includeStories": true,

    // Default flag to create an index file in the folder [false, true]
    "indexFile": false,

    // Default flag to integrate connect redux in the index file [false, true]
    "connected": false,

    // Only for "class" and "pure", insert method inside the component
    "componentMethods": ["componentDidMount", "shouldComponentUpdate", "onClick"],

    // Choose the specific filename for your component's file.
    "fileNames": {
        "testFileMatch": "spec", // specify the match part of test file
        "testFileName": "myTest", // specify the file name of your test file
        "componentFileName": "template", // specify the component file name
        "styleFileName": "style" // specify the style file name !!IMPORTANT: Include cssExtension.
    }
}
```

2) and pass the path to config param

```sh
$ create-component-app --config path/to/your/config.json
```    

**Passing a config file via the CLI overrides the configuration file in the working directory**

### You can use your own custom templates

Simple steps to create your own templates [docs/custom-templates](https://github.com/CVarisco/create-component-app/blob/master/docs/CUSTOM-TEMPLATES.md)

### You can use templates from the community
Now, the first question that you receive is `Do you wanna choose a template?` if you answer yes, you can see the list of templates from the community.

<p align="center">
  <img src="https://user-images.githubusercontent.com/7335613/32015409-51e4b5e6-b9c1-11e7-9ccf-bb21eff2c66a.gif" alt="create-component-app-templates" width="1024" />
</p>

- (Optional) Add to the settings `templatesDirPath` - a custom path to the user custom templates folder.
- (Optional) Add to the settings `templates` - a list of used templates (with a default) to filter the list
- (Optional) The user can choose between the available templates or use `create-component-app -t templateName`

## Contributing
Now, the community can offer their templates! [How?](https://github.com/CVarisco/create-component-app/blob/master/docs/CUSTOM-TEMPLATES-COMMUNITY.md)

Check the [issue list](https://github.com/CVarisco/create-component-app/issues) to contribute on some activities or to advice new features!
The library is open to everybody, contribute improve your skills.   

`create-component-app` is maintained under [the Semantic Versioning guidelines](http://semver.org/).

Use `npm run watch` while coding.

### [Contributors](https://github.com/CVarisco/create-component-app/graphs/contributors)

## License

MIT © [Christian Varisco](https://github.com/CVarisco)
