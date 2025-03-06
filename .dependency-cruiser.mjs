export default {
  forbidden: [
    {
      name: 'no-circular',
      severity: 'error',
      from: {},
      to: { circular: true, pathNot: ['^node_modules/'] },
    },
  ],
};
