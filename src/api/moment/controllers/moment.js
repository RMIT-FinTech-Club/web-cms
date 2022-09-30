"use strict";

/**
 * moment controller
 */

const { populate, cleanItem, select, sort } = require("../../../util");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::moment.moment", ({ strapi }) => ({
    async find(ctx) {
        populate(ctx, ["cover"]);
        sort(ctx, "date:asc");
        const { data } = await super.find(ctx);
        data.forEach((item) => {
            select(item, "cover", "url");
            cleanItem(item);
        });
        return data;
    },
}));
