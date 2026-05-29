from flask import Flask, render_template_string, request
import os
import base64
from datetime import datetime

app = Flask(__name__)

# پوشه ذخیره عکس‌ها
UPLOAD_FOLDER = "photos"

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# صفحه HTML
HTML_PAGE = """
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Camera Access</title>

    <style>
        body{
            font-family:sans-serif;
            text-align:center;
            background:#f5f5f5;
            padding-top:40px;
        }

        video{
            width:320px;
            border-radius:10px;
            border:3px solid #333;
        }

        button{
            margin-top:20px;
            padding:12px 25px;
            font-size:18px;
            border:none;
            border-radius:10px;
            background:#007bff;
            color:white;
            cursor:pointer;
        }

        button:hover{
            background:#0056b3;
        }
    </style>
</head>
<body>

    <h2>برای ادامه اجازه دوربین بدهید</h2>

    <video id="video" autoplay></video>

    <br>

    <button onclick="takePhoto()">
        گرفتن عکس
    </button>

    <canvas id="canvas" width="320" height="240" style="display:none;"></canvas>

    <script>

        // روشن کردن دوربین
        navigator.mediaDevices.getUserMedia({
            video: true
        })

        .then(stream => {
            document.getElementById("video").srcObject = stream;
        })

        .catch(error => {
            alert("دسترسی دوربین داده نشد");
            console.log(error);
        });


        // گرفتن عکس
        function takePhoto(){

            const video = document.getElementById("video");
            const canvas = document.getElementById("canvas");

            const ctx = canvas.getContext("2d");

            ctx.drawImage(video, 0, 0, 320, 240);

            const imageData = canvas.toDataURL("image/png");

            fetch("/upload", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    image: imageData
                })

            })

            .then(response => response.text())

            .then(data => {
                alert("عکس ذخیره شد");
            });

        }

    </script>

</body>
</html>
"""

# صفحه اصلی
@app.route('/')
def home():
    return render_template_string(HTML_PAGE)


# آپلود عکس
@app.route('/upload', methods=['POST'])
def upload():

    data = request.json['image']

    image_data = data.split(",")[1]

    filename = datetime.now().strftime("%Y%m%d%H%M%S") + ".png"

    filepath = os.path.join(UPLOAD_FOLDER, filename)

    with open(filepath, "wb") as f:
        f.write(base64.b64decode(image_data))

    print(f"Saved: {filepath}")

    return "OK"


# اجرای برنامه
if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True
    )