
import { getService } from '../service/generalService'
import SearchModel from '../model/search'

class UMLSSearch {
    apikey: string
    search_term: string
    exact: boolean
    version: string
    results: Array<typeof SearchModel>

    constructor(apikey, search_term, exact=false, version = 'current'){
        this.apikey = apikey
        this.search_term = search_term
        this.exact = exact
        this.version = version
    }

    

    async search() {
        const params: any = {}
        if(this.exact)
            params.searchType = 'exact'
        const url = `/search/${this.version}`
        params.string = this.search_term
        //console.log(this.apikey, url, params)
        const response = await getService(this.apikey, url, params)
        this.results = response.result.results
    } 

    getResults(): Array<typeof SearchModel> {
        return this.results
    }
}

export default UMLSSearch;