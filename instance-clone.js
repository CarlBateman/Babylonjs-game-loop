﻿window.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('renderCanvas');
  var engine = new BABYLON.Engine(canvas, true);

  var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
  var physicsPlugin = new BABYLON.CannonJSPlugin();



  var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    scene.enablePhysics(gravityVector, physicsPlugin);

    var camera = new BABYLON.ArcRotateCamera('camera1', 0, 0, 1, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(4, 8, -8));
    camera.attachControl(canvas, false);
    camera.wheelDeltaPercentage = 0.01;

    var light1 = new BABYLON.DirectionalLight("Directionallight1", new BABYLON.Vector3(1, -1, 1), scene);
    light1.position = new BABYLON.Vector3(-40, 40, -40);
    var shadowGenerator1 = new BABYLON.ShadowGenerator(1024, light1);
    light1.shadowMaxZ = 130;
    light1.shadowMinZ = 10;
    shadowGenerator1.useContactHardeningShadow = true;
    shadowGenerator1.setDarkness(0.5);

    var ground = BABYLON.MeshBuilder.CreateGround("gd", { width: 6, height: 6, subdivisions: 4, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.PlaneImpostor, { mass: 0, friction: 0.5, restitution: 0.7 }, scene);
    ground.receiveShadows = true;

    var box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);
    let material = new BABYLON.StandardMaterial("myMaterial", scene);
    material.diffuseColor = new BABYLON.Color3(1, 0, 1);
    box.material = material;

    let mesh = box;
    //mesh.isVisible = false;
    mesh.translate(new BABYLON.Vector3(0, 1.5, 0), BABYLON.Space.WORLD);

    //var dummy = new BABYLON.Mesh("dummy", scene);
    //mesh.parent = dummy; // comment this and mesh will be "inside out"

    //container.scene.addMesh(mesh);
    // ignored
    //mesh.PhysicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, friction: 0.5, restitution: 0.7 }, scene); // ignored

    for (var index = 0; index < 2; index++) {
      var newInstance = mesh.createInstance("i" + index);
      newInstance.position.x = 1.1 + index * 1.1;
      newInstance.position.y = 1.1 + index * 1.1;
      newInstance.PhysicsImpostor = new BABYLON.PhysicsImpostor(newInstance, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, friction: 0.5, restitution: 0.7 }, scene);

      //material = new BABYLON.StandardMaterial("myMaterial", scene);
      //material.diffuseColor = new BABYLON.Color3(1, 1, 1);
      //newInstance.material = material;

      shadowGenerator1.addShadowCaster(newInstance);
    }

    for (var index1 = 0; index1 < 2; index1++) {
      var newInstance1 = mesh.clone("i" + (index1 + 2));
      newInstance1.position.x = 1.1 + index1 * 1.1;
      newInstance1.position.y = 2.1 + index1 * 1.1;
      newInstance1.position.z = 1.1;
      // ignored
      newInstance1.PhysicsImpostor = new BABYLON.PhysicsImpostor(newInstance1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, friction: 0.5, restitution: 0.7 }, scene);

      shadowGenerator1.addShadowCaster(newInstance1);
      material = new BABYLON.StandardMaterial("myMaterial", scene);
      material.diffuseColor = new BABYLON.Color3(0, 1, 1);
      newInstance1.material = material;
    }


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
