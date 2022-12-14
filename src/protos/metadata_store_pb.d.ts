// package: ml_metadata
// file: metadata_store.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class SystemTypeExtension extends jspb.Message { 

    hasTypeName(): boolean;
    clearTypeName(): void;
    getTypeName(): string | undefined;
    setTypeName(value: string): SystemTypeExtension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemTypeExtension.AsObject;
    static toObject(includeInstance: boolean, msg: SystemTypeExtension): SystemTypeExtension.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemTypeExtension, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemTypeExtension;
    static deserializeBinaryFromReader(message: SystemTypeExtension, reader: jspb.BinaryReader): SystemTypeExtension;
}

export namespace SystemTypeExtension {
    export type AsObject = {
        typeName?: string,
    }
}

export class Value extends jspb.Message { 

    hasIntValue(): boolean;
    clearIntValue(): void;
    getIntValue(): number | undefined;
    setIntValue(value: number): Value;

    hasDoubleValue(): boolean;
    clearDoubleValue(): void;
    getDoubleValue(): number | undefined;
    setDoubleValue(value: number): Value;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): string | undefined;
    setStringValue(value: string): Value;

    hasStructValue(): boolean;
    clearStructValue(): void;
    getStructValue(): google_protobuf_struct_pb.Struct | undefined;
    setStructValue(value?: google_protobuf_struct_pb.Struct): Value;

    getValueCase(): Value.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
    export type AsObject = {
        intValue?: number,
        doubleValue?: number,
        stringValue?: string,
        structValue?: google_protobuf_struct_pb.Struct.AsObject,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        INT_VALUE = 1,
        DOUBLE_VALUE = 2,
        STRING_VALUE = 3,
        STRUCT_VALUE = 4,
    }

}

export class Artifact extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): number | undefined;
    setId(value: number): Artifact;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): Artifact;

    hasTypeId(): boolean;
    clearTypeId(): void;
    getTypeId(): number | undefined;
    setTypeId(value: number): Artifact;

    hasType(): boolean;
    clearType(): void;
    getType(): string | undefined;
    setType(value: string): Artifact;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): string | undefined;
    setUri(value: string): Artifact;

    getPropertiesMap(): jspb.Map<string, Value>;
    clearPropertiesMap(): void;

    getCustomPropertiesMap(): jspb.Map<string, Value>;
    clearCustomPropertiesMap(): void;

    hasState(): boolean;
    clearState(): void;
    getState(): Artifact.State | undefined;
    setState(value: Artifact.State): Artifact;

    hasCreateTimeSinceEpoch(): boolean;
    clearCreateTimeSinceEpoch(): void;
    getCreateTimeSinceEpoch(): number | undefined;
    setCreateTimeSinceEpoch(value: number): Artifact;

    hasLastUpdateTimeSinceEpoch(): boolean;
    clearLastUpdateTimeSinceEpoch(): void;
    getLastUpdateTimeSinceEpoch(): number | undefined;
    setLastUpdateTimeSinceEpoch(value: number): Artifact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Artifact.AsObject;
    static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Artifact;
    static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
    export type AsObject = {
        id?: number,
        name?: string,
        typeId?: number,
        type?: string,
        uri?: string,

        propertiesMap: Array<[string, Value.AsObject]>,

        customPropertiesMap: Array<[string, Value.AsObject]>,
        state?: Artifact.State,
        createTimeSinceEpoch?: number,
        lastUpdateTimeSinceEpoch?: number,
    }

    export enum State {
    UNKNOWN = 0,
    PENDING = 1,
    LIVE = 2,
    MARKED_FOR_DELETION = 3,
    DELETED = 4,
    }

}

export class ArtifactType extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): number | undefined;
    setId(value: number): ArtifactType;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): ArtifactType;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): string | undefined;
    setVersion(value: string): ArtifactType;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): ArtifactType;

    getPropertiesMap(): jspb.Map<string, PropertyType>;
    clearPropertiesMap(): void;

    hasBaseType(): boolean;
    clearBaseType(): void;
    getBaseType(): ArtifactType.SystemDefinedBaseType | undefined;
    setBaseType(value: ArtifactType.SystemDefinedBaseType): ArtifactType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArtifactType.AsObject;
    static toObject(includeInstance: boolean, msg: ArtifactType): ArtifactType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArtifactType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArtifactType;
    static deserializeBinaryFromReader(message: ArtifactType, reader: jspb.BinaryReader): ArtifactType;
}

export namespace ArtifactType {
    export type AsObject = {
        id?: number,
        name?: string,
        version?: string,
        description?: string,

        propertiesMap: Array<[string, PropertyType]>,
        baseType?: ArtifactType.SystemDefinedBaseType,
    }

    export enum SystemDefinedBaseType {
    UNSET = 0,
    DATASET = 1,
    MODEL = 2,
    METRICS = 3,
    STATISTICS = 4,
    }

}

export class Event extends jspb.Message { 

    hasArtifactId(): boolean;
    clearArtifactId(): void;
    getArtifactId(): number | undefined;
    setArtifactId(value: number): Event;

