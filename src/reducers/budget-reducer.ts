export type BudgetActions = { type: "add-budget"; payload: { budget: number } };

export type BudgetState = {
  budget: number;
};

export const initialState: BudgetState = {
  budget: 0,
};

export const budgetReduce = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {};
