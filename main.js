let scene, camera, renderer, cube;

function init() {
  // シーン
  scene = new THREE.Scene();

  // カメラ
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // レンダラー
  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  // ボックスのサイズ決定、メッシュ、追加
  const geometry = new THREE.BoxGeometry(2, 2, 2);

  const texture = new THREE.TextureLoader().load("./image/darts.JPG");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  // アニメーション制御
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.002;
    cube.rotation.y += 0.002;
    cube.rotation.z += 0.004;

    renderer.render(scene, camera);
  }

  animate();
}

// ウィンドウ変更時にサイズを維持する処理
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize);

init();
