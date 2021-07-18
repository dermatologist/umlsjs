
import { getService } from '../service/generalService'
import SearchModel from '../model/search'
import UMLSQueryTemplate from '../model/queryTemplate'

class UMLSSearch extends UMLSQueryTemplate{

    async query() {
        //const params: any = {}
        const params = this.fillParams({})
        if(this.id)
            params.searchType = 'exact'
        const url = `/search/${this.version}`
        params.string = this.term
        //params.pageNumber = this.pageNumber.toString()
        //console.log(this.apikey, url, params)
        const response = await getService(this.st, url, params)
        this.results = response.result.results
    }

    getResults(): Array<typeof SearchModel> {
        return this.results
    }
}

export default UMLSSearch;