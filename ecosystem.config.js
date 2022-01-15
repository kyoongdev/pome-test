module.exports = {
  apps: [
    {
      name: "app",
      script: "index.js",
      instances: 0,
      watch: true,
      exec_mode: "cluster",
    },
  ],
};
