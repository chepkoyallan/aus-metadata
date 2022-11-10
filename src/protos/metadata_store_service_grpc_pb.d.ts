// package: ml_metadata
// file: metadata_store_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as metadata_store_service_pb from "./metadata_store_service_pb";
import * as metadata_store_pb from "./metadata_store_pb";

interface IMetadataStoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    putArtifactType: IMetadataStoreServiceService_IPutArtifactType;
    putExecutionType: IMetadataStoreServiceService_IPutExecutionType;
    putContextType: IMetadataStoreServiceService_IPutContextType;
    putTypes: IMetadataStoreServiceService_IPutTypes;
    putArtifacts: IMetadataStoreServiceService_IPutArtifacts;
    putExecutions: IMetadataStoreServiceService_IPutExecutions;
    putEvents: IMetadataStoreServiceService_IPutEvents;
    putExecution: IMetadataStoreServiceService_IPutExecution;
    putContexts: IMetadataStoreServiceService_IPutContexts;
    putAttributionsAndAssociations: IMetadataStoreServiceService_IPutAttributionsAndAssociations;
    putParentContexts: IMetadataStoreServiceService_IPutParentContexts;
    getArtifactType: IMetadataStoreServiceService_IGetArtifactType;
    getArtifactTypesByID: IMetadataStoreServiceService_IGetArtifactTypesByID;
    getArtifactTypes: IMetadataStoreServiceService_IGetArtifactTypes;
    getExecutionType: IMetadataStoreServiceService_IGetExecutionType;
    getExecutionTypesByID: IMetadataStoreServiceService_IGetExecutionTypesByID;
    getExecutionTypes: IMetadataStoreServiceService_IGetExecutionTypes;
    getContextType: IMetadataStoreServiceService_IGetContextType;
    getContextTypesByID: IMetadataStoreServiceService_IGetContextTypesByID;
    getContextTypes: IMetadataStoreServiceService_IGetContextTypes;
    getArtifacts: IMetadataStoreServiceService_IGetArtifacts;
    getExecutions: IMetadataStoreServiceService_IGetExecutions;
    getContexts: IMetadataStoreServiceService_IGetContexts;
    getArtifactsByID: IMetadataStoreServiceService_IGetArtifactsByID;
    getExecutionsByID: IMetadataStoreServiceService_IGetExecutionsByID;
    getContextsByID: IMetadataStoreServiceService_IGetContextsByID;
    getArtifactsByType: IMetadataStoreServiceService_IGetArtifactsByType;
    getExecutionsByType: IMetadataStoreServiceService_IGetExecutionsByType;
    getContextsByType: IMetadataStoreServiceService_IGetContextsByType;
    getArtifactByTypeAndName: IMetadataStoreServiceService_IGetArtifactByTypeAndName;
    getExecutionByTypeAndName: IMetadataStoreServiceService_IGetExecutionByTypeAndName;
    getContextByTypeAndName: IMetadataStoreServiceService_IGetContextByTypeAndName;
    getArtifactsByURI: IMetadataStoreServiceService_IGetArtifactsByURI;
    getEventsByExecutionIDs: IMetadataStoreServiceService_IGetEventsByExecutionIDs;
    getEventsByArtifactIDs: IMetadataStoreServiceService_IGetEventsByArtifactIDs;
    getContextsByArtifact: IMetadataStoreServiceService_IGetContextsByArtifact;
    getContextsByExecution: IMetadataStoreServiceService_IGetContextsByExecution;
    getParentContextsByContext: IMetadataStoreServiceService_IGetParentContextsByContext;
    getChildrenContextsByContext: IMetadataStoreServiceService_IGetChildrenContextsByContext;
    getArtifactsByContext: IMetadataStoreServiceService_IGetArtifactsByContext;
    getExecutionsByContext: IMetadataStoreServiceService_IGetExecutionsByContext;
    getLineageGraph: IMetadataStoreServiceService_IGetLineageGraph;
}

