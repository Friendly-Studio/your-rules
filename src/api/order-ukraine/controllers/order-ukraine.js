'use strict';

/**
 * order-ukraine controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const nodemailer = require('nodemailer');
module.exports = createCoreController(
  'api::order-ukraine.order-ukraine',
  ({ strapi }) => ({
    // some custom logic for POST request
    async create(ctx) {
      const { data, meta } = await super.create(ctx);

      const nodemailer = require('nodemailer');
      require('dotenv').config();

      const { GOOGLE_PASSWORD } = process.env;

      const transporterConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'my.dev.stories@gmail.com',
          pass: `${GOOGLE_PASSWORD}`,
        },
      };

      const transporter =
        nodemailer.createTransport(transporterConfig);

      // const email = {
      //   from: "my.dev.stories@gmail.com",
      //   to: "vds.reseller@gmail.com",
      //   subject: "Тестовое сообщение",
      //   text: "Привет, это тестовое сообщение!",
      // };

      const sendEmail = async data => {
        transporter
          .sendMail({ ...data, from: 'my.dev.stories@gmail.com' })
          .then(() => console.log('Email send success'))
          .catch(error => console.log(error.message));
      };

      return { data, meta };
    },
  }),
);
