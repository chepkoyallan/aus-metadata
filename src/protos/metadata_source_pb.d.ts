// package: ml_metadata
// file: metadata_source.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RecordSet extends jspb.Message { 
    clearColumnNamesList(): void;
    getColumnNamesList(): Array<string>;
    setColumnNamesList(value: Array<string>): RecordSet;
    addColumnNames(value: string, index?: number): string;
    clearRecordsList(): void;
    getRecordsList(): Array<RecordSet.Record>;
    setRecordsList(value: Array<RecordSet.Record>): RecordSet;
    addRecords(value?: RecordSet.Record, index?: number): RecordSet.Record;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSet.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSet): RecordSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSet;
    static deserializeBinaryFromReader(message: RecordSet, reader: jspb.BinaryReader): RecordSet;
}

export namespace RecordSet {
    export type AsObject = {
        columnNamesList: Array<string>,
        recordsList: Array<RecordSet.Record.AsObject>,
    }


    export class Record extends jspb.Message { 
        clearValuesList(): void;
        getValuesList(): Array<string>;
        setValuesList(value: Array<string>): Record;
        addValues(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Record.AsObject;
        static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Record;
        static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
    }

    export namespace Record {
        export type AsObject = {
            valuesList: Array<string>,
        }
    }

}

export class MetadataSourceQueryConfig extends jspb.Message { 
    getMetadataSourceType(): MetadataSourceType;
    setMetadataSourceType(value: MetadataSourceType): MetadataSourceQueryConfig;

