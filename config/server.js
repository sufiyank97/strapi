module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  admin: {

    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ebcfc49556e3a54eab789effbad3d1ae'),
    },
  },
});
