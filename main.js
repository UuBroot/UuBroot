/******************
 * Long term uses *
 ******************/

function openPage(url, type) {
    switch(type){
        case "new":
            window.open(url);
            break;
        case "this":
            window.location.replace(url);
            break;
        default:
            alert("an error accured while trying to change sites");
            break;
    }
}

/**********
 * TypeIt *
 **********/
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

/**********
 * Events *
 **********/
document.addEventListener("mousemove", mouseMoveHandler, false);

/****************
 * Babylon JS   *
 ****************/
let camera;
let canvas = document.getElementById("background"); // Get the canvas element 
let engine = new BABYLON.Engine(canvas, true);  // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
let createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, 0), scene);

    // Add lights to the scene

    // Add and manipulate meshes in the scene
    BABYLON.SceneLoader.ImportMeshAsync("", "./assets/", "main.glb"); //Name of the model loads one model

    //motion blur
    var motionblur = new BABYLON.MotionBlurPostProcess(
        "mb", // The name of the effect.
        scene, // The scene containing the objects to blur according to their velocity.
        1.0, // The required width/height ratio to downsize to before computing the render pass.
        camera // The camera to apply the render pass to.
    );
    motionblur.isObjectBased = false;
    motionblur.motionStrength = 10;

    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    return scene;
};
/******* End of the create scene function ******/    

let scene = createScene(); //Call the createScene function
engine.runRenderLoop(function () { 
    scene.render();
    mouseScrollHandler()
});

/*The mouse and scoll behavior of the 3D Scene*/

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

function mouseScrollHandler() {
    console.log(window.pageYOffset*-1)
    camera.position.y = (window.pageYOffset/100)*-1;
}

/****************
 * Social Media *
 ****************/
