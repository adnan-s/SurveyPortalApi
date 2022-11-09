var express = require('express');
var router = express.Router();
var faqController = require('../controllers/faq');
var authController = require('../controllers/auth');

/**
 * @swagger
 * tags:
 * name: FAQ
 * /faq:
 *   get:
 *     summary: Retrieves a list of FAQs
 *     description: Retrieve a list of Frequently asked questions. 
 *      Can be used to populate a list of FAQs when prototyping or testing an API.
*/
router.get('/', faqController.getAll);

/**
 * @swagger
 * /faq:
 *   post:
 *     summary: Create an FAQ record.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               faq:
 *                 type: string
 *                 description: question part of a FAQ.
 *                 example: how to register to take part in a survey
 *     responses:
 *       201:
 *         ...
*/
router.post('/', faqController.insert);

/**
 * @swagger
 * /faq/{id}:
 *   delete:
 *     summary: Delete an FAQ record.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the FAQ to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         ...
*/
router.delete('/:id', faqController.delete);

/**
 * @swagger
 * /faq:
 *   put:
 *     summary: update an FAQ record.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               faq:
 *                 type: string
 *                 description: question part of a FAQ.
 *                 example: how to register to take part in a survey
 *               answer:
 *                 type: string
 *                 description: answer part of a FAQ.
 *                 example: click on register and provide your info.
 *     responses:
 *       201:
 *         ...
*/
// router.put('/', authController.authenticate, faqController.update);
router.put('/', faqController.update);

/**
 * @swagger
 * /faq/{id}:
 *   get:
 *     summary: Retrieve a single FAQ.
 *     description: Retrieve a single FAQ. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the FAQ to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         ...
 */router.get('/:id', faqController.getById);

module.exports = router;
