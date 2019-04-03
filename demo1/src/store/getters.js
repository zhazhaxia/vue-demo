const getters = {
	getUsername:state=>state.username,
	getUsernameLength:(state,getters)=>getters.getUsername.length,
	getAge:state=>state.age
}

export default getters;