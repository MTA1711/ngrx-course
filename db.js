var casual = require('casual');

module.exports = () => {
    const data = { users: [] }
    // Create 25 users
    for (let i = 0; i < 25; i++) {
      data.users.push(
        { 
            id: i,
            lastName: casual.last_name,
            role: casual.title,
            firstname: casual.first_name
        }
    )
    }
    return data;
}