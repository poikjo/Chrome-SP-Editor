import { ITypedHash } from "@pnp/common";
import { PlannerPlan as IPlannerPlanType, PlannerTask as IPlannerTaskType, PlannerBucket as IPlannerBucketType, Planner as IPlannerType } from "@microsoft/microsoft-graph-types";
import { _GraphQueryableInstance, _GraphQueryableCollection } from "../graphqueryable";
import { IUpdateable, IDeleteable, IGetById, IDeleteableWithETag, IUpdateableWithETag } from "../decorators";
/**
 * Planner
 */
export declare class _Planner extends _GraphQueryableInstance<IPlannerType> {
    get plans(): IPlans;
    get tasks(): ITasks;
    get buckets(): IBuckets;
}
export interface IPlanner extends _Planner {
}
export declare const Planner: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IPlanner;
/**
 * Plan
 */
export declare class _Plan extends _GraphQueryableInstance<IPlannerPlanType> {
    get tasks(): ITasks;
    get buckets(): IBuckets;
}
export interface IPlan extends _Plan, IUpdateable<IPlannerPlanType>, IDeleteable {
}
export declare const Plan: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IPlan;
export declare class _Plans extends _GraphQueryableCollection<IPlannerPlanType[]> {
    /**
     * Create a new Planner Plan.
     *
     * @param owner Id of Group object.
     * @param title The Title of the Plan.
     */
    add(owner: string, title: string): Promise<IPlanAddResult>;
}
export interface IPlans extends _Plans, IGetById<IPlan> {
}
export declare const Plans: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IPlans;
/**
 * Task
 */
export declare class _Task extends _GraphQueryableInstance<IPlannerTaskType> {
}
export interface ITask extends _Task, IUpdateableWithETag<IPlannerTaskType>, IDeleteableWithETag {
}
export declare const Task: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ITask;
/**
 * Tasks
 */
export declare class _Tasks extends _GraphQueryableCollection<IPlannerTaskType[]> {
    /**
     * Create a new Planner Task.
     *
     * @param planId Id of Plan.
     * @param title The Title of the Task.
     * @param assignments Assign the task
     * @param bucketId Id of Bucket
     */
    add(planId: string, title: string, assignments?: ITypedHash<any>, bucketId?: string): Promise<ITaskAddResult>;
}
export interface ITasks extends _Tasks, IGetById<ITask> {
}
export declare const Tasks: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ITasks;
/**
 * Bucket
 */
export declare class _Bucket extends _GraphQueryableInstance<IPlannerBucketType> {
    get tasks(): ITasks;
}
export interface IBucket extends _Bucket, IUpdateable<IPlannerBucketType>, IDeleteable {
}
export declare const Bucket: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IBucket;
/**
 * Buckets
 */
export declare class _Buckets extends _GraphQueryableCollection<IPlannerBucketType[]> {
    /**
     * Create a new Bucket.
     *
     * @param name Name of Bucket object.
     * @param planId The Id of the Plan.
     * @param oderHint Hint used to order items of this type in a list view.
     */
    add(name: string, planId: string, orderHint?: string): Promise<IBucketAddResult>;
}
export interface IBuckets extends _Buckets, IGetById<IBucket> {
}
export declare const Buckets: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IBuckets;
export interface IBucketAddResult {
    data: IPlannerBucketType;
    bucket: IBucket;
}
export interface IPlanAddResult {
    data: IPlannerPlanType;
    plan: IPlan;
}
export interface ITaskAddResult {
    data: IPlannerTaskType;
    task: ITask;
}
//# sourceMappingURL=types.d.ts.map