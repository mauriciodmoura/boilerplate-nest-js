export abstract class NullaryUseCase<OUT> {
  public abstract execute(): Promise<OUT>
}
