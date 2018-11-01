const presets = [
  [
    "@babel/env",
    {
      targets: {
        "browsers": "> 5%"
      },
      useBuiltIns: "usage"
    },
  ],
];

module.exports = { presets };
