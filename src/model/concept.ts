const ConceptModel = {
    classType: String,
    ui: String,
    suppressible: Boolean,
    dateAdded: Date,
    majorRevisionDate: Date,
    status: String,
    semanticTypes: [
        {
            name: String,
            uri: String
        }
    ],
    atomCount: Number,
    attributeCount: Number,
    cvMemberCount: Number,
    atoms: String,
    definitions: String,
    relations: String,
    defaultPreferredAtom: String,
    relationCount: Number,
    name: String
}
export default ConceptModel