    hasExecutionId(): boolean;
    clearExecutionId(): void;
    getExecutionId(): number | undefined;
    setExecutionId(value: number): Event;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): Event.Path | undefined;
    setPath(value?: Event.Path): Event;

    hasType(): boolean;
    clearType(): void;
    getType(): Event.Type | undefined;
    setType(value: Event.Type): Event;

    hasMillisecondsSinceEpoch(): boolean;
    clearMillisecondsSinceEpoch(): void;
    getMillisecondsSinceEpoch(): number | undefined;
    setMillisecondsSinceEpoch(value: number): Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
    export type AsObject = {
        artifactId?: number,
        executionId?: number,
        path?: Event.Path.AsObject,
        type?: Event.Type,
        millisecondsSinceEpoch?: number,
    }


    export class Path extends jspb.Message { 
        clearStepsList(): void;
        getStepsList(): Array<Event.Path.Step>;
        setStepsList(value: Array<Event.Path.Step>): Path;
        addSteps(value?: Event.Path.Step, index?: number): Event.Path.Step;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Path.AsObject;
        static toObject(includeInstance: boolean, msg: Path): Path.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Path, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Path;
        static deserializeBinaryFromReader(message: Path, reader: jspb.BinaryReader): Path;
    }

    export namespace Path {
        export type AsObject = {
            stepsList: Array<Event.Path.Step.AsObject>,
        }


        export class Step extends jspb.Message { 

            hasIndex(): boolean;
            clearIndex(): void;
            getIndex(): number | undefined;
            setIndex(value: number): Step;

            hasKey(): boolean;
            clearKey(): void;
            getKey(): string | undefined;
            setKey(value: string): Step;

            getValueCase(): Step.ValueCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Step.AsObject;
            static toObject(includeInstance: boolean, msg: Step): Step.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Step, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Step;
            static deserializeBinaryFromReader(message: Step, reader: jspb.BinaryReader): Step;
        }

        export namespace Step {
            export type AsObject = {
                index?: number,
                key?: string,
            }

            export enum ValueCase {
                VALUE_NOT_SET = 0,
                INDEX = 1,
                KEY = 2,
            }

        }

    }


    export enum Type {
    UNKNOWN = 0,
    DECLARED_OUTPUT = 1,
    DECLARED_INPUT = 2,
    INPUT = 3,
    OUTPUT = 4,
    INTERNAL_INPUT = 5,
    INTERNAL_OUTPUT = 6,
    }

}

export class Execution extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): number | undefined;
    setId(value: number): Execution;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): Execution;

    hasTypeId(): boolean;
    clearTypeId(): void;
    getTypeId(): number | undefined;
    setTypeId(value: number): Execution;

    hasType(): boolean;
    clearType(): void;
    getType(): string | undefined;
    setType(value: string): Execution;

    hasLastKnownState(): boolean;
    clearLastKnownState(): void;
    getLastKnownState(): Execution.State | undefined;
    setLastKnownState(value: Execution.State): Execution;

    getPropertiesMap(): jspb.Map<string, Value>;
    clearPropertiesMap(): void;

    getCustomPropertiesMap(): jspb.Map<string, Value>;
    clearCustomPropertiesMap(): void;

    hasCreateTimeSinceEpoch(): boolean;
    clearCreateTimeSinceEpoch(): void;
    getCreateTimeSinceEpoch(): number | undefined;
    setCreateTimeSinceEpoch(value: number): Execution;

    hasLastUpdateTimeSinceEpoch(): boolean;
    clearLastUpdateTimeSinceEpoch(): void;
    getLastUpdateTimeSinceEpoch(): number | undefined;
    setLastUpdateTimeSinceEpoch(value: number): Execution;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Execution.AsObject;
    static toObject(includeInstance: boolean, msg: Execution): Execution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Execution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Execution;
    static deserializeBinaryFromReader(message: Execution, reader: jspb.BinaryReader): Execution;
}

export namespace Execution {
    export type AsObject = {
        id?: number,
        name?: string,
        typeId?: number,
        type?: string,
        lastKnownState?: Execution.State,

        propertiesMap: Array<[string, Value.AsObject]>,

        customPropertiesMap: Array<[string, Value.AsObject]>,
        createTimeSinceEpoch?: number,
        lastUpdateTimeSinceEpoch?: number,
    }

    export enum State {
    UNKNOWN = 0,
    NEW = 1,
    RUNNING = 2,
    COMPLETE = 3,
    FAILED = 4,
    CACHED = 5,
    CANCELED = 6,
    }

}

export class ExecutionType extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): number | undefined;
    setId(value: number): ExecutionType;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): ExecutionType;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): string | undefined;
    setVersion(value: string): ExecutionType;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): ExecutionType;

    getPropertiesMap(): jspb.Map<string, PropertyType>;
    clearPropertiesMap(): void;

    hasInputType(): boolean;
    clearInputType(): void;
    getInputType(): ArtifactStructType | undefined;
    setInputType(value?: ArtifactStructType): ExecutionType;

    hasOutputType(): boolean;
    clearOutputType(): void;
    getOutputType(): ArtifactStructType | undefined;
    setOutputType(value?: ArtifactStructType): ExecutionType;

    hasBaseType(): boolean;
    clearBaseType(): void;
    getBaseType(): ExecutionType.SystemDefinedBaseType | undefined;
    setBaseType(value: ExecutionType.SystemDefinedBaseType): ExecutionType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutionType.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutionType): ExecutionType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutionType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutionType;
    static deserializeBinaryFromReader(message: ExecutionType, reader: jspb.BinaryReader): ExecutionType;
}

export namespace ExecutionType {
    export type AsObject = {
        id?: number,
        name?: string,
        version?: string,
        description?: string,

        propertiesMap: Array<[string, PropertyType]>,
        inputType?: ArtifactStructType.AsObject,
        outputType?: ArtifactStructType.AsObject,
        baseType?: ExecutionType.SystemDefinedBaseType,
    }

    export enum SystemDefinedBaseType {
    UNSET = 0,
    TRAIN = 1,
    TRANSFORM = 2,
    PROCESS = 3,
    EVALUATE = 4,
    DEPLOY = 5,
    }

}

export class ContextType extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): number | undefined;
    setId(value: number): ContextType;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): ContextType;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): string | undefined;
    setVersion(value: string): ContextType;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): ContextType;

    getPropertiesMap(): jspb.Map<string, PropertyType>;
    clearPropertiesMap(): void;

    hasBaseType(): boolean;
    clearBaseType(): void;
    getBaseType(): ContextType.SystemDefinedBaseType | undefined;
    setBaseType(value: ContextType.SystemDefinedBaseType): ContextType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContextType.AsObject;
    static toObject(includeInstance: boolean, msg: ContextType): ContextType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContextType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContextType;
    static deserializeBinaryFromReader(message: ContextType, reader: jspb.BinaryReader): ContextType;
}

