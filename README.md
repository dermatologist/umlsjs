# umlsjs (For UMLS REST APIs)

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://github.com/dermatologist/fhir-questionnaire-render-react)
[![npm](https://img.shields.io/npm/dt/umlsjs)](https://www.npmjs.com/package/umlsjs)
[![Build](https://github.com/dermatologist/umlsjs/workflows/Publish/badge.svg)](https://nuchange.ca)

## About
This is an unofficial package for accessing [UMLS REST APIs](https://documentation.uts.nlm.nih.gov/rest/home.html). The technical documentation for the APIs is available [here.](https://documentation.uts.nlm.nih.gov/) You need an API-KEY to access UMLS services. You can apply for the license [here.](https://uts.nlm.nih.gov/license.html)

## Install
```
npm install umlsjs --save

```

## Usage

```
import {UMLSJS} from 'umlsjs'
// Create Once
const umls_key = "YOUR_KEY_HERE" ;
const token = new UMLSJS.UMLSToken(umls_key)

// Generate with each request
let st = await token.getSt()
const search1 = new UMLSJS.UMLSSearch(st)
search1.init('Erythema Multiforme')
await search1.query()
const results = search1.getResults()

// Generate with each request
st = await token.getSt()
const search2 = new UMLSJS.CUISearch(st)
search2.init('C0009044')
await search2.query()
const result = search2.getResult()

st = await token.getSt()
const search2 = new UMLSJS.CUISearch(st)
search2.init('C0009044')
await search2.getAtoms()
const result = search2.atoms

st = await token.getSt()
const search2 = new UMLSJS.CUISearch(st)
search2.init('C0009044')
await search2.getDefinitions()
const result = search2.definitions

st = await token.getSt()
const search2 = new UMLSJS.CUISearch(st)
search2.init('C0009044')
await search2.getRelations()
const result = search2.relations
```


```
const umlsjs = require('umlsjs)

// Create Once
const umls_key = "YOUR_KEY_HERE" ;
const token = new umlsjs.UMLSJS.UMLSToken(umls_key)

// Generate with each request
let st = await token.getSt()
const search1 = new umlsjs.UMLSJS.UMLSSearch(st)
```

### pagination

```
nextPage()
nextPage(2)
```

## More to come

* UMLSContent
* UMLSSubsets
* UMLSSemanticNetwork
* UMLSContentView
* UMLSCrosswalk

## Want to join development?

* Rename .env.example to .env and add your API key.
* Submit PR to the develop branch.

## Contributor(s)

* [Bell Eapen](https://nuchange.ca) | [![Twitter Follow](https://img.shields.io/twitter/follow/beapen?style=social)](https://twitter.com/beapen)
