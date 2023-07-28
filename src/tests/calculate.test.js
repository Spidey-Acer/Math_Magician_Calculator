import calculate from '../logic/calculate';

describe('calculate Function', () => {
  it('should handle "AC" button correctly', () => {
    const initialData = {
      total: '42',
      next: '23',
      operation: '+',
    };
    const result = calculate(initialData, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should handle number button correctly', () => {
    const initialData = {
      total: '42',
      next: '23',
      operation: '+',
    };
    const result = calculate(initialData, '5');
    expect(result).toEqual({
      total: '42',
      next: '235',
      operation: '+',
    });
  });

  it('should handle "." button correctly', () => {
    const initialData = {
      total: '42',
      next: '23',
      operation: '+',
    };
    const result = calculate(initialData, '.');
    expect(result).toEqual({
      total: '42',
      next: '23.',
      operation: '+',
    });
  });

  it('should handle "=" button correctly', () => {
    const initialData = {
      total: '42',
      next: '23',
      operation: '+',
    };
    const result = calculate(initialData, '=');
    expect(result).toEqual({
      total: '65',
      next: null,
      operation: null,
    });
  });

  it('should handle "+/-" button correctly', () => {
    const initialData = {
      total: '42',
      next: '23',
      operation: '+',
    };
    const result = calculate(initialData, '+/-');
    expect(result).toEqual({
      total: '42',
      next: '-23',
      operation: '+',
    });
  });

  it('should handle operation button correctly with existing operation', () => {
    const initialData = {
      total: '42',
      next: '23',
      operation: '+',
    };
    const result = calculate(initialData, '-');
    expect(result).toEqual({
      total: '65',
      next: null,
      operation: '-',
    });
  });

  it('should handle operation button correctly with new operation', () => {
    const initialData = {
      total: '42',
      next: '23',
      operation: null,
    };
    const result = calculate(initialData, '-');
    expect(result).toEqual({
      total: '23',
      next: null,
      operation: '-',
    });
  });

  // Add more test cases as needed for other functionality of the calculate function
});