    hasDropTypeTable(): boolean;
    clearDropTypeTable(): void;
    getDropTypeTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropTypeTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateTypeTable(): boolean;
    clearCreateTypeTable(): void;
    getCreateTypeTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateTypeTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckTypeTable(): boolean;
    clearCheckTypeTable(): void;
    getCheckTypeTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckTypeTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertArtifactType(): boolean;
    clearInsertArtifactType(): void;
    getInsertArtifactType(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertArtifactType(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertExecutionType(): boolean;
    clearInsertExecutionType(): void;
    getInsertExecutionType(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertExecutionType(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertContextType(): boolean;
    clearInsertContextType(): void;
    getInsertContextType(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertContextType(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectTypeById(): boolean;
    clearSelectTypeById(): void;
    getSelectTypeById(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectTypeById(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectTypeByName(): boolean;
    clearSelectTypeByName(): void;
    getSelectTypeByName(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectTypeByName(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectTypeByNameAndVersion(): boolean;
    clearSelectTypeByNameAndVersion(): void;
    getSelectTypeByNameAndVersion(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectTypeByNameAndVersion(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectAllTypes(): boolean;
    clearSelectAllTypes(): void;
    getSelectAllTypes(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectAllTypes(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropParentTypeTable(): boolean;
    clearDropParentTypeTable(): void;
    getDropParentTypeTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropParentTypeTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateParentTypeTable(): boolean;
    clearCreateParentTypeTable(): void;
    getCreateParentTypeTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateParentTypeTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckParentTypeTable(): boolean;
    clearCheckParentTypeTable(): void;
    getCheckParentTypeTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckParentTypeTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertParentType(): boolean;
    clearInsertParentType(): void;
    getInsertParentType(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertParentType(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectParentTypeByTypeId(): boolean;
    clearSelectParentTypeByTypeId(): void;
    getSelectParentTypeByTypeId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectParentTypeByTypeId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropTypePropertyTable(): boolean;
    clearDropTypePropertyTable(): void;
    getDropTypePropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropTypePropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateTypePropertyTable(): boolean;
    clearCreateTypePropertyTable(): void;
    getCreateTypePropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateTypePropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckTypePropertyTable(): boolean;
    clearCheckTypePropertyTable(): void;
    getCheckTypePropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckTypePropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertTypeProperty(): boolean;
    clearInsertTypeProperty(): void;
    getInsertTypeProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertTypeProperty(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectPropertyByTypeId(): boolean;
    clearSelectPropertyByTypeId(): void;
    getSelectPropertyByTypeId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectPropertyByTypeId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectLastInsertId(): boolean;
    clearSelectLastInsertId(): void;
    getSelectLastInsertId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectLastInsertId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropArtifactTable(): boolean;
    clearDropArtifactTable(): void;
    getDropArtifactTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropArtifactTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateArtifactTable(): boolean;
    clearCreateArtifactTable(): void;
    getCreateArtifactTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateArtifactTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckArtifactTable(): boolean;
    clearCheckArtifactTable(): void;
    getCheckArtifactTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckArtifactTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertArtifact(): boolean;
    clearInsertArtifact(): void;
    getInsertArtifact(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertArtifact(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectArtifactById(): boolean;
    clearSelectArtifactById(): void;
    getSelectArtifactById(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectArtifactById(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectArtifactByTypeIdAndName(): boolean;
    clearSelectArtifactByTypeIdAndName(): void;
    getSelectArtifactByTypeIdAndName(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectArtifactByTypeIdAndName(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectArtifactsByTypeId(): boolean;
    clearSelectArtifactsByTypeId(): void;
    getSelectArtifactsByTypeId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectArtifactsByTypeId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectArtifactsByUri(): boolean;
    clearSelectArtifactsByUri(): void;
    getSelectArtifactsByUri(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectArtifactsByUri(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasUpdateArtifact(): boolean;
    clearUpdateArtifact(): void;
    getUpdateArtifact(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateArtifact(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropArtifactPropertyTable(): boolean;
    clearDropArtifactPropertyTable(): void;
    getDropArtifactPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropArtifactPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateArtifactPropertyTable(): boolean;
    clearCreateArtifactPropertyTable(): void;
    getCreateArtifactPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateArtifactPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckArtifactPropertyTable(): boolean;
    clearCheckArtifactPropertyTable(): void;
    getCheckArtifactPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckArtifactPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertArtifactProperty(): boolean;
    clearInsertArtifactProperty(): void;
    getInsertArtifactProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertArtifactProperty(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectArtifactPropertyByArtifactId(): boolean;
    clearSelectArtifactPropertyByArtifactId(): void;
    getSelectArtifactPropertyByArtifactId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectArtifactPropertyByArtifactId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasUpdateArtifactProperty(): boolean;
    clearUpdateArtifactProperty(): void;
    getUpdateArtifactProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateArtifactProperty(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteArtifactProperty(): boolean;
    clearDeleteArtifactProperty(): void;
    getDeleteArtifactProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteArtifactProperty(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropExecutionTable(): boolean;
    clearDropExecutionTable(): void;
    getDropExecutionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropExecutionTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateExecutionTable(): boolean;
    clearCreateExecutionTable(): void;
    getCreateExecutionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateExecutionTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckExecutionTable(): boolean;
    clearCheckExecutionTable(): void;
    getCheckExecutionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckExecutionTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertExecution(): boolean;
    clearInsertExecution(): void;
    getInsertExecution(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertExecution(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectExecutionById(): boolean;
    clearSelectExecutionById(): void;
    getSelectExecutionById(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectExecutionById(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectExecutionByTypeIdAndName(): boolean;
    clearSelectExecutionByTypeIdAndName(): void;
    getSelectExecutionByTypeIdAndName(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectExecutionByTypeIdAndName(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectExecutionsByTypeId(): boolean;
    clearSelectExecutionsByTypeId(): void;
    getSelectExecutionsByTypeId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectExecutionsByTypeId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasUpdateExecution(): boolean;
    clearUpdateExecution(): void;
    getUpdateExecution(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateExecution(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropExecutionPropertyTable(): boolean;
    clearDropExecutionPropertyTable(): void;
    getDropExecutionPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropExecutionPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateExecutionPropertyTable(): boolean;
    clearCreateExecutionPropertyTable(): void;
    getCreateExecutionPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateExecutionPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckExecutionPropertyTable(): boolean;
    clearCheckExecutionPropertyTable(): void;
    getCheckExecutionPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckExecutionPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertExecutionProperty(): boolean;
    clearInsertExecutionProperty(): void;
    getInsertExecutionProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertExecutionProperty(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectExecutionPropertyByExecutionId(): boolean;
    clearSelectExecutionPropertyByExecutionId(): void;
    getSelectExecutionPropertyByExecutionId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectExecutionPropertyByExecutionId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasUpdateExecutionProperty(): boolean;
    clearUpdateExecutionProperty(): void;
    getUpdateExecutionProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateExecutionProperty(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteExecutionProperty(): boolean;
    clearDeleteExecutionProperty(): void;
    getDeleteExecutionProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteExecutionProperty(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropContextTable(): boolean;
    clearDropContextTable(): void;
    getDropContextTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropContextTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateContextTable(): boolean;
    clearCreateContextTable(): void;
    getCreateContextTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateContextTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckContextTable(): boolean;
    clearCheckContextTable(): void;
    getCheckContextTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckContextTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertContext(): boolean;
    clearInsertContext(): void;
    getInsertContext(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertContext(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectContextById(): boolean;
    clearSelectContextById(): void;
    getSelectContextById(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectContextById(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectContextsByTypeId(): boolean;
    clearSelectContextsByTypeId(): void;
    getSelectContextsByTypeId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectContextsByTypeId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectContextByTypeIdAndName(): boolean;
    clearSelectContextByTypeIdAndName(): void;
    getSelectContextByTypeIdAndName(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectContextByTypeIdAndName(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasUpdateContext(): boolean;
    clearUpdateContext(): void;
    getUpdateContext(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateContext(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropContextPropertyTable(): boolean;
    clearDropContextPropertyTable(): void;
    getDropContextPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropContextPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateContextPropertyTable(): boolean;
    clearCreateContextPropertyTable(): void;
    getCreateContextPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateContextPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckContextPropertyTable(): boolean;
    clearCheckContextPropertyTable(): void;
    getCheckContextPropertyTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckContextPropertyTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertContextProperty(): boolean;
    clearInsertContextProperty(): void;
    getInsertContextProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertContextProperty(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectContextPropertyByContextId(): boolean;
    clearSelectContextPropertyByContextId(): void;
    getSelectContextPropertyByContextId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectContextPropertyByContextId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasUpdateContextProperty(): boolean;
    clearUpdateContextProperty(): void;
    getUpdateContextProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateContextProperty(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteContextProperty(): boolean;
    clearDeleteContextProperty(): void;
    getDeleteContextProperty(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteContextProperty(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropParentContextTable(): boolean;
    clearDropParentContextTable(): void;
    getDropParentContextTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropParentContextTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateParentContextTable(): boolean;
    clearCreateParentContextTable(): void;
    getCreateParentContextTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateParentContextTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckParentContextTable(): boolean;
    clearCheckParentContextTable(): void;
    getCheckParentContextTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckParentContextTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertParentContext(): boolean;
    clearInsertParentContext(): void;
    getInsertParentContext(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertParentContext(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectParentContextByContextId(): boolean;
    clearSelectParentContextByContextId(): void;
    getSelectParentContextByContextId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectParentContextByContextId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectParentContextByParentContextId(): boolean;
    clearSelectParentContextByParentContextId(): void;
    getSelectParentContextByParentContextId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectParentContextByParentContextId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropEventTable(): boolean;
    clearDropEventTable(): void;
    getDropEventTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropEventTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateEventTable(): boolean;
    clearCreateEventTable(): void;
    getCreateEventTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateEventTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckEventTable(): boolean;
    clearCheckEventTable(): void;
    getCheckEventTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckEventTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertEvent(): boolean;
    clearInsertEvent(): void;
    getInsertEvent(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertEvent(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectEventByArtifactIds(): boolean;
    clearSelectEventByArtifactIds(): void;
    getSelectEventByArtifactIds(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectEventByArtifactIds(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectEventByExecutionIds(): boolean;
    clearSelectEventByExecutionIds(): void;
    getSelectEventByExecutionIds(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectEventByExecutionIds(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropEventPathTable(): boolean;
    clearDropEventPathTable(): void;
    getDropEventPathTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropEventPathTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateEventPathTable(): boolean;
    clearCreateEventPathTable(): void;
    getCreateEventPathTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateEventPathTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckEventPathTable(): boolean;
    clearCheckEventPathTable(): void;
    getCheckEventPathTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckEventPathTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertEventPath(): boolean;
    clearInsertEventPath(): void;
    getInsertEventPath(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertEventPath(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectEventPathByEventIds(): boolean;
    clearSelectEventPathByEventIds(): void;
    getSelectEventPathByEventIds(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectEventPathByEventIds(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropAssociationTable(): boolean;
    clearDropAssociationTable(): void;
    getDropAssociationTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropAssociationTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateAssociationTable(): boolean;
    clearCreateAssociationTable(): void;
    getCreateAssociationTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateAssociationTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckAssociationTable(): boolean;
    clearCheckAssociationTable(): void;
    getCheckAssociationTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckAssociationTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertAssociation(): boolean;
    clearInsertAssociation(): void;
    getInsertAssociation(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertAssociation(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectAssociationByContextId(): boolean;
    clearSelectAssociationByContextId(): void;
    getSelectAssociationByContextId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectAssociationByContextId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectAssociationByExecutionId(): boolean;
    clearSelectAssociationByExecutionId(): void;
    getSelectAssociationByExecutionId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectAssociationByExecutionId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropAttributionTable(): boolean;
    clearDropAttributionTable(): void;
    getDropAttributionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropAttributionTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateAttributionTable(): boolean;
    clearCreateAttributionTable(): void;
    getCreateAttributionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateAttributionTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckAttributionTable(): boolean;
    clearCheckAttributionTable(): void;
    getCheckAttributionTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckAttributionTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertAttribution(): boolean;
    clearInsertAttribution(): void;
    getInsertAttribution(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertAttribution(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectAttributionByContextId(): boolean;
    clearSelectAttributionByContextId(): void;
    getSelectAttributionByContextId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectAttributionByContextId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasSelectAttributionByArtifactId(): boolean;
    clearSelectAttributionByArtifactId(): void;
    getSelectAttributionByArtifactId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setSelectAttributionByArtifactId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDropMlmdEnvTable(): boolean;
    clearDropMlmdEnvTable(): void;
    getDropMlmdEnvTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDropMlmdEnvTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCreateMlmdEnvTable(): boolean;
    clearCreateMlmdEnvTable(): void;
    getCreateMlmdEnvTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCreateMlmdEnvTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;
    getSchemaVersion(): number;
    setSchemaVersion(value: number): MetadataSourceQueryConfig;

    hasCheckMlmdEnvTable(): boolean;
    clearCheckMlmdEnvTable(): void;
    getCheckMlmdEnvTable(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckMlmdEnvTable(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasInsertSchemaVersion(): boolean;
    clearInsertSchemaVersion(): void;
    getInsertSchemaVersion(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setInsertSchemaVersion(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasUpdateSchemaVersion(): boolean;
    clearUpdateSchemaVersion(): void;
    getUpdateSchemaVersion(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setUpdateSchemaVersion(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasCheckTablesInV0132(): boolean;
    clearCheckTablesInV0132(): void;
    getCheckTablesInV0132(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setCheckTablesInV0132(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;
    clearSecondaryIndicesList(): void;
    getSecondaryIndicesList(): Array<MetadataSourceQueryConfig.TemplateQuery>;
    setSecondaryIndicesList(value: Array<MetadataSourceQueryConfig.TemplateQuery>): MetadataSourceQueryConfig;
    addSecondaryIndices(value?: MetadataSourceQueryConfig.TemplateQuery, index?: number): MetadataSourceQueryConfig.TemplateQuery;

    getMigrationSchemesMap(): jspb.Map<number, MetadataSourceQueryConfig.MigrationScheme>;
    clearMigrationSchemesMap(): void;

    hasDeleteContextsById(): boolean;
    clearDeleteContextsById(): void;
    getDeleteContextsById(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteContextsById(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteContextsPropertiesByContextsId(): boolean;
    clearDeleteContextsPropertiesByContextsId(): void;
    getDeleteContextsPropertiesByContextsId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteContextsPropertiesByContextsId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteParentContextsByParentIds(): boolean;
    clearDeleteParentContextsByParentIds(): void;
    getDeleteParentContextsByParentIds(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteParentContextsByParentIds(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteParentContextsByChildIds(): boolean;
    clearDeleteParentContextsByChildIds(): void;
    getDeleteParentContextsByChildIds(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteParentContextsByChildIds(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteArtifactsById(): boolean;
    clearDeleteArtifactsById(): void;
    getDeleteArtifactsById(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteArtifactsById(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteArtifactsPropertiesByArtifactsId(): boolean;
    clearDeleteArtifactsPropertiesByArtifactsId(): void;
    getDeleteArtifactsPropertiesByArtifactsId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteArtifactsPropertiesByArtifactsId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteExecutionsById(): boolean;
    clearDeleteExecutionsById(): void;
    getDeleteExecutionsById(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteExecutionsById(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteExecutionsPropertiesByExecutionsId(): boolean;
    clearDeleteExecutionsPropertiesByExecutionsId(): void;
    getDeleteExecutionsPropertiesByExecutionsId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteExecutionsPropertiesByExecutionsId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteEventsByArtifactsId(): boolean;
    clearDeleteEventsByArtifactsId(): void;
    getDeleteEventsByArtifactsId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteEventsByArtifactsId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteEventsByExecutionsId(): boolean;
    clearDeleteEventsByExecutionsId(): void;
    getDeleteEventsByExecutionsId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteEventsByExecutionsId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteAssociationsByContextsId(): boolean;
    clearDeleteAssociationsByContextsId(): void;
    getDeleteAssociationsByContextsId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteAssociationsByContextsId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteAssociationsByExecutionsId(): boolean;
    clearDeleteAssociationsByExecutionsId(): void;
    getDeleteAssociationsByExecutionsId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteAssociationsByExecutionsId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteAttributionsByContextsId(): boolean;
    clearDeleteAttributionsByContextsId(): void;
    getDeleteAttributionsByContextsId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteAttributionsByContextsId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteAttributionsByArtifactsId(): boolean;
    clearDeleteAttributionsByArtifactsId(): void;
    getDeleteAttributionsByArtifactsId(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteAttributionsByArtifactsId(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteEventPaths(): boolean;
    clearDeleteEventPaths(): void;
    getDeleteEventPaths(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteEventPaths(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    hasDeleteParentType(): boolean;
    clearDeleteParentType(): void;
    getDeleteParentType(): MetadataSourceQueryConfig.TemplateQuery | undefined;
    setDeleteParentType(value?: MetadataSourceQueryConfig.TemplateQuery): MetadataSourceQueryConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetadataSourceQueryConfig.AsObject;
    static toObject(includeInstance: boolean, msg: MetadataSourceQueryConfig): MetadataSourceQueryConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetadataSourceQueryConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetadataSourceQueryConfig;
    static deserializeBinaryFromReader(message: MetadataSourceQueryConfig, reader: jspb.BinaryReader): MetadataSourceQueryConfig;
}

export namespace MetadataSourceQueryConfig {
    export type AsObject = {
        metadataSourceType: MetadataSourceType,
        dropTypeTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createTypeTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkTypeTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertArtifactType?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertExecutionType?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertContextType?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectTypeById?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectTypeByName?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectTypeByNameAndVersion?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectAllTypes?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropParentTypeTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createParentTypeTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkParentTypeTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertParentType?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectParentTypeByTypeId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropTypePropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createTypePropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkTypePropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertTypeProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectPropertyByTypeId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectLastInsertId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropArtifactTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createArtifactTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkArtifactTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertArtifact?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectArtifactById?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectArtifactByTypeIdAndName?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectArtifactsByTypeId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectArtifactsByUri?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateArtifact?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropArtifactPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createArtifactPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkArtifactPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertArtifactProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectArtifactPropertyByArtifactId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateArtifactProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteArtifactProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropExecutionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createExecutionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkExecutionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertExecution?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectExecutionById?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectExecutionByTypeIdAndName?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectExecutionsByTypeId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateExecution?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropExecutionPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createExecutionPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkExecutionPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertExecutionProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectExecutionPropertyByExecutionId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateExecutionProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteExecutionProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropContextTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createContextTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkContextTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertContext?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectContextById?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectContextsByTypeId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectContextByTypeIdAndName?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateContext?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropContextPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createContextPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkContextPropertyTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertContextProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectContextPropertyByContextId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateContextProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteContextProperty?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropParentContextTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createParentContextTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkParentContextTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertParentContext?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectParentContextByContextId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectParentContextByParentContextId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropEventTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createEventTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkEventTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertEvent?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectEventByArtifactIds?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectEventByExecutionIds?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropEventPathTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createEventPathTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkEventPathTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertEventPath?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectEventPathByEventIds?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropAssociationTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createAssociationTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkAssociationTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertAssociation?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectAssociationByContextId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectAssociationByExecutionId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropAttributionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createAttributionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkAttributionTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertAttribution?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectAttributionByContextId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        selectAttributionByArtifactId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        dropMlmdEnvTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        createMlmdEnvTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        schemaVersion: number,
        checkMlmdEnvTable?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        insertSchemaVersion?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        updateSchemaVersion?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        checkTablesInV0132?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        secondaryIndicesList: Array<MetadataSourceQueryConfig.TemplateQuery.AsObject>,

        migrationSchemesMap: Array<[number, MetadataSourceQueryConfig.MigrationScheme.AsObject]>,
        deleteContextsById?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteContextsPropertiesByContextsId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteParentContextsByParentIds?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteParentContextsByChildIds?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteArtifactsById?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteArtifactsPropertiesByArtifactsId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteExecutionsById?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteExecutionsPropertiesByExecutionsId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteEventsByArtifactsId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteEventsByExecutionsId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteAssociationsByContextsId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteAssociationsByExecutionsId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteAttributionsByContextsId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteAttributionsByArtifactsId?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteEventPaths?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
        deleteParentType?: MetadataSourceQueryConfig.TemplateQuery.AsObject,
    }


    export class TemplateQuery extends jspb.Message { 
        getQuery(): string;
        setQuery(value: string): TemplateQuery;
        getParameterNum(): number;
        setParameterNum(value: number): TemplateQuery;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TemplateQuery.AsObject;
        static toObject(includeInstance: boolean, msg: TemplateQuery): TemplateQuery.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TemplateQuery, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TemplateQuery;
        static deserializeBinaryFromReader(message: TemplateQuery, reader: jspb.BinaryReader): TemplateQuery;
    }

    export namespace TemplateQuery {
        export type AsObject = {
            query: string,
            parameterNum: number,
        }
    }

    export class MigrationScheme extends jspb.Message { 
        clearUpgradeQueriesList(): void;
        getUpgradeQueriesList(): Array<MetadataSourceQueryConfig.TemplateQuery>;
        setUpgradeQueriesList(value: Array<MetadataSourceQueryConfig.TemplateQuery>): MigrationScheme;
        addUpgradeQueries(value?: MetadataSourceQueryConfig.TemplateQuery, index?: number): MetadataSourceQueryConfig.TemplateQuery;
        clearDowngradeQueriesList(): void;
        getDowngradeQueriesList(): Array<MetadataSourceQueryConfig.TemplateQuery>;
        setDowngradeQueriesList(value: Array<MetadataSourceQueryConfig.TemplateQuery>): MigrationScheme;
        addDowngradeQueries(value?: MetadataSourceQueryConfig.TemplateQuery, index?: number): MetadataSourceQueryConfig.TemplateQuery;

        hasUpgradeVerification(): boolean;
        clearUpgradeVerification(): void;
        getUpgradeVerification(): MetadataSourceQueryConfig.MigrationScheme.VerificationScheme | undefined;
        setUpgradeVerification(value?: MetadataSourceQueryConfig.MigrationScheme.VerificationScheme): MigrationScheme;

        hasDowngradeVerification(): boolean;
        clearDowngradeVerification(): void;
        getDowngradeVerification(): MetadataSourceQueryConfig.MigrationScheme.VerificationScheme | undefined;
        setDowngradeVerification(value?: MetadataSourceQueryConfig.MigrationScheme.VerificationScheme): MigrationScheme;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MigrationScheme.AsObject;
        static toObject(includeInstance: boolean, msg: MigrationScheme): MigrationScheme.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MigrationScheme, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MigrationScheme;
        static deserializeBinaryFromReader(message: MigrationScheme, reader: jspb.BinaryReader): MigrationScheme;
    }

    export namespace MigrationScheme {
        export type AsObject = {
            upgradeQueriesList: Array<MetadataSourceQueryConfig.TemplateQuery.AsObject>,
            downgradeQueriesList: Array<MetadataSourceQueryConfig.TemplateQuery.AsObject>,
            upgradeVerification?: MetadataSourceQueryConfig.MigrationScheme.VerificationScheme.AsObject,
            downgradeVerification?: MetadataSourceQueryConfig.MigrationScheme.VerificationScheme.AsObject,
        }


        export class VerificationScheme extends jspb.Message { 
            clearPreviousVersionSetupQueriesList(): void;
            getPreviousVersionSetupQueriesList(): Array<MetadataSourceQueryConfig.TemplateQuery>;
            setPreviousVersionSetupQueriesList(value: Array<MetadataSourceQueryConfig.TemplateQuery>): VerificationScheme;
            addPreviousVersionSetupQueries(value?: MetadataSourceQueryConfig.TemplateQuery, index?: number): MetadataSourceQueryConfig.TemplateQuery;
            clearPostMigrationVerificationQueriesList(): void;
            getPostMigrationVerificationQueriesList(): Array<MetadataSourceQueryConfig.TemplateQuery>;
            setPostMigrationVerificationQueriesList(value: Array<MetadataSourceQueryConfig.TemplateQuery>): VerificationScheme;
            addPostMigrationVerificationQueries(value?: MetadataSourceQueryConfig.TemplateQuery, index?: number): MetadataSourceQueryConfig.TemplateQuery;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): VerificationScheme.AsObject;
            static toObject(includeInstance: boolean, msg: VerificationScheme): VerificationScheme.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: VerificationScheme, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): VerificationScheme;
            static deserializeBinaryFromReader(message: VerificationScheme, reader: jspb.BinaryReader): VerificationScheme;
        }

        export namespace VerificationScheme {
            export type AsObject = {
                previousVersionSetupQueriesList: Array<MetadataSourceQueryConfig.TemplateQuery.AsObject>,
                postMigrationVerificationQueriesList: Array<MetadataSourceQueryConfig.TemplateQuery.AsObject>,
            }
        }

    }

}

export class MySQLSourceErrorInfo extends jspb.Message { 
    getMysqlErrorCode(): number;
    setMysqlErrorCode(value: number): MySQLSourceErrorInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MySQLSourceErrorInfo.AsObject;
    static toObject(includeInstance: boolean, msg: MySQLSourceErrorInfo): MySQLSourceErrorInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MySQLSourceErrorInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MySQLSourceErrorInfo;
    static deserializeBinaryFromReader(message: MySQLSourceErrorInfo, reader: jspb.BinaryReader): MySQLSourceErrorInfo;
}

export namespace MySQLSourceErrorInfo {
    export type AsObject = {
        mysqlErrorCode: number,
    }
}

export enum MetadataSourceType {
    UNKNOWN_METADATA_SOURCE = 0,
    FAKE_METADATA_SOURCE = 1,
    MYSQL_METADATA_SOURCE = 2,
    SQLITE_METADATA_SOURCE = 3,
}
