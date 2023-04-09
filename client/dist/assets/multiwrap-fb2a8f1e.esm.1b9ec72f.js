import{u,C as w,_ as c,a as l,v as k,b as g,h as A,G as f,f as m,c as v,k as W,w as C,x as T,y,z as I,F as E,H as h}from"./index.8acce514.js";class i extends u{constructor(a,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},t=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new w(a,e,t,s);super(o,n,r),c(this,"abi",void 0),c(this,"encoder",void 0),c(this,"estimator",void 0),c(this,"metadata",void 0),c(this,"events",void 0),c(this,"roles",void 0),c(this,"royalties",void 0),c(this,"owner",void 0),this.abi=t,this.metadata=new l(this.contractWrapper,k,this.storage),this.roles=new g(this.contractWrapper,i.contractRoles),this.encoder=new A(this.contractWrapper),this.estimator=new f(this.contractWrapper),this.events=new m(this.contractWrapper),this.royalties=new v(this.contractWrapper,this.metadata),this.owner=new W(this.contractWrapper)}async getWrappedContents(a){const e=await this.contractWrapper.readContract.getWrappedContents(a),n=[],s=[],t=[];for(const r of e)switch(r.tokenType){case 0:{const o=await C(this.contractWrapper.getProvider(),r.assetContract);n.push({contractAddress:r.assetContract,quantity:T(r.totalAmount,o.decimals)});break}case 1:{s.push({contractAddress:r.assetContract,tokenId:r.tokenId});break}case 2:{t.push({contractAddress:r.assetContract,tokenId:r.tokenId,quantity:r.totalAmount.toString()});break}}return{erc20Tokens:n,erc721Tokens:s,erc1155Tokens:t}}async wrap(a,e,n){const s=await y(e,this.storage),t=n||await this.contractWrapper.getSignerAddress(),r=await this.toTokenStructList(a),o=await this.contractWrapper.sendTransaction("wrap",[r,s,t]),d=this.contractWrapper.parseLogs("TokensWrapped",o==null?void 0:o.logs);if(d.length===0)throw new Error("TokensWrapped event not found");const p=d[0].args.tokenIdOfWrappedToken;return{id:p,receipt:o,data:()=>this.get(p)}}async unwrap(a,e){const n=e||await this.contractWrapper.getSignerAddress();return{receipt:await this.contractWrapper.sendTransaction("unwrap",[a,n])}}async toTokenStructList(a){const e=[],n=this.contractWrapper.getProvider(),s=await this.contractWrapper.getSignerAddress();if(a.erc20Tokens)for(const t of a.erc20Tokens){const r=await I(n,t.quantity,t.contractAddress);if(!await E(this.contractWrapper,t.contractAddress,r))throw new Error(`ERC20 token with contract address "${t.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${t.contractAddress}").setAllowance("${this.getAddress()}", ${t.quantity});

`);e.push({assetContract:t.contractAddress,totalAmount:r,tokenId:0,tokenType:0})}if(a.erc721Tokens)for(const t of a.erc721Tokens){if(!await h(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,s))throw new Error(`ERC721 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${t.contractAddress}").setApprovalForToken("${this.getAddress()}", ${t.tokenId});

`);e.push({assetContract:t.contractAddress,totalAmount:0,tokenId:t.tokenId,tokenType:1})}if(a.erc1155Tokens)for(const t of a.erc1155Tokens){if(!await h(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,s))throw new Error(`ERC1155 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${t.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);e.push({assetContract:t.contractAddress,totalAmount:t.quantity,tokenId:t.tokenId,tokenType:2})}return e}async call(a){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];return this.contractWrapper.call(a,...n)}}c(i,"contractRoles",["admin","transfer","minter","unwrap","asset"]);export{i as Multiwrap};
