"use strict";

const { populate, cleanItem } = require("../../../util");

/**
 * department controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::department.department", ({ strapi }) => ({
    async find(ctx) {
        populate(ctx, ["cover"]);
        const { data } = await super.find(ctx);
        data.forEach((item) => {
            const a = item.attributes;
            if (a.cover) a.cover = a.cover.data.attributes.url;
            cleanItem(item);
        });
        return data;
    },
}));
