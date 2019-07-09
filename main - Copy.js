window.addEventListener('DOMContentLoaded', function () {
  // game loop
  // set up
  // 
  // loop
  //   get user input
  //   update
  //   render
  // end loop

  // game states
  //   - pause
  //   - play
  //   - restart
  // end condition

  // create terrain (plane and blocks) (companion shapes ???)
  // instance models
  // move around
  // pick up / throw
  // teleport
  // power ups
  // portals
  // physics
  // Velno

  // gravity
  // portals
  // time rewind








  var canvas = document.getElementById('renderCanvas');
  var engine = new BABYLON.Engine(canvas, true);

  var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
  var physicsPlugin = new BABYLON.AmmoJSPlugin();

  //var createScene = function () {
  //  var scene = new BABYLON.Scene(engine);
  //  var gravityVector = new BABYLON.Vector3(0, -98.1, 0);
  //  scene.enablePhysics(gravityVector);

  //  //Adding a light
  //  var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(200, 100, 200), scene);

  //  //Adding an Arc Rotate Camera
  //  var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 300, BABYLON.Vector3.Zero(), scene);
  //  camera.attachControl(canvas, false);

  //  var ground = BABYLON.MeshBuilder.CreateGround("gd", { width: 600, height: 600, subdivisions: 4, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
  //  ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0.7 }, scene);


  //  // The first parameter can be used to specify which mesh to import. Here we import all meshes
  //  BABYLON.SceneLoader.ImportMesh("", "models/", "skull.babylon", scene, function (newMeshes) {
  //    // Set the target of the camera to the first imported mesh
  //    camera.target = newMeshes[0];

  //    let skull = newMeshes[0];
  //    skull.rotation.x = Math.PI / 2;
  //    skull.position.y = 300;

  //    skull.physicsImpostor = new BABYLON.PhysicsImpostor(skull, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 1, friction: 0, restitution: 0.3 });

  //    var ticker = 0;

  //    let spheres = [];

  //    scene.registerBeforeRender(function () {
  //      if (ticker++ % 300) return;

  //      let s = BABYLON.MeshBuilder.CreateSphere("s", { diameter: 5 });
  //      s.position.y = 100;
  //      s.position.z = 65 + Math.random() * 20;
  //      s.position.x = -10 + Math.random() * 20;

  //      s.physicsImpostor = new BABYLON.PhysicsImpostor(s, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1 });
  //      spheres.push(s);

  //      spheres.forEach(function (sphere) {
  //        if (sphere.position.y < 0) {
  //          sphere.dispose();
  //        }
  //      });

  //      spheres = spheres.filter(s => !s.isDisposed());

  //    });
  //  });

  //  // Move the light with the camera
  //  scene.registerBeforeRender(function () {
  //    light.position = camera.position;
  //  });

  //  return scene;
  //}


  //var createScene = function () {
  //  var scene = new BABYLON.Scene(engine);
  //  scene.enablePhysics(gravityVector, physicsPlugin);

  //  var camera = new BABYLON.ArcRotateCamera('camera1', 0, 0, 1, new BABYLON.Vector3(0, 0, 0), scene);
  //  camera.setPosition(new BABYLON.Vector3(40, 80, -80));
  //  camera.attachControl(canvas, false);
  //  camera.wheelDeltaPercentage = 0.01;

  //  var light1 = new BABYLON.DirectionalLight("Directionallight1", new BABYLON.Vector3(1, -1, 1), scene);
  //  light1.position = new BABYLON.Vector3(-40, 40, -40);
  //  var shadowGenerator1 = new BABYLON.ShadowGenerator(1024, light1);
  //  //shadowGenerato1.bias = 0.0001;
  //  light1.shadowMaxZ = 130;
  //  light1.shadowMinZ = 10;
  //  shadowGenerator1.useContactHardeningShadow = true;
  //  shadowGenerator1.setDarkness(0.5);

  //  var ground = BABYLON.MeshBuilder.CreateGround("gd", { width: 600, height: 600, subdivisions: 4, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
  //  ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0.7 }, scene);
  //  ground.receiveShadows = true;

  //  //var box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);

  //  var dummy = new BABYLON.Mesh("dummy", scene);

  //  //BABYLON.SceneLoader.LoadAssetContainer("models/", "companion-cube-1x1.gltf", scene, function (container) {
  //  //  var meshes = container.meshes;
  //  //  var materials = container.materials;

  //  //  let t = 0.0088;

  //  //  let mesh = meshes[1];
  //  //  container.scene.addMesh(mesh);
  //  //  mesh.PhysicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 1, friction: 0.5, restitution: 0.7 }, scene); 
  //  //  //mesh.scaling = new BABYLON.Vector3(t, t, t);
  //  //  //mesh.isVisible = false;
  //  //  mesh.parent = dummy;
  //  //  mesh.translate(new BABYLON.Vector3(0, 1.5, 0), BABYLON.Space.WORLD);

  //  //  for (var index = 0; index < 2; index++) {
  //  //    var newInstance = mesh.createInstance("i" + index);
  //  //    newInstance.position.x = 1.1 + index*1.1;
  //  //    newInstance.PhysicsImpostor = new BABYLON.PhysicsImpostor(newInstance, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 1, friction: 0.5, restitution: 0.7 }, scene); 

  //  //    newInstance.parent = dummy;
  //  //    shadowGenerator1.addShadowCaster(newInstance);
  //  //  }

  //  //BABYLON.SceneLoader.ImportMesh("", "models/", "skull.babylon", scene, function (newMeshes) {
  //  //  // Set the target of the camera to the first imported mesh

  //  //  let mesh = newMeshes[0];
  //  //  //newMeshes[0].rotation.y = 1;//2 * Math.PI / 3;
  //  //  //mesh.rotation.x = Math.PI / 3.0;
  //  //  //mesh.position.y = 2;
  //  //  //mesh.isVisible = false;

  //  //  //var box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);
  //  //  //box.position.y = 2;
  //  //  //box.rotation.x = Math.PI / 3.0;
  //  //  //box.rotation.y = Math.PI / 3.0;
  //  //  //mesh.parent = box;

  //  //  //box.isVisible = false;

  //  //  mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 1, friction: 0, restitution: 0.3 });

  //  //  //var newInstance = box.mesh.createInstance("i" + index);
  //  //  //newInstance.position.x = 1.1;
  //  //  //newInstance.position.y = 1.1;
  //  //  //newInstance.isVisible = true;

  //  //  //mesh.isVisible = true;

  //  //  //newInstance.PhysicsImpostor = new BABYLON.PhysicsImpostor(newInstance, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 1, friction: 0.5, restitution: 0.7 }, scene);
  //  //});

  //  BABYLON.SceneLoader.ImportMesh("", "models/", "skull.babylon", scene, function (newMeshes) {
  //    // Set the target of the camera to the first imported mesh
  //    camera.target = newMeshes[0];

  //    let skull = newMeshes[0];
  //    skull.rotation.x = Math.PI / 2;
  //    skull.position.y = 300;

  //    skull.physicsImpostor = new BABYLON.PhysicsImpostor(skull, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 1, friction: 0, restitution: 0.3 });

  //    var ticker = 0;

  //  });
  //  return scene;
  //}



  var createScene = async function () {
    // Setup basic scene
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    // Enable physics
    scene.enablePhysics(new BABYLON.Vector3(0, -10, 0), new BABYLON.AmmoJSPlugin());

    // Create ground collider
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0.7 }, scene);

    // Import gltf
    var newMeshes = (await BABYLON.SceneLoader.ImportMeshAsync("", "https://raw.githubusercontent.com/TrevorDev/gltfModels/master/weirdShape.glb", "", scene)).meshes;

    // Convert to physics object and position
    var physicsRoot = makePhysicsObject(newMeshes, scene, 0.2)
    physicsRoot.position.y += 3

    return scene;
  };

  var makePhysicsObject = (newMeshes, scene, scaling) => {
    // Create physics root and position it to be the center of mass for the imported mesh
    var physicsRoot = new BABYLON.Mesh("physicsRoot", scene);
    physicsRoot.position.y -= 0.9;

    // For all children labeled box (representing colliders), make them invisible and add them as a child of the root object
    newMeshes.forEach((m, i) => {
      if (m.name.indexOf("box") != -1) {
        m.isVisible = false
        physicsRoot.addChild(m)
      }
    })

    // Add all root nodes within the loaded gltf to the physics root
    newMeshes.forEach((m, i) => {
      if (m.parent == null) {
        physicsRoot.addChild(m)
      }
    })

    // Make every collider into a physics impostor
    physicsRoot.getChildMeshes().forEach((m) => {
      if (m.name.indexOf("box") != -1) {
        m.scaling.x = Math.abs(m.scaling.x)
        m.scaling.y = Math.abs(m.scaling.y)
        m.scaling.z = Math.abs(m.scaling.z)
        m.physicsImpostor = new BABYLON.PhysicsImpostor(m, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0.1 }, scene);
      }
    })

    // Scale the root object and turn it into a physics impsotor
    physicsRoot.scaling.scaleInPlace(scaling)
    physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 3 }, scene);

    return physicsRoot
  }

  var scene = createScene();

  //engine.runRenderLoop(function () {
  //  scene.render();
  //});

  //window.addEventListener('resize', function () {
  //  engine.resize();
  //});
});
