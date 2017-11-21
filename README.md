# react-list-items

**ListItems** component renders a custom element or by default a string m/n with the navigation icons 'previous' and 'next' to list items from the list.

### [API](./src/list-items/README.md)

### Installation

```
npm install @opuscapita/react-list-items
```

### Development

* Run `npm install` to get the project's dependencies
* Run `npm run build` to produce minified version of the library
* Run `npm run dev` to produce development version of the library.
* Run `npm run test` to run tests
* Run `npm run docs` to run generate examples

#### Development workflow
* Run `npm run docs`
* Open `docs/index.html`

  Or

* Run `npm run hot`
* Open `http://localhost:5555/`

#### Contributing
* Make a new branch for the changes
* Update `CHANGELOG.md` file
* Commit changes (not `lib`)
* Make a pull request
* Merge the pull request and delete the development branch

#### Creating a new release
* Run `npm version [major|minor|patch]` [Info](https://docs.npmjs.com/cli/version)
* Run `npm publish`