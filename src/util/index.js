const cleanItem = (item) => {
    Object.assign(item, item.attributes);
    delete item.createdAt;
    delete item.updatedAt;
    delete item.publishedAt;
    delete item.attributes;
};
const populate = (ctx, _populate) => {
    ctx.query = {
        ...ctx.query,
        populate: _populate,
    };
};
const sort = (ctx, _sort) => {
    ctx.query = {
        ...ctx.query,
        sort: _sort,
    };
};

const select = (item, key, field) => {
    const a = item.attributes;
    a[key] = a[key].data?.attributes[field] ?? null;
};

module.exports = {
    populate,
    sort,
    cleanItem,
    select,
};
