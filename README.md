# create-component-app
[![npm version](https://badge.fury.io/js/create-component-app.svg)](https://badge.fury.io/js/create-component-app)
[![Code Climate](https://codeclimate.com/github/CVarisco/create-component-app/badges/gpa.svg)](https://codeclimate.com/github/CVarisco/create-component-app)
[![npm](https://img.shields.io/npm/dw/create-component-app.svg)](https://www.npmjs.com/package/create-component-app)
[![Build Status](https://travis-ci.org/CVarisco/create-component-app.svg?branch=master)](https://travis-ci.org/CVarisco/create-component-app)

**How much time do you spend copying and pasting the component folder to create a new one ?**<br />
This is a tool to generate different types of React components from the terminal.<br />

What you can do with this tool ?<br />

- [Create your components guided from terminal with a lot of choices](#create-your-components-guided-from-terminal-with-a-lot-of-choices)
- [You can create a configuration file in your current project directory](#you-can-create-a-configuration-file-in-your-current-project-directory)
- [You can also pass a configuration file from params](#you-can-also-pass-a-config-file)
- [You can use your own custom templates](#you-can-use-your-own-custom-templates)

<br />

<p align="center">
  <img src="https://user-images.githubusercontent.com/7335613/27760854-9ff86b54-5e51-11e7-8ad0-3289d9b3ebc3.gif" alt="create-component-app" width="1024" />
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
    "type": "stateless",
    "path": "./src/components",
    "jsExtension": "js",
    "cssExtension": "scss",
    "includeTests": false,
    "includeStories": false,
    "indexFile": false,
    "connected": false
}
```

### You can also pass a config file

1) Create a JSON file `config.json`:  

```javascript
{   
    // Default type of component ["stateless", "class", "pure"]
    "type": "stateless",

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
}
```

2) and pass the path to config param

```sh
$ create-component-app --config path/to/your/config.json
```    

**Passing a config file via the CLI overrides the configuration file in the working directory**

### You can use your own custom templates

Simple steps to create your own templates [docs/custom-templates](https://github.com/CVarisco/create-component-app/blob/master/docs/CUSTOM-TEMPLATE.md)

## Future

- Adds the ability to insert component life cycle methods
- A lot more options

## Contributing
The library is open to everybody, contribute improve your skills.   

`create-component-app` is maintained under [the Semantic Versioning guidelines](http://semver.org/).

Use `npm run watch` while coding.

## License

MIT © [Christian Varisco](https://github.com/CVarisco)
