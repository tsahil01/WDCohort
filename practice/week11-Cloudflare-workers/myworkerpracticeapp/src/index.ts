export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

		if(request.method == "GET"){
			return Response.json({
				msg: "GET request Send!!"
			})
		} else {
			return Response.json({
				msg: "Didnt send the Get request",
				body: request.body
			});
		}
	},
};
