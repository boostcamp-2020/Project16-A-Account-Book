const isCanSubmit = (target: Object) => {
  const isblank = (value: any) =>
    value === null || value === undefined || value === '';
  return (
    Object.entries(target).filter(([, value]) => isblank(value)).length === 0
  );
};

export default isCanSubmit;
