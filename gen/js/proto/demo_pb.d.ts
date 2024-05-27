// @generated by protoc-gen-es v1.9.0
// @generated from file proto/demo.proto (package demo, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Value } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message demo.WorkingMessage
 */
export declare class WorkingMessage extends Message<WorkingMessage> {
  /**
   * @generated from field: string id = 3;
   */
  id: string;

  /**
   * @generated from field: int32 number = 4;
   */
  number: number;

  /**
   * @generated from field: google.protobuf.Value value = 10;
   */
  value?: Value;

  constructor(data?: PartialMessage<WorkingMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "demo.WorkingMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkingMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkingMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkingMessage;

  static equals(a: WorkingMessage | PlainMessage<WorkingMessage> | undefined, b: WorkingMessage | PlainMessage<WorkingMessage> | undefined): boolean;
}

/**
 * @generated from message demo.IssueMessage
 */
export declare class IssueMessage extends Message<IssueMessage> {
  /**
   * @generated from field: string id = 3;
   */
  id: string;

  /**
   * @generated from field: int32 number = 4;
   */
  number: number;

  /**
   * @generated from field: google.protobuf.Value value = 10;
   */
  value?: Value;

  /**
   * @generated from field: map<string, google.protobuf.Value> attributes = 11;
   */
  attributes: { [key: string]: Value };

  constructor(data?: PartialMessage<IssueMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "demo.IssueMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IssueMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IssueMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IssueMessage;

  static equals(a: IssueMessage | PlainMessage<IssueMessage> | undefined, b: IssueMessage | PlainMessage<IssueMessage> | undefined): boolean;
}
