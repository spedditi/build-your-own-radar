require('./common')
require('./images/MS-logo.png')
require('./images/t-logo.png')

require('./images/radar_legend.png')
require('./gtm.js')

const GoogleSheetInput = require('./util/factory')

GoogleSheetInput().build()
