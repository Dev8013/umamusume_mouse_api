(function () {
  // Avoid running twice
  if (window.__mouseFollowerLoaded) return;
  window.__mouseFollowerLoaded = true;

  // Create container
  const follower = document.createElement('div');
  follower.style.position = 'fixed';
  follower.style.left = '0px';
  follower.style.top = '0px';
  follower.style.width = '80px';
  follower.style.height = '80px';
  follower.style.pointerEvents = 'none'; // don’t block clicks on the site
  follower.style.zIndex = '999999';      // always on top

  // Create image
  const img = document.createElement('img');
  img.src = 'assets/char.png';
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'contain';

  follower.appendChild(img);
  document.body.appendChild(follower);

  // Follow mouse
  window.addEventListener('mousemove', (e) => {
    const offsetX = 20; // adjust so it’s not exactly under cursor
    const offsetY = 20;
    follower.style.transform =
      `translate(${e.clientX + offsetX}px, ${e.clientY + offsetY}px)`;
  });
})();
