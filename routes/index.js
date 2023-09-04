import express from 'express';
import usersRouter from './users.js'
import citiesRouter from './cities.js'
import itineriesRouter from './itineraries.js'
import activitiesRouter from './activities.js'

let router = express.Router();

router.use('/users', usersRouter)
router.use('/cities', citiesRouter)
router.use('/itineraries', itineriesRouter)
router.use('/activities',activitiesRouter )

export default router;
