// scripts/gpr.js
// http://quabr.com:8182/58347746/automating-the-build-and-publish-process-with-github-actions-and-github-package

const fs = require('fs')
const { join } = require('path')

// Get the package obejct and change the name
const pkg = require('../package.json')
pkg.name = '@dermatologist/umlsjs'

// Update package.json with the udpated name
fs.writeFileSync(join(__dirname, '../package.json'), JSON.stringify(pkg))