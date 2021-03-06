type Filter<T, U> = T extends U ? T : never

export type ErrorHandler = (e: Error) => void

export type RequireDistinctIntersection<A, B> =
	Filter<keyof A, keyof B> extends never
		? A & B
		: never

export type Overwrite<A, B> = {
	[K in Exclude<keyof A, keyof B>]: A[K]
} & B

export type TupleUnion<L extends any[]> = L[number]

export function pick<V, K extends keyof V>(obj: V, keys: K[]): Pick<V, K> {
	const give = {} as Pick<V, K>
	for (let index = 0; index < keys.length; index++) {
		const key = keys[index]
		give[key] = obj[key]
	}
	return give
}

export function toArray<T>(value: T | T[]): T[] {
	return Array.isArray(value)
		? value
		: [value]
}
