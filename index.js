const canvas = document.querySelector(".canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const context = canvas.getContext("2d");
const frameCount = 188;

const currentFrame = (index) => {
    if (index >= 1 && index <= 9) {
        return `./new/000${(index+1).toString()}.jpg`;
    } else if (index >= 10 && index <= 99) {
        return `./new/00${(index+1).toString()}.jpg`;
    } else if (index >= 100 && index <= 999) {
        return `./new/0${(index+1).toString()}.jpg`;
    }
}

const images =[];
let bal ={frame:1};

for(let i=0;i<frameCount;i++){  
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}
gsap.to(bal, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        trigger:".yellow",
        scrub: true,
        pin:true,   
        end: "500%"
    },
    onUpdate: render
});
  
function render(){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(images[bal.frame],0,0,canvas.width,canvas.height);
}


