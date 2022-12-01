#!/bin/bash

dataSpreadName="dados.xlsx"

for dir in ./data/*
do
    # ignore spreadsheet
    dirbasename=$(basename -- "$dir")
    if [ "$dirbasename" = "$dataSpreadName" ]
    then
        continue
    fi

    # iterate through subdirectories
    cd "$dir"
    for file in ./*
    do
        fullname=$(basename -- $file)
        filename="${fullname%.*}"
        extension="${fullname##*.}"
        # convert to png if tif file
        if [ "$extension" = "tif" ]
        then
            echo "$dir/$fullname"
            convert "$fullname" "$filename.png"
            rm "$fullname"
        fi
    done
    cd ../..
done
