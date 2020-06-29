let elUserProfile = document.getElementById('user_profile');
let elDropdownProfileMenu = document.getElementById('dropdown_profile_menu');

//Отображение меню профиля
elUserProfile.onclick=function() {
    if(getComputedStyle(elDropdownProfileMenu).visibility === "hidden"){
        elDropdownProfileMenu.style.visibility='visible'
    } else {
        elDropdownProfileMenu.style.visibility='hidden';
    }
};