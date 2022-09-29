"use strict";

const { populate, cleanItem } = require("../../../util");

/**
 * executive controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::executive.executive", ({ strapi }) => ({
    async find(ctx) {
        populate(ctx, ["avatar", "department"]);
        const { data } = await super.find(ctx);
        data.forEach((item) => {
            const a = item.attributes;
            if (a.avatar) a.avatar = a.avatar.data.attributes.url;
            if (a.department) a.department = a.department.data.attributes.name;
            cleanItem(item);
        });
        return data;
    },
}));
