import { Arg, Field, InputType, Mutation, ObjectType, Query, Resolver } from 'type-graphql'

@ObjectType()
class Recipe {
  @Field()
  id: string;

  @Field()
  title: string;
}

@InputType()
class AddRecipeInput {
}

// throws error:
// Error: Unable to infer GraphQL type from TypeScript reflection system. You need to provide explicit type for 'createProduct' of 'RecipeResolver' class.


@Resolver(Recipe)
export default class RecipeResolver {

  @Mutation()
  async addRecipe(@Arg("data") data: AddRecipeInput): Promise<boolean> {
    return true
  }

  @Query(returns => [Recipe])
  async recipes(): Promise<Array<Recipe>> {
    return [{
      id: 'cake',
      title: 'velvet'
    }]
  }
}
