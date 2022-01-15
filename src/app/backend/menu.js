const menu = require('./../models/menu');


exports.all = ((req, res) => {
  Course.find()
        .then(menu => res.status(200).json(menu))
        .catch(err => res.status(400).json({ message: err.message }));
});


exports.get = ((req, res, next) => {
  Course.findOne({ _id: req.params.id })
      .then(course => res.status(200).json(menu))
      .catch(error => res.status(404).json({ message: error.message }));
  });


exports.create = (req, res, next) => {
  const menu = new menu({
    ...req.body
  });
  menu.save()
    .then(() => res.status(201).json({ message: 'menu created  !'}))
    .catch(error => res.status(400).json({ error }));
}


exports.update = (req, res, next) => {
  menu.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'menu updated !'}))
    .catch(error => res.status(400).json({ error }));
}

// delete a course by id
exports.delete = (req, res, next) => {
  menu.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'menu deleted !'}))
    .catch(error => res.status(400).json({ error }));
}
