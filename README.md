# create-component-app

**How much time do you spend copying and pasting the component folder to create a new one ?**<br />
This is a tool to generate different types of React components from the terminal.<br />

What you can do with this tool ?<br />

- [You can create a configuration file in your current project directory](#you-can-create-a-configuration-file-in-your-current-project-directory)
- [You can also pass a configuration file from params](#you-can-also-pass-a-config-file)
- [You can use your own custom templates](#you-can-use-your-own-custom-templates)

<br />

<p align="center">
  <img src="https://user-images.githubusercontent.com/7335613/27637827-5a2c1dba-5c11-11e7-8676-deeb230086dc.gif" alt="create-component-app" width="1024" />
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

### You can create a configuration file in your current project directory

Create a file in your project folder named `.ccarc`:    

```javascript
{   
    "type": "stateless",
    "path": "./src/components",
    "jsExtension": "js",
    "cssExtension": "scss",
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

    // Default extension for your css file ["css", "scss", "sass", "less"]
    "cssExtension": "css",

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

1) Create a folder with all the files and put the `COMPONENT_NAME` constant to replace the name of your component.
*Note: the extension of the file will be used (so, use whatever you want)*  
*Note: file with name "index" will not renamed*  

2) Specify the `templatePath` in the configuration object and set the `type:"custom"`:  

```javascript
{
    "type": "custom",
    "templatesPath": "./customTemplates"
}
```

**NOTE: With this configuration, you can add only the `path` parameter to set the default destination. The others parameters will be ignored**

## Future

- Template to test the component
- Adds the ability to insert component life cycle methods
- A lot more options

## Contributing
The library is open to everybody, contribute improve your skills.   

`create-component-app` is maintained under [the Semantic Versioning guidelines](http://semver.org/).

Use `npm run watch` while coding.

## License

MIT © [Christian Varisco](https://github.com/CVarisco)
