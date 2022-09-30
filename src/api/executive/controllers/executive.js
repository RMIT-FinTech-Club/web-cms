"use strict";

const { populate, cleanItem, select } = require("../../../util");

/**
 * executive controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::executive.executive", ({ strapi }) => ({
    async find(ctx) {
        populate(ctx, ["avatar", "department"]);
        const { data } = await super.find(ctx);
        data.forEach((item) => {
            select(item, "avatar", "url");
            select(item, "department", "name");
            cleanItem(item);
        });
        return data;
    },
}));
