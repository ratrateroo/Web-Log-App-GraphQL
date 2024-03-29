const shortId = require('shortid');
const path = require('path');
const { createWriteStream, unlink } = require('fs');

const generateRandomString = require('./generateRandomString');

const files = require('./files');
//root directory __dirname
//file upload directory /public/images

const storeFileSystem = async ({ stream, filename, mimetype, encoding }) => {
	//const id = shortId.generate();

	//const storedFileName = `${id}-${filename}`;

	//new storedFileName
	//get extension name and file name
	const { ext, name } = path.parse(filename);

	//generate new storedFileName

	const storedFileName = generateRandomString(12) + ext;

	const newurl = new URL(path.join(__dirname, './public/images'));
	// console.log(newurl.href);
	// console.log(new URL(path.join(__dirname, './public/images')).href);

	//storedFileUrl - file upload directory + filename
	const storedFileUrl = path.join(
		__dirname,
		`./public/images/${storedFileName}`
	);

	// console.log(storedFileName);
	// console.log(storedFileUrl);
	// console.log(stream);

	//Store the file in the filesystem.
	await new Promise((resolve, reject) => {
		//Create a stream to which the upload will be written.
		const writeStream = createWriteStream(storedFileUrl);

		//When the upload is fully written, resolve the promise.
		writeStream.on('finish', resolve);

		//If there's an error writing the file,
		//remove the partially written file
		//and reject the promise.
		writeStream.on('error', (error) => {
			unlink(storedFileUrl, () => {
				reject(error);
			});
		});

		stream.on('error', (error) => writeStream.destroy(error));
		stream.pipe(writeStream);
	});

	files.push(storedFileName);

	return { filename: storedFileName, mimetype: mimetype, encoding: encoding };
};

module.exports = storeFileSystem;
