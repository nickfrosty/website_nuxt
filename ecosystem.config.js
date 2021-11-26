module.exports = {
    apps: [
      {
        name: 'frostbutter.com',
        // exec_mode: 'cluster',
        // instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
        env: {
          PORT: 5001
        },
        watch: true,
        watch_delay: 1000,
        ignore_watch: [
          "node_modules"
        ]
      }
    ]
  }