const mutations = {
	changeUsername(state,msg=""){
		console.log('uuuuu',msg)
		state.username = msg;
	},
	setAge(state,age=0){
		console.log('ageee',age)
		state.age=age;
	}
}

export default mutations;