export namespace ContextType {
    export type AsObject = {
        id?: number,
        name?: string,
        version?: string,
        description?: string,

        propertiesMap: Array<[string, PropertyType]>,
        baseType?: ContextType.SystemDefinedBaseType,
    }

    export enum SystemDefinedBaseType {
    UNSET = 0,
    }

}

export class Context extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): number | undefined;
    setId(value: number): Context;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): Context;

    hasTypeId(): boolean;
    clearTypeId(): void;
    getTypeId(): number | undefined;
    setTypeId(value: number): Context;

    hasType(): boolean;
    clearType(): void;
    getType(): string | undefined;
    setType(value: string): Context;

    getPropertiesMap(): jspb.Map<string, Value>;
    clearPropertiesMap(): void;

    getCustomPropertiesMap(): jspb.Map<string, Value>;
    clearCustomPropertiesMap(): void;

    hasCreateTimeSinceEpoch(): boolean;
    clearCreateTimeSinceEpoch(): void;
    getCreateTimeSinceEpoch(): number | undefined;
    setCreateTimeSinceEpoch(value: number): Context;

    hasLastUpdateTimeSinceEpoch(): boolean;
    clearLastUpdateTimeSinceEpoch(): void;
    getLastUpdateTimeSinceEpoch(): number | undefined;
    setLastUpdateTimeSinceEpoch(value: number): Context;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Context.AsObject;
    static toObject(includeInstance: boolean, msg: Context): Context.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Context, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Context;
    static deserializeBinaryFromReader(message: Context, reader: jspb.BinaryReader): Context;
}

export namespace Context {
    export type AsObject = {
        id?: number,
        name?: string,
        typeId?: number,
        type?: string,

        propertiesMap: Array<[string, Value.AsObject]>,

        customPropertiesMap: Array<[string, Value.AsObject]>,
        createTimeSinceEpoch?: number,
        lastUpdateTimeSinceEpoch?: number,
    }
}

export class Attribution extends jspb.Message { 

    hasArtifactId(): boolean;
    clearArtifactId(): void;
    getArtifactId(): number | undefined;
    setArtifactId(value: number): Attribution;

    hasContextId(): boolean;
    clearContextId(): void;
    getContextId(): number | undefined;
    setContextId(value: number): Attribution;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attribution.AsObject;
    static toObject(includeInstance: boolean, msg: Attribution): Attribution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attribution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attribution;
    static deserializeBinaryFromReader(message: Attribution, reader: jspb.BinaryReader): Attribution;
}

export namespace Attribution {
    export type AsObject = {
        artifactId?: number,
        contextId?: number,
    }
}

export class Association extends jspb.Message { 

    hasExecutionId(): boolean;
    clearExecutionId(): void;
    getExecutionId(): number | undefined;
    setExecutionId(value: number): Association;

    hasContextId(): boolean;
    clearContextId(): void;
    getContextId(): number | undefined;
    setContextId(value: number): Association;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Association.AsObject;
    static toObject(includeInstance: boolean, msg: Association): Association.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Association, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Association;
    static deserializeBinaryFromReader(message: Association, reader: jspb.BinaryReader): Association;
}

export namespace Association {
    export type AsObject = {
        executionId?: number,
        contextId?: number,
    }
}

export class ParentContext extends jspb.Message { 

    hasChildId(): boolean;
    clearChildId(): void;
    getChildId(): number | undefined;
    setChildId(value: number): ParentContext;

    hasParentId(): boolean;
    clearParentId(): void;
    getParentId(): number | undefined;
    setParentId(value: number): ParentContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParentContext.AsObject;
    static toObject(includeInstance: boolean, msg: ParentContext): ParentContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParentContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParentContext;
    static deserializeBinaryFromReader(message: ParentContext, reader: jspb.BinaryReader): ParentContext;
}

export namespace ParentContext {
    export type AsObject = {
        childId?: number,
        parentId?: number,
    }
}

export class LineageGraph extends jspb.Message { 
    clearArtifactTypesList(): void;
    getArtifactTypesList(): Array<ArtifactType>;
    setArtifactTypesList(value: Array<ArtifactType>): LineageGraph;
    addArtifactTypes(value?: ArtifactType, index?: number): ArtifactType;
    clearExecutionTypesList(): void;
    getExecutionTypesList(): Array<ExecutionType>;
    setExecutionTypesList(value: Array<ExecutionType>): LineageGraph;
    addExecutionTypes(value?: ExecutionType, index?: number): ExecutionType;
    clearContextTypesList(): void;
    getContextTypesList(): Array<ContextType>;
    setContextTypesList(value: Array<ContextType>): LineageGraph;
    addContextTypes(value?: ContextType, index?: number): ContextType;
    clearArtifactsList(): void;
    getArtifactsList(): Array<Artifact>;
    setArtifactsList(value: Array<Artifact>): LineageGraph;
    addArtifacts(value?: Artifact, index?: number): Artifact;
    clearExecutionsList(): void;
    getExecutionsList(): Array<Execution>;
    setExecutionsList(value: Array<Execution>): LineageGraph;
    addExecutions(value?: Execution, index?: number): Execution;
    clearContextsList(): void;
    getContextsList(): Array<Context>;
    setContextsList(value: Array<Context>): LineageGraph;
    addContexts(value?: Context, index?: number): Context;
    clearEventsList(): void;
    getEventsList(): Array<Event>;
    setEventsList(value: Array<Event>): LineageGraph;
    addEvents(value?: Event, index?: number): Event;
    clearAttributionsList(): void;
    getAttributionsList(): Array<Attribution>;
    setAttributionsList(value: Array<Attribution>): LineageGraph;
    addAttributions(value?: Attribution, index?: number): Attribution;
    clearAssociationsList(): void;
    getAssociationsList(): Array<Association>;
    setAssociationsList(value: Array<Association>): LineageGraph;
    addAssociations(value?: Association, index?: number): Association;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LineageGraph.AsObject;
    static toObject(includeInstance: boolean, msg: LineageGraph): LineageGraph.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LineageGraph, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LineageGraph;
    static deserializeBinaryFromReader(message: LineageGraph, reader: jspb.BinaryReader): LineageGraph;
}

