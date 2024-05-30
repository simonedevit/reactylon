1. Clone the repo
2. Go to https://dev.azure.com/dvmstudios/_usersSettings/tokens, click on "+ New Token" and fill out the fields:
    - Name: dvmstudios-registry
    - Organization: dvmstudios
    - Expiration (UTC): Custom defined
    - Date: choose a date no later than six months
    - Scopes: Custom defined
    - Packaging: check only "Read" <br><br>
    
    Click on "Create" and save the new personal access token. <br><br>

3. Execute the init.sh script passing the generated personal access token, i.e.:
    `bash scripts/init.sh paageuavxayisugs5ewdhoaveuh62kf3wrcngzfirdo2atmoiioq`


# TODO
1. Refactor util.ts and use same methods both for reconciler and generator
2. Massive refactor of index.ts