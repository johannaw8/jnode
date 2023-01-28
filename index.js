const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './static',
	env: {
		id: `${process.env.id||'f7793c60-daa9-45eb-822b-ee98f135a820'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