export namespace LineageGraph {
    export type AsObject = {
        artifactTypesList: Array<ArtifactType.AsObject>,
        executionTypesList: Array<ExecutionType.AsObject>,
        contextTypesList: Array<ContextType.AsObject>,
        artifactsList: Array<Artifact.AsObject>,
        executionsList: Array<Execution.AsObject>,
        contextsList: Array<Context.AsObject>,
        eventsList: Array<Event.AsObject>,
        attributionsList: Array<Attribution.AsObject>,
        associationsList: Array<Association.AsObject>,
    }
}

export class ArtifactStructType extends jspb.Message { 

    hasSimple(): boolean;
    clearSimple(): void;
    getSimple(): ArtifactType | undefined;
    setSimple(value?: ArtifactType): ArtifactStructType;

    hasUnionType(): boolean;
    clearUnionType(): void;
    getUnionType(): UnionArtifactStructType | undefined;
    setUnionType(value?: UnionArtifactStructType): ArtifactStructType;

    hasIntersection(): boolean;
    clearIntersection(): void;
    getIntersection(): IntersectionArtifactStructType | undefined;
    setIntersection(value?: IntersectionArtifactStructType): ArtifactStructType;

    hasList(): boolean;
    clearList(): void;
    getList(): ListArtifactStructType | undefined;
    setList(value?: ListArtifactStructType): ArtifactStructType;

    hasNone(): boolean;
    clearNone(): void;
    getNone(): NoneArtifactStructType | undefined;
    setNone(value?: NoneArtifactStructType): ArtifactStructType;

    hasAny(): boolean;
    clearAny(): void;
    getAny(): AnyArtifactStructType | undefined;
    setAny(value?: AnyArtifactStructType): ArtifactStructType;

    hasTuple(): boolean;
    clearTuple(): void;
    getTuple(): TupleArtifactStructType | undefined;
    setTuple(value?: TupleArtifactStructType): ArtifactStructType;

    hasDict(): boolean;
    clearDict(): void;
    getDict(): DictArtifactStructType | undefined;
    setDict(value?: DictArtifactStructType): ArtifactStructType;

    getKindCase(): ArtifactStructType.KindCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArtifactStructType.AsObject;
    static toObject(includeInstance: boolean, msg: ArtifactStructType): ArtifactStructType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArtifactStructType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArtifactStructType;
    static deserializeBinaryFromReader(message: ArtifactStructType, reader: jspb.BinaryReader): ArtifactStructType;
}

export namespace ArtifactStructType {
    export type AsObject = {
        simple?: ArtifactType.AsObject,
        unionType?: UnionArtifactStructType.AsObject,
        intersection?: IntersectionArtifactStructType.AsObject,
        list?: ListArtifactStructType.AsObject,
        none?: NoneArtifactStructType.AsObject,
        any?: AnyArtifactStructType.AsObject,
        tuple?: TupleArtifactStructType.AsObject,
        dict?: DictArtifactStructType.AsObject,
    }

    export enum KindCase {
        KIND_NOT_SET = 0,
        SIMPLE = 1,
        UNION_TYPE = 2,
        INTERSECTION = 3,
        LIST = 4,
        NONE = 5,
        ANY = 6,
        TUPLE = 7,
        DICT = 8,
    }

}

export class UnionArtifactStructType extends jspb.Message { 
    clearCandidatesList(): void;
    getCandidatesList(): Array<ArtifactStructType>;
    setCandidatesList(value: Array<ArtifactStructType>): UnionArtifactStructType;
    addCandidates(value?: ArtifactStructType, index?: number): ArtifactStructType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnionArtifactStructType.AsObject;
    static toObject(includeInstance: boolean, msg: UnionArtifactStructType): UnionArtifactStructType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnionArtifactStructType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnionArtifactStructType;
    static deserializeBinaryFromReader(message: UnionArtifactStructType, reader: jspb.BinaryReader): UnionArtifactStructType;
}

export namespace UnionArtifactStructType {
    export type AsObject = {
        candidatesList: Array<ArtifactStructType.AsObject>,
    }
}

export class IntersectionArtifactStructType extends jspb.Message { 
    clearConstraintsList(): void;
    getConstraintsList(): Array<ArtifactStructType>;
    setConstraintsList(value: Array<ArtifactStructType>): IntersectionArtifactStructType;
    addConstraints(value?: ArtifactStructType, index?: number): ArtifactStructType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntersectionArtifactStructType.AsObject;
    static toObject(includeInstance: boolean, msg: IntersectionArtifactStructType): IntersectionArtifactStructType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntersectionArtifactStructType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntersectionArtifactStructType;
    static deserializeBinaryFromReader(message: IntersectionArtifactStructType, reader: jspb.BinaryReader): IntersectionArtifactStructType;
}

export namespace IntersectionArtifactStructType {
    export type AsObject = {
        constraintsList: Array<ArtifactStructType.AsObject>,
    }
}

export class ListArtifactStructType extends jspb.Message { 

    hasElement(): boolean;
    clearElement(): void;
    getElement(): ArtifactStructType | undefined;
    setElement(value?: ArtifactStructType): ListArtifactStructType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListArtifactStructType.AsObject;
    static toObject(includeInstance: boolean, msg: ListArtifactStructType): ListArtifactStructType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListArtifactStructType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListArtifactStructType;
    static deserializeBinaryFromReader(message: ListArtifactStructType, reader: jspb.BinaryReader): ListArtifactStructType;
}

export namespace ListArtifactStructType {
    export type AsObject = {
        element?: ArtifactStructType.AsObject,
    }
}

export class NoneArtifactStructType extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoneArtifactStructType.AsObject;
    static toObject(includeInstance: boolean, msg: NoneArtifactStructType): NoneArtifactStructType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoneArtifactStructType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoneArtifactStructType;
    static deserializeBinaryFromReader(message: NoneArtifactStructType, reader: jspb.BinaryReader): NoneArtifactStructType;
}

