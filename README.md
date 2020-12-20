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
import umlsjs from 'umlsjs'

const search1 = new umlsjs.UMLSSearch(API_KEY)
search1.init('Erythema Multiforme')
await search1.query()
const results = search1.getResults()

const search2 = new umlsjs.CUISearch(process.env.UMLS_API_KEY)
search2.init('C0009044')
await search2.query()
const result = search2.getResult()

await search2.getAtoms()
const result = search2.atoms

await search2.getDefinitions()
const result = search2.definitions

await search2.getRelations()
const result = search2.relations
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

* [Bell Eapen](https://nuchange.ca)
