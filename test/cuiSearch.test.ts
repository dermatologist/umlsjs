import CUISearch from '../src/function/cuiSearch'
import UMLSToken from '../src/model/umlsToken'

import dotenv from 'dotenv'

var ticket;
beforeAll(async () => {
    dotenv.config()
    const key = process.env.UMLS_API_KEY || "";
    ticket = new UMLSToken(key)
});

test('Get Results for a CUI', async () => {
    const st = await ticket.getSt()
    const search1 = new CUISearch(st)
    const CUI = 'C0009044'
    search1.init(CUI)
    await search1.query()
    const result = search1.getResult()
    expect(result.ui).toBe(CUI)
    expect(search1.pageCount).toBeGreaterThan(0)
})

test('Get Atoms for a CUI', async () => {
    const st = await ticket.getSt()
    const search1 = new CUISearch(st)
    const CUI = 'C0009044'
    search1.init(CUI)
    await search1.getAtoms()
    const result = search1.atoms
    expect(result).toBeTruthy()
    if (result)
        expect(result.length).toBeGreaterThan(1)
})

test('Get Definitions for a CUI', async () => {
    const st = await ticket.getSt()
    const search1 = new CUISearch(st)
    const CUI = 'C0009044'
    search1.init(CUI)
    await search1.getDefinitions()
    const result = search1.definitions
    expect(result).toBeTruthy()
    if (result)
        expect(result.length).toBeGreaterThan(0)
})

test('Get Relations for a CUI', async () => {
    const st = await ticket.getSt()
    const search1 = new CUISearch(st)
    const CUI = 'C0009044'
    search1.init(CUI)
    await search1.getRelations()
    const result = search1.relations
    expect(result).toBeTruthy()
    if (result)
        expect(result.length).toBeGreaterThan(1)
})