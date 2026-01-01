# copy package.json
cp package.json ./build/package.json

# copy CHANGELOG.md file
cp CHANGELOG.md ./build/CHANGELOG.md

# copy npmignore file to exclude stuff from publishing
cp .npmignore ./build/.npmignore

COPYRIGHT_TEXT="/* Copyright (c) 2025-2026 Simone De Vittorio. */"
FILE="./build/index.js"

# prepend the copyright text to the file, using '#' as delimiter for sed

# Detect if we're on macOS (Darwin) or Linux
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS - BSD sed requires empty string '' after -i
    sed -i '' "1s#^#$COPYRIGHT_TEXT\n#" "$FILE"
else
    # Linux - GNU sed works as-is
    sed -i "1s#^#$COPYRIGHT_TEXT\n#" "$FILE"
fi

## add licenses
tmp="$(mktemp)"
cat ../../LICENSE.md > "$tmp"
printf "\n\n-----\nTHIRD-PARTY NOTICES\n-----\n\n" >> "$tmp"
cat ./build/index.js.LICENSE.txt >> "$tmp"
mv "$tmp" ./build/index.js.LICENSE.txt

## add readme
cp "../../README.md" "./build/README.md"

cd build

npm publish