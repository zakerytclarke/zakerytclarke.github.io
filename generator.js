var fs=require("fs");

var config=
[
 {
   title:"E-Center",
   content:"E-Sports Statistics Platform focused on improving player performance through informed statistics. Video Recognition technology used to analyze performance.",
   url:"https://ecenter.tv/",
   github:"",
   pkg:"",
   stats:"",
   position:"Co-Founder",
   year:"2019",
   tech:["node","html5","css3"],
   tags:["Image Recognition","Data Scraping","API Development"],
   images:["./assets/portfolio/ecenterhome.png","./assets/portfolio/ecenterstats.png"]
 },
   {
   title:"Clarke Computing",
   content:"",
   url:"https://clarkecomputing.io",
   github:"",
   pkg:"",
   stats:"",
   position:"Freelance Developer",
   year:"2016",
   tech:["html5","css3","js"],
   tags:["Brand Design","Website Design","Digital Marketing"],
   images:["./assets/portfolio/clarkecomputing.png"]
 },
 {
   title:"Sara.ai",
   content:"",
   url:"https://sara-ai.herokuapp.com/",
   github:"",
   pkg:"",
   stats:"",
   year:"2018",
   tech:["node","html5","css3"],
   tags:["Machine Learning","Artificial Intelligence"],
   images:["./assets/portfolio/sara.png","./assets/portfolio/saradialog.png"],
   mobileImg:"./assets/portfolio/saramobile.png"
 },
 {
   title:"Feisty",
   content:"Smart chart rendering for large sets of data. Preserves maxes, mins and other general trends on zoom.",
   url:"https://zclarke.xyz/feisty/",
   github:"https://github.com/zakerytclarke/feisty",
   pkg:"",
   stats:"",
   year:"2019",
   tech:["js","html5","css3"],
   tags:["Charting","Statistical Methods"],
   images:["./assets/portfolio/feisty.png"],
   mobileImg:"./assets/portfolio/feistymobile.png"
 },
 {
 title:"Quark Editor",
 content:"An online IDE that allows easy editing of git repositories stored on Github.",
 url:"https://zclarke.xyz/quark/",
 github:"https://github.com/zakerytclarke/quark",
 pkg:"",
 stats:"",
 year:"2017",
 tech:["js","html5","css3"],
 tags:["Syntax Highlighting","Github Integration","Media Integration"],
 images:["./assets/portfolio/quark.png"],
 mobileImg:"./assets/portfolio/quarkmobile.png"
},
 {
   title:"Chatbot.js",
   content:"Chatbot framework for construction of intelligent agents. Can be used to offload service requests with easy to use syntax.",
   url:"https://zclarke.xyz/chatbot.js/",
   github:"https://github.com/zakerytclarke/chatbot.js",
   pkg:"https://github.com/zakerytclarke/chatbot.js",
   year:"2017",
   tech:["js","html5","css3"],
   tags:["Artificial Intelligence","Embedded Applications"],
   images:["./assets/portfolio/chatbot.png"]
 },
 {
   title:"Smart Mirror",
   content:"",
   url:"https://zclarke.xyz/smart-mirror/",
   github:"https://github.com/zakerytclarke/smart-mirror",
   pkg:"",
   stats:"",
   year:"2018",
   tech:["js","html5","css3"],
   tags:["API Integration","Minimal Design"],
   images:["./assets/portfolio/smart-mirror.png"],
   mobileImg:"./assets/portfolio/mirrormobile.png"
 },
{
 title:"E-TransControl",
 content:"<b>Auto Website</b><br> Kit builder for after-market transmission controllers and various car modificationsa.",
 url:"",
 github:"",
 pkg:"",
 stats:"",
 year:"2017",
 tech:["wordpress","html5","css3"],
 tags:["Microcontroller","Hardware Programming"],
 images:["./assets/portfolio/etranscontrol.png","./assets/portfolio/etranscontrolkitbuilder.png"]
},
{
 title:"Dingo.js Framework",
 content:"",
 url:"",
 github:"https://github.com/zakerytclarke/dingojs",
 pkg:"",
 stats:"",
 year:"2017",
 tech:["js","css3","html5"],
 tags:["Image Recognition","Data Scraping","API Development"],

 images:["./assets/portfolio/dingo.png","./assets/portfolio/dingodocs.png"]
},
{
 title:"Emma Buck Photography",
 content:"",
 url:"",
 github:"",
 pkg:"",
 stats:"",
 year:"2016",
 tech:["html5","css3","js"],
 tags:["Minimalist","Photography","Portfolio"],
 images:["./assets/portfolio/emmaxbuck.png"]
},
{
 title:"μ Markup",
 content:"A lightweight markup compiler to generate simple, stylish formatting. Support for annotations, formulaes, and tables",
 url:"",
 github:"https://github.com/zakerytclarke/mu",
 pkg:"",
 stats:"",
 tags:["Markup Compiler","Stylish Formatting"],
 year:"2018",
 tech:["node","css3","html5"],
 images:["./assets/portfolio/mu.png"],
 mobileImg:"./assets/portfolio/mumobile.png"

},
{
 title:"Low-Level-Basic",
 url:"",
 github:"https://github.com/zakerytclarke/low-level-basic",
 pkg:"",
 stats:"",
 year:"2017",
 tech:["c"],
 tags:["Low Level variant of Basic","Assembly like Syntax"],
 images:["./assets/portfolio/llb.png"]
},
{
 title:"New Mexico Backpacking",
 url:"",
 github:"",
 pkg:"",
 stats:"",
 year:"2016",
 tech:["wordpress","html5","css3"],
 tags:["Website for New Mexico backpacking Tours"],
 images:["./assets/portfolio/nmbackpack.png"]
},
{
 title:"Azulejos",
 year:"2018",
 tech:["html5","css3","js"],
 tags:["Tile Based Board Game","Animations and Effects"],
 url:"https://zclarke.xyz/azulejos/",
 github:"https://github.com/zakerytclarke/azulejos",

 images:["./assets/portfolio/azulejos.png"]
},
{
 title:"Stack Calc",
 year:"2018",
 tech:["html5","css3","js"],
 tags:["Stack Based Calculator","General Calculations","Programmable Functions"],
 url:"https://zclarke.xyz/stackcalc/",
 github:"https://github.com/zakerytclarke/stackcalc",
 pkg:"",
 stats:"",
 images:["./assets/portfolio/stackcalc.png"]
},
{
 title:"Genetic.js",
 content:"Genetic algorithm library for native JS. Easily abstract complex genetic algorithms into simple wrappers for machine learning and AI projects.",
 url:"https://codepen.io/zakerytclarke/pen/EzydYv",
 github:"https://github.com/zakerytclarke/geneticjs",
 year:"2019",
 tech:["html5","css3","js"],
 tags:["Genetic Algorithms","Machine Learning"],
 pkg:"",
 stats:"",
 images:["./assets/portfolio/geneticjs.png"]
},
{
 title:"Escher",
 content:"A mind-bending game built around a physics engine resembling the famous M.C. Escher's artwork.",
 url:"",
 year:"2017",
 tech:["html5","css3","js"],
 tags:["Unique Gameplay","Custom Physics Engine"],
 github:"",
 pkg:"",
 stats:"",
 images:["./assets/portfolio/escher.png"]
},
];

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


globalOut+="footer";

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
