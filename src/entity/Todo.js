import typeorm, { DataTypeNotSupportedError } from 'typeorm';
export const Todo = new typeorm.EntitySchema({
    name: "Todo",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        title: {
            type: "varchar", 
            nullable: false,
        },
        description: {
            type: "varchar",
            length: 500,
            nullable: true,
        },
        createdAt: {
            type: "date",
        },
        updatedAt: {
            type: "date"
        }
    }
})