module.exports = {
  apps: [
    {
      name: "stoxk",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
