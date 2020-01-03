# umlsjs (For UMLS REST APIs)

## About
This is an unofficial package for accessing UMLS REST APIs. The technical documentation for the APIs is available [here.](https://documentation.uts.nlm.nih.gov/) You need an API-KEY to access UMLS services. You can apply for the license [here.](https://uts.nlm.nih.gov/license.html). This is still in early alpha and is not production ready. Please star the [GitHub repo](https://github.com/dermatologist/umlsjs) to show your interest in this project or [contact me](https://nuchange.ca/contact).

## Install
```
npm install umlsjs --save

```

## Usage

* Search

```
import { UMLSSearch } from 'umlsjs'
const search1 = new UMLSSearch(API_KEY)
search1.init('Erythema Multiforme')
// search1.init('Erythema Multiforme', true) for exact search
await search1.query()
const results = search1.getResults()

search1.nextPage()
await search1.query()
const results = search1.getResults()


```

* CUI

```
    import { CUISearch } from 'umlsjs'
    const search1 = new CUISearch(API_KEY)
    const CUI = 'C0009044'
    search1.init(CUI)
    await search1.query()
    const result = search1.getResult()
    console.log(result.name)

```

## Functions
nextPage()  |  nextPage(2)

## More to come

* UMLSContent
* UMLSSubsets
* UMLSSemanticNetwork
* UMLSContentView
* UMLSCrosswalk

## Want to join development?

* rename test/api.template.js to api.js and add your API key.
* Submit PR to the develop branch.