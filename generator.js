var fs=require("fs");

var cfig=require("./config.js");

var config=cfig.config;

var resume={
  work:[
    {
      title:"Lead Developer",
      company:"E-Center",
      year:"2019-Current",
      description:"Sole Developer of E-Sports Statistics Web App<br> Image Recognition \n",
      tech:["node","html5","css3","js"]
    },
    {
      title:"Freelance Web Developer",
      company:"Clarke Computing",
      year:"2016-Current",
      description:"Developed variety of websites for many clients\n",
      tech:["html5","css3","js","wordpress"]
    },
    {
      title:"Software Developer",
      company:"E-TransControl",
      year:"2016-2019",
      description:"Web Development<br> Embedded Processor Development\n",
      tech:["c","html5","css3","js","wordpress"]
    }
  ],
  education:[
    {
      title:"Masters CS",
      school:"University of New Mexico",
      year:"2019-Current",
      tagline:"Focus in Artificial Intelligence & Compilers"
    },
    {
      title:"Undergraduate CS",
      school:"University of New Mexico",
      year:"2016-2019",
      tagline:"Minor in Mathematics"
    }
  ],
  interests:[
    {
      title:"Artificial Intelligence",
      icon:"ml",
      description:""
    },
    {
      title:"Functional Programming & Compilers",
      icon:"lambda",
      description:""
    },
    {
      title:"Distributed Computing & Blockchain",
      icon:"blockchain",
      description:""
    },
  ]
};



var resume={
  work:[
    {
      title:"Lead Developer",
      company:"E-Center",
      year:"2019-Current",
      description:"Sole Developer of E-Sports Statistics Web App<br> Image Recognition \n",
      tech:["node","html5","css3","js"]
    },
    {
      title:"Freelance Web Developer",
      company:"Clarke Computing",
      year:"2016-Current",
      description:"Developed variety of websites for many clients\n",
      tech:["html5","css3","js","wordpress"]
    },
    {
      title:"Software Developer",
      company:"E-TransControl",
      year:"2016-2019",
      description:"Web Development<br> Embedded Processor Development\n",
      tech:["c","html5","css3","js","wordpress"]
    }
  ],
  education:[
    {
      title:"Masters CS",
      school:"University of New Mexico",
      year:"2019-Current",
      tagline:"Focus in Artificial Intelligence & Compilers"
    },
    {
      title:"Undergraduate CS",
      school:"University of New Mexico",
      year:"2016-2019",
      tagline:"Minor in Mathematics"
    }
  ],
  interests:[
    {
      title:"Artificial Intelligence",
      icon:"ml",
      description:""
    },
    {
      title:"Functional Programming & Compilers",
      icon:"lambda",
      description:""
    },
    {
      title:"Distributed Computing & Blockchain",
      icon:"blockchain",
      description:""
    },
  ]
};



var footer=`
</div>
</body>
</html>`;

var globalOut="";
globalOut+=fs.readFileSync("./templates/portfolio.html","UTF-8");


//Create Portfolio
for(var i=0;i<config.length;i++){
  renderItem(config[i]);
}


/**
 * Render Portfolio Items from JSON
 *
 */
function renderItem(json){
  var out="<div class='portfolio'>";
    out+="<div class='infoBox'>"
      out+="<h1>"+json.title+"</h1>";

      out+="<div style='display:flex;width:100%;'>";


          out+="<div style='flex:1;' class='info'>";

          out+='<div style="text-align:center;">';
          if(json.url&&json.url!=""){
            out+='<a class="icon" href="'+json.url+'" target="_blank"><img src="./assets/icons/www.png"></a>';
          }
          if(json.github&&json.github!=""){
            out+='<a class="icon" href="'+json.github+'" target="_blank"><img src="./assets/icons/github.svg"></a>';
          }
          if(json.pkg&&json.pkg!=""){
            out+='<a class="icon" href="'+json.pkg+'" target="_blank"><img src="./assets/icons/pkg.png"></a>';
          }
          if(json.stats&&json.stats!=""){
            out+='<a class="icon" href="'+json.stats+'" target="_blank"><img src="./assets/icons/chart.png"></a>';
          }

          out+='</div>';

          out+="<p>";
          if(json.position){
            out+="<b>"+json.position+"</b><br>";
          }
          if(json.year){
            out+="<b class='portfolioYear'> "+json.year+"</b><br>";
          }

          if(json.tags){
            out+="<ul style='text-align:center;list-style:none;margin-left:0;padding-left:0;'>";
            for(var i=0;i<json.tags.length;i++){
              out+="<li>"+json.tags[i]+"</li>";
            }
            out+="</ul>"
          }



          if(json.tech){
            out+="<div style='width:100%;'>";
            for(var i=0;i<json.tech.length;i++){
              out+="<img class='iconTech' src='./assets/icons/tech/"+json.tech[i]+".svg'>";
            }
            out+="</div>"
          }


          out+="</p>";

        out+='</div>';

        if(json.content&&json.content!=""){
          out+="<div class='description' style='flex:1;'>";
            out+="<p style='margin-left:20px;margin-right:20px;text-align:left;'>"+json.content+"</p>";
          out+="</div>";
        }




        out+='</div>';
/*
            <img src="./assets/icons/github.svg">
            <img src="./assets/icons/pkg.png">
            <img src="./assets/icons/chart.png">
            <img src="./assets/icons/github.svg">
            <img src="./assets/icons/github.svg">
            */
      //out+='</div>';

    out+="</div>"

    //Render Images


    for(var i=0;i<json.images.length;i++){
        if(i>0){
          out+="<div class='additionalImage'>"
        }else{
          if(json.mobileImg){
            out+="<div class='image'>";
          }else{
            out+="<div class='image noMobileFlag'>";
          }
        }
        out+='<span onclick="showImg(`'+json.images[i]+'`)">';
        out+="<img src='"+json.images[i]+"'/>";
        out+="</span>";
        out+="</div>";
    }

    if(json.mobileImg){
      out+="<div class='mobileImage'>";
      out+='<span onclick="showImg(`'+json.mobileImg+'`)">';
      out+="<img src='"+json.mobileImg+"'/>";
      out+="</span>";
      out+="</div>"
    }

  out+="</div>";


  globalOut+=out;
}


