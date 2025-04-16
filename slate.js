document.addEventListener('DOMContentLoaded', function () {
  const currentTab = window.location.hash.replace('#', ''); // Or use your own method
  const nav = document.querySelector('.portal-navigation');

  if (!nav) return;

  const links = nav.querySelectorAll('a[data-tab]');

  links.forEach(link => {
    const tab = link.getAttribute('data-tab');

    if (tab === currentTab) {
      const li = link.closest('li');
      li.classList.add('active');

      const parentDropdown = li.closest('.menu-item-has-children');
      if (parentDropdown) {
        parentDropdown.classList.add('open');
      }
    }
  });
});