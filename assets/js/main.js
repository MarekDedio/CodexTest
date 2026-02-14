function byId(id) {
  return document.getElementById(id);
}

function safeDisplay(id, value) {
  const el = byId(id);
  if (el) el.style.display = value;
}

function openNav() {
  const side = byId('mySidenav');
  if (side) side.style.width = '350px';
}

function closeNav() {
  const side = byId('mySidenav');
  if (side) side.style.width = '0';
  const main = byId('main');
  if (main) main.style.marginLeft = '0';
}

function applyResponsiveNav() {
  const a = window.innerWidth;
  const listItems = document.getElementsByClassName('list-group-item');

  safeDisplay('Kontakt', a < 1150 ? 'none' : 'block');
  safeDisplay('a1', a < 1150 ? 'block' : 'none');
  safeDisplay('Wiecej', a < 1150 ? 'block' : 'none');

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.paddingRight = a < 1150 ? '5%' : '25%';
    listItems[i].style.paddingLeft = a < 1150 ? '5%' : '25%';
  }

  safeDisplay('Archiwum', a < 1130 ? 'none' : 'block');
  safeDisplay('a2', a < 1130 ? 'block' : 'none');
  safeDisplay('a22', a < 1130 ? 'block' : 'none');

  safeDisplay('Dawni', a < 965 ? 'none' : 'block');
  safeDisplay('a3', a < 965 ? 'block' : 'none');

  const infoSmall = a < 863;
  safeDisplay('Informacja', infoSmall ? 'none' : 'block');
  ['a4', 'a444', 'a41', 'a42', 'a43', 'a44', 'a45'].forEach((id) => safeDisplay(id, infoSmall ? 'block' : 'none'));

  safeDisplay('Lokalizacja', a < 776 ? 'none' : 'block');
  safeDisplay('a5', a < 776 ? 'block' : 'none');
  safeDisplay('a51', a < 776 ? 'block' : 'none');

  safeDisplay('Aktualnosci', a < 557 ? 'none' : 'block');
  safeDisplay('a6', a < 557 ? 'block' : 'none');

  safeDisplay('Strona', a < 300 ? 'none' : 'block');
  safeDisplay('a7', a < 300 ? 'block' : 'none');
}

function ShowHideSearchBar() {
  const x = byId('SearchBar');
  if (!x) return;
  x.style.display = x.style.display === 'block' ? 'none' : 'block';
}

function scrollFunction() {
  const mybutton = byId('myBtn');
  if (!mybutton) return;
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('resize', applyResponsiveNav);
window.addEventListener('scroll', scrollFunction);
window.addEventListener('DOMContentLoaded', () => {
  applyResponsiveNav();
  scrollFunction();
});
