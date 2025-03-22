type Ok<T> = {
	readonly isOk: true;
	readonly isErr: false;
	data: T;
};

type Err<E> = {
	readonly isOk: false;
	readonly isErr: true;
	error: E;
};

export type Result<T, E> = Ok<T> | Err<E>;

export const ok = <T>(data: T): Ok<T> => ({
	isOk: true,
	isErr: false,
	data
});

export const err = <E>(error: E): Err<E> => ({
	isOk: false,
	isErr: true,
	error
});
