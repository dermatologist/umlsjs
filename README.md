# umlsjs 

## About
This is an unofficial package for accessing UMLS REST APIs. The technical documentation for the APIs is available [here.](https://documentation.uts.nlm.nih.gov/) You need an API-KEY to access UMLS services. You can apply for the license [here:](https://uts.nlm.nih.gov/license.html)

## Install
```
npm install umlsjs --save

```

## Usage
```
import { UMLSSearch } from 'umlsjs'
const search1 = new UMLSSearch(API_KEY, 'Erythema Multiforme')
await search1.query()
const results = search1.getResults()

```

## More to come

* UMLSContent
* UMLSASubsets
* UMLSSemanticNetwork
* UMLSContentView
* UMLSCrosswalk