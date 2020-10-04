export const fakeSearchRequest = {
    method: 'get',
    url: 'https://uts-ws.nlm.nih.gov/rest/search/current',
    params: {
        string: 'fracture of carpal bone',
        ticket: 'ST-134-HUbXGfI765aSj0UqtdvU-cas'
    }
}

export const fakeSearch = {

    "pageSize": 25,
    "pageNumber": 1,
    "result":

    {

        "classType": "searchResults",
        "results":

            [

                {

                    "ui": "C0009044",
                    "rootSource": "SNOMEDCT_US",
                    "uri": "https://uts-ws.nlm.nih.gov/rest/content/2015AA/CUI/C0009044",
                    "name": "Closed fracture carpal bone"

                },
                {

                    "ui": "C0016644",
                    "rootSource": "MTH",
                    "uri": "https://uts-ws.nlm.nih.gov/rest/content/2015AA/CUI/C0016644",
                    "name": "Fracture of carpal bone"

                },
                {

                    "ui": "C0159765",
                    "rootSource": "MTH",
                    "uri": "https://uts-ws.nlm.nih.gov/rest/content/2015AA/CUI/C0159765",
                    "name": "Open fracture of carpal bone, unspecified"

                }]
    }

}
