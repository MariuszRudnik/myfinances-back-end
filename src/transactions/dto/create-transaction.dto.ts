export class CreateTransactionDto {
    nameTransactions: string;
    category: string;
    price: number;
    dateExpenses: Date;
    operations: string;
}
export class ExpensesDto {
    nameTransactions?: string;
    category?: string;
    price?: number;
    dateExpenses?: Date;
    operations?: string;
}

