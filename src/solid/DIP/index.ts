//bad example

class mySqlDatabase {
  public save(data: string): void {}
}

class HighLevelModule {
  private database: mySqlDatabase;

  constructor(database: mySqlDatabase) {
    this.database = database;
  }

  execute(data: string): void {
    this.database.save(data);
  }
}

// good example

interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to MySQL`);
  }
}

class MongoDbDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to MongoDB`);
  }
}

class HLModule {
  constructor(private database: IDatabase) {}

  execute(data: string) {
    this.database.save(data);
  }
}

let mysql: MySqlDatabase = new MySqlDatabase();
let mongo: MongoDbDatabase = new MongoDbDatabase();

let user: HLModule = new HLModule(mysql);
user.execute("Bassel");

let post: HLModule = new HLModule(mongo);
post.execute("New Post");
