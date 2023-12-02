window.addEventListener('load', function () {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const openBtn = document.querySelector('.open-btn');

  let isSidebarOpen = false;

  openBtn.addEventListener('click', function () {
    isSidebarOpen = !isSidebarOpen; // Toggle the flag

    if (isSidebarOpen) {
      openSidebar();
    } else {
      closeSidebar();
    }
  });

  function openSidebar() {
    sidebar.style.left = '0';
    overlay.style.display = 'block';
    document.addEventListener('click', closeSidebarOutside);
  }

  function closeSidebar() {
    sidebar.style.left = '-250px';
    overlay.style.display = 'none';
    document.removeEventListener('click', closeSidebarOutside);
  }

  function closeSidebarOutside(event) {
    if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
      closeSidebar();
    }
  }
});