import { untilDestroyed } from "@ngneat/until-destroy"
import { Observable } from "rxjs"

function initMyLib({
	componentDestroyHandlerName
}: {componentDestroyHandlerName: string}) {
	return function initInComponent(componentContext: any) {
		return {
			untilDestroyed(anyObservable: Observable<any>) {
				return anyObservable.pipe(untilDestroyed(componentContext, componentDestroyHandlerName))
			}
		}
	}
}

export { initMyLib }