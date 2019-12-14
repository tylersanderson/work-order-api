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
		.catch(err => res.status(400).json('error updating order'))
}

const handleOrderReset = (req, res, db) => {
	
		db('orders').where({ ordernumber: 100121 }).update({ ordernotes: "100121 notes...", isordercomplete: false })
		.then()	
		db('orders').where({ ordernumber: 100122 }).update({ ordernotes: "100122 notes...", isordercomplete: false })
		.then()
		db('orders').where({ ordernumber: 100123 }).update({ ordernotes: "100123 notes...", isordercomplete: false })
		.then()
		db('orders').where({ ordernumber: 100124 }).update({ ordernotes: "100124 notes...", isordercomplete: false })
		.then()	
		db('orders').where({ ordernumber: 100125 }).update({ ordernotes: "100125 notes...", isordercomplete: false })
		.then()
		db('orders').where({ ordernumber: 100126 }).update({ ordernotes: "100126 notes...", isordercomplete: false })
		.then()
		db('orders').where({ ordernumber: 100127 }).update({ ordernotes: "100127 notes...", isordercomplete: false })
		.then()	
		db('orders').where({ ordernumber: 100128 }).update({ ordernotes: "100128 notes...", isordercomplete: false })
		.then()
		db('orders').where({ ordernumber: 100129 }).update({ ordernotes: "100129 notes...", isordercomplete: false })
		.then()
		db('orders').where({ ordernumber: 100130 }).update({ ordernotes: "100130 notes...", isordercomplete: false })
		.then(resp => {
			if (resp) {
				res.json("success")
			} else {
				res.status(400).json('Unable to update')
			}
		})
		.catch(err => res.status(400).json('error updating orders'))
}

module.exports = {
	handleOrdersGet,
	handleOrderUpdate,
	handleOrderReset
}