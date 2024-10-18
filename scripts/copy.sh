# copy the package.json with updated references ("main" and "types" attributes) point to innner build folder 
sed -e 's#"main": "./build/index.js"#"main": "./index.js"#' -e 's#"types": "./build/index.d.ts"#"types": "./index.d.ts"#' package.json > ./build/package.json
