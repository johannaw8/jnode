const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './static',
	env: {
		id: `${process.env.id||'28639316-5b53-4aac-9f52-c0b1a12780d2'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
