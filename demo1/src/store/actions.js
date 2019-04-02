const actions = {
	SET_AGE(context,age=0){
		context.commit("setAge",age)
	},
	SET_AGE_2({commit},age=0){
		commit("setAge",age)
	}

}

export default actions;