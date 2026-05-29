from flask import Flask, request, render_template_string
import base64

app = Flask(__name__)

HTML = '''
<!DOCTYPE html>
<html>
<head>
    <title>Camera</title>
</head>
<body>

<h2>برای ادامه اجازه دوربین بدهید</h2>

<video id="video" autoplay width="300"></video>
<br><br>

<button onclick="takePhoto()">گرفتن عکس</button>

<canvas id="canvas" width="300" height="200" style="display:none;"></canvas>

<script>

navigator.mediaDevices.getUserMedia({ video: true })
.then(function(stream) {
    document.getElementById("video").srcObject = stream;
});

function takePhoto() {

    const canvas = document.getElementById("canvas");
    const video = document.getElementById("video");

    canvas.getContext('2d').drawImage(video, 0, 0, 300, 200);

    let image = canvas.toDataURL("image/png");

    fetch('/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({image:image})
    });

    alert("عکس ارسال شد");
}

</script>

</body>
</html>
'''

@app.route('/')
def home():
    return render_template_string(HTML)

@app.route('/upload', methods=['POST'])
def upload():

    data = request.json['image']

    image_data = data.split(",")[1]

    with open("photo.png", "wb") as f:
        f.write(base64.b64decode(image_data))

    return {"status":"saved"}

app.run(host='0.0.0.0', port=5000)