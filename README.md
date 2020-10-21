# umlsjs (For UMLS REST APIs)

## About
This is an unofficial package for accessing [UMLS REST APIs](https://documentation.uts.nlm.nih.gov/rest/home.html). The technical documentation for the APIs is available [here.](https://documentation.uts.nlm.nih.gov/) You need an API-KEY to access UMLS services. You can apply for the license [here.](https://uts.nlm.nih.gov/license.html) This is still in early alpha and is not production ready. Please star the [GitHub repo](https://github.com/dermatologist/umlsjs) to show your interest in this project or [contact me](https://nuchange.ca/contact).

## Install
```
npm install umlsjs --save

```

## Usage

* Search

```
import umlsjs from 'umlsjs'

const search1 = new umlsjs.UMLSSearch(API_KEY)
search1.init('Erythema Multiforme')
await search1.query()
const results = search1.getResults()

const search1 = new umlsjs.CUISearch(process.env.UMLS_API_KEY)
search1.init('C0009044')
await search1.query()
const result = search1.getResult()
```

## Refer [wiki](https://github.com/dermatologist/umlsjs/wiki/Instructions) for more instructions

## More to come

* UMLSContent
* UMLSSubsets
* UMLSSemanticNetwork
* UMLSContentView
* UMLSCrosswalk

### Install the development version from GitHub as below

Add the following to .npmrc

```
registry=https://registry.npmjs.org/
@dermatologist:registry=https://npm.pkg.github.com

```
And

```
npm install @dermatologist/umlsjs --save

```


## Want to join development?

* Rename .env.example to .env and add your API key.
* Submit PR to the develop branch.
