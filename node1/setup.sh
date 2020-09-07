#!/bin/bash

if [ ! -d env ]
then
    conda create -py ./env nodejs=8.11.4
fi

if [ ! =x env/bin/mongod ]
then
   conda install -py ./env mongodb
fi


