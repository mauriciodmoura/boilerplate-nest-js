export class CreateExampleCommand {
  name: string

  private constructor(name: string) {
    this.name = name
  }

  public static with(name: string): CreateExampleCommand {
    return new CreateExampleCommand(name)
  }
}
