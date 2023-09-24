import { watch } from 'turbowatch';

const tsConfigPath = 'tsconfig.build.json';

void watch({
  project: __dirname,
  triggers: [
    {
      expression: [
        'allof',
        ['not', ['dirname', 'node_modules']],
        ['match', '*.ts', 'basename'],
      ],
      name: 'build',
      onChange: async ({ spawn }) => {
        await spawn`tsc --project ${tsConfigPath}`;
        await spawn`tsc-alias -p ${tsConfigPath}`;
      },
    },
  ],
});
