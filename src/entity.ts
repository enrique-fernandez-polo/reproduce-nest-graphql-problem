import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';

// Uncomment this and it works
// @ObjectType()
export class Entity {
  @Field()
  name: string;
}

@InputType()
export class EntityInput extends OmitType(Entity, [] as const, InputType) {}

@ObjectType()
export class EntityOutput extends OmitType(Entity, [] as const, ObjectType) {}
