#!/bin/bash
set -e

### Configuration ###

APP_DIR=/home/frostbutter.com
APP_NAME=frostbutter.com
GIT_URL=git@github.com:nickfrosty/frostbutter
RESTART_ARGS=

# Uncomment and modify the following if you installed Passenger from tarball
#export PATH=/path-to-passenger/bin:$PATH


### Automation steps ###

# if run: force to the owner of APP_DIR
if (( $EUID == 0 )); then
  USER=$(stat -c %U $APP_DIR)
  su -c ./deploy.sh $USER
  exit
fi

set -x

# Pull latest code
if [[ -e $APP_DIR/.stage ]]; then
  git pull
else
  git clone $GIT_URL $APP_DIR/.stage
fi

# Install dependencies
npm install

### Build and deploy steps  ###

# Generate static site
npm run generate
mv -R -f ./dist/* ./public_html/

# Build for production (using pm2/node)
# npm run build
# pm2 restart $APP_NAME

###   ###

# force the deploy script to be executable
chmod +x deploy.sh