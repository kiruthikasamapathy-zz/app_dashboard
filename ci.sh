#!/bin/sh

task=$1
script="./scripts/${task}.sh"

if [ ! -f ${script} ]; then 
    echo "No script found for task: ${task}!"
    echo "Usage: ci.sh <task>" 
    exit 1
fi

# Pass on any extra parameters to the script (minus the task name).
shift
${script} $@
