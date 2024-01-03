'use strict';

/**
 * restaurant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::restaurant.restaurant');

// const BaseController = createCoreController('api::restaurant.restaurant');

// module.exports = {
//     ...BaseController,

//     async search(ctx) {
//         const { q } = ctx.query;

//         if (!q) {
//             return ctx.badRequest('Missing search query parameter (q)');
//         }

//         const results = await strapi.query('restaurants').search({
//             _q: q,
//         });

//         ctx.send(results);
//     },
// };
