const attachTo = (app, data) => {
    app.get('/items', (req, res) => {
        return data.items.getAll()
            .then((items) => {
                res.render('items/all', {
                    context: items
                })
            })
    });

    app.get('/items/form', (req, res) => {
        return res.render('items/form');
    });

    app.post('/items', (req, res) => {
        const item = req.body;

        return data.items.create(item)
            .then((dbItem) => {
                return res.redirect('/items/' + dbItem.id);
            })
            .catch((err) => {
                req.flash('error', 'Invalid model');
                return res.redirect('/items/form');
            });
    });
}

module.exports = { attachTo }