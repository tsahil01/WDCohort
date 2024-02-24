"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation
function generator(plop) {
    // A simple generator to add a new React component to the internal UI library
    plop.setGenerator("react-component", {
        description: "Adds a new react component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is the name of the component?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/{{kebabCase name}}.tsx",
                templateFile: "templates/component.hbs",
            },
            {
                type: "append",
                path: "package.json",
                pattern: /"exports": {(?<insertion>)/g,
                template: '"./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",',
            },
        ],
    });
}
exports.default = generator;
