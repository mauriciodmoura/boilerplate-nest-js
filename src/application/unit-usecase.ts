export abstract class UnitUseCase<IN> {
  public abstract execute(anIn: IN): void
}
