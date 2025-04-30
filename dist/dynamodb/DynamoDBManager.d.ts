import { QueryInput, QueryOutput } from "@aws-sdk/client-dynamodb";
import * as Long from "long";
import { GeoDataManagerConfiguration } from "../GeoDataManagerConfiguration";
import { DeletePointInput, GetPointInput, PutPointInput, UpdatePointInput } from "../types";
import { GeohashRange } from "../model/GeohashRange";
export declare class DynamoDBManager {
    private config;
    constructor(config: GeoDataManagerConfiguration);
    /**
     * Query Amazon DynamoDB
     *
     * @param queryInput
     * @param hashKey
     *            Hash key for the query request.
     *
     * @param range
     *            The range of geohashs to query.
     *
     * @return The query result.
     */
    queryGeohash(queryInput: QueryInput | undefined, hashKey: Long, range: GeohashRange): Promise<QueryOutput[]>;
    getPoint(getPointInput: GetPointInput): Promise<import("@aws-sdk/client-dynamodb").GetItemCommandOutput>;
    putPoint(putPointInput: PutPointInput): Promise<import("@aws-sdk/client-dynamodb").PutItemCommandOutput>;
    batchWritePoints(putPointInputs: PutPointInput[]): Promise<import("@aws-sdk/client-dynamodb").BatchWriteItemCommandOutput>;
    updatePoint(updatePointInput: UpdatePointInput): Promise<import("@aws-sdk/client-dynamodb").UpdateItemCommandOutput>;
    deletePoint(deletePointInput: DeletePointInput): Promise<import("@aws-sdk/client-dynamodb").DeleteItemCommandOutput>;
}