interface IMetadataStoreServiceService_IPutArtifactType extends grpc.MethodDefinition<metadata_store_service_pb.PutArtifactTypeRequest, metadata_store_service_pb.PutArtifactTypeResponse> {
    path: "/ml_metadata.MetadataStoreService/PutArtifactType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.PutArtifactTypeRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.PutArtifactTypeRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.PutArtifactTypeResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.PutArtifactTypeResponse>;
}
interface IMetadataStoreServiceService_IPutExecutionType extends grpc.MethodDefinition<metadata_store_service_pb.PutExecutionTypeRequest, metadata_store_service_pb.PutExecutionTypeResponse> {
    path: "/ml_metadata.MetadataStoreService/PutExecutionType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.PutExecutionTypeRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.PutExecutionTypeRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.PutExecutionTypeResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.PutExecutionTypeResponse>;
}
interface IMetadataStoreServiceService_IPutContextType extends grpc.MethodDefinition<metadata_store_service_pb.PutContextTypeRequest, metadata_store_service_pb.PutContextTypeResponse> {
    path: "/ml_metadata.MetadataStoreService/PutContextType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.PutContextTypeRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.PutContextTypeRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.PutContextTypeResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.PutContextTypeResponse>;
}
interface IMetadataStoreServiceService_IPutTypes extends grpc.MethodDefinition<metadata_store_service_pb.PutTypesRequest, metadata_store_service_pb.PutTypesResponse> {
    path: "/ml_metadata.MetadataStoreService/PutTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.PutTypesRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.PutTypesRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.PutTypesResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.PutTypesResponse>;
}
interface IMetadataStoreServiceService_IPutArtifacts extends grpc.MethodDefinition<metadata_store_service_pb.PutArtifactsRequest, metadata_store_service_pb.PutArtifactsResponse> {
    path: "/ml_metadata.MetadataStoreService/PutArtifacts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.PutArtifactsRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.PutArtifactsRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.PutArtifactsResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.PutArtifactsResponse>;
}
interface IMetadataStoreServiceService_IPutExecutions extends grpc.MethodDefinition<metadata_store_service_pb.PutExecutionsRequest, metadata_store_service_pb.PutExecutionsResponse> {
    path: "/ml_metadata.MetadataStoreService/PutExecutions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.PutExecutionsRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.PutExecutionsRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.PutExecutionsResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.PutExecutionsResponse>;
}
interface IMetadataStoreServiceService_IPutEvents extends grpc.MethodDefinition<metadata_store_service_pb.PutEventsRequest, metadata_store_service_pb.PutEventsResponse> {
    path: "/ml_metadata.MetadataStoreService/PutEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.PutEventsRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.PutEventsRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.PutEventsResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.PutEventsResponse>;
}
interface IMetadataStoreServiceService_IPutExecution extends grpc.MethodDefinition<metadata_store_service_pb.PutExecutionRequest, metadata_store_service_pb.PutExecutionResponse> {
    path: "/ml_metadata.MetadataStoreService/PutExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.PutExecutionRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.PutExecutionRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.PutExecutionResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.PutExecutionResponse>;
}
interface IMetadataStoreServiceService_IPutContexts extends grpc.MethodDefinition<metadata_store_service_pb.PutContextsRequest, metadata_store_service_pb.PutContextsResponse> {
    path: "/ml_metadata.MetadataStoreService/PutContexts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.PutContextsRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.PutContextsRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.PutContextsResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.PutContextsResponse>;
}
interface IMetadataStoreServiceService_IPutAttributionsAndAssociations extends grpc.MethodDefinition<metadata_store_service_pb.PutAttributionsAndAssociationsRequest, metadata_store_service_pb.PutAttributionsAndAssociationsResponse> {
    path: "/ml_metadata.MetadataStoreService/PutAttributionsAndAssociations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.PutAttributionsAndAssociationsRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.PutAttributionsAndAssociationsRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.PutAttributionsAndAssociationsResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.PutAttributionsAndAssociationsResponse>;
}
interface IMetadataStoreServiceService_IPutParentContexts extends grpc.MethodDefinition<metadata_store_service_pb.PutParentContextsRequest, metadata_store_service_pb.PutParentContextsResponse> {
    path: "/ml_metadata.MetadataStoreService/PutParentContexts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.PutParentContextsRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.PutParentContextsRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.PutParentContextsResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.PutParentContextsResponse>;
}
interface IMetadataStoreServiceService_IGetArtifactType extends grpc.MethodDefinition<metadata_store_service_pb.GetArtifactTypeRequest, metadata_store_service_pb.GetArtifactTypeResponse> {
    path: "/ml_metadata.MetadataStoreService/GetArtifactType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactTypeRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactTypeRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactTypeResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactTypeResponse>;
}
interface IMetadataStoreServiceService_IGetArtifactTypesByID extends grpc.MethodDefinition<metadata_store_service_pb.GetArtifactTypesByIDRequest, metadata_store_service_pb.GetArtifactTypesByIDResponse> {
    path: "/ml_metadata.MetadataStoreService/GetArtifactTypesByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactTypesByIDRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactTypesByIDRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactTypesByIDResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactTypesByIDResponse>;
}
interface IMetadataStoreServiceService_IGetArtifactTypes extends grpc.MethodDefinition<metadata_store_service_pb.GetArtifactTypesRequest, metadata_store_service_pb.GetArtifactTypesResponse> {
    path: "/ml_metadata.MetadataStoreService/GetArtifactTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactTypesRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactTypesRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactTypesResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactTypesResponse>;
}
interface IMetadataStoreServiceService_IGetExecutionType extends grpc.MethodDefinition<metadata_store_service_pb.GetExecutionTypeRequest, metadata_store_service_pb.GetExecutionTypeResponse> {
    path: "/ml_metadata.MetadataStoreService/GetExecutionType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionTypeRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionTypeRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionTypeResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionTypeResponse>;
}
interface IMetadataStoreServiceService_IGetExecutionTypesByID extends grpc.MethodDefinition<metadata_store_service_pb.GetExecutionTypesByIDRequest, metadata_store_service_pb.GetExecutionTypesByIDResponse> {
    path: "/ml_metadata.MetadataStoreService/GetExecutionTypesByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionTypesByIDRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionTypesByIDRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionTypesByIDResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionTypesByIDResponse>;
}
interface IMetadataStoreServiceService_IGetExecutionTypes extends grpc.MethodDefinition<metadata_store_service_pb.GetExecutionTypesRequest, metadata_store_service_pb.GetExecutionTypesResponse> {
    path: "/ml_metadata.MetadataStoreService/GetExecutionTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionTypesRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionTypesRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionTypesResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionTypesResponse>;
}
interface IMetadataStoreServiceService_IGetContextType extends grpc.MethodDefinition<metadata_store_service_pb.GetContextTypeRequest, metadata_store_service_pb.GetContextTypeResponse> {
    path: "/ml_metadata.MetadataStoreService/GetContextType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetContextTypeRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextTypeRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetContextTypeResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextTypeResponse>;
}
interface IMetadataStoreServiceService_IGetContextTypesByID extends grpc.MethodDefinition<metadata_store_service_pb.GetContextTypesByIDRequest, metadata_store_service_pb.GetContextTypesByIDResponse> {
    path: "/ml_metadata.MetadataStoreService/GetContextTypesByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetContextTypesByIDRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextTypesByIDRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetContextTypesByIDResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextTypesByIDResponse>;
}
interface IMetadataStoreServiceService_IGetContextTypes extends grpc.MethodDefinition<metadata_store_service_pb.GetContextTypesRequest, metadata_store_service_pb.GetContextTypesResponse> {
    path: "/ml_metadata.MetadataStoreService/GetContextTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetContextTypesRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextTypesRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetContextTypesResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextTypesResponse>;
}
interface IMetadataStoreServiceService_IGetArtifacts extends grpc.MethodDefinition<metadata_store_service_pb.GetArtifactsRequest, metadata_store_service_pb.GetArtifactsResponse> {
    path: "/ml_metadata.MetadataStoreService/GetArtifacts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactsRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactsRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactsResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactsResponse>;
}
interface IMetadataStoreServiceService_IGetExecutions extends grpc.MethodDefinition<metadata_store_service_pb.GetExecutionsRequest, metadata_store_service_pb.GetExecutionsResponse> {
    path: "/ml_metadata.MetadataStoreService/GetExecutions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionsRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionsRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionsResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionsResponse>;
}
interface IMetadataStoreServiceService_IGetContexts extends grpc.MethodDefinition<metadata_store_service_pb.GetContextsRequest, metadata_store_service_pb.GetContextsResponse> {
    path: "/ml_metadata.MetadataStoreService/GetContexts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetContextsRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextsRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetContextsResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextsResponse>;
}
interface IMetadataStoreServiceService_IGetArtifactsByID extends grpc.MethodDefinition<metadata_store_service_pb.GetArtifactsByIDRequest, metadata_store_service_pb.GetArtifactsByIDResponse> {
    path: "/ml_metadata.MetadataStoreService/GetArtifactsByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactsByIDRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactsByIDRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactsByIDResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactsByIDResponse>;
}
interface IMetadataStoreServiceService_IGetExecutionsByID extends grpc.MethodDefinition<metadata_store_service_pb.GetExecutionsByIDRequest, metadata_store_service_pb.GetExecutionsByIDResponse> {
    path: "/ml_metadata.MetadataStoreService/GetExecutionsByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionsByIDRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionsByIDRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionsByIDResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionsByIDResponse>;
}
interface IMetadataStoreServiceService_IGetContextsByID extends grpc.MethodDefinition<metadata_store_service_pb.GetContextsByIDRequest, metadata_store_service_pb.GetContextsByIDResponse> {
    path: "/ml_metadata.MetadataStoreService/GetContextsByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetContextsByIDRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextsByIDRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetContextsByIDResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextsByIDResponse>;
}
interface IMetadataStoreServiceService_IGetArtifactsByType extends grpc.MethodDefinition<metadata_store_service_pb.GetArtifactsByTypeRequest, metadata_store_service_pb.GetArtifactsByTypeResponse> {
    path: "/ml_metadata.MetadataStoreService/GetArtifactsByType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactsByTypeRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactsByTypeRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactsByTypeResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactsByTypeResponse>;
}
interface IMetadataStoreServiceService_IGetExecutionsByType extends grpc.MethodDefinition<metadata_store_service_pb.GetExecutionsByTypeRequest, metadata_store_service_pb.GetExecutionsByTypeResponse> {
    path: "/ml_metadata.MetadataStoreService/GetExecutionsByType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionsByTypeRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionsByTypeRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionsByTypeResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionsByTypeResponse>;
}
interface IMetadataStoreServiceService_IGetContextsByType extends grpc.MethodDefinition<metadata_store_service_pb.GetContextsByTypeRequest, metadata_store_service_pb.GetContextsByTypeResponse> {
    path: "/ml_metadata.MetadataStoreService/GetContextsByType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetContextsByTypeRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextsByTypeRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetContextsByTypeResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextsByTypeResponse>;
}
interface IMetadataStoreServiceService_IGetArtifactByTypeAndName extends grpc.MethodDefinition<metadata_store_service_pb.GetArtifactByTypeAndNameRequest, metadata_store_service_pb.GetArtifactByTypeAndNameResponse> {
    path: "/ml_metadata.MetadataStoreService/GetArtifactByTypeAndName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactByTypeAndNameRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactByTypeAndNameRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactByTypeAndNameResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactByTypeAndNameResponse>;
}
interface IMetadataStoreServiceService_IGetExecutionByTypeAndName extends grpc.MethodDefinition<metadata_store_service_pb.GetExecutionByTypeAndNameRequest, metadata_store_service_pb.GetExecutionByTypeAndNameResponse> {
    path: "/ml_metadata.MetadataStoreService/GetExecutionByTypeAndName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionByTypeAndNameRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionByTypeAndNameRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionByTypeAndNameResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionByTypeAndNameResponse>;
}
interface IMetadataStoreServiceService_IGetContextByTypeAndName extends grpc.MethodDefinition<metadata_store_service_pb.GetContextByTypeAndNameRequest, metadata_store_service_pb.GetContextByTypeAndNameResponse> {
    path: "/ml_metadata.MetadataStoreService/GetContextByTypeAndName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetContextByTypeAndNameRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextByTypeAndNameRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetContextByTypeAndNameResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextByTypeAndNameResponse>;
}
interface IMetadataStoreServiceService_IGetArtifactsByURI extends grpc.MethodDefinition<metadata_store_service_pb.GetArtifactsByURIRequest, metadata_store_service_pb.GetArtifactsByURIResponse> {
    path: "/ml_metadata.MetadataStoreService/GetArtifactsByURI";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactsByURIRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactsByURIRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactsByURIResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactsByURIResponse>;
}
interface IMetadataStoreServiceService_IGetEventsByExecutionIDs extends grpc.MethodDefinition<metadata_store_service_pb.GetEventsByExecutionIDsRequest, metadata_store_service_pb.GetEventsByExecutionIDsResponse> {
    path: "/ml_metadata.MetadataStoreService/GetEventsByExecutionIDs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetEventsByExecutionIDsRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetEventsByExecutionIDsRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetEventsByExecutionIDsResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetEventsByExecutionIDsResponse>;
}
interface IMetadataStoreServiceService_IGetEventsByArtifactIDs extends grpc.MethodDefinition<metadata_store_service_pb.GetEventsByArtifactIDsRequest, metadata_store_service_pb.GetEventsByArtifactIDsResponse> {
    path: "/ml_metadata.MetadataStoreService/GetEventsByArtifactIDs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetEventsByArtifactIDsRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetEventsByArtifactIDsRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetEventsByArtifactIDsResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetEventsByArtifactIDsResponse>;
}
interface IMetadataStoreServiceService_IGetContextsByArtifact extends grpc.MethodDefinition<metadata_store_service_pb.GetContextsByArtifactRequest, metadata_store_service_pb.GetContextsByArtifactResponse> {
    path: "/ml_metadata.MetadataStoreService/GetContextsByArtifact";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetContextsByArtifactRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextsByArtifactRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetContextsByArtifactResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextsByArtifactResponse>;
}
interface IMetadataStoreServiceService_IGetContextsByExecution extends grpc.MethodDefinition<metadata_store_service_pb.GetContextsByExecutionRequest, metadata_store_service_pb.GetContextsByExecutionResponse> {
    path: "/ml_metadata.MetadataStoreService/GetContextsByExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetContextsByExecutionRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextsByExecutionRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetContextsByExecutionResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetContextsByExecutionResponse>;
}
interface IMetadataStoreServiceService_IGetParentContextsByContext extends grpc.MethodDefinition<metadata_store_service_pb.GetParentContextsByContextRequest, metadata_store_service_pb.GetParentContextsByContextResponse> {
    path: "/ml_metadata.MetadataStoreService/GetParentContextsByContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetParentContextsByContextRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetParentContextsByContextRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetParentContextsByContextResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetParentContextsByContextResponse>;
}
interface IMetadataStoreServiceService_IGetChildrenContextsByContext extends grpc.MethodDefinition<metadata_store_service_pb.GetChildrenContextsByContextRequest, metadata_store_service_pb.GetChildrenContextsByContextResponse> {
    path: "/ml_metadata.MetadataStoreService/GetChildrenContextsByContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetChildrenContextsByContextRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetChildrenContextsByContextRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetChildrenContextsByContextResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetChildrenContextsByContextResponse>;
}
interface IMetadataStoreServiceService_IGetArtifactsByContext extends grpc.MethodDefinition<metadata_store_service_pb.GetArtifactsByContextRequest, metadata_store_service_pb.GetArtifactsByContextResponse> {
    path: "/ml_metadata.MetadataStoreService/GetArtifactsByContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactsByContextRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactsByContextRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetArtifactsByContextResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetArtifactsByContextResponse>;
}
interface IMetadataStoreServiceService_IGetExecutionsByContext extends grpc.MethodDefinition<metadata_store_service_pb.GetExecutionsByContextRequest, metadata_store_service_pb.GetExecutionsByContextResponse> {
    path: "/ml_metadata.MetadataStoreService/GetExecutionsByContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionsByContextRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionsByContextRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetExecutionsByContextResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetExecutionsByContextResponse>;
}
interface IMetadataStoreServiceService_IGetLineageGraph extends grpc.MethodDefinition<metadata_store_service_pb.GetLineageGraphRequest, metadata_store_service_pb.GetLineageGraphResponse> {
    path: "/ml_metadata.MetadataStoreService/GetLineageGraph";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<metadata_store_service_pb.GetLineageGraphRequest>;
    requestDeserialize: grpc.deserialize<metadata_store_service_pb.GetLineageGraphRequest>;
    responseSerialize: grpc.serialize<metadata_store_service_pb.GetLineageGraphResponse>;
    responseDeserialize: grpc.deserialize<metadata_store_service_pb.GetLineageGraphResponse>;
}

