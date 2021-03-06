# Configure
session.permutateField("es5")
session.setField("debug", True)
formatting.enable("semicolon")
formatting.enable("comma")


@task("Source")
def source():
    # Prepare assets
    resolver = Resolver().addClassName("tests")
    assets = AssetManager(resolver.getIncludedClasses()).exportSource()

    # Store kernel script
    includedByKernel = storeKernel("script/kernel.js", assets=assets, debug=True)
    
    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        resolver = Resolver()
        resolver.addClassName("tests")
        resolver.excludeClasses(includedByKernel)
        
        # Writing source loader
        classes = Sorter(resolver).getSortedClasses()
        storeLoader("script/test-%s.js" % permutation.getChecksum(), classes, bootCode="QUnit.load();")


@task("Build")
def build():
    # Prepare assets
    resolver = Resolver().addClassName("tests")
    assets = AssetManager(resolver.getIncludedClasses()).exportBuild()

    # Write kernel script
    includedByKernel = storeKernel("script/kernel.js", assets=assets, debug=True)

    # Copy files from source
    updateFile("source/index.html", "index.html")

    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        resolver = Resolver()
        resolver.addClassName("tests")
        resolver.excludeClasses(includedByKernel)

        # Compressing classes
        classes = Sorter(resolver).getSortedClasses()
        storeCompressed("script/test-%s.js" % permutation.getChecksum(), classes, bootCode="QUnit.load();")
    
    
@task("Clear Cache")
def clear():
    session.clearCache()
