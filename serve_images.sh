#!/bin/bash

set -e

PICT_COUNT=$(ls * | wc -l)
SELECT=$(( RANDOM % $PICT_COUNT ))
#echo $SELECT from $PICT_COUNT
i=0

for pict in *;
do
    #echo at $i looking at $pict
    if [[ $i -eq $SELECT ]];
    then
	#echo serving $pict
	echo -e "HTTP/1.1 200 OK\r\n"
	cat "$pict"
	exit
    else
	i=$(( $i + 1 ))   
    fi
       
done
