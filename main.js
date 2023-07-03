new TypeIt("#title", {
    speed: 50,
    waitUntilVisible: true,
})
    .type("This is my", { delay: 1300 })
    .delete(2)
    .type("UuBroot's")
    .move(null, { to: "END" })
    .type(" homepage :)")
    .go();

//Events
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("wheel", mouseScrollHandler, false);


let camera;
// Babylon
if (BABYLON.Engine.isSupported()) {
    var canvas = document.getElementById("background");
    var engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine);

    camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, 360), scene);
    let sun = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(60, 100, 10), scene);

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

    //console.log("mousex: ",mouseX);
    //console.log("mousey: ",mouseY);

    let rotationY = mouseX / 7020;
    let rotationX = (mouseY - 500)/2000;

    camera.rotation.y = rotationY;
    camera.rotation.x = rotationX;
}

function mouseScrollHandler(e) {
    console.log(window.pageYOffset*-1)
    camera.position.y = (window.pageYOffset/100)*-1;
}