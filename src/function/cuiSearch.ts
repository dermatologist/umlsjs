
import { getService } from '../service/generalService'
import ConceptModel from '../model/concept'
import UMLSQueryTemplate from '../model/queryTemplate'

class CUISearch extends UMLSQueryTemplate{
    result: typeof ConceptModel

    async query() {
        const params = this.fillParams({})
        const url = `/content/${this.version}/CUI/${this.term}`
        const response = await getService(this.apikey, url, params)
        this.result = response.result
        this.pageNumber = response.pageNumber
        this.pageSize = response.pageSize
        this.pageCount = response.pageCount
    } 

    getResult(): typeof ConceptModel {
        return this.result
    }
}

export default CUISearch;