export namespace NoneArtifactStructType {
    export type AsObject = {
    }
}

export class AnyArtifactStructType extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnyArtifactStructType.AsObject;
    static toObject(includeInstance: boolean, msg: AnyArtifactStructType): AnyArtifactStructType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnyArtifactStructType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnyArtifactStructType;
    static deserializeBinaryFromReader(message: AnyArtifactStructType, reader: jspb.BinaryReader): AnyArtifactStructType;
}

export namespace AnyArtifactStructType {
    export type AsObject = {
    }
}

export class TupleArtifactStructType extends jspb.Message { 
    clearElementsList(): void;
    getElementsList(): Array<ArtifactStructType>;
    setElementsList(value: Array<ArtifactStructType>): TupleArtifactStructType;
    addElements(value?: ArtifactStructType, index?: number): ArtifactStructType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TupleArtifactStructType.AsObject;
    static toObject(includeInstance: boolean, msg: TupleArtifactStructType): TupleArtifactStructType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TupleArtifactStructType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TupleArtifactStructType;
    static deserializeBinaryFromReader(message: TupleArtifactStructType, reader: jspb.BinaryReader): TupleArtifactStructType;
}

export namespace TupleArtifactStructType {
    export type AsObject = {
        elementsList: Array<ArtifactStructType.AsObject>,
    }
}

export class DictArtifactStructType extends jspb.Message { 

    getPropertiesMap(): jspb.Map<string, ArtifactStructType>;
    clearPropertiesMap(): void;

    hasNoneTypeNotRequired(): boolean;
    clearNoneTypeNotRequired(): void;
    getNoneTypeNotRequired(): boolean | undefined;
    setNoneTypeNotRequired(value: boolean): DictArtifactStructType;

    hasExtraPropertiesType(): boolean;
    clearExtraPropertiesType(): void;
    getExtraPropertiesType(): ArtifactStructType | undefined;
    setExtraPropertiesType(value?: ArtifactStructType): DictArtifactStructType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DictArtifactStructType.AsObject;
    static toObject(includeInstance: boolean, msg: DictArtifactStructType): DictArtifactStructType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DictArtifactStructType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DictArtifactStructType;
    static deserializeBinaryFromReader(message: DictArtifactStructType, reader: jspb.BinaryReader): DictArtifactStructType;
}

export namespace DictArtifactStructType {
    export type AsObject = {

        propertiesMap: Array<[string, ArtifactStructType.AsObject]>,
        noneTypeNotRequired?: boolean,
        extraPropertiesType?: ArtifactStructType.AsObject,
    }
}

export class FakeDatabaseConfig extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FakeDatabaseConfig.AsObject;
    static toObject(includeInstance: boolean, msg: FakeDatabaseConfig): FakeDatabaseConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FakeDatabaseConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FakeDatabaseConfig;
    static deserializeBinaryFromReader(message: FakeDatabaseConfig, reader: jspb.BinaryReader): FakeDatabaseConfig;
}

export namespace FakeDatabaseConfig {
    export type AsObject = {
    }
}

export class MySQLDatabaseConfig extends jspb.Message { 

    hasHost(): boolean;
    clearHost(): void;
    getHost(): string | undefined;
    setHost(value: string): MySQLDatabaseConfig;

    hasPort(): boolean;
    clearPort(): void;
    getPort(): number | undefined;
    setPort(value: number): MySQLDatabaseConfig;

    hasDatabase(): boolean;
    clearDatabase(): void;
    getDatabase(): string | undefined;
    setDatabase(value: string): MySQLDatabaseConfig;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): string | undefined;
    setUser(value: string): MySQLDatabaseConfig;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): string | undefined;
    setPassword(value: string): MySQLDatabaseConfig;

    hasSocket(): boolean;
    clearSocket(): void;
    getSocket(): string | undefined;
    setSocket(value: string): MySQLDatabaseConfig;

    hasSslOptions(): boolean;
    clearSslOptions(): void;
    getSslOptions(): MySQLDatabaseConfig.SSLOptions | undefined;
    setSslOptions(value?: MySQLDatabaseConfig.SSLOptions): MySQLDatabaseConfig;

    hasSkipDbCreation(): boolean;
    clearSkipDbCreation(): void;
    getSkipDbCreation(): boolean | undefined;
    setSkipDbCreation(value: boolean): MySQLDatabaseConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MySQLDatabaseConfig.AsObject;
    static toObject(includeInstance: boolean, msg: MySQLDatabaseConfig): MySQLDatabaseConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MySQLDatabaseConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MySQLDatabaseConfig;
    static deserializeBinaryFromReader(message: MySQLDatabaseConfig, reader: jspb.BinaryReader): MySQLDatabaseConfig;
}

export namespace MySQLDatabaseConfig {
    export type AsObject = {
        host?: string,
        port?: number,
        database?: string,
        user?: string,
        password?: string,
        socket?: string,
        sslOptions?: MySQLDatabaseConfig.SSLOptions.AsObject,
        skipDbCreation?: boolean,
    }


    export class SSLOptions extends jspb.Message { 

        hasKey(): boolean;
        clearKey(): void;
        getKey(): string | undefined;
        setKey(value: string): SSLOptions;

        hasCert(): boolean;
        clearCert(): void;
        getCert(): string | undefined;
        setCert(value: string): SSLOptions;

        hasCa(): boolean;
        clearCa(): void;
        getCa(): string | undefined;
        setCa(value: string): SSLOptions;

        hasCapath(): boolean;
        clearCapath(): void;
        getCapath(): string | undefined;
        setCapath(value: string): SSLOptions;

        hasCipher(): boolean;
        clearCipher(): void;
        getCipher(): string | undefined;
        setCipher(value: string): SSLOptions;

