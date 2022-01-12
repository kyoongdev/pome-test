module.exports = {
  apps: [
    {
      name: "app",
      script: "./app.js",
      instances: 0,
      watch: true,
      exec_mode: "cluster",
    },
  ],
};
