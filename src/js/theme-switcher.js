const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const USER_THEME = 'selected-theme';

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

console.log(body);

checkLocalTheme();

function checkLocalTheme() {
  const localTheme = localStorage.getItem(USER_THEME);

  localTheme ? 
  body.classList = localTheme : 
  body.classList = Theme.LIGHT;

  localTheme === Theme.DARK ? 
  themeSwitchToggle.checked = true : 
  themeSwitchToggle.checked = false;
};

themeSwitchToggle.addEventListener('change', onChangeTheme);

function onChangeTheme(e){
  e.target.checked ? 
  (changeTheme(), localStorage.setItem(USER_THEME, Theme.DARK)) : 
  (changeTheme(), localStorage.setItem(USER_THEME, Theme.LIGHT));
};

function changeTheme() {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);
};