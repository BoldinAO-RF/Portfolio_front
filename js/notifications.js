document.getElementById('1').onclick = function () {
    if(getComputedStyle(document.getElementById('2')).visibility === "hidden"){
        document.getElementById('2').style.visibility = 'visible';
    } else {
        document.getElementById('2').style.visibility = 'hidden';
    }        
};