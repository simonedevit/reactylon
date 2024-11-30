# copy the package.json with updated references ("main" and "types" attributes) point to innner build folder 
sed -e 's#"main": "./build/index.js"#"main": "./index.js"#' -e 's#"types": "./build/index.d.ts"#"types": "./index.d.ts"#' package.json > ./build/package.json

# copy CHANGELOG.md file
cp CHANGELOG.md ./build/CHANGELOG.md

# copy the npmignore file to exclude stuff from publishing
cp .npmignore ./build/.npmignore

COPYRIGHT_TEXT="/* Copyright (c) 2024 Simone De Vittorio. */"
FILE="./build/index.js"

# prepend the copyright text to the file, using '#' as delimiter for sed
sed -i "1s#^#$COPYRIGHT_TEXT\n#" $FILE

## add licenses
cp "../../LICENSE.md" "./build/index.js.LICENSE.txt"

## add readme
cp "../../README.md" "./build/README.md"

cd build

npm publish