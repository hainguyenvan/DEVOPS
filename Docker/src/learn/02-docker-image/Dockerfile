FROM ubuntu:latest
RUN apt-get update && \
    echo "Done biuld images"
# COPY: copy file from images
# COPY entrypoint.sh /

# ADD: copy file from container
ADD entrypoint.sh /

ENTRYPOINT [ "/entrypoint.sh" ]