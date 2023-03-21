



// animated width on scrolling
let skills=document.querySelector('.skills');
let spans=document.querySelectorAll('.skill-progress span');

window.onscroll=function(){
    if(window.scrollY >= skills.offsetTop-300){
        spans.forEach((spans)=>{
            spans.style.width=spans.dataset.width;
        })
        
    }else{
        spans.forEach((spans)=>{
            spans.style.width="0";
        })
    }
}

// awsome state increasing
let section=document.querySelector('.stats')
let stat=document.querySelectorAll('.stats .box .number');
let started=false;
window.onscroll=function(){
    if(window.scrollY >= section.offsetTop-100){
        if(!started){
            stat.forEach((st)=>startCount(st));
        }
        started=true;
    }
  
}

function startCount(el){
    let set=el.dataset.set;
    let count=setInterval(()=>{
        el.textContent++;
        if(el.textContent == set){
            clearInterval(count);
        }
    },2000/set)
}
// startCount(stat[0]);
// startCount(stat[1]);
// startCount(stat[2]);
// startCount(stat[3]);