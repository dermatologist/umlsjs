
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
    }

    async getAtoms() {
        const params = this.fillParams({})
        const url = `/content/${this.version}/CUI/${this.term}/atoms`
        const response = await getService(this.apikey, url, params)
        this.atoms = response.result
    } 

    async getDefinitions() {
        const params = this.fillParams({})
        const url = `/content/${this.version}/CUI/${this.term}/definitions`
        const response = await getService(this.apikey, url, params)
        this.definitions = response.result
    } 

    getResult(): typeof ConceptModel {
        return this.result
    }
}

export default CUISearch;