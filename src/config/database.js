module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'token_authentication',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
