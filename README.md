`npm i`
`npm run start-dev`

output:
```
/bug_repro/node_modules/type-graphql/dist/helpers/findType.js:17
        throw new errors_1.NoExplicitTypeError(prototype.constructor.name, propertyKey, parameterIndex, argName);
              ^
Error: Unable to infer GraphQL type from TypeScript reflection system. You need to provide explicit type for 'addRecipe' of 'RecipeResolver' class.
    at Object.findType (/bug_repro/node_modules/type-graphql/dist/helpers/findType.js:17:15)
    at Object.getResolverMetadata (/bug_repro/node_modules/type-graphql/dist/helpers/resolver-metadata.js:10:49)
    at /bug_repro/node_modules/type-graphql/dist/decorators/Mutation.js:10:46
    at DecorateProperty (/bug_repro/node_modules/reflect-metadata/Reflect.js:553:33)
    at Object.decorate (/bug_repro/node_modules/reflect-metadata/Reflect.js:123:24)
    at __decorate (/bug_repro/resolvers/recipe-resolver.ts:4:92)
    at Object.<anonymous> (/bug_repro/resolvers/recipe-resolver.ts:24:3)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Module.m._compile (/usr/local/lib/node_modules/ts-node/src/index.ts:836:23)
    at Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
```

