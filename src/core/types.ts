interface ComponentOptions {
  deps: AnyComponent[]
}

type AnyComponent = string | [string, ComponentOptions]

export { ComponentOptions, AnyComponent }
