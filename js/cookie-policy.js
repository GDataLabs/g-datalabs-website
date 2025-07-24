var requests = []
var speed = 5;
var data = ""
var i = 0;
$("#form-cookie-policy").submit(async (e) => {
    e.preventDefault()
    $("#generate-cookie-policy-btn > span").text("Generating")
    $("#generate-cookie-policy-btn .typing").removeClass("d-none")
    $("#generate-cookie-policy-btn").prop("disabled", true);
    let darkMode = localStorage.getItem("dark-mode");
    if (darkMode && darkMode === 'true') {
        document.getElementById("logo").src = "/static/gdata-night.gif"
    }
    else document.getElementById("logo").src = "/static/gdata-day.gif"
    $(".result-section").append(`
    <p class="ques-section padding-custom mt-3">${document.getElementById("user_ques").value}</p>
    `)
    var settings = {
        "url": "/get-cookie-policy",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "prompt": document.getElementById("user_ques").value,
        }),
    };
    requests.push($.ajax(settings).done(function (response) {
        var data = response
    }))
    return Promise.all(requests).then((res) => {
        document.getElementById("user_ques").value = ""
        data = res[0]
        $(".result-section").append(`
        <div id='result-${section}' class="row mx-0">
        <div class="position-relative col-md-12">
        <p class='padding-custom-2 response-section w-100'></p>
        </div>
        <div class="${data ? 'col-md-4': 'col-md-12 mt-3'}">
        <div class="row">
       </div>
        </div>
        </div>
    `)
        typeWriter()
      })
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
      $("#generate-cookie-policy-btn > span").text("Generate")
      $("#generate-cookie-policy-btn .typing").addClass("d-none")
      $("#generate-cookie-policy-btn").prop("disabled", false);
      document.getElementById("user_ques").style.height = '50px'
      let darkMode = localStorage.getItem("dark-mode");
      if (darkMode && darkMode === 'true') {
        document.getElementById("logo").src = "/static/dark_logo_web.png"
      }
      else document.getElementById("logo").src = "/static/light_logo_web.png"
    }
  }