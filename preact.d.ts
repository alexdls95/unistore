// T - Wrapped component props
// S - Wrapped component state
// K - Store state
// I - Injected props to wrapped component

declare module "unistore/preact" {
	import * as Preact from "preact";
	import { ActionCreator, StateMapper, Store } from "unistore";

	export function connect<T, K, I>(
		mapStateToProps: string | Array<string> | StateMapper<T, K, I>,
		actions?: ActionCreator<K> | object
	): (
		Child: ((props?: T & I) => JSX.Element) | Preact.ComponentConstructor<T & I> | Preact.AnyComponent<T & I>
	) => Preact.ComponentConstructor<T>;

	export interface ProviderProps<T> {
		store: Store<T>;
	}

	export class Provider<T> extends Preact.Component<ProviderProps<T>> {
		render(props: ProviderProps<T>): JSX.Element;
	}
}
