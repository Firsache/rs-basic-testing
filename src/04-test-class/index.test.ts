// Uncomment the code below and write your tests
import { getBankAccount, TransferFailedError, InsufficientFundsError } from '.';

interface BankAccount {
  _balance: number;
}

const initialBalance = 1000;
const anotherBalance = 50;
const someMoney = 100;

const bankAccout: BankAccount = {
  _balance: initialBalance,
};

const account = getBankAccount(initialBalance);

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(account).toEqual(bankAccout);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const withdrawOverCurrentBalance = () => account.withdraw(1500);
    expect(withdrawOverCurrentBalance).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const accOfSender = getBankAccount(initialBalance);
    const accOfReceiver = getBankAccount(anotherBalance);

    const transferOverCurrentBalance = () =>
      accOfSender.transfer(1300, accOfReceiver);
    expect(transferOverCurrentBalance).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const transferToTheSameAcc = () => account.transfer(300, account);
    expect(transferToTheSameAcc).toThrowError(TransferFailedError);
  });

  test('should deposit money', () => {
    account.deposit(someMoney);

    const getNewBalance = account.getBalance();
    const expectedBalance = initialBalance + someMoney;

    expect(getNewBalance).toBe(expectedBalance);
  });

  test('should withdraw money', () => {
    const getBalanceBeforeWithdrawal = account.getBalance();
    account.withdraw(someMoney);

    const getNewBalance = account.getBalance();
    const expectedBalance = getBalanceBeforeWithdrawal - someMoney;

    expect(getNewBalance).toBe(expectedBalance);
  });

  test('should transfer money', () => {
    const accOfSender = getBankAccount(initialBalance);
    const accOfReceiver = getBankAccount(anotherBalance);

    accOfSender.transfer(someMoney, accOfReceiver);

    const getNewSenderBalance = accOfSender.getBalance();
    const expectedSenderBalance = initialBalance - someMoney;

    expect(getNewSenderBalance).toBe(expectedSenderBalance);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(100);
    const balance = await account.fetchBalance();

    if (balance === null) {
      expect(typeof balance).not.toBe('number');
    } else {
      expect(typeof balance).toBe('number');
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // const account = getBankAccount(someMoney);
    // const balance = await account.fetchBalance();
    // if (balance === null) {
    //   expect(typeof balance).not.toBe('number');
    // } else {
    //   expect(balance).toBe(someMoney);
    // }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
