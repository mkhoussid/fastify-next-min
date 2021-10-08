import { forward, createEvent, createStore, createEffect } from 'effector-next';

export const pageLoaded = createEvent<any>();
export const buttonClicked = createEvent();

const effect = createEffect({
	handler(name) {
		return Promise.resolve({ name });
	},
});

export const $data = createStore(null);

$data.on(effect.done, (_, { result }) => result);

forward({
	from: pageLoaded.map(() => 'nameFromPageLoaded'),
	to: effect,
});

forward({
	from: buttonClicked.map(() => 'nameFromButtonClicked'),
	to: effect,
});
