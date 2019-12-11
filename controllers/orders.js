const handleOrdersGet = (req, res, db) => {
	const { isordercomplete } = req.params;
	db.select('*').from('orders').where({isordercomplete})
		.then(orders => {
			if(orders.length) {
				res.json(orders)
			} else {
				res.status(400).json('Not found')
			}
	})
	.catch(err => res.status(400).json('error getting orders'))
}

const handleOrderUpdate = (req, res, db) => {
	const { ordernumber } = req.params;
	const { ordernotes, isordercomplete } = req.body.formInput;
	db('orders')
		.where({ ordernumber })
		.update({ ordernotes, isordercomplete })
		.then(resp => {
			if (resp) {
				res.json("success")
			} else {
				res.status(400).json('Unable to update')
			}
		})
		.catch(err => res.status(400).json('error updating user'))
}

module.exports = {
	handleOrdersGet,
	handleOrderUpdate
}