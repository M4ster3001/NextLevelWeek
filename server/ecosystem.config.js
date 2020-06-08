module.exports = {
  apps : [{
    "name": "web",
    "exec_mode": "cluster",
    "instances": "2",
    "script": "./src/server.ts",
    "interpreter": "./node_modules/.bin/ts-node",
    "max_memory_restart": "300M",
    "watch": true,
    env: {
      "NODE_ENV": "development"
    },
    env_production: {
      "NODE_ENV": "production"
    },
  }],
 
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  },
};
