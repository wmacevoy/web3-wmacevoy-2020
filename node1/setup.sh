#!/bin/bash

if [ ! -d env ]
then
    conda create -y -p ./env nodejs=8.11.4
fi

if [ ! =x env/bin/mongod ]
then
   conda install -y -p ./env mongodb
fi