export const MetadataStoreServiceService: IMetadataStoreServiceService;

export interface IMetadataStoreServiceServer {
    putArtifactType: grpc.handleUnaryCall<metadata_store_service_pb.PutArtifactTypeRequest, metadata_store_service_pb.PutArtifactTypeResponse>;
    putExecutionType: grpc.handleUnaryCall<metadata_store_service_pb.PutExecutionTypeRequest, metadata_store_service_pb.PutExecutionTypeResponse>;
    putContextType: grpc.handleUnaryCall<metadata_store_service_pb.PutContextTypeRequest, metadata_store_service_pb.PutContextTypeResponse>;
    putTypes: grpc.handleUnaryCall<metadata_store_service_pb.PutTypesRequest, metadata_store_service_pb.PutTypesResponse>;
    putArtifacts: grpc.handleUnaryCall<metadata_store_service_pb.PutArtifactsRequest, metadata_store_service_pb.PutArtifactsResponse>;
    putExecutions: grpc.handleUnaryCall<metadata_store_service_pb.PutExecutionsRequest, metadata_store_service_pb.PutExecutionsResponse>;
    putEvents: grpc.handleUnaryCall<metadata_store_service_pb.PutEventsRequest, metadata_store_service_pb.PutEventsResponse>;
    putExecution: grpc.handleUnaryCall<metadata_store_service_pb.PutExecutionRequest, metadata_store_service_pb.PutExecutionResponse>;
    putContexts: grpc.handleUnaryCall<metadata_store_service_pb.PutContextsRequest, metadata_store_service_pb.PutContextsResponse>;
    putAttributionsAndAssociations: grpc.handleUnaryCall<metadata_store_service_pb.PutAttributionsAndAssociationsRequest, metadata_store_service_pb.PutAttributionsAndAssociationsResponse>;
    putParentContexts: grpc.handleUnaryCall<metadata_store_service_pb.PutParentContextsRequest, metadata_store_service_pb.PutParentContextsResponse>;
    getArtifactType: grpc.handleUnaryCall<metadata_store_service_pb.GetArtifactTypeRequest, metadata_store_service_pb.GetArtifactTypeResponse>;
    getArtifactTypesByID: grpc.handleUnaryCall<metadata_store_service_pb.GetArtifactTypesByIDRequest, metadata_store_service_pb.GetArtifactTypesByIDResponse>;
    getArtifactTypes: grpc.handleUnaryCall<metadata_store_service_pb.GetArtifactTypesRequest, metadata_store_service_pb.GetArtifactTypesResponse>;
    getExecutionType: grpc.handleUnaryCall<metadata_store_service_pb.GetExecutionTypeRequest, metadata_store_service_pb.GetExecutionTypeResponse>;
    getExecutionTypesByID: grpc.handleUnaryCall<metadata_store_service_pb.GetExecutionTypesByIDRequest, metadata_store_service_pb.GetExecutionTypesByIDResponse>;
    getExecutionTypes: grpc.handleUnaryCall<metadata_store_service_pb.GetExecutionTypesRequest, metadata_store_service_pb.GetExecutionTypesResponse>;
    getContextType: grpc.handleUnaryCall<metadata_store_service_pb.GetContextTypeRequest, metadata_store_service_pb.GetContextTypeResponse>;
    getContextTypesByID: grpc.handleUnaryCall<metadata_store_service_pb.GetContextTypesByIDRequest, metadata_store_service_pb.GetContextTypesByIDResponse>;
    getContextTypes: grpc.handleUnaryCall<metadata_store_service_pb.GetContextTypesRequest, metadata_store_service_pb.GetContextTypesResponse>;
    getArtifacts: grpc.handleUnaryCall<metadata_store_service_pb.GetArtifactsRequest, metadata_store_service_pb.GetArtifactsResponse>;
    getExecutions: grpc.handleUnaryCall<metadata_store_service_pb.GetExecutionsRequest, metadata_store_service_pb.GetExecutionsResponse>;
    getContexts: grpc.handleUnaryCall<metadata_store_service_pb.GetContextsRequest, metadata_store_service_pb.GetContextsResponse>;
    getArtifactsByID: grpc.handleUnaryCall<metadata_store_service_pb.GetArtifactsByIDRequest, metadata_store_service_pb.GetArtifactsByIDResponse>;
    getExecutionsByID: grpc.handleUnaryCall<metadata_store_service_pb.GetExecutionsByIDRequest, metadata_store_service_pb.GetExecutionsByIDResponse>;
    getContextsByID: grpc.handleUnaryCall<metadata_store_service_pb.GetContextsByIDRequest, metadata_store_service_pb.GetContextsByIDResponse>;
    getArtifactsByType: grpc.handleUnaryCall<metadata_store_service_pb.GetArtifactsByTypeRequest, metadata_store_service_pb.GetArtifactsByTypeResponse>;
    getExecutionsByType: grpc.handleUnaryCall<metadata_store_service_pb.GetExecutionsByTypeRequest, metadata_store_service_pb.GetExecutionsByTypeResponse>;
    getContextsByType: grpc.handleUnaryCall<metadata_store_service_pb.GetContextsByTypeRequest, metadata_store_service_pb.GetContextsByTypeResponse>;
    getArtifactByTypeAndName: grpc.handleUnaryCall<metadata_store_service_pb.GetArtifactByTypeAndNameRequest, metadata_store_service_pb.GetArtifactByTypeAndNameResponse>;
    getExecutionByTypeAndName: grpc.handleUnaryCall<metadata_store_service_pb.GetExecutionByTypeAndNameRequest, metadata_store_service_pb.GetExecutionByTypeAndNameResponse>;
    getContextByTypeAndName: grpc.handleUnaryCall<metadata_store_service_pb.GetContextByTypeAndNameRequest, metadata_store_service_pb.GetContextByTypeAndNameResponse>;
    getArtifactsByURI: grpc.handleUnaryCall<metadata_store_service_pb.GetArtifactsByURIRequest, metadata_store_service_pb.GetArtifactsByURIResponse>;
    getEventsByExecutionIDs: grpc.handleUnaryCall<metadata_store_service_pb.GetEventsByExecutionIDsRequest, metadata_store_service_pb.GetEventsByExecutionIDsResponse>;
    getEventsByArtifactIDs: grpc.handleUnaryCall<metadata_store_service_pb.GetEventsByArtifactIDsRequest, metadata_store_service_pb.GetEventsByArtifactIDsResponse>;
    getContextsByArtifact: grpc.handleUnaryCall<metadata_store_service_pb.GetContextsByArtifactRequest, metadata_store_service_pb.GetContextsByArtifactResponse>;
    getContextsByExecution: grpc.handleUnaryCall<metadata_store_service_pb.GetContextsByExecutionRequest, metadata_store_service_pb.GetContextsByExecutionResponse>;
    getParentContextsByContext: grpc.handleUnaryCall<metadata_store_service_pb.GetParentContextsByContextRequest, metadata_store_service_pb.GetParentContextsByContextResponse>;
    getChildrenContextsByContext: grpc.handleUnaryCall<metadata_store_service_pb.GetChildrenContextsByContextRequest, metadata_store_service_pb.GetChildrenContextsByContextResponse>;
    getArtifactsByContext: grpc.handleUnaryCall<metadata_store_service_pb.GetArtifactsByContextRequest, metadata_store_service_pb.GetArtifactsByContextResponse>;
    getExecutionsByContext: grpc.handleUnaryCall<metadata_store_service_pb.GetExecutionsByContextRequest, metadata_store_service_pb.GetExecutionsByContextResponse>;
    getLineageGraph: grpc.handleUnaryCall<metadata_store_service_pb.GetLineageGraphRequest, metadata_store_service_pb.GetLineageGraphResponse>;
}

