type CParamsNumberFormat = ConstructorParameters<typeof Intl.NumberFormat>;

export const useNumberFormatter = (locales?: CParamsNumberFormat[0], options?: CParamsNumberFormat[1]) => {
  const inst = new Intl.NumberFormat(locales, options);
  
  const safeFormat = (value: unknown, replace = "")  => {
    const _value = Number(value);

    if(!Number.isNaN(_value)) {
      return inst.format(_value)
    }

    return replace;
  }
  
  return {
    format: inst.format,
    safeFormat,
  }
}