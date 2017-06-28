# create-component-app

<p align="center">
<strong>How much time do you spend copying and pasting the component folder to create a new one ?</strong><br />
This is a tool to generate different types of React components from the terminal.
</p>

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

### You can specify default values to save a lot of time

If you want, you can set default values from a JSON:  

```javascript
{   
    // Default type of component ["stateless", "class", "pure"]
    "type": "stateless", 

    // Default path to create component file and folder
    "path": "./src/components",

    // Default extension for your javascript file ["js", "jsx"]
    "jsExtension": "js",

    // Default extension for your css file ["css", "scss", "sass"]
    "cssExtension": "css",

    // Default flag to create an index file in the folder [false, true]
    "indexFile": false,

    // Default flag to integrate connect redux in the index file [false, true]
    "connected": false,
}
```

and pass the path to config param
```sh
$ create-component-app --config path/to/your/config.json
```

## Future

- Template to test the component
- Adds the ability to insert component life cycle methods
- Get custom templates from user
- A lot more options

## Contributing
The library is open to everybody, contribute improve your skills.   

`create-component-app` is maintained under [the Semantic Versioning guidelines](http://semver.org/).

Use `npm run watch` while coding.

## License

MIT © [Christian Varisco](https://github.com/CVarisco)
