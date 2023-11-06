'use strict';

/**
 * badbank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::badbank.badbank');
