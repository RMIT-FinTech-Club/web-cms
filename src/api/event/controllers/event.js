"use strict";

/**
 * event controller
 */

const { populate, cleanItem, select } = require("../../../util");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
    async find(ctx) {
        populate(ctx, ["cover"]);
        const { data } = await super.find(ctx);
        data.forEach((item) => {
            select(item, "cover", "url");
            cleanItem(item);
        });
        return data;
    },
}));
