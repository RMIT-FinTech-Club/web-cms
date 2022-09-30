"use strict";

const { populate, cleanItem, select } = require("../../../util");

/**
 * department controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::department.department", ({ strapi }) => ({
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
