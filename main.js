new TypeIt("#title", {
    strings: "This is a simple string.",
    speed: 50,
    waitUntilVisible: true,
}).go();

const canvas = document.getElementById("background");
const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

// GLOBAL OBJECTS
let sphere;
let sphere2;
class Playground {
    static CreateScene(engine, canvas) {
        // SCENE
        let scene = new BABYLON.Scene(engine);
        // CAMERA
        let camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(0, 1, 15), scene);
        camera.setTarget(new BABYLON.Vector3(0, 1, 0));
        camera.attachControl(canvas, true);
        camera.speed = 0.2;
        camera.keysUp[0] = "W".charCodeAt(0);
        camera.keysDown[0] = "S".charCodeAt(0);
        camera.keysLeft[0] = "A".charCodeAt(0);
        camera.keysRight[0] = "D".charCodeAt(0);
        camera.keysRotateLeft[0] = "37".charCodeAt(0);
        camera.keysRotateRight[0] = "39".charCodeAt(0);
        camera.keysUpward[0] = "32".charCodeAt(0);
        camera.keysDownward[0] = "17".charCodeAt(0);
        camera._needMoveForGravity = true;
        return scene;
    }
}
const scene = Playground.CreateScene(engine, canvas);
// RENDER LOOP
engine.runRenderLoop(() => {
    scene.render();
});
// RESIZE LISTENER
window.addEventListener("resize", () => {
    engine.resize();
});