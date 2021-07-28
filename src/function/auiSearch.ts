
import { getService } from '../service/generalService'
import ConceptModel from '../model/concept'
import UMLSQueryTemplate from '../model/queryTemplate'

class AUISearch extends UMLSQueryTemplate {
    async getChildren(){
        const params = this.fillParams({})
        const url = `/content/${this.version}/AUI/${this.term}/children`
        const response = await getService(this.st, url, params)
        this.children = response.result
    }

    async getParents(){
        const params = this.fillParams({})
        const url = `/content/${this.version}/AUI/${this.term}/parents`
        const response = await getService(this.st, url, params)
        this.parents = response.result
    }

    async getAncestors(){
        const params = this.fillParams({})
        const url = `/content/${this.version}/AUI/${this.term}/ancestors`
        const response = await getService(this.st, url, params)
        this.ancestors = response.result
    }

    async getDescendents(){
        const params = this.fillParams({})
        const url = `/content/${this.version}/AUI/${this.term}/descendants`
        const response = await getService(this.st, url, params)
        this.descendants = response.result
    }
    getResult(): typeof ConceptModel {
        return this.result
    }
}

export default AUISearch;
