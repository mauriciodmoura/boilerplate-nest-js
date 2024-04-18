export class Objects {
  public static requireNonNull<T>(
    obj: T | null | undefined,
    message: string = 'Object cannot be null or undefined'
  ): T {
    if (obj === null || obj === undefined) {
      throw new Error(message)
    }
    return obj
  }
}
