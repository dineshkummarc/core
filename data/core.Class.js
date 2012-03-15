apibrowser.callback({
  "statics": [
    {
      "name": "assertIsClass", 
      "sourceLink": "source:core.Class~398", 
      "visibility": "public", 
      "summary": "Throws an error with a custom message when the given object is not a class.", 
      "params": [
        {
          "position": 0, 
          "type": [
            "var"
          ], 
          "name": "object"
        }, 
        {
          "position": 1, 
          "optional": true, 
          "name": "message", 
          "type": [
            "String"
          ]
        }
      ], 
      "doc": "<p>Throws an error with a custom <code class=\"param\">message</code> when the given <code class=\"param\">object</code> is not a class.</p>\n", 
      "line": 398, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "getByName", 
      "doc": "<p>Resolves a given <code class=\"param\">className</code></p>\n", 
      "visibility": "public", 
      "returns": [
        "core.Class"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "String"
          ], 
          "name": "className"
        }
      ], 
      "sourceLink": "source:core.Class~422", 
      "line": 422, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "getEvents", 
      "doc": "<p>Returns a map of all events and their type of the given class (<code class=\"param\">cls</code>).</p>\n", 
      "visibility": "public", 
      "summary": "Returns a map of all events and their type of the given class (cls).", 
      "returns": [
        "Map"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "core.Class"
          ], 
          "name": "cls"
        }
      ], 
      "sourceLink": "source:core.Class~436", 
      "line": 436, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "getProperties", 
      "doc": "<p>Returns a map of all properties and their configuration supported by the given class (<code class=\"param\">cls</code>).</p>\n", 
      "visibility": "public", 
      "summary": "Returns a map of all properties and their configuration supported by the given class (cls).", 
      "returns": [
        "Map"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "core.Class"
          ], 
          "name": "cls"
        }
      ], 
      "sourceLink": "source:core.Class~449", 
      "line": 449, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "getPropertyFeatures", 
      "doc": "<p>Returns all property features used in the given class (<code class=\"param\">cls</code>).</p>\n", 
      "visibility": "public", 
      "summary": "Returns all property features used in the given class (cls).", 
      "returns": [
        "Map"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "core.Class"
          ], 
          "name": "cls"
        }
      ], 
      "sourceLink": "source:core.Class~462", 
      "line": 462, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "includesClass", 
      "doc": "<p>Whether the first class includes the second one.</p>\n\n<ul>\n<li><code class=\"param\">cls</code> Class to check for including other class.</li>\n<li><code class=\"param\">inc</code> Class for checking if being included into first one.</li>\n</ul>\n", 
      "visibility": "public", 
      "summary": "Whether the first class includes the second one.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "core.Class"
          ], 
          "name": "cls"
        }, 
        {
          "position": 1, 
          "type": [
            "core.Class"
          ], 
          "name": "inc"
        }
      ], 
      "sourceLink": "source:core.Class~484", 
      "line": 484, 
      "type": "Function", 
      "isFunction": true
    }, 
    {
      "name": "isClass", 
      "doc": "<p>Returns whether the given <code class=\"param\">object</code> is a class.</p>\n", 
      "visibility": "public", 
      "summary": "Returns whether the given object is a class.", 
      "returns": [
        "Boolean"
      ], 
      "params": [
        {
          "position": 0, 
          "type": [
            "Object"
          ], 
          "name": "object"
        }
      ], 
      "sourceLink": "source:core.Class~390", 
      "line": 390, 
      "type": "Function", 
      "isFunction": true
    }
  ], 
  "assets": [], 
  "package": "core", 
  "basename": "Class", 
  "permutations": [
    "debug", 
    "es5"
  ], 
  "construct": {
    "doc": "<p>Rich class system for declaring powerful classes in JavaScript. The declarations supports a lot of convenience\nfeatures and unifies all features under a simple declarative API which can be easily processed by 3rd party tools.</p>\n\n<p>Defines a new class with <code class=\"param\">name</code> using the given <code class=\"param\">config</code>.</p>\n", 
    "init": "core.Class", 
    "params": [
      {
        "position": 0, 
        "type": [
          "String"
        ], 
        "name": "name"
      }, 
      {
        "position": 1, 
        "type": [
          "Map"
        ], 
        "name": "config"
      }
    ], 
    "sourceLink": "source:core.Class~144", 
    "line": 144, 
    "isFunction": true
  }, 
  "uses": [
    "core.Assert", 
    "core.Env", 
    "core.Interface", 
    "core.Main", 
    "core.Module", 
    "core.property.Group", 
    "core.property.IEvent", 
    "core.property.IInheritable", 
    "core.property.IThemeable", 
    "core.property.Simple", 
    "ext.es5.Array", 
    "ext.es5.Date", 
    "ext.es5.JSON", 
    "ext.es5.Object", 
    "ext.sugar.Object"
  ], 
  "usedBy": [
    "api.Browser", 
    "api.test.Animal", 
    "api.test.Dog", 
    "api.test.Food", 
    "core.Interface", 
    "core.collection.LinkedList", 
    "core.property.Debug", 
    "core.property.MGeneric", 
    "core.render.Tiling", 
    "core.template.Template"
  ], 
  "main": {
    "doc": "<p>Rich class system for declaring powerful classes in JavaScript. The declarations supports a lot of convenience\nfeatures and unifies all features under a simple declarative API which can be easily processed by 3rd party tools.</p>\n\n<p>Defines a new class with <code class=\"param\">name</code> using the given <code class=\"param\">config</code>.</p>\n", 
    "line": 144, 
    "type": "core.Main", 
    "name": "core.Class", 
    "tags": []
  }, 
  "id": "core.Class", 
  "size": {
    "zipped": 831, 
    "optimized": 1546, 
    "compressed": 7744
  }
},'core.Class');