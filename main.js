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

  var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera('camera1', 0, 0, 1, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(1, 2, -2));
    camera.attachControl(canvas, false);
    //camera.sensibility *= 0.001;
    camera.wheelDeltaPercentage = 0.01;
    //camera.inputs.attached.mousewheel.wheelDeltaPercentage = 0.01;

    //var light1 = new BABYLON.Hemisphericlight1('light11', new BABYLON.Vector3(0,0,-10), scene);
    var light1 = new BABYLON.DirectionalLight("Directionallight1", new BABYLON.Vector3(1, -1, 1), scene);
    light1.position = new BABYLON.Vector3(-40, 40, -40);
    var shadowGenerator1 = new BABYLON.ShadowGenerator(1024, light1);
    //shadowGenerato1.bias = 0.0001;
    light1.shadowMaxZ = 130;
    light1.shadowMinZ = 10;
    shadowGenerator1.useContactHardeningShadow = true;
    shadowGenerator1.setDarkness(0.5);



    //var light2 = new BABYLON.DirectionalLight("Directionallight2", new BABYLON.Vector3(-1, -1, -1), scene);
    //light2.position = new BABYLON.Vector3(40, 40, -40);

    //var shadowGenerator2 = new BABYLON.ShadowGenerator(1024, light2);
    //light2.shadowMaxZ = 130;
    //light2.shadowMinZ = 10;
    //shadowGenerator2.useContactHardeningShadow = true;
    //shadowGenerator2.setDarkness(0.5);

    var ground = BABYLON.MeshBuilder.CreateGround("gd", { width: 6, height: 6, subdivisions: 4, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    ground.receiveShadows = true;

    //var box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);
    //shadowGenerato1.addShadowCaster(box);

    var dummy = new BABYLON.Mesh("dummy", scene);

    BABYLON.SceneLoader.LoadAssetContainer("models/", "companion-cube.gltf", scene, function (container) {
      var meshes = container.meshes;
      var materials = container.materials;
      //...
      //materials[0].sideOrientation = BABYLON.Mesh.BACKSIDE;
      //for (var i = meshes.length+1; i <= 0; i--) {
      //  if (meshes[i].metaData === null)
      //    meshes.splice(i, i);
      //}

      let t = 0.0088;
      meshes[1].scaling = new BABYLON.Vector3(t, t, t);
      meshes[1].isVisible = false;
      meshes[1].parent = dummy;

      //dummy.translate(new BABYLON.Vector3(0, .5, 0), BABYLON.Space.WORLD);

      for (var index = 0; index < 10; index++) {
        var newInstance = meshes[1].createInstance("i" + index);
        // Here you could change the properties of your individual instance,
        // for example to form a diagonal line of instances:
        newInstance.position.x = index;
        newInstance.parent = dummy;
        //newInstance.scaling.x *= -1;
        //  newInstance.position.z = index;
        // See below for more details on what can be changed.
        shadowGenerator1.addShadowCaster(newInstance);

      }

      //meshes[0].parent = dummy;

      //meshes[1].translate(new BABYLON.Vector3(0, .5 / t, 0), BABYLON.Space.WORLD);

      // Adds all elements to the scene
      //container.addAllToScene();
      container.scene.addMesh(meshes[1]);

      //shadowGenerator1.addShadowCaster(meshes[1]);
      //shadowGenerator2.addShadowCaster(meshes[1]);



    });
    return scene;
  }

  var scene = createScene();

  engine.runRenderLoop(function () {
    scene.render();
  });

  window.addEventListener('resize', function () {
    engine.resize();
  });
});
