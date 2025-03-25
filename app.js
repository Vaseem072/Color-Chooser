let R=0;
let G=0;
let B=0;
const val1=document.getElementById("val1")
const val2=document.getElementById("val2")
const val3=document.getElementById("val3")


val1.addEventListener('input',(event)=>{
  R=  event.target.value;
  updateBackgroundColor(R);
});


val2.addEventListener('input',(event)=>{
    G=  event.target.value;
    updateBackgroundColor();
  });



  val3.addEventListener('input',(event)=>{
    B=  event.target.value;
    updateBackgroundColor();
  });

const box=document.getElementById("box");
function updateBackgroundColor() {
   // Ensure all values are defined
      box.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    let rgbvalue=  document.getElementById("output");
    rgbvalue.textContent=`rgb(${R}, ${G}, ${B})`
    
  }
