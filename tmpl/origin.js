apibrowser.callback({"template": "{{?origin}}\n\t<div class=\"origin\">\n\t\t<strong>Included from: </strong>\n\t\t{{#origin}}\n\t\t\t<a href=\"#{{link}}\">{{name}}</a>\n\t\t{{/origin}}\n\t</div>\n{{/origin}}\n\n{{?overridden}}\n\t<div class=\"overridden\">\n\t\t<strong>Overridden from: </strong>\n\t\t{{#overridden}}\n\t\t\t<a href=\"#{{link}}\">{{name}}</a>\n\t\t{{/overridden}}\n\t</div>\n{{/overridden}}\n\n{{?defined}}\n\t<div class=\"defined\">\n\t\t<strong>Defined by: </strong>\n\t\t{{#defined}}\n\t\t\t<a href=\"#{{link}}\">{{name}}</a>\n\t\t{{/defined}}\n\t</div>\n{{/defined}}"}, 'origin.mustache')