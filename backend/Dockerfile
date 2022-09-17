FROM hailgenetics/hail:0.2.98

RUN apt-get update

RUN pip install flask

ADD server.py .

EXPOSE 5000

CMD ["python3", "server.py"]