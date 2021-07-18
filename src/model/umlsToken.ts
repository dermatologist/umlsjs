import { getTgt, getSt } from '../service/authService'


class UMLSToken {
    apikey: string
    tgt: string
    st: string

    constructor(apikey: string) {
        this.apikey = apikey;
        this.tgt = "";
        this.st = "";
    }

    async getSt(): Promise<string> {
        if(this.tgt == "" || this.st == "") {
            this.tgt = await getTgt(this.apikey);
        }
        this.st = await getSt(this.tgt);
        return this.st;
    }
}

export default UMLSToken;