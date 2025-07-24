var speed = 5;
var data = ""
var img = ""
var i = 0;
var requests = []
var section = 0
$(document).ready(function(){
  document.getElementById("current_year").innerText = new Date().getFullYear()
})
$(".choice-btn").click(async (e) => {
  $("#modal-choice").modal("hide")
  $("#generate-btn > span").text("Generating")
  $("#generate-btn .typing").removeClass("d-none")
  $("#generate-btn").prop("disabled", true);
  let darkMode = localStorage.getItem("dark-mode");
  if (darkMode && darkMode === 'true') {
    document.getElementById("logo").src = "/static/gdata-night.gif"
  }
  else document.getElementById("logo").src = "/static/gdata-day.gif"
  $(".result-section").append(`
<p class="ques-section padding-custom mt-3">${document.getElementById("user_ques").value}</p>
`)
  var settings = {
    "url": "/get-answer-images",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "data": document.getElementById("user_ques").value,
      "choice": e.target.getAttribute("data-value")
    }),
  };

  requests.push($.ajax(settings).done(function (response) {
    var data = response
    $('input[name="choice"]').attr('checked', false);
  }))

  return Promise.all(requests).then((res) => {
    document.getElementById("user_ques").value = ""
    data = res[0].response ? res[0].response : ''
    img = res[0].images ? res[0].images : []
    $(".result-section").append(`
    <div id='result-${section}' class="row mx-0">
    <div class="position-relative ${img.length > 0  && data ? 'col-md-8' : 'col-md-12'}">
    <p class='padding-custom-2 response-section'></p>
    ${document.getElementById("authenticated") ? `<div class="feedback">
    <i class="fa fa-thumbs-up cursor-pointer feedback-controls feedback-${res[0].id}" data-id="${res[0].id}" data-value="true"></i>
    <i class="fa fa-thumbs-down cursor-pointer feedback-controls feedback-${res[0].id}" data-id="${res[0].id}" data-value="false"></i>
    </div>
    `:''}
    </div>
    <div class="${data ? 'col-md-4': 'col-md-12 mt-3'}">
    <div class="row">
    ${img.length > 0 ? img.map(element => {
      return `
      <div class="col-lg-6 px-1">
     <img src=${element.url} class="mx-auto w-100 mb-2"/>
     </div>
     `
   }).join(''): ''}
   </div>
    </div>
    ${document.getElementById("authenticated") ? `<div class="feedback-2">
    <i class="fa fa-thumbs-up cursor-pointer feedback-controls feedback-${res[0].id}" data-id="${res[0].id}" data-value="true"></i>
    <i class="fa fa-thumbs-down cursor-pointer feedback-controls feedback-${res[0].id}" data-id="${res[0].id}" data-value="false"></i>
    </div>
    `:''}
    </div>
`)
    typeWriter()
  })
})
$("#form").submit(async (e) => {
  e.preventDefault()
  $("#modal-choice").modal("show")
})
function typeWriter() {
  if (i < data.length) {
    document.querySelector(`#result-${section}>div>p`).innerHTML += data.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    speed = 5;
    data = ""
    i = 0;
    requests = []
    section++
    $("#generate-btn > span").text("Generate")
    $("#generate-btn .typing").addClass("d-none")
    $("#generate-btn").prop("disabled", false);
    document.getElementById("user_ques").style.height = '50px'
    let darkMode = localStorage.getItem("dark-mode");
    if (darkMode && darkMode === 'true') {
      document.getElementById("logo").src = "/static/dark_logo_web.png"
    }
    else document.getElementById("logo").src = "/static/light_logo_web.png"
  }
}
const toggleBtn = document.getElementById("dark-toggle-btn");
let darkMode = localStorage.getItem("dark-mode");
if (darkMode && darkMode === 'true') {
  toggleBtn.checked = true
  document.querySelector("body").classList.add("dark-mode")
  if(document.getElementById("logo")) document.getElementById("logo").src = "/static/dark_logo_web.png"
}
else {
  toggleBtn.checked = false
  document.querySelector("body").classList.add("light-mode")
  if(document.getElementById("logo")) document.getElementById("logo").src = "/static/light_logo_web.png"
}
$("#dark-toggle-btn").change(function () {
  localStorage.setItem("dark-mode", $(this).prop("checked"))
  if ($(this).prop("checked")) {
    document.querySelector("html").classList.add("dark-mode")
    document.querySelector("body").classList.add("dark-mode")
    document.querySelector("html").classList.remove("light-mode")
    document.querySelector("body").classList.remove("light-mode")
    document.getElementById("logo").src = "/static/dark_logo_web.png"
  }
  else {
    document.querySelector("html").classList.add("light-mode")
    document.querySelector("body").classList.add("light-mode")
    document.querySelector("html").classList.remove("dark-mode")
    document.querySelector("body").classList.remove("dark-mode")
    document.getElementById("logo").src = "/static/light_logo_web.png"
  }
})
$(document.body).on("click", ".feedback-controls", function (event) {
  var settings = {
    "url": `/choice/${event.target.getAttribute("data-id")}`,
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "data": event.target.getAttribute("data-value")
    }),
  };
  $.ajax(settings).done(function (response) {
    document.querySelectorAll(`.feedback-${event.target.getAttribute("data-id")}`).forEach((item)=>{
      item.classList.remove('active')
    })
    event.target.classList.add("active")
  })

})


