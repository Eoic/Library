const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();
const fileUpload = require('express-fileupload');

app.prepare().then(() => {
    server.use(fileUpload());

    server.post('/upload', (req, res) => {
        if (req.files === null) {
            console.log('No files received.');
            return res.status(400).json({ message: 'File was not uploaded.' });
        }

        const file = req.files.file;

        file.mv(`${__dirname}/uploads/${file.name}`, (err) => {
            if (err) {
                console.log('Could not save file.')
                console.log(err);
                return res.status(500).json({ message: 'Internal server error.' })
            }

            console.log('Upload successful.');
            return res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
        });

    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('Server is running on port: ' + 3000);
    });
}).catch(exception => {
    console.error(exception.stack);
    process.exit(1);
});