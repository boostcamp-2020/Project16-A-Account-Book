export async function findByPkAndPopulateAll(
  this: any,
  transactionObjId: string,
) {
  const transaction = await this.findById(transactionObjId)
    .populate({
      path: 'category method',
    })
    .exec();
  return transaction;
}

export default {};
