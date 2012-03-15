apibrowser.callback({
  "package": "", 
  "basename": "String", 
  "uses": [], 
  "members": [
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.String~camelize", 
      "line": 123, 
      "isFunction": true, 
      "from": "ext.sugar.String", 
      "name": "camelize", 
      "sourceLink": "source:ext.sugar.String~123", 
      "summary": "Camelizes this string.", 
      "returns": [
        "String"
      ], 
      "doc": "<p>Camelizes this string.</p>\n", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.String~compact", 
      "line": 102, 
      "isFunction": true, 
      "from": "ext.sugar.String", 
      "name": "compact", 
      "sourceLink": "source:ext.sugar.String~102", 
      "summary": "Removes double spaces and line breaks.", 
      "returns": [
        "String"
      ], 
      "doc": "<p>Removes double spaces and line breaks.</p>\n", 
      "type": "Function"
    }, 
    {
      "from": "ext.sugar.String", 
      "name": "contains", 
      "doc": "<p>Whether the string contains the given <code class=\"param\">substring</code>.</p>\n", 
      "visibility": "public", 
      "summary": "Whether the string contains the given substring.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "substring"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~78", 
      "fromLink": "member:ext.sugar.String~contains", 
      "line": 78, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "from": "ext.sugar.String", 
      "name": "decodeBase64", 
      "tags": [
        {
          "name": "require", 
          "value": "ext.Base64"
        }
      ], 
      "doc": "<p>Decodes the string from Base64.</p>\n", 
      "visibility": "public", 
      "summary": "Decodes the string from Base64.", 
      "returns": [
        "String"
      ], 
      "sourceLink": "source:ext.sugar.String~32", 
      "fromLink": "member:ext.sugar.String~decodeBase64", 
      "line": 32, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.String~decodeUtf8", 
      "line": 70, 
      "isFunction": true, 
      "from": "ext.sugar.String", 
      "name": "decodeUtf8", 
      "sourceLink": "source:ext.sugar.String~70", 
      "summary": "Decodes the string from UTF-8.", 
      "returns": [
        "String"
      ], 
      "doc": "<p>Decodes the string from UTF-8.</p>\n\n<p>Via: <a href=\"http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html\">http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html</a></p>\n", 
      "type": "Function"
    }, 
    {
      "from": "ext.sugar.String", 
      "name": "encodeBase64", 
      "tags": [
        {
          "name": "require", 
          "value": "ext.Base64"
        }
      ], 
      "doc": "<p>Encodes the string as Base64.</p>\n", 
      "visibility": "public", 
      "summary": "Encodes the string as Base64.", 
      "returns": [
        "String"
      ], 
      "sourceLink": "source:ext.sugar.String~22", 
      "fromLink": "member:ext.sugar.String~encodeBase64", 
      "line": 22, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.String~encodeUtf8", 
      "line": 60, 
      "isFunction": true, 
      "from": "ext.sugar.String", 
      "name": "encodeUtf8", 
      "sourceLink": "source:ext.sugar.String~60", 
      "summary": "Encodes the string as UTF-8.", 
      "returns": [
        "String"
      ], 
      "doc": "<p>Encodes the string as UTF-8.</p>\n\n<p>Via: <a href=\"http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html\">http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html</a></p>\n", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.String~endsWith", 
      "line": 152, 
      "isFunction": true, 
      "from": "ext.sugar.String", 
      "name": "endsWith", 
      "sourceLink": "source:ext.sugar.String~152", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "end"
        }
      ], 
      "doc": "<p>Returns <code>true</code> if this string ends with the given substring <code class=\"param\">end</code></p>\n", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.String~hyphenate", 
      "line": 113, 
      "isFunction": true, 
      "from": "ext.sugar.String", 
      "name": "hyphenate", 
      "sourceLink": "source:ext.sugar.String~113", 
      "summary": "Returns a hyphenated copy of the original string e.g.", 
      "returns": [
        "String"
      ], 
      "doc": "<p>Returns a hyphenated copy of the original string e.g.</p>\n\n<ul>\n<li>camelCase =&gt; camel-case</li>\n<li>HelloWorld =&gt; -hello-world</li>\n</ul>\n", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.String~isBlank", 
      "line": 86, 
      "isFunction": true, 
      "from": "ext.sugar.String", 
      "name": "isBlank", 
      "sourceLink": "source:ext.sugar.String~86", 
      "summary": "Returns true if the string has a length of 0 or contains only whitespace.", 
      "returns": [
        "Boolean"
      ], 
      "doc": "<p>Returns true if the string has a length of 0 or contains only whitespace.</p>\n", 
      "type": "Function"
    }, 
    {
      "from": "ext.sugar.String", 
      "name": "repeat", 
      "doc": "<p>Returns a new string which is a <code class=\"param\">nr</code> repeated copy of the original one.</p>\n", 
      "visibility": "public", 
      "summary": "Returns a new string which is a nr repeated copy of the original one.", 
      "returns": [
        "String"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Integer"
          ], 
          "name": "nr"
        }
      ], 
      "sourceLink": "source:ext.sugar.String~134", 
      "fromLink": "member:ext.sugar.String~repeat", 
      "line": 134, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "returns": [
        "String"
      ], 
      "from": "ext.sugar.String", 
      "name": "reverse", 
      "sourceLink": "source:ext.sugar.String~94", 
      "fromLink": "member:ext.sugar.String~reverse", 
      "doc": "<p>Reverses the string</p>\n", 
      "line": 94, 
      "type": "Function", 
      "isFunction": true, 
      "visibility": "public"
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.sugar.String~startsWith", 
      "line": 144, 
      "isFunction": true, 
      "from": "ext.sugar.String", 
      "name": "startsWith", 
      "sourceLink": "source:ext.sugar.String~144", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "begin"
        }
      ], 
      "doc": "<p>Returns <code>true</code> if this string starts with the given substring <code class=\"param\">begin</code></p>\n", 
      "type": "Function"
    }, 
    {
      "returns": [
        "String"
      ], 
      "from": "ext.sugar.String", 
      "name": "toHex", 
      "sourceLink": "source:ext.sugar.String~40", 
      "fromLink": "member:ext.sugar.String~toHex", 
      "doc": "<p>Converts the string into a hex string</p>\n", 
      "line": 40, 
      "type": "Function", 
      "isFunction": true, 
      "visibility": "public"
    }, 
    {
      "returns": [
        "String"
      ], 
      "from": "ext.StringTrim", 
      "name": "trim", 
      "sourceLink": "source:ext.StringTrim~30", 
      "fromLink": "member:ext.StringTrim~trim", 
      "doc": "<p>Implements <code>trim</code> according to // ES5 15.5.4.20 (<a href=\"http://es5.github.com/#x15.5.4.20\">http://es5.github.com/#x15.5.4.20</a>)</p>\n", 
      "line": 30, 
      "type": "Function", 
      "isFunction": true, 
      "visibility": "public"
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.StringTrim~trimLeft", 
      "line": 37, 
      "isFunction": true, 
      "from": "ext.StringTrim", 
      "name": "trimLeft", 
      "sourceLink": "source:ext.StringTrim~37", 
      "summary": "Trims whitespace from the left side of the string.", 
      "returns": [
        "String"
      ], 
      "doc": "<p>Trims whitespace from the left side of the string. Non standard extension of JavaScript 1.8.1.</p>\n", 
      "type": "Function"
    }, 
    {
      "visibility": "public", 
      "fromLink": "member:ext.StringTrim~trimRight", 
      "line": 44, 
      "isFunction": true, 
      "from": "ext.StringTrim", 
      "name": "trimRight", 
      "sourceLink": "source:ext.StringTrim~44", 
      "summary": "Trims whitespace from the right side of the string.", 
      "returns": [
        "String"
      ], 
      "doc": "<p>Trims whitespace from the right side of the string. Non standard extension of JavaScript 1.8.1.</p>\n", 
      "type": "Function"
    }
  ], 
  "main": {
    "from": [
      "ext.sugar.String", 
      "ext.StringTrim"
    ], 
    "type": "Extend", 
    "name": "String", 
    "doc": "Extensions for String"
  }, 
  "id": "String"
},'String');