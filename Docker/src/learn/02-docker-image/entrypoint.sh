#!/bin/bash 
if [ $# -eq 0 ]; then 
    echo "Argument empty !"
    echo "How are you ?"
else 
    echo "Argument : " + "$@"
    echo "Where are you ?" 
fi