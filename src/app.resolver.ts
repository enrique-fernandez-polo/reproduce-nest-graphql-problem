import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EntityInput, EntityOutput } from './entity';

@Resolver()
export class AppResolver {
  @Mutation(() => EntityOutput)
  test(@Args('input') input: EntityInput): EntityOutput {
    return input;
  }

  @Query(() => EntityOutput)
  testQuery() {
    return { name: 'some name' };
  }
}
