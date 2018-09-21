import { dataTypes } from "mongo-graphql-starter";
const { MongoIdType, MongoIdArrayType, StringType, IntType, FloatType, DateType, relationshipHelpers } = dataTypes;

export const Author = {
  table: "authors",
  fields: {
    name: StringType,
    birthday: DateType
  },
  relationships: {
    books: {
      get type() {
        return Book;
      },
      fkField: "_id",
      keyField: "authorIds"
    }
  }
};

export const Book = {
  table: "books",
  fields: {
    _id: MongoIdType,
    title: StringType,
    pages: IntType,
    weight: FloatType,
    mainAuthorId: MongoIdType,
    authorIds: MongoIdArrayType
  },
  relationships: {
    authors: {
      get type() {
        return Author;
      },
      fkField: "authorIds"
    },
    mainAuthor: {
      get type() {
        return Author;
      },
      fkField: "mainAuthorId"
    }
  }
};
