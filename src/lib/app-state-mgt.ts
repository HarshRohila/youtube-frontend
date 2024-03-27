import { initComponentUtil } from "./state-mgt"

const componentUtil = initComponentUtil({
  componentDestroyHandlerName: "disconnectedCallback"
})

export { componentUtil }
