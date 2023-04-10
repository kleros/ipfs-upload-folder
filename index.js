import { globSource, create } from "ipfs-http-client"
import * as dotenv from "dotenv"

dotenv.config()

const projectId = process.env.PROJECT_ID
const projectSecret = process.env.PROJECT_SECRET

async function addFolder() {
  const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64")
  const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  })

  const options = {
    wrapWithDirectory: true,
  }

  for await (const file of client.addAll(
    globSource("./project", "**/*", options)
  )) {
    console.log(file)
  }
}

addFolder()
