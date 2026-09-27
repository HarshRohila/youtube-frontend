declare function describe(name: string, fn: () => void): void
declare function test(name: string, fn: () => void): void
declare function expect(actual: unknown): {
  toEqual(expected: unknown): void
}
