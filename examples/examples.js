//BABYLON.SceneLoader.Append("models/", "companion-cube.gltf", scene, function (scene) {
//  // do something with the scene
//});

//BABYLON.SceneLoader.ImportMesh("", "models/", "companion-cube.gltf", scene, function (meshes) {
//  // do something with the meshes and skeletons
//  // particleSystems are always null for glTF assets
//});

//var camera = new BABYLON.ArcRotateCamera('camera1', 0, 0, 1, new BABYLON.Vector3(0, 0, 0), scene);
//camera.setPosition(new BABYLON.Vector3(0, 0, -8));
////camera.mode = BABYLON.Camera.orthographic_camera;
//camera.orthoTop = 1;
//camera.orthoBottom = -1;
//camera.orthoRight = 1;
//camera.orthoLeft = -1;
//camera.attachControl(canvas, false);

////var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,0,-10), scene);
//var light1 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
//var light2 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, 1, 0), scene);

//var plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 5, size: 5, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
////plane.material = new BABYLON.StandardMaterial("myMaterial", scene);
////plane.sideOrientation = BABYLON.Mesh.DOUBLESIDE;
////plane.material.wireframe = true;

//var amigaMaterial = new BABYLON.ShaderMaterial("amiga", scene, {
//  vertexElement: "vertexShaderCode",
//  fragmentElement: "fragmentShaderCode",
//},
//  {
//    attributes: ["position", "uv"],
//    uniforms: ["worldViewProjection"]
//  });
//amigaMaterial.setTexture("textureSampler", new BABYLON.Texture("amiga.jpg", scene));
//plane.material = amigaMaterial;
