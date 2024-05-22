# copy the package.json with updated references ("main" and "types" attributes) point to innner build folder 
sed -e 's#"main": "./build/index.js"#"main": "./index.js"#' -e 's#"types": "./build/index.d.ts"#"types": "./index.d.ts"#' package.json > ./build/package.json

# copy CHANGELOG.md file
cp CHANGELOG.md ./build/CHANGELOG.md

# copy CHANGELOG.md file
cp .npmrc ./build/.npmrc

# copy the npmignore file to exclude stuff from publishing
cp .npmignore ./build/.npmignore

cd build

npm publish