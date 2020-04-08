When running: `yarn dev` errors arise, that react cannot be found

Downgrading `preact` to v10.2.1 resolves the issue

```
Environment Info:
  System:
    OS: Linux 5.5 Manjaro Linux
    CPU: (8) x64 Intel(R) Core(TM) i7-3630QM CPU @ 2.40GHz
  Binaries:
    Node: 13.5.0 - /tmp/yarn--1586354465079-0.7279716765938233/node
    Yarn: 1.22.0 - /tmp/yarn--1586354465079-0.7279716765938233/yarn
    npm: 6.13.4 - ~/.nvm/versions/node/v13.5.0/bin/npm
  npmPackages:
    preact: 10.3.0 => 10.3.0
    preact-cli: 3.0.0-rc.10 => 3.0.0-rc.10
```
