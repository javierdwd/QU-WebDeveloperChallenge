export const useRandomBoolean = (successRatio:number = 50) => {
  if(!Number.isInteger(successRatio) || successRatio < 1 || successRatio > 100) {
    throw new Error("Unvalid format: Success ratio must be a integer in the range of 1-100")
  }

  return () => Math.random() < (successRatio / 100);
}