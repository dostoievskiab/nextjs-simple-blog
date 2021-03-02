
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          title: 'Post 1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus iaculis, fringilla urna a, ullamcorper lorem. Fusce posuere ornare nunc eget ullamcorper. Nulla quis augue ligula. Duis et vulputate justo, et facilisis odio. Sed tempus quis libero vitae tristique. Aenean faucibus lectus velit. In non magna risus. Ut rhoncus ipsum eu ligula bibendum dapibus. '
        },
        {
          id: 2,
          title: 'Segundo Post',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus iaculis, fringilla urna a, ullamcorper lorem. Fusce posuere ornare nunc eget ullamcorper. Nulla quis augue ligula. Duis et vulputate justo, et facilisis odio. Sed tempus quis libero vitae tristique. Aenean faucibus lectus velit. In non magna risus. Ut rhoncus ipsum eu ligula bibendum dapibus. '
        },
        {
          id: 3,
          title: 'Terceiro Post',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus iaculis, fringilla urna a, ullamcorper lorem. Fusce posuere ornare nunc eget ullamcorper. Nulla quis augue ligula. Duis et vulputate justo, et facilisis odio. Sed tempus quis libero vitae tristique. Aenean faucibus lectus velit. In non magna risus. Ut rhoncus ipsum eu ligula bibendum dapibus. '
        },
        {
          id: 4,
          title: 'O Quarto',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus iaculis, fringilla urna a, ullamcorper lorem. Fusce posuere ornare nunc eget ullamcorper. Nulla quis augue ligula. Duis et vulputate justo, et facilisis odio. Sed tempus quis libero vitae tristique. Aenean faucibus lectus velit. In non magna risus. Ut rhoncus ipsum eu ligula bibendum dapibus. '
        }
      ]);
    });
};
