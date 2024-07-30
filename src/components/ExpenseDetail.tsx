import { Expense } from "../types";

type ExpenseDetailProps = {
  expense: Expense;
};

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
  return <div className="bg-red-600">Hola Joven</div>;
}
