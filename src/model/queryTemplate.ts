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
        this.version = 'current'
        this.pageNumber = 1
    }

    async init(term, id=null) {
        this.term = term
        this.id = id
    } 

    // @Override
    query() {

    }

    nextPage(pageNumber=1){
        if(this.pageNumber)
            this.pageNumber = this.pageNumber + pageNumber
        else
            this.pageNumber = pageNumber
    }

    getResults(): Array<any> {
        return this.results
    }

    getResult(): any {
        return this.result
    }

    setVersion(version: string){
        this.version = version
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