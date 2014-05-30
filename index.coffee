system = require 'system'
url = system.args[1]

page = (require 'webpage').create()
page.open url, (status) ->
  page.render 'index.jpg'
  phantom.exit 0
