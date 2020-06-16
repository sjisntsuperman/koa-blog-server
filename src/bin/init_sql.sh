#!/bin/bash
host="127.0.0.1"
port="3306"
user="root"
password="123456"

# Create database
mysql -h $host -P $port -u $user -p$password -e "CREATE DATABASE IF NOT EXISTS blog;"

# Import initial data
# i=0
# for file in `ls -1 ./sql`
# do
#     result=$(mysql -h $host -P $port -u $user -p$password -D blog -e "source ./sql/$file;")
#     echo source $file
# done