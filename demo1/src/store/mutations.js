const mutations = {
	changeUsername(state,msg=""){
		console.log('uuuuu',msg)
		state.username = msg;
	},
	setAge(state,age=0){
		console.log('ageee',age)
		state.age=age;
	},
	setPhone(state,phone){
		state.phone = phone
	}
}

export default mutations;