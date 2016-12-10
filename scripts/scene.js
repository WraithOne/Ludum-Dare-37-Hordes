var createScene = function ()
{
    // Now create a basic Babylon Scene object
    var scene = new BABYLON.Scene(engine);

    // Enable Collisions
    scene.collisionsEnabled = true;

    // Change the scene background color to green.
    scene.clearColor = new BABYLON.Color3(0, 1, 0);

    // This creates and positions a free camera
    var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, 3, 0), scene);
    camera.attachControl(canvas, true);

    //Then apply collisions and gravity to the active camera
    camera.checkCollisions = true;
    camera.applyGravity = true;
    //Set the ellipsoid around the camera (e.g. your player's size)
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

    // This creates a light, aiming 0,1,0 - to the sky.
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    // Dim the light a small amount
    light.intensity = .5;

    var roomSize = 60.0;
    //Ground
    var ground = BABYLON.Mesh.CreatePlane("ground", roomSize, scene);
    ground.material = new BABYLON.StandardMaterial("groundMat", scene);
    ground.material.diffuseTexture = new BABYLON.Texture("assets/Floor.png",scene);
    ground.material.diffuseTexture.uScale = 12.0;
    ground.material.diffuseTexture.vScale = 12.0;
    ground.material.backFaceCulling = false;
    ground.position = new BABYLON.Vector3(0, 0, 0);
    ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);
    ground.checkCollisions = true;

    //Wall material
    var wallMaterial = new BABYLON.StandardMaterial("wallMat", scene);
    wallMaterial.diffuseTexture = new BABYLON.Texture("assets/Wall.png",scene);
    wallMaterial.diffuseTexture.uScale = 12.0;
    wallMaterial.diffuseTexture.vScale = 12.0;
    wallMaterial.backFaceCulling = false;

    // Wall Front
    var wallfront = BABYLON.Mesh.CreateBox("WallFront", roomSize, scene);
    wallfront.material = wallMaterial;
    wallfront.position = new BABYLON.Vector3(0, -20, roomSize);
    wallfront.checkCollisions = true;
    // Wall back
    var wallback = BABYLON.Mesh.CreateBox("WallBack", roomSize, scene);
    wallback.material = wallMaterial;
    wallback.position = new BABYLON.Vector3(0, -20, -roomSize);
    wallback.checkCollisions = true;
    // Wall left
    var wallleft = BABYLON.Mesh.CreateBox("WallLeft", roomSize, scene);
    wallleft.material = wallMaterial;
    wallleft.position = new BABYLON.Vector3(-roomSize, -20, 0);
    wallleft.rotation = new BABYLON.Vector3(0, Math.PI / 2, 0);
    wallleft.checkCollisions = true;
    // Wall right
    var wallright = BABYLON.Mesh.CreateBox("WallRight", roomSize, scene);
    wallright.material = wallMaterial;
    wallright.position = new BABYLON.Vector3(roomSize, -20, 0);
    wallright.rotation = new BABYLON.Vector3(0, Math.PI / 2, 0);
    wallright.checkCollisions = true;

    // SkyBox
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 200.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBoxMat", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;
    skybox.infiniteDistance = true;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/skybox/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skybox.renderingGroupId = 0;

    // Register updateScene to execute before Render
    scene.registerBeforeRender(updateScene);

    // Leave this function
    return scene;
}; // End of createScene function

updateScene = function()
{

};