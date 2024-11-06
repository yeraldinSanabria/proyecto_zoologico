
async function create_type(req, res) {
    try {
        res.status(201).json({
            create: 'ok',
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
};


async function read_type(req, res) {
    try {
        res.status(201).json({
            read: 'ok',
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
};


async function find_by_id(req, res) {
    try {
        res.status(201).json({
            find_by_id: 'ok',
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
};

async function update_type(req, res) {
    try {
        res.status(201).json({
            update: 'ok',
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
};


async function delete_type(req, res) {
    try {
        res.status(201).json({
            delete: 'ok',
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
};


module.exports = {
    create_type,
    read_type,
    find_by_id,
    update_type,
    delete_type
};