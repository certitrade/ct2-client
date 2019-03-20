export interface Error {
	/** URL that refers to a description of the error. */
	readonly describedBy: string,
	/** Short title of the error. */
	readonly title: string,
	/**  	No 	Detailed information about the error. */
	readonly detail?: string,
	/** HTTP status code. */
	readonly httpStatus?: number,
}
