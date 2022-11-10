/**
* Automation Studio Metadata Client and Interfaces
* 
* @beta
*/
import * as grpc from "@grpc/grpc-js";

import {MetadataStoreServiceClient} from './protos/metadata_store_service_grpc_pb'
import { GetArtifactsRequest, GetArtifactTypeRequest } from "./protos/metadata_store_service_pb";

const client = new MetadataStoreServiceClient("localhost:9001", grpc.credentials.createInsecure())

function artifactlist(){
    const request = new GetArtifactsRequest()

    let call = client.getArtifacts(request, (error, response) => {
        if(!error){
            console.log('Server response', response.getArtifactsList())
        }else{
            console.log(error)
        }
    })

    return call
}


