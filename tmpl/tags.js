apibrowser.callback({"template": "{{?tags}}\n\t<ul class=\"tags\">\n\t\t{{#tags}}\n\t\t\t<li>\n\t\t\t\t{{name}}\n\t\t\t\t{{#value}}\n\t\t\t\t\t={{.}}\n\t\t\t\t{{/value}}\n\t\t\t</li>\n\t\t{{/tags}}\n\t</ul>\n{{/tags}}"}, 'tags.mustache')