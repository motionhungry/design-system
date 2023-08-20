export default function (plop) {
  plop.setGenerator('component', {
    description: 'a react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/ui/src/{{ name }}/{{ name }}.tsx',
        templateFile: '.plop/component/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/ui/src/{{ name }}/index.ts',
        templateFile: '.plop/component/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'apps/storybook/stories/ui/{{ name }}.stories.tsx',
        templateFile: '.plop/component/component.stories.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('icon', {
    description: 'an SVG icon',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'icon name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/icons/src/{{ name }}.tsx',
        templateFile: '.plop/icons/icon.tsx.hbs',
      },
      {
        type: 'add',
        path: 'apps/storybook/stories/icons/{{ name }}.stories.tsx',
        templateFile: '.plop/icons/icon.stories.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'a static Page component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'page name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/pages/src/{{ name }}/{{ name }}.tsx',
        templateFile: '.plop/page/page/page.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/pages/src/{{ name }}/index.ts',
        templateFile: '.plop/page/page/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'apps/storybook/stories/pages/{{ name }}.stories.tsx',
        templateFile: '.plop/page/page.stories.tsx.hbs',
      },
    ],
  });
}
