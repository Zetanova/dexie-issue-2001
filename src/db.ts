import { PlainMessage } from "@bufbuild/protobuf";
import { IssueMessage, WorkingMessage } from "@proto/demo_pb";
import Dexie, { Table } from "dexie";

export interface WorkingEntity {
    key: string,
    entry: PlainMessage<WorkingMessage>
}

export interface IssueEntity {
    key: string,
    entry: PlainMessage<IssueMessage>
}
  

export class Db extends Dexie {
    workingEntities!: Table<WorkingEntity, string>
    issues!: Table<IssueEntity, string>

    constructor() {
        super('demo-data')
        this.version(1).stores({
            workingEntities: 'key',
            issues: 'key'
        })
    }
}

export const db = new Db();