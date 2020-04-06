db.createUser({
  user: 'docker',
  pwd: '123456',
  roles: [
    {
      role: 'readWrite',
      db: 'bar'
    }
  ]
})
