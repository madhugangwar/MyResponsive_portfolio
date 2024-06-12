alert("Hello welcome")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
document.querySelector('.sidebar').classList.toggle('sidebarGo') /* lagi chij ko hta deta h hatai hue chij ko lga deta h */
if(document.querySelector('.sidebar').classList.contains('sidebarGo') ){
    document.querySelector('.ham').style.display='inline'
    document.querySelector('.cross').style.display='none'
}
else{
    document.querySelector('.ham').style.display='none'
    setTimeout(()=>{
    document.querySelector('.cross').style.display='inline' /* set time for delay of cross timingto come from ham*/
},350);
}
})
