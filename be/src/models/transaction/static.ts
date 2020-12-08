export async function findByPkAndPopulateAll(
  this: any,
  transactionObjId: string,
) {
  const transaction = await this.findOne({
    _id: transactionObjId,
    isDeleted: false,
  })
    .select('-isDeleted')
    .populate({
      path: 'category method',
    })
    .exec();
  return transaction;
}

export default {};
