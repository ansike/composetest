docker run -itd \
--name mariadb \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=root \
-e MYSQL_DATABASE=docker \
1f95b36bd46d
