/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "anthony-mendoza.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
