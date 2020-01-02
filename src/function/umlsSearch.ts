
import { getService } from '../service/generalService'
import SearchModel from '../model/search'
import UMLSQueryTemplate from '../model/queryTemplate'

class UMLSSearch extends UMLSQueryTemplate{
    results: Array<typeof SearchModel>

    async performQuery() {
        const params: any = {}
        if(this.id)
            params.searchType = 'exact'
        const url = `/search/${this.version}`
        params.string = this.term
        //console.log(this.apikey, url, params)
        const response = await getService(this.apikey, url, params)
        this.results = response.result.results
    } 

    getResults(): Array<typeof SearchModel> {
        return this.results
    }
}

export default UMLSSearch;