
import { getService } from '../service/generalService'
import SearchModel from '../model/search'

class UMLSQueryTemplate {
    apikey: string
    term: string
    id: any
    version: string
    results: Array<any>

    constructor(apikey, term, id=null, version = 'current'){
        this.apikey = apikey
        this.term = term
        this.id = id
        this.version = version
        this.results = []
    }

    

    async query() {
        
    } 

    getResults(): Array<any> {
        return this.results
    }
}

export default UMLSQueryTemplate;