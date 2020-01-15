
var video = document.getElementById('video'),
    mydiv = document.getElementById('mydiv'),
    full_canvas = document.getElementById('canvas'),
    take_pic = document.getElementById("snap"),
    context = canvas.getContext('2d'),
    h = 480,
    w = 640,
    rotatey,
    rotatex,
    scalex,
    scaley,
    mirror = 0,
    emoticon,
    wall,
    full_canvas = 0,
    filter_checked = 0,
    cadre_checked = 0,
    camera_allowed = 0,
    canvasfilter = document.getElementById('canvasf'),
    imgfilter = document.getElementById('imgf'),
    imgcadre = document.getElementById('imgcadre'),
    placefilter = imgfilter,
    cadrefilter = imgcadre,
    filter = document.getElementsByName('filter'),
    cadre = document.getElementsByName('cadre'),
    upload_img = document.getElementById('file'),
    save = document.getElementById("save");

    var filters = [ { 
      name: "Reset",
      filter: ""
    }, { 
      name: "Blur",
      filter: "blur(3px)"
    }, { 
      name: "BnW",
      filter: "grayscale(100%)" 
    }, { 
      name: "Bright",
      filter: "brightness(300%)"
    },{
      name: "Hue",
      filter: "hue-rotate(90deg)"
    },{
      name: "Invert",
      filter: "invert(100%)"
    },{
      name: "Saturate",
      filter: "saturate(50%)"
    },{
      name: "Sepia",
      filter: "sepia(400%)"
    },{
      name: "Contrast",
      filter: "contrast(500%)"
    }];
    
                
    function findFilterByName (filterArray, name) {
      for(var i = 0; i < filterArray.length; i++) {
        if(filterArray[i].name === name) {
          return filterArray[i];
        }
      }
      return null;
    };
 

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
{
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream)
    {
      try {
            video.src = window.URL.createObjectURL(stream);
      } catch (error) {
            video.srcObject = stream;
          }
        video.play();
        camera_allowed = 1;
    }
    ).catch(function(error) {
  
});
} else if(navigator.webkitGetUserMedia) {
   
   navigator.webkitGetUserMedia({ video: true }, function(stream){
       try {
               video.src = window.URL.createObjectURL(stream);
           } catch (error) {
                video.srcObject = stream;
           }
       video.play();
       camera_allowed= 1;
   }, function(err) {
        console.log("The following error occurred: " + err.name);
     });
}

mydiv.addEventListener("dblclick",function()
{
  if (mirror == 0)
  {
    rotatex = 640;
    rotatey= 0;
    scalex = -1;
    scaley = 1;
    video.style.transform="rotateY(180deg)";
    video.style.webkitTransform ="rotateY(180deg)";
    mirror = 1;
  }
  else
  {
  
    video.style.transform="rotateY(0)";
    video.style.webkitTransform ="rotateY(0)";
    mirror = 0;
  
  }
  context.translate(rotatex, rotatey); 
  context.scale(scalex,scaley);

});
take_pic.addEventListener("click", function()
{
   save.removeAttribute("disabled");
    context.filter= video.style.filter;
    context.webkitFilter = video.style.webkitFilter;
    context.drawImage(video, 0, 0, w, h);
    full_canvas = 1;
  }
);

upload_img.addEventListener("click", function()
{
  if(filter_checked == 1){
    imgfilter.src = "";
  }
  emoticon = "";
  placefilter = canvasfilter;
  filter_checked = 1;
  
  
     
  }
);

  var classes = [
  'btn btn-primary',
  'btn btn-secondary',
  'btn btn-danger',
  'btn btn-light',
  'btn btn-success',
  'btn btn-warning',
  'btn btn-dark',
  'btn btn-info',
  'btn btn-link']
  var buttonsDiv = document.getElementById("filterButtons");    
  var i = 8;
  filters.forEach(function(item){
    var button = document.createElement("button");
    button.id = item.name;
    button.className = classes[i--];
    button.innerHTML = item.name;
    buttonsDiv.appendChild(button);    
  });

  function filterClicked (event) {
    event = event || window.event;
    var target = event.target || event.srcElement;
    if(target.nodeName === "BUTTON") {
      var filter = findFilterByName(filters, target.id);
      
      if(filter) {
        video.style.filter = filter.filter;
        video.style.webkitFilter = filter.filter;
        context.filter = filter.filter;
        context.webkitFilter = filter.filter;
        full_canvas.filter = filter.filter;
        full_canvas.webkitFilter = filter.filter;
      }
      
    

    }
  };
  buttonsDiv.addEventListener("click", filterClicked, false);

document.getElementById('clear').addEventListener("click", clearcanvas);
function clearcanvas(){
   context.clearRect(0, 0, w, h);
   imgfilter.src = "";
   canvasfilter.src = "";
   imgfilter.style.display = 'none';
   canvasfilter.style.display = 'none';
   full_canvas = 0;
   placefilter = imgfilter;


};





for (var j= 0; j < 4; j++)
{
  filter[j].onclick = function(event) {
  placefilter.style.display = 'block';
  emoticon = this.value;
  filter_checked = 1;
  placefilter.src = emoticon;
  take_pic.disabled = false;
}
}
for (var j= 0; j < 4; j++)
{
  cadre[j].onclick = function(event) {
  cadrefilter.style.display = 'block';
  wall = this.value;
  cadrefilter.src = wall;
}
}



function isImage(file)
{
   const validImageTypes = ['image/jpg', 'image/jpeg', 'image/png'];
   const fileType = file['type'];
   if (validImageTypes.indexOf(fileType))
       return true;
   else
       return false;
}

window.addEventListener('DOMContentLoaded', uploadimg);
  function uploadimg(){
      upload_img.addEventListener('change', function(ev) {
       var file = ev.target.files[0];
          var img = new Image;

          img.onload = function () {
               context.drawImage(img, 0, 0, w, h);
               full_canvas = 1;
               camera_allowed = 1;
              
          }

     
          if(file && isImage(file))
          {
           img.src = URL.createObjectURL(file);
           save.removeAttribute("disabled");
          }
      });

  }




  save.addEventListener("click", function() {
    var x = imgfilter.style.left;
    var y = imgfilter.style.top;
    console.log("x="+x+"y="+y);
    var imgData = canvas.toDataURL("image/png");
      var params = "imgBase64=" + imgData +"&emoticon=" + emoticon + "&x="+x + "&y="+y +"&wall=" + wall;
   var xhr = new XMLHttpRequest();
   xhr.open('POST', 'http://localhost/Camagru/Posts/s_image');

   xhr.withCredentialfull_canvas = true;
   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   if(full_canvas == 1 && filter_checked == 1 && camera_allowed == 1)
   {
    xhr.send(params); 
   }
   save.setAttribute("disabled",true);
   location.reload();
});

imgfilter.onmousedown = function(event) {

  let shiftX = event.clientX - imgfilter.getBoundingClientRect().left;
  let shiftY = event.clientY - imgfilter.getBoundingClientRect().top;

  imgfilter.style.position = 'absolute';
  imgfilter.style.zIndex = 1000;
  document.body.append(imgfilter);

  moveAt(event.pageX, event.pageY);

  // moves the imgfilter at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    console.log(imgfilter.style.left);
    console.log(imgfilter.style.top);
    imgfilter.style.left = pageX - shiftX + 'px';
    imgfilter.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the imgfilter on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the imgfilter, remove unneeded handlers
  imgfilter.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    imgfilter.onmouseup = null;
  };

};

imgfilter.ondragstart = function() {
  return false;
};

