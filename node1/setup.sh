#!/bin/bash

if [ ! -d env ]
then
   conda create -p ./env nodejs=8.11.4
fi
