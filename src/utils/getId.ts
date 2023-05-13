let id = 0
export function getId(label: string) {
  return label + ++id
}
