From python:2.7-slim

Workdir /app
Add . /app
Run pip install --upgrade pip --trusted-host pypi.python.org -r requirements.txt
Expose 80
Env NAME world
Cmd ["python", "app.py"]