// globalOut+="footer";

fs.writeFileSync("./portfolio.html",globalOut);

var out="";
out+=fs.readFileSync("./templates/resume.html","UTF-8");


out+="<div style='width:40%;margin-right:10%;'>";
out+='<div class="resumeBox"><h2>Education</h2><div>';

for(var i=0;i<resume.education.length;i++){
  out+="<div style='border-bottom: 1px solid #444444;'>";
  out+="<h2>"+resume.education[i].title+"</h2>";
  out+="<p><b>"+resume.education[i].school+"</b>&nbsp;&nbsp;&nbsp;&nbsp;"+resume.education[i].year+"<br>"+resume.education[i].tagline+"</p>";
  out+="</div>";
}
out+="</div></div>";

out+='<div class="resumeBox" style="margin-top:-50px;"><h2>Research Interests</h2><div><br>';
for(var i=0;i<resume.interests.length;i++){
  out+="<div style='border-bottom: 1px solid #444444;'>";
  out+="<img style='width:4vw;vertical-align:middle;border-radius:2vmin;margin-right:10px;display:inline-block;' src='./assets/icons/tech/"+resume.interests[i].icon+".svg'>";
  out+="<h3 class='interestText' style='display:inline-block;vertical-align:middle;'>"+resume.interests[i].title+"</h3>";
  out+="<p>"+resume.interests[i].description+"</p>";
  out+="</div>";
}


out+="</div></div>";


out+='<div id="links" class="resumeBox" style="margin-top:-50px;page-break-after:always;"><h2>Links & Portfolio</h2><div style="vertical-align:top;"><br>';
out+=`  <div style="display:inline-block;width:10%;text-align:center;">
        <img src='./assets/qr.svg' style="width:75%;display:inline-block;">
        </div>
        <div style="width:65%;display:inline-block;text-align:right;vertical-align:top;margin:-13px;">
          <h5 style="display:inline-block;font-size:80%;vertical-align:middle;">
            https://github.com/zakerytclarke
          </h5>
          <img src='./assets/icons/github.svg' style="width:5%;display:inline-block;vertical-align:middle;">
          <br>
            <h5 style="display:inline-block;font-size:80%;vertical-align:middle;">
              https://zclarke.xyz
            </h5>
            <img src='./assets/icons/www.png' style="width:5%;display:inline-block;vertical-align:middle;margin-top:0;">
        </div>
      </div>`;

out+="</div>";
out+="</div>";


    out+="<div style='width:40%;margin-right:10%;'>"
    out+='<div class="resumeBox"><h2>Work Experience</h2><div>';

    for(var i=0;i<resume.work.length;i++){
      out+="<h2>"+resume.work[i].company+"</h2>";
      out+="<p><b>"+resume.work[i].title+"</b>&nbsp;&nbsp;&nbsp;&nbsp;"+resume.work[i].year+"<br>"+resume.work[i].description+"</p>";
      out+="<div style='width:100%;border-bottom: 1px solid #444444;'>";
      for(var j=0;j<resume.work[i].tech.length;j++){
        out+="<img style='width:4vw;border-radius:2vmin;margin-right:10px;' src='./assets/icons/tech/"+resume.work[i].tech[j]+".svg'>";
      }
      out+="</div>"
    }
    out+="</div></div></div>";

    out+=footer;

fs.writeFileSync("./resume.html",out);