export interface IMetadataStoreServiceClient {
    putArtifactType(request: metadata_store_service_pb.PutArtifactTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    putArtifactType(request: metadata_store_service_pb.PutArtifactTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    putArtifactType(request: metadata_store_service_pb.PutArtifactTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    putExecutionType(request: metadata_store_service_pb.PutExecutionTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    putExecutionType(request: metadata_store_service_pb.PutExecutionTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    putExecutionType(request: metadata_store_service_pb.PutExecutionTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    putContextType(request: metadata_store_service_pb.PutContextTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextTypeResponse) => void): grpc.ClientUnaryCall;
    putContextType(request: metadata_store_service_pb.PutContextTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextTypeResponse) => void): grpc.ClientUnaryCall;
    putContextType(request: metadata_store_service_pb.PutContextTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextTypeResponse) => void): grpc.ClientUnaryCall;
    putTypes(request: metadata_store_service_pb.PutTypesRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutTypesResponse) => void): grpc.ClientUnaryCall;
    putTypes(request: metadata_store_service_pb.PutTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutTypesResponse) => void): grpc.ClientUnaryCall;
    putTypes(request: metadata_store_service_pb.PutTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutTypesResponse) => void): grpc.ClientUnaryCall;
    putArtifacts(request: metadata_store_service_pb.PutArtifactsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactsResponse) => void): grpc.ClientUnaryCall;
    putArtifacts(request: metadata_store_service_pb.PutArtifactsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactsResponse) => void): grpc.ClientUnaryCall;
    putArtifacts(request: metadata_store_service_pb.PutArtifactsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactsResponse) => void): grpc.ClientUnaryCall;
    putExecutions(request: metadata_store_service_pb.PutExecutionsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionsResponse) => void): grpc.ClientUnaryCall;
    putExecutions(request: metadata_store_service_pb.PutExecutionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionsResponse) => void): grpc.ClientUnaryCall;
    putExecutions(request: metadata_store_service_pb.PutExecutionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionsResponse) => void): grpc.ClientUnaryCall;
    putEvents(request: metadata_store_service_pb.PutEventsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutEventsResponse) => void): grpc.ClientUnaryCall;
    putEvents(request: metadata_store_service_pb.PutEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutEventsResponse) => void): grpc.ClientUnaryCall;
    putEvents(request: metadata_store_service_pb.PutEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutEventsResponse) => void): grpc.ClientUnaryCall;
    putExecution(request: metadata_store_service_pb.PutExecutionRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionResponse) => void): grpc.ClientUnaryCall;
    putExecution(request: metadata_store_service_pb.PutExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionResponse) => void): grpc.ClientUnaryCall;
    putExecution(request: metadata_store_service_pb.PutExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionResponse) => void): grpc.ClientUnaryCall;
    putContexts(request: metadata_store_service_pb.PutContextsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextsResponse) => void): grpc.ClientUnaryCall;
    putContexts(request: metadata_store_service_pb.PutContextsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextsResponse) => void): grpc.ClientUnaryCall;
    putContexts(request: metadata_store_service_pb.PutContextsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextsResponse) => void): grpc.ClientUnaryCall;
    putAttributionsAndAssociations(request: metadata_store_service_pb.PutAttributionsAndAssociationsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutAttributionsAndAssociationsResponse) => void): grpc.ClientUnaryCall;
    putAttributionsAndAssociations(request: metadata_store_service_pb.PutAttributionsAndAssociationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutAttributionsAndAssociationsResponse) => void): grpc.ClientUnaryCall;
    putAttributionsAndAssociations(request: metadata_store_service_pb.PutAttributionsAndAssociationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutAttributionsAndAssociationsResponse) => void): grpc.ClientUnaryCall;
    putParentContexts(request: metadata_store_service_pb.PutParentContextsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutParentContextsResponse) => void): grpc.ClientUnaryCall;
    putParentContexts(request: metadata_store_service_pb.PutParentContextsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutParentContextsResponse) => void): grpc.ClientUnaryCall;
    putParentContexts(request: metadata_store_service_pb.PutParentContextsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutParentContextsResponse) => void): grpc.ClientUnaryCall;
    getArtifactType(request: metadata_store_service_pb.GetArtifactTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    getArtifactType(request: metadata_store_service_pb.GetArtifactTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    getArtifactType(request: metadata_store_service_pb.GetArtifactTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    getArtifactTypesByID(request: metadata_store_service_pb.GetArtifactTypesByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesByIDResponse) => void): grpc.ClientUnaryCall;
    getArtifactTypesByID(request: metadata_store_service_pb.GetArtifactTypesByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesByIDResponse) => void): grpc.ClientUnaryCall;
    getArtifactTypesByID(request: metadata_store_service_pb.GetArtifactTypesByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesByIDResponse) => void): grpc.ClientUnaryCall;
    getArtifactTypes(request: metadata_store_service_pb.GetArtifactTypesRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesResponse) => void): grpc.ClientUnaryCall;
    getArtifactTypes(request: metadata_store_service_pb.GetArtifactTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesResponse) => void): grpc.ClientUnaryCall;
    getArtifactTypes(request: metadata_store_service_pb.GetArtifactTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesResponse) => void): grpc.ClientUnaryCall;
    getExecutionType(request: metadata_store_service_pb.GetExecutionTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    getExecutionType(request: metadata_store_service_pb.GetExecutionTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    getExecutionType(request: metadata_store_service_pb.GetExecutionTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    getExecutionTypesByID(request: metadata_store_service_pb.GetExecutionTypesByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesByIDResponse) => void): grpc.ClientUnaryCall;
    getExecutionTypesByID(request: metadata_store_service_pb.GetExecutionTypesByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesByIDResponse) => void): grpc.ClientUnaryCall;
    getExecutionTypesByID(request: metadata_store_service_pb.GetExecutionTypesByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesByIDResponse) => void): grpc.ClientUnaryCall;
    getExecutionTypes(request: metadata_store_service_pb.GetExecutionTypesRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesResponse) => void): grpc.ClientUnaryCall;
    getExecutionTypes(request: metadata_store_service_pb.GetExecutionTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesResponse) => void): grpc.ClientUnaryCall;
    getExecutionTypes(request: metadata_store_service_pb.GetExecutionTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesResponse) => void): grpc.ClientUnaryCall;
    getContextType(request: metadata_store_service_pb.GetContextTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypeResponse) => void): grpc.ClientUnaryCall;
    getContextType(request: metadata_store_service_pb.GetContextTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypeResponse) => void): grpc.ClientUnaryCall;
    getContextType(request: metadata_store_service_pb.GetContextTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypeResponse) => void): grpc.ClientUnaryCall;
    getContextTypesByID(request: metadata_store_service_pb.GetContextTypesByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesByIDResponse) => void): grpc.ClientUnaryCall;
    getContextTypesByID(request: metadata_store_service_pb.GetContextTypesByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesByIDResponse) => void): grpc.ClientUnaryCall;
    getContextTypesByID(request: metadata_store_service_pb.GetContextTypesByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesByIDResponse) => void): grpc.ClientUnaryCall;
    getContextTypes(request: metadata_store_service_pb.GetContextTypesRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesResponse) => void): grpc.ClientUnaryCall;
    getContextTypes(request: metadata_store_service_pb.GetContextTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesResponse) => void): grpc.ClientUnaryCall;
    getContextTypes(request: metadata_store_service_pb.GetContextTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesResponse) => void): grpc.ClientUnaryCall;
    getArtifacts(request: metadata_store_service_pb.GetArtifactsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsResponse) => void): grpc.ClientUnaryCall;
    getArtifacts(request: metadata_store_service_pb.GetArtifactsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsResponse) => void): grpc.ClientUnaryCall;
    getArtifacts(request: metadata_store_service_pb.GetArtifactsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsResponse) => void): grpc.ClientUnaryCall;
    getExecutions(request: metadata_store_service_pb.GetExecutionsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsResponse) => void): grpc.ClientUnaryCall;
    getExecutions(request: metadata_store_service_pb.GetExecutionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsResponse) => void): grpc.ClientUnaryCall;
    getExecutions(request: metadata_store_service_pb.GetExecutionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsResponse) => void): grpc.ClientUnaryCall;
    getContexts(request: metadata_store_service_pb.GetContextsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsResponse) => void): grpc.ClientUnaryCall;
    getContexts(request: metadata_store_service_pb.GetContextsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsResponse) => void): grpc.ClientUnaryCall;
    getContexts(request: metadata_store_service_pb.GetContextsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByID(request: metadata_store_service_pb.GetArtifactsByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByIDResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByID(request: metadata_store_service_pb.GetArtifactsByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByIDResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByID(request: metadata_store_service_pb.GetArtifactsByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByIDResponse) => void): grpc.ClientUnaryCall;
    getExecutionsByID(request: metadata_store_service_pb.GetExecutionsByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByIDResponse) => void): grpc.ClientUnaryCall;
    getExecutionsByID(request: metadata_store_service_pb.GetExecutionsByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByIDResponse) => void): grpc.ClientUnaryCall;
    getExecutionsByID(request: metadata_store_service_pb.GetExecutionsByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByIDResponse) => void): grpc.ClientUnaryCall;
    getContextsByID(request: metadata_store_service_pb.GetContextsByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByIDResponse) => void): grpc.ClientUnaryCall;
    getContextsByID(request: metadata_store_service_pb.GetContextsByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByIDResponse) => void): grpc.ClientUnaryCall;
    getContextsByID(request: metadata_store_service_pb.GetContextsByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByIDResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByType(request: metadata_store_service_pb.GetArtifactsByTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByTypeResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByType(request: metadata_store_service_pb.GetArtifactsByTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByTypeResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByType(request: metadata_store_service_pb.GetArtifactsByTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByTypeResponse) => void): grpc.ClientUnaryCall;
    getExecutionsByType(request: metadata_store_service_pb.GetExecutionsByTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByTypeResponse) => void): grpc.ClientUnaryCall;
    getExecutionsByType(request: metadata_store_service_pb.GetExecutionsByTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByTypeResponse) => void): grpc.ClientUnaryCall;
    getExecutionsByType(request: metadata_store_service_pb.GetExecutionsByTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByTypeResponse) => void): grpc.ClientUnaryCall;
    getContextsByType(request: metadata_store_service_pb.GetContextsByTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByTypeResponse) => void): grpc.ClientUnaryCall;
    getContextsByType(request: metadata_store_service_pb.GetContextsByTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByTypeResponse) => void): grpc.ClientUnaryCall;
    getContextsByType(request: metadata_store_service_pb.GetContextsByTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByTypeResponse) => void): grpc.ClientUnaryCall;
    getArtifactByTypeAndName(request: metadata_store_service_pb.GetArtifactByTypeAndNameRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    getArtifactByTypeAndName(request: metadata_store_service_pb.GetArtifactByTypeAndNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    getArtifactByTypeAndName(request: metadata_store_service_pb.GetArtifactByTypeAndNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    getExecutionByTypeAndName(request: metadata_store_service_pb.GetExecutionByTypeAndNameRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    getExecutionByTypeAndName(request: metadata_store_service_pb.GetExecutionByTypeAndNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    getExecutionByTypeAndName(request: metadata_store_service_pb.GetExecutionByTypeAndNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    getContextByTypeAndName(request: metadata_store_service_pb.GetContextByTypeAndNameRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    getContextByTypeAndName(request: metadata_store_service_pb.GetContextByTypeAndNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    getContextByTypeAndName(request: metadata_store_service_pb.GetContextByTypeAndNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByURI(request: metadata_store_service_pb.GetArtifactsByURIRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByURIResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByURI(request: metadata_store_service_pb.GetArtifactsByURIRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByURIResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByURI(request: metadata_store_service_pb.GetArtifactsByURIRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByURIResponse) => void): grpc.ClientUnaryCall;
    getEventsByExecutionIDs(request: metadata_store_service_pb.GetEventsByExecutionIDsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByExecutionIDsResponse) => void): grpc.ClientUnaryCall;
    getEventsByExecutionIDs(request: metadata_store_service_pb.GetEventsByExecutionIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByExecutionIDsResponse) => void): grpc.ClientUnaryCall;
    getEventsByExecutionIDs(request: metadata_store_service_pb.GetEventsByExecutionIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByExecutionIDsResponse) => void): grpc.ClientUnaryCall;
    getEventsByArtifactIDs(request: metadata_store_service_pb.GetEventsByArtifactIDsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByArtifactIDsResponse) => void): grpc.ClientUnaryCall;
    getEventsByArtifactIDs(request: metadata_store_service_pb.GetEventsByArtifactIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByArtifactIDsResponse) => void): grpc.ClientUnaryCall;
    getEventsByArtifactIDs(request: metadata_store_service_pb.GetEventsByArtifactIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByArtifactIDsResponse) => void): grpc.ClientUnaryCall;
    getContextsByArtifact(request: metadata_store_service_pb.GetContextsByArtifactRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByArtifactResponse) => void): grpc.ClientUnaryCall;
    getContextsByArtifact(request: metadata_store_service_pb.GetContextsByArtifactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByArtifactResponse) => void): grpc.ClientUnaryCall;
    getContextsByArtifact(request: metadata_store_service_pb.GetContextsByArtifactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByArtifactResponse) => void): grpc.ClientUnaryCall;
    getContextsByExecution(request: metadata_store_service_pb.GetContextsByExecutionRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByExecutionResponse) => void): grpc.ClientUnaryCall;
    getContextsByExecution(request: metadata_store_service_pb.GetContextsByExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByExecutionResponse) => void): grpc.ClientUnaryCall;
    getContextsByExecution(request: metadata_store_service_pb.GetContextsByExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByExecutionResponse) => void): grpc.ClientUnaryCall;
    getParentContextsByContext(request: metadata_store_service_pb.GetParentContextsByContextRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetParentContextsByContextResponse) => void): grpc.ClientUnaryCall;
    getParentContextsByContext(request: metadata_store_service_pb.GetParentContextsByContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetParentContextsByContextResponse) => void): grpc.ClientUnaryCall;
    getParentContextsByContext(request: metadata_store_service_pb.GetParentContextsByContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetParentContextsByContextResponse) => void): grpc.ClientUnaryCall;
    getChildrenContextsByContext(request: metadata_store_service_pb.GetChildrenContextsByContextRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetChildrenContextsByContextResponse) => void): grpc.ClientUnaryCall;
    getChildrenContextsByContext(request: metadata_store_service_pb.GetChildrenContextsByContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetChildrenContextsByContextResponse) => void): grpc.ClientUnaryCall;
    getChildrenContextsByContext(request: metadata_store_service_pb.GetChildrenContextsByContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetChildrenContextsByContextResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByContext(request: metadata_store_service_pb.GetArtifactsByContextRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByContextResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByContext(request: metadata_store_service_pb.GetArtifactsByContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByContextResponse) => void): grpc.ClientUnaryCall;
    getArtifactsByContext(request: metadata_store_service_pb.GetArtifactsByContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByContextResponse) => void): grpc.ClientUnaryCall;
    getExecutionsByContext(request: metadata_store_service_pb.GetExecutionsByContextRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByContextResponse) => void): grpc.ClientUnaryCall;
    getExecutionsByContext(request: metadata_store_service_pb.GetExecutionsByContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByContextResponse) => void): grpc.ClientUnaryCall;
    getExecutionsByContext(request: metadata_store_service_pb.GetExecutionsByContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByContextResponse) => void): grpc.ClientUnaryCall;
    getLineageGraph(request: metadata_store_service_pb.GetLineageGraphRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetLineageGraphResponse) => void): grpc.ClientUnaryCall;
    getLineageGraph(request: metadata_store_service_pb.GetLineageGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetLineageGraphResponse) => void): grpc.ClientUnaryCall;
    getLineageGraph(request: metadata_store_service_pb.GetLineageGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetLineageGraphResponse) => void): grpc.ClientUnaryCall;
}

