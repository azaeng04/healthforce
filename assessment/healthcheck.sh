#!/bin/bash

status_code=$(curl --write-out %{http_code} --silent --output /dev/null $DEV_HTTP_SCHEMA://$DEV_HOST:$DEV_PORT)

if [[ "$status_code" -ne 200 ]] ; then
  echo "Site status changed to $status_code"
  exit 1
else
  echo "Site status healthy"
  exit 0
fi