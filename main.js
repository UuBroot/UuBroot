new TypeIt("#title", {
    strings: "This is a simple string.",
    speed: 50,
    waitUntilVisible: true,
}).go();

//Events
//document.addEventListener("mousemove", mouseMoveHandler, false);



let camera;
// Babylon
if (BABYLON.Engine.isSupported()) {
    var canvas = document.getElementById("background");
    var engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine);

    camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, 20), scene);
    let sun = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(60, 100, 10), scene);

    /*
    const animation = new BABYLON.Animation(
        "cameraRotation",
        "position",
        30,
        BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );
      
      // Define keyframes for the animation
      const keys = [];
      keys.push({
        frame: 0,
        value: new BABYLON.Vector3(0, 0, 20)
      });
      keys.push({
        frame: 100,
        value: new BABYLON.Vector3(Math.PI * 2 , 0, 20)
      });
      
      // Assign the keyframes to the animation
      animation.setKeys(keys);
      
      // Apply the animation to the camera
      camera.animations.push(animation);
      
      // Start the animation
      scene.beginAnimation(camera, 0, 100, true);
*/



    // Skybox
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("skybox/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    var extraGround = BABYLON.Mesh.CreateGround("extraGround", 1000, 1000, 1, scene, false);
    var extraGroundMaterial = new BABYLON.StandardMaterial("extraGround", scene);
    extraGroundMaterial.diffuseTexture = new BABYLON.Texture("ground.jpg", scene);
    extraGroundMaterial.diffuseTexture.uScale = 60;
    extraGroundMaterial.diffuseTexture.vScale = 60;
    extraGround.position.y = -2.05;
    extraGround.material = extraGroundMaterial;

    var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "heightMap.png", 100, 100, 100, 0, 10, scene, false);
    var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("ground.jpg", scene);
    groundMaterial.diffuseTexture.uScale = 6;
    groundMaterial.diffuseTexture.vScale = 6;
    groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    ground.position.y = -2.0;
    ground.material = groundMaterial;

    engine.runRenderLoop(function () {
        scene.render();
    });
}

function mouseMoveHandler(e) {
    // Get the mouse coordinates relative to the canvas or scene
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    console.log("mousex: ",mouseX);
    console.log("mousey: ",mouseY);

    let rotationY = mouseX / 420;
    let rotationX = mouseY/200 *-1;

    camera.rotation.y = rotationY;
    camera.rotation.x = rotationX;
}
