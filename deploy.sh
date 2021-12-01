#!/bin/bash
set -e

### Configuration ###

APP_DIR=/home/frostbutter.com
APP_NAME=frostbutter.com
GIT_URL=git@github.com:nickfrosty/frostbutter
RESTART_ARGS=

PACKAGE_FILE=$APP_DIR/.stage/package.json

# Uncomment and modify the following if you installed Passenger from tarball
#export PATH=/path-to-passenger/bin:$PATH


### Automation steps ###

# if run: force to the owner of APP_DIR
if (( $EUID == 0 )); then
  USER=$(stat -c %U $APP_DIR)
  sudo -u $USER ./deploy.sh
  exit
fi

set -x

# set placeholder values for the timestamps
PACKAGE_OLD=0
PACKAGE_NEW=0

# get the important current timestamps
if [[ -f $PACKAGE_FILE ]]; then
  PACKAGE_OLD=`stat -c %Y $PACKAGE_FILE`
fi

# Pull latest code
if [[ -d $APP_DIR/.stage ]]; then
  cd $APP_DIR/.stage
  git stash
  git pull
else
  git clone $GIT_URL $APP_DIR/.stage
  cd $APP_DIR/.stage
fi

# get the important new timestamps
PACKAGE_NEW=`stat -c %Y $PACKAGE_FILE`

# Install dependencies
if [ "$PACKAGE_NEW" -gt "$PACKAGE_OLD" ]; then
  npm install
fi

### Build and deploy steps  ###

# Generate static site
npm run generate
cp -r -f ./dist/* $APP_DIR/public_html/

# Build for production (using pm2/node)
# npm run build
# pm2 restart $APP_NAME

### Finishing work ###

# force the deploy script to be executable
cp ./deploy.sh $APP_DIR/deploy.sh
chmod +x $APP_DIR/deploy.sh

# update all the permissions, as neededd
if (( $EUID == 0 )); then
  USER=$(stat -c %U $APP_DIR)
  chown -R $USER:$USER $APP_DIR/*
fi