        hasVerifyServerCert(): boolean;
        clearVerifyServerCert(): void;
        getVerifyServerCert(): boolean | undefined;
        setVerifyServerCert(value: boolean): SSLOptions;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SSLOptions.AsObject;
        static toObject(includeInstance: boolean, msg: SSLOptions): SSLOptions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SSLOptions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SSLOptions;
        static deserializeBinaryFromReader(message: SSLOptions, reader: jspb.BinaryReader): SSLOptions;
    }

    export namespace SSLOptions {
        export type AsObject = {
            key?: string,
            cert?: string,
            ca?: string,
            capath?: string,
            cipher?: string,
            verifyServerCert?: boolean,
        }
    }

}

export class SqliteMetadataSourceConfig extends jspb.Message { 

    hasFilenameUri(): boolean;
    clearFilenameUri(): void;
    getFilenameUri(): string | undefined;
    setFilenameUri(value: string): SqliteMetadataSourceConfig;

    hasConnectionMode(): boolean;
    clearConnectionMode(): void;
    getConnectionMode(): SqliteMetadataSourceConfig.ConnectionMode | undefined;
    setConnectionMode(value: SqliteMetadataSourceConfig.ConnectionMode): SqliteMetadataSourceConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SqliteMetadataSourceConfig.AsObject;
    static toObject(includeInstance: boolean, msg: SqliteMetadataSourceConfig): SqliteMetadataSourceConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SqliteMetadataSourceConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SqliteMetadataSourceConfig;
    static deserializeBinaryFromReader(message: SqliteMetadataSourceConfig, reader: jspb.BinaryReader): SqliteMetadataSourceConfig;
}

export namespace SqliteMetadataSourceConfig {
    export type AsObject = {
        filenameUri?: string,
        connectionMode?: SqliteMetadataSourceConfig.ConnectionMode,
    }

    export enum ConnectionMode {
    UNKNOWN = 0,
    READONLY = 1,
    READWRITE = 2,
    READWRITE_OPENCREATE = 3,
    }

}

export class MigrationOptions extends jspb.Message { 

    hasEnableUpgradeMigration(): boolean;
    clearEnableUpgradeMigration(): void;
    getEnableUpgradeMigration(): boolean | undefined;
    setEnableUpgradeMigration(value: boolean): MigrationOptions;

    hasDowngradeToSchemaVersion(): boolean;
    clearDowngradeToSchemaVersion(): void;
    getDowngradeToSchemaVersion(): number | undefined;
    setDowngradeToSchemaVersion(value: number): MigrationOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MigrationOptions.AsObject;
    static toObject(includeInstance: boolean, msg: MigrationOptions): MigrationOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MigrationOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MigrationOptions;
    static deserializeBinaryFromReader(message: MigrationOptions, reader: jspb.BinaryReader): MigrationOptions;
}

export namespace MigrationOptions {
    export type AsObject = {
        enableUpgradeMigration?: boolean,
        downgradeToSchemaVersion?: number,
    }
}

export class RetryOptions extends jspb.Message { 

    hasMaxNumRetries(): boolean;
    clearMaxNumRetries(): void;
    getMaxNumRetries(): number | undefined;
    setMaxNumRetries(value: number): RetryOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetryOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RetryOptions): RetryOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetryOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetryOptions;
    static deserializeBinaryFromReader(message: RetryOptions, reader: jspb.BinaryReader): RetryOptions;
}

export namespace RetryOptions {
    export type AsObject = {
        maxNumRetries?: number,
    }
}

export class ConnectionConfig extends jspb.Message { 

    hasFakeDatabase(): boolean;
    clearFakeDatabase(): void;
    getFakeDatabase(): FakeDatabaseConfig | undefined;
    setFakeDatabase(value?: FakeDatabaseConfig): ConnectionConfig;

    hasMysql(): boolean;
    clearMysql(): void;
    getMysql(): MySQLDatabaseConfig | undefined;
    setMysql(value?: MySQLDatabaseConfig): ConnectionConfig;

    hasSqlite(): boolean;
    clearSqlite(): void;
    getSqlite(): SqliteMetadataSourceConfig | undefined;
    setSqlite(value?: SqliteMetadataSourceConfig): ConnectionConfig;

    hasRetryOptions(): boolean;
    clearRetryOptions(): void;
    getRetryOptions(): RetryOptions | undefined;
    setRetryOptions(value?: RetryOptions): ConnectionConfig;

    getConfigCase(): ConnectionConfig.ConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionConfig): ConnectionConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionConfig;
    static deserializeBinaryFromReader(message: ConnectionConfig, reader: jspb.BinaryReader): ConnectionConfig;
}

export namespace ConnectionConfig {
    export type AsObject = {
        fakeDatabase?: FakeDatabaseConfig.AsObject,
        mysql?: MySQLDatabaseConfig.AsObject,
        sqlite?: SqliteMetadataSourceConfig.AsObject,
        retryOptions?: RetryOptions.AsObject,
    }

    export enum ConfigCase {
        CONFIG_NOT_SET = 0,
        FAKE_DATABASE = 1,
        MYSQL = 2,
        SQLITE = 3,
    }

}

export class GrpcChannelArguments extends jspb.Message { 

    hasMaxReceiveMessageLength(): boolean;
    clearMaxReceiveMessageLength(): void;
    getMaxReceiveMessageLength(): number | undefined;
    setMaxReceiveMessageLength(value: number): GrpcChannelArguments;

    hasHttp2MaxPingStrikes(): boolean;
    clearHttp2MaxPingStrikes(): void;
    getHttp2MaxPingStrikes(): number | undefined;
    setHttp2MaxPingStrikes(value: number): GrpcChannelArguments;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrpcChannelArguments.AsObject;
    static toObject(includeInstance: boolean, msg: GrpcChannelArguments): GrpcChannelArguments.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrpcChannelArguments, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrpcChannelArguments;
    static deserializeBinaryFromReader(message: GrpcChannelArguments, reader: jspb.BinaryReader): GrpcChannelArguments;
}

export namespace GrpcChannelArguments {
    export type AsObject = {
        maxReceiveMessageLength?: number,
        http2MaxPingStrikes?: number,
    }
}