export class MetadataStoreServiceClient extends grpc.Client implements IMetadataStoreServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public putArtifactType(request: metadata_store_service_pb.PutArtifactTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    public putArtifactType(request: metadata_store_service_pb.PutArtifactTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    public putArtifactType(request: metadata_store_service_pb.PutArtifactTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    public putExecutionType(request: metadata_store_service_pb.PutExecutionTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    public putExecutionType(request: metadata_store_service_pb.PutExecutionTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    public putExecutionType(request: metadata_store_service_pb.PutExecutionTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    public putContextType(request: metadata_store_service_pb.PutContextTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextTypeResponse) => void): grpc.ClientUnaryCall;
    public putContextType(request: metadata_store_service_pb.PutContextTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextTypeResponse) => void): grpc.ClientUnaryCall;
    public putContextType(request: metadata_store_service_pb.PutContextTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextTypeResponse) => void): grpc.ClientUnaryCall;
    public putTypes(request: metadata_store_service_pb.PutTypesRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutTypesResponse) => void): grpc.ClientUnaryCall;
    public putTypes(request: metadata_store_service_pb.PutTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutTypesResponse) => void): grpc.ClientUnaryCall;
    public putTypes(request: metadata_store_service_pb.PutTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutTypesResponse) => void): grpc.ClientUnaryCall;
    public putArtifacts(request: metadata_store_service_pb.PutArtifactsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactsResponse) => void): grpc.ClientUnaryCall;
    public putArtifacts(request: metadata_store_service_pb.PutArtifactsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactsResponse) => void): grpc.ClientUnaryCall;
    public putArtifacts(request: metadata_store_service_pb.PutArtifactsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutArtifactsResponse) => void): grpc.ClientUnaryCall;
    public putExecutions(request: metadata_store_service_pb.PutExecutionsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionsResponse) => void): grpc.ClientUnaryCall;
    public putExecutions(request: metadata_store_service_pb.PutExecutionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionsResponse) => void): grpc.ClientUnaryCall;
    public putExecutions(request: metadata_store_service_pb.PutExecutionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionsResponse) => void): grpc.ClientUnaryCall;
    public putEvents(request: metadata_store_service_pb.PutEventsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutEventsResponse) => void): grpc.ClientUnaryCall;
    public putEvents(request: metadata_store_service_pb.PutEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutEventsResponse) => void): grpc.ClientUnaryCall;
    public putEvents(request: metadata_store_service_pb.PutEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutEventsResponse) => void): grpc.ClientUnaryCall;
    public putExecution(request: metadata_store_service_pb.PutExecutionRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionResponse) => void): grpc.ClientUnaryCall;
    public putExecution(request: metadata_store_service_pb.PutExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionResponse) => void): grpc.ClientUnaryCall;
    public putExecution(request: metadata_store_service_pb.PutExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutExecutionResponse) => void): grpc.ClientUnaryCall;
    public putContexts(request: metadata_store_service_pb.PutContextsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextsResponse) => void): grpc.ClientUnaryCall;
    public putContexts(request: metadata_store_service_pb.PutContextsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextsResponse) => void): grpc.ClientUnaryCall;
    public putContexts(request: metadata_store_service_pb.PutContextsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutContextsResponse) => void): grpc.ClientUnaryCall;
    public putAttributionsAndAssociations(request: metadata_store_service_pb.PutAttributionsAndAssociationsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutAttributionsAndAssociationsResponse) => void): grpc.ClientUnaryCall;
    public putAttributionsAndAssociations(request: metadata_store_service_pb.PutAttributionsAndAssociationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutAttributionsAndAssociationsResponse) => void): grpc.ClientUnaryCall;
    public putAttributionsAndAssociations(request: metadata_store_service_pb.PutAttributionsAndAssociationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutAttributionsAndAssociationsResponse) => void): grpc.ClientUnaryCall;
    public putParentContexts(request: metadata_store_service_pb.PutParentContextsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutParentContextsResponse) => void): grpc.ClientUnaryCall;
    public putParentContexts(request: metadata_store_service_pb.PutParentContextsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutParentContextsResponse) => void): grpc.ClientUnaryCall;
    public putParentContexts(request: metadata_store_service_pb.PutParentContextsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.PutParentContextsResponse) => void): grpc.ClientUnaryCall;
    public getArtifactType(request: metadata_store_service_pb.GetArtifactTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    public getArtifactType(request: metadata_store_service_pb.GetArtifactTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    public getArtifactType(request: metadata_store_service_pb.GetArtifactTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypeResponse) => void): grpc.ClientUnaryCall;
    public getArtifactTypesByID(request: metadata_store_service_pb.GetArtifactTypesByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesByIDResponse) => void): grpc.ClientUnaryCall;
    public getArtifactTypesByID(request: metadata_store_service_pb.GetArtifactTypesByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesByIDResponse) => void): grpc.ClientUnaryCall;
    public getArtifactTypesByID(request: metadata_store_service_pb.GetArtifactTypesByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesByIDResponse) => void): grpc.ClientUnaryCall;
    public getArtifactTypes(request: metadata_store_service_pb.GetArtifactTypesRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesResponse) => void): grpc.ClientUnaryCall;
    public getArtifactTypes(request: metadata_store_service_pb.GetArtifactTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesResponse) => void): grpc.ClientUnaryCall;
    public getArtifactTypes(request: metadata_store_service_pb.GetArtifactTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactTypesResponse) => void): grpc.ClientUnaryCall;
    public getExecutionType(request: metadata_store_service_pb.GetExecutionTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    public getExecutionType(request: metadata_store_service_pb.GetExecutionTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    public getExecutionType(request: metadata_store_service_pb.GetExecutionTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypeResponse) => void): grpc.ClientUnaryCall;
    public getExecutionTypesByID(request: metadata_store_service_pb.GetExecutionTypesByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesByIDResponse) => void): grpc.ClientUnaryCall;
    public getExecutionTypesByID(request: metadata_store_service_pb.GetExecutionTypesByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesByIDResponse) => void): grpc.ClientUnaryCall;
    public getExecutionTypesByID(request: metadata_store_service_pb.GetExecutionTypesByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesByIDResponse) => void): grpc.ClientUnaryCall;
    public getExecutionTypes(request: metadata_store_service_pb.GetExecutionTypesRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesResponse) => void): grpc.ClientUnaryCall;
    public getExecutionTypes(request: metadata_store_service_pb.GetExecutionTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesResponse) => void): grpc.ClientUnaryCall;
    public getExecutionTypes(request: metadata_store_service_pb.GetExecutionTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionTypesResponse) => void): grpc.ClientUnaryCall;
    public getContextType(request: metadata_store_service_pb.GetContextTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypeResponse) => void): grpc.ClientUnaryCall;
    public getContextType(request: metadata_store_service_pb.GetContextTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypeResponse) => void): grpc.ClientUnaryCall;
    public getContextType(request: metadata_store_service_pb.GetContextTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypeResponse) => void): grpc.ClientUnaryCall;
    public getContextTypesByID(request: metadata_store_service_pb.GetContextTypesByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesByIDResponse) => void): grpc.ClientUnaryCall;
    public getContextTypesByID(request: metadata_store_service_pb.GetContextTypesByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesByIDResponse) => void): grpc.ClientUnaryCall;
    public getContextTypesByID(request: metadata_store_service_pb.GetContextTypesByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesByIDResponse) => void): grpc.ClientUnaryCall;
    public getContextTypes(request: metadata_store_service_pb.GetContextTypesRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesResponse) => void): grpc.ClientUnaryCall;
    public getContextTypes(request: metadata_store_service_pb.GetContextTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesResponse) => void): grpc.ClientUnaryCall;
    public getContextTypes(request: metadata_store_service_pb.GetContextTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextTypesResponse) => void): grpc.ClientUnaryCall;
    public getArtifacts(request: metadata_store_service_pb.GetArtifactsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsResponse) => void): grpc.ClientUnaryCall;
    public getArtifacts(request: metadata_store_service_pb.GetArtifactsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsResponse) => void): grpc.ClientUnaryCall;
    public getArtifacts(request: metadata_store_service_pb.GetArtifactsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsResponse) => void): grpc.ClientUnaryCall;
    public getExecutions(request: metadata_store_service_pb.GetExecutionsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsResponse) => void): grpc.ClientUnaryCall;
    public getExecutions(request: metadata_store_service_pb.GetExecutionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsResponse) => void): grpc.ClientUnaryCall;
    public getExecutions(request: metadata_store_service_pb.GetExecutionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsResponse) => void): grpc.ClientUnaryCall;
    public getContexts(request: metadata_store_service_pb.GetContextsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsResponse) => void): grpc.ClientUnaryCall;
    public getContexts(request: metadata_store_service_pb.GetContextsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsResponse) => void): grpc.ClientUnaryCall;
    public getContexts(request: metadata_store_service_pb.GetContextsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByID(request: metadata_store_service_pb.GetArtifactsByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByIDResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByID(request: metadata_store_service_pb.GetArtifactsByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByIDResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByID(request: metadata_store_service_pb.GetArtifactsByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByIDResponse) => void): grpc.ClientUnaryCall;
    public getExecutionsByID(request: metadata_store_service_pb.GetExecutionsByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByIDResponse) => void): grpc.ClientUnaryCall;
    public getExecutionsByID(request: metadata_store_service_pb.GetExecutionsByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByIDResponse) => void): grpc.ClientUnaryCall;
    public getExecutionsByID(request: metadata_store_service_pb.GetExecutionsByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByIDResponse) => void): grpc.ClientUnaryCall;
    public getContextsByID(request: metadata_store_service_pb.GetContextsByIDRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByIDResponse) => void): grpc.ClientUnaryCall;
    public getContextsByID(request: metadata_store_service_pb.GetContextsByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByIDResponse) => void): grpc.ClientUnaryCall;
    public getContextsByID(request: metadata_store_service_pb.GetContextsByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByIDResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByType(request: metadata_store_service_pb.GetArtifactsByTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByTypeResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByType(request: metadata_store_service_pb.GetArtifactsByTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByTypeResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByType(request: metadata_store_service_pb.GetArtifactsByTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByTypeResponse) => void): grpc.ClientUnaryCall;
    public getExecutionsByType(request: metadata_store_service_pb.GetExecutionsByTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByTypeResponse) => void): grpc.ClientUnaryCall;
    public getExecutionsByType(request: metadata_store_service_pb.GetExecutionsByTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByTypeResponse) => void): grpc.ClientUnaryCall;
    public getExecutionsByType(request: metadata_store_service_pb.GetExecutionsByTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByTypeResponse) => void): grpc.ClientUnaryCall;
    public getContextsByType(request: metadata_store_service_pb.GetContextsByTypeRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByTypeResponse) => void): grpc.ClientUnaryCall;
    public getContextsByType(request: metadata_store_service_pb.GetContextsByTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByTypeResponse) => void): grpc.ClientUnaryCall;
    public getContextsByType(request: metadata_store_service_pb.GetContextsByTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByTypeResponse) => void): grpc.ClientUnaryCall;
    public getArtifactByTypeAndName(request: metadata_store_service_pb.GetArtifactByTypeAndNameRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    public getArtifactByTypeAndName(request: metadata_store_service_pb.GetArtifactByTypeAndNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    public getArtifactByTypeAndName(request: metadata_store_service_pb.GetArtifactByTypeAndNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    public getExecutionByTypeAndName(request: metadata_store_service_pb.GetExecutionByTypeAndNameRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    public getExecutionByTypeAndName(request: metadata_store_service_pb.GetExecutionByTypeAndNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    public getExecutionByTypeAndName(request: metadata_store_service_pb.GetExecutionByTypeAndNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    public getContextByTypeAndName(request: metadata_store_service_pb.GetContextByTypeAndNameRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    public getContextByTypeAndName(request: metadata_store_service_pb.GetContextByTypeAndNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    public getContextByTypeAndName(request: metadata_store_service_pb.GetContextByTypeAndNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextByTypeAndNameResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByURI(request: metadata_store_service_pb.GetArtifactsByURIRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByURIResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByURI(request: metadata_store_service_pb.GetArtifactsByURIRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByURIResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByURI(request: metadata_store_service_pb.GetArtifactsByURIRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByURIResponse) => void): grpc.ClientUnaryCall;
    public getEventsByExecutionIDs(request: metadata_store_service_pb.GetEventsByExecutionIDsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByExecutionIDsResponse) => void): grpc.ClientUnaryCall;
    public getEventsByExecutionIDs(request: metadata_store_service_pb.GetEventsByExecutionIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByExecutionIDsResponse) => void): grpc.ClientUnaryCall;
    public getEventsByExecutionIDs(request: metadata_store_service_pb.GetEventsByExecutionIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByExecutionIDsResponse) => void): grpc.ClientUnaryCall;
    public getEventsByArtifactIDs(request: metadata_store_service_pb.GetEventsByArtifactIDsRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByArtifactIDsResponse) => void): grpc.ClientUnaryCall;
    public getEventsByArtifactIDs(request: metadata_store_service_pb.GetEventsByArtifactIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByArtifactIDsResponse) => void): grpc.ClientUnaryCall;
    public getEventsByArtifactIDs(request: metadata_store_service_pb.GetEventsByArtifactIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetEventsByArtifactIDsResponse) => void): grpc.ClientUnaryCall;
    public getContextsByArtifact(request: metadata_store_service_pb.GetContextsByArtifactRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByArtifactResponse) => void): grpc.ClientUnaryCall;
    public getContextsByArtifact(request: metadata_store_service_pb.GetContextsByArtifactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByArtifactResponse) => void): grpc.ClientUnaryCall;
    public getContextsByArtifact(request: metadata_store_service_pb.GetContextsByArtifactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByArtifactResponse) => void): grpc.ClientUnaryCall;
    public getContextsByExecution(request: metadata_store_service_pb.GetContextsByExecutionRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByExecutionResponse) => void): grpc.ClientUnaryCall;
    public getContextsByExecution(request: metadata_store_service_pb.GetContextsByExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByExecutionResponse) => void): grpc.ClientUnaryCall;
    public getContextsByExecution(request: metadata_store_service_pb.GetContextsByExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetContextsByExecutionResponse) => void): grpc.ClientUnaryCall;
    public getParentContextsByContext(request: metadata_store_service_pb.GetParentContextsByContextRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetParentContextsByContextResponse) => void): grpc.ClientUnaryCall;
    public getParentContextsByContext(request: metadata_store_service_pb.GetParentContextsByContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetParentContextsByContextResponse) => void): grpc.ClientUnaryCall;
    public getParentContextsByContext(request: metadata_store_service_pb.GetParentContextsByContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetParentContextsByContextResponse) => void): grpc.ClientUnaryCall;
    public getChildrenContextsByContext(request: metadata_store_service_pb.GetChildrenContextsByContextRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetChildrenContextsByContextResponse) => void): grpc.ClientUnaryCall;
    public getChildrenContextsByContext(request: metadata_store_service_pb.GetChildrenContextsByContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetChildrenContextsByContextResponse) => void): grpc.ClientUnaryCall;
    public getChildrenContextsByContext(request: metadata_store_service_pb.GetChildrenContextsByContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetChildrenContextsByContextResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByContext(request: metadata_store_service_pb.GetArtifactsByContextRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByContextResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByContext(request: metadata_store_service_pb.GetArtifactsByContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByContextResponse) => void): grpc.ClientUnaryCall;
    public getArtifactsByContext(request: metadata_store_service_pb.GetArtifactsByContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetArtifactsByContextResponse) => void): grpc.ClientUnaryCall;
    public getExecutionsByContext(request: metadata_store_service_pb.GetExecutionsByContextRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByContextResponse) => void): grpc.ClientUnaryCall;
    public getExecutionsByContext(request: metadata_store_service_pb.GetExecutionsByContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByContextResponse) => void): grpc.ClientUnaryCall;
    public getExecutionsByContext(request: metadata_store_service_pb.GetExecutionsByContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetExecutionsByContextResponse) => void): grpc.ClientUnaryCall;
    public getLineageGraph(request: metadata_store_service_pb.GetLineageGraphRequest, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetLineageGraphResponse) => void): grpc.ClientUnaryCall;
    public getLineageGraph(request: metadata_store_service_pb.GetLineageGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetLineageGraphResponse) => void): grpc.ClientUnaryCall;
    public getLineageGraph(request: metadata_store_service_pb.GetLineageGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: metadata_store_service_pb.GetLineageGraphResponse) => void): grpc.ClientUnaryCall;
}
