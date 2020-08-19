# Bi-Directional Hosts Module Federation Bug

This example demos bi-directional hosts each with their own remote `Button` components.

- `app1` exposes a red `<button>App 1 Button</button>` component.
- `app2` exposes a blue `<button>App 2 Button</button>` component.

# Running Demo

Run `yarn start`. This will build and serve both `app1` and `app2` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/)
- [localhost:3002](http://localhost:3002/)

Notice that `app1` will asynchronously load `app2`'s button and vice versa.
<img src="https://ssl.google-analytics.com/collect?v=1&t=event&ec=email&ea=open&t=event&tid=UA-120967034-1&z=1589682154&cid=ae045149-9d17-0367-bbb0-11c41d92b411&dt=ModuleFederationExamples&dp=/email/BiDirectional">

# The bug

- `app1` exposes `indexExternal.js` as `./hostExports` which re-exports some modules from `exports.js` which exports everything from `deps.js` and `effects.js`
- `app2` exposes `demo-exports.js` as `./remoteExports` which is just a constant
- Search for `(1)` and `(2)` in the code.
  - (1) - here we import from `app2/remoteExports` and it crashes the app with no error. The import is made in a file that is later re-exported. `effects.js` is re-exported in `exports.js` to indexExternal, where we only pick-up some of the exports. This is the file that is exposed from `app1`
  - (2) - here we import from `app2/remoteExports` in `app1`. This works, the file is not re-exported or anything similar.