export class MetadataStoreClientConfig extends jspb.Message { 

    hasHost(): boolean;
    clearHost(): void;
    getHost(): string | undefined;
    setHost(value: string): MetadataStoreClientConfig;

    hasPort(): boolean;
    clearPort(): void;
    getPort(): number | undefined;
    setPort(value: number): MetadataStoreClientConfig;

    hasSslConfig(): boolean;
    clearSslConfig(): void;
    getSslConfig(): MetadataStoreClientConfig.SSLConfig | undefined;
    setSslConfig(value?: MetadataStoreClientConfig.SSLConfig): MetadataStoreClientConfig;

    hasChannelArguments(): boolean;
    clearChannelArguments(): void;
    getChannelArguments(): GrpcChannelArguments | undefined;
    setChannelArguments(value?: GrpcChannelArguments): MetadataStoreClientConfig;

    hasClientTimeoutSec(): boolean;
    clearClientTimeoutSec(): void;
    getClientTimeoutSec(): number | undefined;
    setClientTimeoutSec(value: number): MetadataStoreClientConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetadataStoreClientConfig.AsObject;
    static toObject(includeInstance: boolean, msg: MetadataStoreClientConfig): MetadataStoreClientConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetadataStoreClientConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetadataStoreClientConfig;
    static deserializeBinaryFromReader(message: MetadataStoreClientConfig, reader: jspb.BinaryReader): MetadataStoreClientConfig;
}

export namespace MetadataStoreClientConfig {
    export type AsObject = {
        host?: string,
        port?: number,
        sslConfig?: MetadataStoreClientConfig.SSLConfig.AsObject,
        channelArguments?: GrpcChannelArguments.AsObject,
        clientTimeoutSec?: number,
    }


    export class SSLConfig extends jspb.Message { 

        hasClientKey(): boolean;
        clearClientKey(): void;
        getClientKey(): string | undefined;
        setClientKey(value: string): SSLConfig;

        hasServerCert(): boolean;
        clearServerCert(): void;
        getServerCert(): string | undefined;
        setServerCert(value: string): SSLConfig;

        hasCustomCa(): boolean;
        clearCustomCa(): void;
        getCustomCa(): string | undefined;
        setCustomCa(value: string): SSLConfig;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SSLConfig.AsObject;
        static toObject(includeInstance: boolean, msg: SSLConfig): SSLConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SSLConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SSLConfig;
        static deserializeBinaryFromReader(message: SSLConfig, reader: jspb.BinaryReader): SSLConfig;
    }

    export namespace SSLConfig {
        export type AsObject = {
            clientKey?: string,
            serverCert?: string,
            customCa?: string,
        }
    }

}

export class MetadataStoreServerConfig extends jspb.Message { 

    hasConnectionConfig(): boolean;
    clearConnectionConfig(): void;
    getConnectionConfig(): ConnectionConfig | undefined;
    setConnectionConfig(value?: ConnectionConfig): MetadataStoreServerConfig;

    hasMigrationOptions(): boolean;
    clearMigrationOptions(): void;
    getMigrationOptions(): MigrationOptions | undefined;
    setMigrationOptions(value?: MigrationOptions): MetadataStoreServerConfig;

    hasSslConfig(): boolean;
    clearSslConfig(): void;
    getSslConfig(): MetadataStoreServerConfig.SSLConfig | undefined;
    setSslConfig(value?: MetadataStoreServerConfig.SSLConfig): MetadataStoreServerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetadataStoreServerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: MetadataStoreServerConfig): MetadataStoreServerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetadataStoreServerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetadataStoreServerConfig;
    static deserializeBinaryFromReader(message: MetadataStoreServerConfig, reader: jspb.BinaryReader): MetadataStoreServerConfig;
}

export namespace MetadataStoreServerConfig {
    export type AsObject = {
        connectionConfig?: ConnectionConfig.AsObject,
        migrationOptions?: MigrationOptions.AsObject,
        sslConfig?: MetadataStoreServerConfig.SSLConfig.AsObject,
    }


    export class SSLConfig extends jspb.Message { 

        hasServerKey(): boolean;
        clearServerKey(): void;
        getServerKey(): string | undefined;
        setServerKey(value: string): SSLConfig;

        hasServerCert(): boolean;
        clearServerCert(): void;
        getServerCert(): string | undefined;
        setServerCert(value: string): SSLConfig;

        hasCustomCa(): boolean;
        clearCustomCa(): void;
        getCustomCa(): string | undefined;
        setCustomCa(value: string): SSLConfig;

        hasClientVerify(): boolean;
        clearClientVerify(): void;
        getClientVerify(): boolean | undefined;
        setClientVerify(value: boolean): SSLConfig;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SSLConfig.AsObject;
        static toObject(includeInstance: boolean, msg: SSLConfig): SSLConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SSLConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SSLConfig;
        static deserializeBinaryFromReader(message: SSLConfig, reader: jspb.BinaryReader): SSLConfig;
    }

    export namespace SSLConfig {
        export type AsObject = {
            serverKey?: string,
            serverCert?: string,
            customCa?: string,
            clientVerify?: boolean,
        }
    }

}

export class ListOperationOptions extends jspb.Message { 

    hasMaxResultSize(): boolean;
    clearMaxResultSize(): void;
    getMaxResultSize(): number | undefined;
    setMaxResultSize(value: number): ListOperationOptions;

    hasOrderByField(): boolean;
    clearOrderByField(): void;
    getOrderByField(): ListOperationOptions.OrderByField | undefined;
    setOrderByField(value?: ListOperationOptions.OrderByField): ListOperationOptions;

    hasNextPageToken(): boolean;
    clearNextPageToken(): void;
    getNextPageToken(): string | undefined;
    setNextPageToken(value: string): ListOperationOptions;

    hasFilterQuery(): boolean;
    clearFilterQuery(): void;
    getFilterQuery(): string | undefined;
    setFilterQuery(value: string): ListOperationOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOperationOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ListOperationOptions): ListOperationOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOperationOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOperationOptions;
    static deserializeBinaryFromReader(message: ListOperationOptions, reader: jspb.BinaryReader): ListOperationOptions;
}

export namespace ListOperationOptions {
    export type AsObject = {
        maxResultSize?: number,
        orderByField?: ListOperationOptions.OrderByField.AsObject,
        nextPageToken?: string,
        filterQuery?: string,
    }


    export class OrderByField extends jspb.Message { 

        hasField(): boolean;
        clearField(): void;
        getField(): ListOperationOptions.OrderByField.Field | undefined;
        setField(value: ListOperationOptions.OrderByField.Field): OrderByField;

        hasIsAsc(): boolean;
        clearIsAsc(): void;
        getIsAsc(): boolean | undefined;
        setIsAsc(value: boolean): OrderByField;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OrderByField.AsObject;
        static toObject(includeInstance: boolean, msg: OrderByField): OrderByField.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OrderByField, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OrderByField;
        static deserializeBinaryFromReader(message: OrderByField, reader: jspb.BinaryReader): OrderByField;
    }

    export namespace OrderByField {
        export type AsObject = {
            field?: ListOperationOptions.OrderByField.Field,
            isAsc?: boolean,
        }

        export enum Field {
    FIELD_UNSPECIFIED = 0,
    CREATE_TIME = 1,
    LAST_UPDATE_TIME = 2,
    ID = 3,
        }

    }

}

export class ListOperationNextPageToken extends jspb.Message { 

    hasIdOffset(): boolean;
    clearIdOffset(): void;
    getIdOffset(): number | undefined;
    setIdOffset(value: number): ListOperationNextPageToken;

    hasFieldOffset(): boolean;
    clearFieldOffset(): void;
    getFieldOffset(): number | undefined;
    setFieldOffset(value: number): ListOperationNextPageToken;

    hasSetOptions(): boolean;
    clearSetOptions(): void;
    getSetOptions(): ListOperationOptions | undefined;
    setSetOptions(value?: ListOperationOptions): ListOperationNextPageToken;
    clearListedIdsList(): void;
    getListedIdsList(): Array<number>;
    setListedIdsList(value: Array<number>): ListOperationNextPageToken;
    addListedIds(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOperationNextPageToken.AsObject;
    static toObject(includeInstance: boolean, msg: ListOperationNextPageToken): ListOperationNextPageToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOperationNextPageToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOperationNextPageToken;
    static deserializeBinaryFromReader(message: ListOperationNextPageToken, reader: jspb.BinaryReader): ListOperationNextPageToken;
}

export namespace ListOperationNextPageToken {
    export type AsObject = {
        idOffset?: number,
        fieldOffset?: number,
        setOptions?: ListOperationOptions.AsObject,
        listedIdsList: Array<number>,
    }
}

export class TransactionOptions extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionOptions): TransactionOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionOptions;
    static deserializeBinaryFromReader(message: TransactionOptions, reader: jspb.BinaryReader): TransactionOptions;
}

export namespace TransactionOptions {
    export type AsObject = {
    }
}

export class LineageGraphQueryOptions extends jspb.Message { 

    hasArtifactsOptions(): boolean;
    clearArtifactsOptions(): void;
    getArtifactsOptions(): ListOperationOptions | undefined;
    setArtifactsOptions(value?: ListOperationOptions): LineageGraphQueryOptions;

    hasStopConditions(): boolean;
    clearStopConditions(): void;
    getStopConditions(): LineageGraphQueryOptions.BoundaryConstraint | undefined;
    setStopConditions(value?: LineageGraphQueryOptions.BoundaryConstraint): LineageGraphQueryOptions;

    getQueryNodesCase(): LineageGraphQueryOptions.QueryNodesCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LineageGraphQueryOptions.AsObject;
    static toObject(includeInstance: boolean, msg: LineageGraphQueryOptions): LineageGraphQueryOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LineageGraphQueryOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LineageGraphQueryOptions;
    static deserializeBinaryFromReader(message: LineageGraphQueryOptions, reader: jspb.BinaryReader): LineageGraphQueryOptions;
}

export namespace LineageGraphQueryOptions {
    export type AsObject = {
        artifactsOptions?: ListOperationOptions.AsObject,
        stopConditions?: LineageGraphQueryOptions.BoundaryConstraint.AsObject,
    }


    export class BoundaryConstraint extends jspb.Message { 

        hasMaxNumHops(): boolean;
        clearMaxNumHops(): void;
        getMaxNumHops(): number | undefined;
        setMaxNumHops(value: number): BoundaryConstraint;

        hasBoundaryArtifacts(): boolean;
        clearBoundaryArtifacts(): void;
        getBoundaryArtifacts(): string | undefined;
        setBoundaryArtifacts(value: string): BoundaryConstraint;

        hasBoundaryExecutions(): boolean;
        clearBoundaryExecutions(): void;
        getBoundaryExecutions(): string | undefined;
        setBoundaryExecutions(value: string): BoundaryConstraint;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BoundaryConstraint.AsObject;
        static toObject(includeInstance: boolean, msg: BoundaryConstraint): BoundaryConstraint.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BoundaryConstraint, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BoundaryConstraint;
        static deserializeBinaryFromReader(message: BoundaryConstraint, reader: jspb.BinaryReader): BoundaryConstraint;
    }

    export namespace BoundaryConstraint {
        export type AsObject = {
            maxNumHops?: number,
            boundaryArtifacts?: string,
            boundaryExecutions?: string,
        }
    }


    export enum QueryNodesCase {
        QUERY_NODES_NOT_SET = 0,
        ARTIFACTS_OPTIONS = 1,
    }

}

export const systemTypeExtension: jspb.ExtensionFieldInfo<SystemTypeExtension>;

export enum PropertyType {
    UNKNOWN = 0,
    INT = 1,
    DOUBLE = 2,
    STRING = 3,
    STRUCT = 4,
}
