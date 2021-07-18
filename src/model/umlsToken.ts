import { getTgt, getSt } from '../service/authService'


class UMLSToken {
    apikey: string
    tgt: string
    st: string
    expiry: number

    constructor(apikey: string) {
        this.apikey = apikey;
        this.tgt = "";
        this.st = "";
        this.expiry = new Date().getTime();
    }

    async getSt(): Promise<string> {
        if(this.tgt == "" || this.st == "" || this.expired()) {
            this.tgt = await getTgt(this.apikey);
            this.expiry = new Date().getTime();
        }
        this.st = await getSt(this.tgt);
        return this.st;
    }

    expired(): boolean {
        const expirationDuration = 1000 * 60 * 60 * 8; // 8 hours
        const currentTime = new Date().getTime();
        return this.expiry !== undefined && (currentTime - this.expiry) > expirationDuration;
    }
}

export default UMLSToken;