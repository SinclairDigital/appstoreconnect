const { readFileSync, writeFileSync, createReadStream } = require('fs')
const path = require('path')
const { env } = require('process')
const { v1 } = require('../dist')
const zlib = require('zlib')

let privateKey
if (env.ASC_PRIVATE_KEY) {
    privateKey = env.ASC_PRIVATE_KEY
} else if (env.ASC_PRIVATE_KEY_PATH) {
    privateKey = readFileSync(path.normalize(env.ASC_PRIVATE_KEY_PATH))
} else {
    privateKey = ''
}
const kid = env.ASC_KEY_ID || ''
const issuerId = env.ASC_ISSUER_ID || ''

const token = v1.token(privateKey, issuerId, kid)
const api = v1(token)

v1.financeReports
    .downloadSalesReports(api, {
        filter: {
            frequency: 'DAILY',
            reportSubType: 'SUMMARY',
            reportType: 'SALES',
            vendorNumber: '85823643',
            reportDate: '2019-03-17',
        },
    })
    .then(c => {
        console.log('This is fine')
        console.log(typeof c)
        //console.log(c);
    })
    .catch(e => {
        console.error(e)
    })
