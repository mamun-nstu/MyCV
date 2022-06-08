window.onload = function(){
    document.getElementById("download").addEventListener("click",()=> {
        const resume = this.document.getElementById("resume");
        html2pdf().from(resume).save();
    })
}


document.getElementById("spacer").innerHTML=`<div class="bg-slate-300 h-4 w-full mt-4 mb-6"></div>`;

function message(){
    document.getElementById("demo").innerHTML="This project is not live yet..!";
}

