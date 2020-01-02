
import { getService } from '../service/generalService'
import SearchModel from '../model/search'

class UMLSQueryTemplate {
    apikey: string
    term: string
    id: any
    version: string
    results: Array<any>

    constructor(apikey){
        this.apikey = apikey
        this.results = []
    }

    async init(term, id=null, version = 'current') {
        this.term = term
        this.id = id
        this.version = version
    } 

    // @Override
    query() {

    }

    getResults(): Array<any> {
        return this.results
    }
}

export default UMLSQueryTemplate;