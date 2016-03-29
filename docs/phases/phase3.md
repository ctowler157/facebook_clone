# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models

### Controllers

### Views
* statuses/index.json.jbuilder

## Flux
### Views (React Components)
* SearchIndex


### Stores
* Status

### Actions
* ApiActions.receiveAllStatuses -> triggered by ApiUtil
* ApiActions.receiveSingleStatus
* ApiActions.deleteStatus
* StatusActions.fetchAllStatuses -> triggers ApiUtil
* StatusActions.fetchSingleStatus
* StatusActions.createStatus
* StatusActions.editStatus
* StatusActions.destroyStatus

### ApiUtil
* ApiUtil.fetchAllStatuses
* ApiUtil.fetchSingleStatus
* ApiUtil.createStatus
* ApiUtil.editStatus
* ApiUtil.destroyStatus

## Gems/Libraries
* Flux Dispatcher (npm)
