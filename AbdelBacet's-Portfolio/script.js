function toLink(param){
    window.location.href = "https://"+param;
}
function toInsideLink(param){
    window.location.href = param
}
function submitForm() {
    var frm = document.getElementById('contact-us');
    frm.submit();
    frm.reset();
    return false;
 }
 function scrollToElement(param) {
    const id = param;
    const cont = document.querySelector('.container')
    const yOffset = 0;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    cont.scrollTo({ top: y, behavior: 'smooth' });
    hideMenu();
}
function showMenu() {
    document.getElementById("menuIcon").style.display = "none";
    document.getElementById("menu-mobile").style.display = "flex";
    document.getElementById("menuHideIcon").style.display = "flex";
}
function hideMenu() {
    if (window.matchMedia('(max-width: 480px)').matches) {
        document.getElementById("menuIcon").style.display = "flex";
    }
    document.getElementById("menu-mobile").style.display = "none";
    document.getElementById("menuHideIcon").style.display = "none";
}