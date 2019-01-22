module.exports = {
  apps: [
    {
      name: "related-items-service",
      script: "./server/server.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-3-89-140-227.compute-1.amazonaws.com",
      key: "~/.ssh/betterJumpService.pem",
      ref: "origin/master",
      repo: "https://github.com/mnutt346/Matt-Service-RelatedItems.git",
      path: "/home/ubuntu/",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
