function add(){
    let a=document.getElementById('first').value;
    let b=document.getElementById('second').value;
    let out=Number(a)+Number(b);
    document.getElementsByClassName('output')[0].innerText=out

}
function sub(){
    let a=document.getElementById('first').value;
    let b=document.getElementById('second').value;
    let out=Number(a)-Number(b);
    document.getElementsByClassName('output')[0].innerText=out

}

