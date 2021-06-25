# Keplr Browser Extension
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Twitter: chainapsis](https://img.shields.io/twitter/follow/chainapsis.svg?style=social)](https://twitter.com/chainapsis)

> Keplr is a browser extension wallet for the Inter blockchain ecosystem.
>
This repository is still under development  

This repository containts submodules that are not open sourced and are only available through the Chainapsis’ official Keplr Extension release. However, all primary features of the extension will work without the closed sourced submodules.  

## Dev/Test
Keplr extension repo uses git-secret to encrypt the endpoints and the api keys. So, you can't build this without creating your own config file. You should create your own `config.var.ts`, `config.ui.var.ts` files inside the `packages/extension/src` folder. Refer to the `config.var.example.ts`, ``config.ui.var.example.ts`` sample files to create your own configuration.

Important: Change Node version to v12.0.0 or higher
```sh
nvm install v12.0.0
```

First, checkout to `test` branch
```sh
git checkout test
git pull
``` 

Run command to generate `dist` file
```sh
yarn dev
``` 
Extension's build output is placed in `packages/extension/dist`, and you can check out [this page](https://developer.chrome.com/extensions/getstarted) for installing the developing extension.  

You can add your chain by adding the chain infomation into `chain-info.ts`. 

## Production
First, checkout to `master` branch
```sh
git checkout master
git pull
``` 

Then carry out the next steps as Dev/Test

## Example Files

Refer to the [Keplr Example repository](https://github.com/chainapsis/keplr-example) for examples of how to integrate Keplr signing support for your web interface/application.

## Author

👤 **Chainapsis**

* Twitter: [@chainapsis](https://twitter.com/chainapsis)
* Github: [@chainapsis](https://github.com/chainapsis)
