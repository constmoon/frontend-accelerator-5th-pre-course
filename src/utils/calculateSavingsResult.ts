import { CalculateSavingsParams } from 'types/savings';
import { CalculationResult } from 'types/savings';

const calculateHalfYearInterestMultiplier = (annualRate: number): number => {
  const rateDecimal = annualRate * 0.01;
  const halfYear = 0.5;
  return 1 + rateDecimal * halfYear;
};

export const calculateSavingsResult = ({
    targetAmount,
    monthlyAmount,
    savingMonths,
    annualRate,
  }: CalculateSavingsParams): CalculationResult => {
    const interestMultiplier = calculateHalfYearInterestMultiplier(annualRate);
    
    const expectedAmount = monthlyAmount * savingMonths * interestMultiplier;
    const difference = targetAmount - expectedAmount;
    const recommendMonthlyAmount = Math.round(targetAmount / (savingMonths * interestMultiplier) / 1000) * 1000;
  
    return { expectedAmount, difference, recommendMonthlyAmount };
  }
