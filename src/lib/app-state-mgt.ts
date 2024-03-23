import { initMyLib } from "./state-mgt";

const myLib = initMyLib({
	componentDestroyHandlerName: "disconnectedCallback"
})

export { myLib }