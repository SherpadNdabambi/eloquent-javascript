#!/bin/bash
read -ra directoryName <<< "$(dir_name)"
exerciseNo=${directoryName[0]}

code solution$exerciseNo.js