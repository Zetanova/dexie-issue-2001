## build proto message
`npx buf dep update`
`npx buf generate --include-imports`

## build to trigger issue
`tsc --build`

### output
```
src/main.ts:36:15 - error TS2615: Type of property 'kind' circularly references itself in mapped type '{ [P in keyof PlainMessage<Value>]: P extends string ? PlainMessage<Value>[P] extends (infer K)[] ? K extends object ? P | `${P}.${number}` | `${P}.${number}.${KeyPaths<...>}` : P | `${P}.${number}` : PlainMessage<...>[P] extends (...args: any[]) => any ? never : PlainMessage<...>[P] extends object ? P | `${P}.${Key...'.

36         await db.issues.update("idemo", n => { })
                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/main.ts:36:15 - error TS2615: Type of property 'value' circularly references itself in mapped type '{ case: "case"; value: "value" | `value.${any}`; }'.

36         await db.issues.update("idemo", n => { })
                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/main.ts:36:15 - error TS2615: Type of property 'values' circularly references itself in mapped type '{ values: "values" | `values.${number}` | `values.${number}.${any}`; }'.

36         await db.issues.update("idemo", n => { })
                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 3 errors.
```
