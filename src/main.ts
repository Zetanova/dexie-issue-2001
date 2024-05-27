import { Value, toPlainMessage } from "@bufbuild/protobuf";
import { IssueEntity, WorkingEntity, db } from "./db";
import { IssueMessage, WorkingMessage } from "@proto/demo_pb";

export class Demo {
    async working() {
        const entity:WorkingEntity = {
            key: "wdemo",
            entry: toPlainMessage(new WorkingMessage({
                id: "W1234",
                number: 1234,
                value: Value.fromJson("value1")
             }))
        }

        await db.workingEntities.add(entity)
        await db.workingEntities.put(entity)
        await db.workingEntities.update("wdemo", { })
    }

    async issue() {
        const entity:IssueEntity = {
            key: "idemo",
            entry: toPlainMessage(new IssueMessage({
                id: "I1234",
                number: 1234,
                value: Value.fromJson("value1"),
                attributes: {
                    "a1": Value.fromJson("value2")
                }
             }))
        }

        await db.issues.add(entity)
        await db.issues.put(entity)
        await db.issues.update("idemo", n => { })
    }
}

