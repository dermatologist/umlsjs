
import { getService } from '../service/generalService'
import SearchModel from '../model/search'
import UMLSQueryTemplate from '../model/queryTemplate'

class UMLSSearch extends UMLSQueryTemplate{
    results: Array<typeof SearchModel>

    async query() {
        //const params: any = {}
        const params = this.fillParams({})
        if(this.id)
            params.searchType = 'exact'
        const url = `/search/${this.version}`
        params.string = this.term
        //params.pageNumber = this.pageNumber.toString()
        //console.log(this.apikey, url, params)
        const response = await getService(this.apikey, url, params)
        this.results = response.result.results
        this.pageNumber = response.pageNumber
        this.pageSize = response.pageSize
    } 

    getResults(): Array<typeof SearchModel> {
        return this.results
    }
}

export default UMLSSearch;