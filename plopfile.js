module.exports = function (plop) {
  // controller generator
  plop.setGenerator('Component', {
    description: 'Component Generator',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Component Type?',
        choices: [
          { name: 'Atom', value: 'atoms' },
          { name: 'Molecule', value: 'molecules' },
          { name: 'Organism', value: 'organisms' },
        ],
      },
      {
        type: 'input',
        name: 'ComponentName',
        message: 'Component Name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{type}}/{{kebabCase ComponentName}}/{{pascalCase ComponentName}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{kebabCase ComponentName}}/{{pascalCase ComponentName}}.stories.tsx',
        templateFile: 'plop-templates/story.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{kebabCase ComponentName}}/__tests__/{{pascalCase ComponentName}}.test.js',
        templateFile: 'plop-templates/test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{kebabCase ComponentName}}/index.ts',
        templateFile: 'plop-templates/export.hbs',
      },
    ],
  });
};
