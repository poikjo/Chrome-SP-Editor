import { IFetchOptions } from "@pnp/common";
import { IODataParser } from "./parsers";
export interface ODataBatchRequestInfo {
    url: string;
    method: string;
    options: IFetchOptions;
    parser: IODataParser<any>;
    resolve: ((d: any) => void) | null;
    reject: ((error: any) => void) | null;
    id: string;
}
export declare abstract class Batch {
    private _batchId;
    protected _deps: Promise<void>[];
    protected _reqs: ODataBatchRequestInfo[];
    protected _rDeps: Promise<void>[];
    constructor(_batchId?: string);
    get batchId(): string;
    /**
     * The requests contained in this batch
     */
    protected get requests(): ODataBatchRequestInfo[];
    /**
     *
     * @param url Request url
     * @param method Request method (GET, POST, etc)
     * @param options Any request options
     * @param parser The parser used to handle the eventual return from the query
     * @param id An identifier used to track a request within a batch
     */
    add<T>(url: string, method: string, options: IFetchOptions, parser: IODataParser<T>, id: string): Promise<T>;
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    addDependency(): () => void;
    /**
     * The batch's execute method will not resolve util any promises added here resolve
     *
     * @param p The dependent promise
     */
    addResolveBatchDependency(p: Promise<any>): void;
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    execute(): Promise<void>;
    protected abstract executeImpl(): Promise<void>;
}
//# sourceMappingURL=batch.d.ts.map