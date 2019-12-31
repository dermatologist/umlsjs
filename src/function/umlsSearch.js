
import { getService } from '../service/generalService'
import SearchModel from '../model/search'

class UMLSSearch {

    constructor(apikey, search_term, exact=false, version = 'current'){
        this.apikey = apikey
        this.search_term = search_term
        this.exact = exact
        this.version = version
    }

    

    async search() {
        const params = {}
        if(this.exact)
            params.searchType = 'exact'
        const url = `/search/${this.version}`
        params.string = this.search_term
        //console.log(this.apikey, url, params)
        const response = await getService(this.apikey, url, params)
        this.search = response.result.results
    } 

    getResults() {
        return this.search
    }
}

export default UMLSSearch;