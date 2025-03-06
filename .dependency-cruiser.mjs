export default {
  forbidden: [
    {
      name: 'no-circular',
      severity: 'error',
      from: {},
      to: { circular: true },
    },
    {
      name: 'no-external-imports',
      severity: 'warn',
      from: { path: '^src/' },
      to: { dependencyTypes: ['npm'] },
    },
  ],
};
