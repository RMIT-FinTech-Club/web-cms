const cleanItem = (item) => {
    for (const a in item.attributes) item[a] = item.attributes[a];
    delete item.createdAt;
    delete item.updatedAt;
    delete item.publishedAt;
    delete item.attributes;
};
const populate = (ctx, populate) => {
    ctx.query = {
        ...ctx.query,
        populate,
    };
};
module.exports = {
    populate,
    cleanItem,
};