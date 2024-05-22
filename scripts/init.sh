# exclude .npmrc from Git stage
git update-index --assume-unchanged .npmrc

encoded_token=$(echo -n "$1" | base64 -w 0)

cat <<EOF > ./.npmrc
registry=https://pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios/npm/registry/ 
always-auth=true

; begin auth token
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios/npm/registry/:username=dvmstudios
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios/npm/registry/:_password=$encoded_token
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios/npm/registry/:email=npm requires email to be set but doesn't use the value
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios/npm/:username=dvmstudios
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios/npm/:_password=$encoded_token
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios/npm/:email=npm requires email to be set but doesn't use the value
; end auth token
EOF