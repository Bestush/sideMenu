let header = document.getElementsByTagName('header')
let visible = false;
let asideMenu = document.getElementById('sideMenu');


function showMenu() {

    if (!visible) {
        visible = true;
        asideMenu.style.width = "25%";
        asideMenu.style.display = "inline";
        header.style.width = '70%';

    } else if (visible) {
        visible = false;
        asideMenu.style.width = "0";
        asideMenu.style.display = "none";
        header.style.width = "100%";

    }
}
