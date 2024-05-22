# exclude .npmrc from Git stage
git update-index --assume-unchanged .npmrc

encoded_token=$(echo -n "$1" | base64 -w 0)

cat <<EOF > ./.npmrc
registry=https://pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios-registry/npm/registry/ 
always-auth=true

; begin auth token
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios-registry/npm/registry/:username=dvmstudios
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios-registry/npm/registry/:_password=$encoded_token
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios-registry/npm/registry/:email=npm requires email to be set but doesn't use the value
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios-registry/npm/:username=dvmstudios
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios-registry/npm/:_password=$encoded_token
//pkgs.dev.azure.com/dvmstudios/_packaging/dvmstudios-registry/npm/:email=npm requires email to be set but doesn't use the value
; end auth token
EOF