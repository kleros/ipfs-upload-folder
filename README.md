# Manual Upload IPFS

You probably want to use this to upload frontends that will be accessible through IPFS. This tool was created for the express purpose of uploading Evidence Displays, according to [EIP-1497](https://github.com/ethereum/EIPs/issues/1497).

## Instructions

1. Use an Infura account and create an IPFS project. You will need to include credit card information, but you will not be charged unless you upload more than a certain threshold (at the time of creating this solution, this amount was 1 GB).

![image](https://user-images.githubusercontent.com/40367733/230950723-82b34ada-e366-47b1-a4c3-a8290988a3b2.png)

2. `cp .env.example .env`

3. Paste your keys in the `.env`.

4. `mkdir project; yarn`

5. In the `project` directory, paste in the directory containing the html you want to upload to IPFS. This is usually a folder called `build` or `dist`. Paste the directory itself, not just the contents.

6. `node ./index.js`

7. Look around the log, find the IPFS CID of the top level directory. This will usually look like this:

```
{
  path: 'build',
  cid: CID(QmQnxQ1MJN1K6ctQWxsHCb4PLn5p59x5axhkzX35iVZ6hP),
  size: 4622010
}
```

In this example, `QmQnxQ1MJN1K6ctQWxsHCb4PLn5p59x5axhkzX35iVZ6hP` is the CID you were looking for.

8. If this is a frontend project, it should now be accessible through `/ipfs/{cid}/index.html`
