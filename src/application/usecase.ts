export abstract class UseCase<IN, OUT> {
  public abstract execute(anIn: IN): Promise<OUT>
}
