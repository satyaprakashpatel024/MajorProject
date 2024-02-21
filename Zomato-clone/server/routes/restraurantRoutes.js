const express = require('express');
const router = express.Router();
let Restraurant = require('../models/restraurant.js');

//  create api to add restraurant
router.post('/restro', async (req, res) => {
	try {
		let restraurant = new Restraurant(req.body);
		await restraurant.save();
		res.status(201).send(restraurant);
	} catch (err) {
		console.log(err, 'errrr');
		res.status(402).send('err');
	}
});

//   get all Restraurant 
router.get('/restro', async (req, res) => {
	try {
		let restraurant = await Restraurant.find();
		if (!restraurant) {
			res.send('restraurant not foundddd');
		} else {
			res.send(restraurant);
		}
	} catch {}
});

// get restraurant by id 
router.get('/restro/:id', async (req, res) => {
	try {
		let restraurant = await Restraurant.findById(req.params.id);
		if (!restraurant) {
			res.status(404).send('not founddddd');
		} else {
			res.send(restraurant);
		}
	} catch {
		res.send('err');
	}
});


// update restraurant details
router.patch('/restro/:id', async (req, res) => {
    try {
        const restraurant = await Restraurant.findByIdAndUpdate(req.params.id,req.body,{new : true});
        if(!restraurant) {
            return res.status(404).send('not found');
        }else{
            return res.status(200).send('updated successfully');
        }
    } catch (error) {
        res.send({
            error: error.message
        })
    }
})

// update restraurant details
router.delete('/restro/:id', async (req, res) => {
    try {
        const restraurant = await Restraurant.findByIdAndDelete(req.params.id , {new : true});
        if(!restraurant) {
            return res.status(404).send('not found');
        }else{
            return res.status(200).send('updated successfully');
        }
    } catch (error) {
        res.send({
            error: error.message,
        })
    }
})


module.exports = router;