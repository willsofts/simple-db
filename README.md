# Simple DB

Demostration of [will-db](https://github.com/willsofts/will-db) usage

## How To Install

This project is under [@willsofts](https://github.com/willsofts) libraries protection as private access, then you have to gain access key from administrator and setting in your own environment before start installation. \
ex. \
Window

    set NPM_TOKEN=your access token key here

Linux

    export NPM_TOKEN=your access token key here

## Installation

With npm installed (comes with [node](https://nodejs.org/en/)), run the following commands into a terminal in the root directory of this project:

```shell
npm install
npm run build
```

### Configuration

This project require configuration ([config](https://www.npmjs.com/package/config)) setting by `config/default.json` 

### Demostration List

- kn.service   - basic usage KnService
- kn.handler   - custom handler and action with base handler
- kn.action    - dynamic action with base engine
- kn.model     - using model predefined structure
- kn.crud      - CRUD example
- kn.paging    - simple pagination
- kn.disable   - disable query paging
- kn.param     - manual assign parameters
- kn.gateway   - using web api gateway
- kn.route    - custom api routing
- kn.api      - using KnAPI
