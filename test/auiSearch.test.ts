import AUISearch from '../src/function/auiSearch'
import UMLSToken from '../src/model/umlsToken'


import dotenv from 'dotenv'

jest.setTimeout(15000);
var ticket;
beforeAll(async () => {
    dotenv.config()
    const key = process.env.UMLS_API_KEY || "";
    ticket = new UMLSToken(key)
});

test('Testing getChildren ', async () => {
    const st = await ticket.getSt()
    const search1 = new AUISearch(st)
    const AUI = 'A10134087'
    search1.init(AUI)
    await search1.getChildren()
    const result = search1.children
    console.log(result)
    expect(search1.pageCount).toBeGreaterThan(0)
})

test('Testing getParent ', async () => {
    const st = await ticket.getSt()
    const search1 = new AUISearch(st)
    const AUI = 'A10134087'
    search1.init(AUI)
    await search1.getParents()
    const result = search1.parents
    console.log(result)
    expect(search1.pageCount).toBeGreaterThan(0)
})

// These tests take > 5 seconds. Hence jest timeout increased at the top
test('Testing getAncestors ', async () => {
    const st = await ticket.getSt()
    const search1 = new AUISearch(st)
    const AUI = 'A10134087'
    search1.init(AUI)
    await search1.getAncestors()
    const result = search1.ancestors
    console.log(result)
    expect(search1.pageCount).toBeGreaterThan(0)
})

test('Testing getDescendants ', async () => {
    const st = await ticket.getSt()
    const search1 = new AUISearch(st)
    const AUI = 'A10134087'
    search1.init(AUI)
    await search1.getDescendents()
    const result = search1.descendants
    console.log(result)
    expect(search1.pageCount).toBeGreaterThan(0)
})
