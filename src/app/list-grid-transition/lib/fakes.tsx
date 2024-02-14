import { ItemData } from "../components/item";
import { faker } from "@faker-js/faker";

export function GenerateFakeItem(): ItemData {
  var title = faker.word.words(3);
  return {
    title: title.charAt(0).toUpperCase() + title.slice(1),
    description: faker.lorem.sentence(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
  };
}
