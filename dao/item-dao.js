import ItemModel from '../model/itemModel.js'

// For Create item
export function create(userDetail){
    return ItemModel.create(userDetail)
};

// For update one item
export function updateByCondn(condition, updateFields){
    return ItemModel.updateOne(condition, updateFields);
};

//(Delete) Updating audit feilds condition, so that we can track in future
export function deleteItem(condition){
    return ItemModel.updateOne(condition, { $set: { 'auditFields.isDeleted': true, 'auditFields.isActive': false } });
};

//Fetching single item
export function getOne(conditions){
    return ItemModel.findOne(conditions);
};

//Fetching ALL items from database
export async function getAll  (limit, page,sort,  conditions){
    let list = ItemModel.find(conditions).limit(limit).skip(page).sort(sort ? sort : { "auditFields.updatedAt": -1 });
    const count = ItemModel.countDocuments(conditions);
    const result = await Promise.all([list, count]);
    return { data: result[0], count: result[1] };
}



