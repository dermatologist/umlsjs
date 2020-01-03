class UMLSQueryTemplate {
    apikey: string
    term: string
    id: any
    version: string
    results: Array<any>
    result: any
    pageNumber: number
    pageSize: number
    pageCount: number
    sabs: any
    ttys: any
    language: string
    includeObsolete: boolean
    includeSuppressible: boolean

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

    getResult(): any {
        return this.result
    }

    setPageNumber(pageNumber: number){
        this.pageNumber = pageNumber
    }
    
    setPageSize(pageSize: number){
        this.pageSize = pageSize
    }

    setIncludeObsolete(includeObsolete: boolean){
        this.includeObsolete = includeObsolete
    }

    setIncludeSuppressible(includeSuppressible: boolean){
        this.includeSuppressible = includeSuppressible
    }

    setLanguage(language: string){
        this.language = language
    }

    SetSabs(sabs: any){
        this.sabs = sabs
    }

    SetTtys(ttys: any){
        this.ttys = ttys
    }
    
}

export default UMLSQueryTemplate;