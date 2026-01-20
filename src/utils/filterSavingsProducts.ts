import { SavingsProduct } from 'types/savings';

export const filterSavingsProducts = (products: SavingsProduct[], monthlyAmount: number, savingMonths: number): SavingsProduct[] => {
  if (monthlyAmount === 0) {
    return products;
  }
  return products.filter(product => {
    const isMonthlyAmountValid = monthlyAmount >= product.minMonthlyAmount && monthlyAmount <= product.maxMonthlyAmount;
    const isTermsValid = product.availableTerms === savingMonths;
    return isMonthlyAmountValid && isTermsValid;
  });
};
