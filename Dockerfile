FROM nginx
COPY nginx.conf /etc/nginx/
COPY dist /data
EXPOSE 80

CMD ["/usr/sbin/nginx"]
