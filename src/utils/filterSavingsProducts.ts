import { SavingsProduct } from 'types/savings';

export const isMonthlyAmountValid = (monthlyAmount: number, product: SavingsProduct): boolean => {
  return monthlyAmount >= product.minMonthlyAmount && monthlyAmount <= product.maxMonthlyAmount;
};

export const isSavingMonthsValid = (savingMonths: number, product: SavingsProduct): boolean => {
  return product.availableTerms === savingMonths;
};

