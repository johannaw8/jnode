const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './static',
	env: {
		id: `${process.env.id||'93c094e2-9a07-40cb-8f16-f9db6012af96'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
