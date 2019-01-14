<p align="center">
  <img src="https://user-images.githubusercontent.com/7335613/31996536-29195b54-b989-11e7-84af-25744b154345.png" width="500" alt="create-component-app"/>
</p>

<p align="center">

[![npm version](https://badge.fury.io/js/create-component-app.svg)](https://badge.fury.io/js/create-component-app)
[![Code Climate](https://codeclimate.com/github/CVarisco/create-component-app/badges/gpa.svg)](https://codeclimate.com/github/CVarisco/create-component-app)
[![npm](https://img.shields.io/npm/dw/create-component-app.svg)](https://www.npmjs.com/package/create-component-app)
[![Build Status](https://travis-ci.org/CVarisco/create-component-app.svg?branch=master)](https://travis-ci.org/CVarisco/create-component-app)

</p>

[(Introduction article v1)](https://hackernoon.com/create-component-app-v1-is-out-now-6ca0217992e9)

**How much time do you spend copying and pasting the component folder to create a new one ?**<br />
This is a tool to generate different types of React components from the terminal.<br />
### Available extension 
<a href="https://github.com/CVarisco/vs-component-app"><img src="http://ubuntuhandbook.org/wp-content/uploads/2017/05/vscode-icon245.png" width="50px"> </a><br />


- [Install](#install)
- [Usage](#usage)
  - [Create your components guided from terminal with a lot of choices](#create-your-components-guided-from-terminal-with-a-lot-of-choices)
  - [Create components based on a configuration file in your current project directory](#create-components-based-on-a-configuration-file-in-your-current-project-directory)
  - [Basic Configuration](#basic-configuration)
  - [Pass a config file as an argument](#pass-a-config-file-as-an-argument)
  - [Pass option arguments from the command line](#pass-option-arguments-from-the-command-line)
  - [Use your own custom templates](#use-your-own-custom-templates)
  - [Use templates from the community](#use-templates-from-the-community)
- [Contributing](#contributing)
  - [Contributors](#contributors)
- [License](#license)
<br />

<p align="center">
  <img src="https://github.com/CVarisco/create-component-app/blob/master/docs/cca-no-templates.gif" alt="create-component-app" width="1024" />
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

### Create components based on a configuration file in your current project directory

create-component-app uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for configuration file support.
This means you can configure cca via:

* A `.ccarc` file, written in YAML or JSON, with optional extensions: `.yaml/.yml/.json`.
* A `cca.config.js` file that exports an object.
* A `"cca"` key in your `package.json` file.

The configuration file will be resolved starting from the root of your project,
and searching up the file tree until a config file is (or isn't) found.

### Basic Configuration

An example configuration file can be found here: [.ccarc.example](.ccarc.example), you can use this
file by copying it to the root of your project.

Currently supported options are:

  Option | Description
  --- | ---
  `type` | Default type of the component `["stateless", "class", "pure"]`
  `templatesDirPath` | Default path to get the templates from the custom templates folder
  `template` | Name of the template that you want use
  `path` | Default path to create component file and folder
  `jsExtension` | Default extension for your javascript file `["js", "jsx"]`
  `cssExtension` | Default extension for your css file `["css", "scss", "sass", "less", false]`. Set to false if you don't want a style file
  `includeTests` | Default flag to include a test file in the folder `[true, false]`
  `includeStories` | Default flag to include a storybook file in the folder `[true, false]`
  `indexFile` |  Default flag to create an index file in the folder `[false, true]`
  `connected` | Default flag to integrate connect redux in the index file `[false, true]`
  `componentMethods` | Only for "class" and "pure", insert method inside the component (i.e. `["componentDidMount", "shouldComponentUpdate", "onClick"]`). `render` and `constructor` will be always included.
  `fileNames` | Choose the specific filename for your component's file. (COMPONENT_NAME will be replaced)
  `fileNames.testFileName` | specify the file name of your test file
  `fileNames.componentFileName` |  specify the component file name
  `fileNames.styleFileName` | specify the style file name !!IMPORTANT: Include cssExtension.

### Pass a config file as an argument

1) Create a JSON file `config.json`:  
2) and pass the path to config param

```sh
$ create-component-app --config path/to/your/config.json
```    

**Passing a config file via the CLI overrides the configuration file loaded by [cosmiconfig](https://github.com/davidtheclark/cosmiconfig)**

### Pass option arguments from the command line

You can pass all the available options from the list above.

```sh
$ create-component-app --path path/destionation
```    

**Passing a param via the CLI overrides the configuration file loaded by [cosmiconfig](https://github.com/davidtheclark/cosmiconfig)**

### Use your own custom templates

Simple steps to create your own templates [docs/custom-templates](https://github.com/CVarisco/create-component-app/blob/master/docs/CUSTOM-TEMPLATES.md)

### Use templates from the community
As first question, the tool asks you if you want use a template available from the community

<p align="center">
  <img src="https://user-images.githubusercontent.com/7335613/32015409-51e4b5e6-b9c1-11e7-9ccf-bb21eff2c66a.gif" alt="create-component-app-templates" width="1024" />
</p>

## Contributing
Do you want add your template to the project? [How?](https://github.com/CVarisco/create-component-app/blob/master/docs/CUSTOM-TEMPLATES-COMMUNITY.md)

Check the [issue list](https://github.com/CVarisco/create-component-app/issues) to contribute on some activities or to advice new features!
The library is open to everybody, contribute improve your skills.   

`create-component-app` is maintained under [the Semantic Versioning guidelines](http://semver.org/).

Use `npm run watch` while coding.

### [Contributors](https://github.com/CVarisco/create-component-app/graphs/contributors)

## License

MIT © [Christian Varisco](https://github.com/CVarisco)
