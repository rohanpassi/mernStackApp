db = new Mongo().getDB('issuetracker');

db.issues.remove({});

db.issues.insert([
  {
    status: 'Open', owner: 'Rohan',
    created: new Date('2017-09-15'), effort: 5, completionDate: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    status: 'Assigned', owner: 'Shreya ',
    created: new Date('2017-09-16'), effort: 14, completionDate: new Date('2017-09-30'),
    title: 'Missing bottom border on panel',
  },
]);

db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });