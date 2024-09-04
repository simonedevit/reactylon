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
1. With concurrently it is a mess, find a way to start process and understand who should depend from others (scripting)
2. DONE - Remove logs from production build
3. MeshBuilder: extrudeShape, extrudeShapeCustom, extrudePolygon
4. Create JSON.stringify method for stringify meshes in Reactylon (exclude 'metadata' attribute)
5. Add observable for inputText, checkbox, radioButton, slider (https://doc.babylonjs.com/features/featuresDeepDive/gui/gui)
6. inputPassword -> check generated component
7. Add observable for 3D gui (https://doc.babylonjs.com/features/featuresDeepDive/gui/gui3D)
6. Plane panel
7. Events on meshButton3D (animations)
8. Remove observable mapping, use directly observable in onCreate
9. Improve rendering (props comparison)

# Props

## Cross
- onCreate (executed after instance creation)
- cloneFrom (clone element from another element)
- propertiesFrom (copy properties from another element)

# Scene
- isGui3DManager (required to use GUI3DManager)

## Meshes
- instanceFrom (create instance from another mesh)
- onPick, onDoublePick, onPickDown, onPickUp, onPickOut, onLeftPick, onRightPick, onCenterPick, onLongPress, onPointerOver, onPointerOut, onIntersectionEnter, onIntersectionExit
- intersectionMeshId (mesh, only with onIntersectionEnter and onIntersectionExit)

## Materials
- assignTo (assign material to one or more meshes)

## Textures
- kind (attribute will be applied to material instance)
