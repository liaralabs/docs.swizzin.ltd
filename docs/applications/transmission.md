---
id: transmission
title: Transmission
sidebar_label: Transmission
---

Transmission is a cross-platform Torrent client.

## Initial Setup

Simply run `box install transmission`

If you are on Ubuntu, you will be offered to use the PPA sources to take updates straight from the transmission team.

### Install options

There are a couple options you can set **before** installing transmission through export.

The names of the variables correlate to the similar equivalent variables available here on the Transmission configuration docs page https://github.com/transmission/transmission/wiki/Editing-Configuration-Files

If you'd like to use one of these, run `export option=value` **before** running the install command.

e.g. `export download_dir='torrents/downloads`

For the directory options, the installer will create these automatically (e.g. `mkdir -p /home/${user}/${download_dir}`, etc.)

Please do note that in the event you have nginx installed, some of these settings will be overriden and the application will pass through the `/transmission` endpoint on your domain/IP.

- `download_dir`:
  - Default: `transmission/downloads`
- `incomplete_dir_enabled`
  - Default: `false`
- `incomplete_dir`
  - Default: transmission/incomplete'
- `rpc_whitelist_enabled`
  - Default: `0`
- `rpc_whitelist`
  - Default: `'*.*.*.*'`
- `rpc_port`
  - Default: Next unused port after 9091
- `peer_port`
  - Default: Next unused port after 51314
- `rpc_password`
  - Default: User's system password

## How to use the remote
Transmission has a desktop remote application available, as well as a couple mobile remote clients for both Android and iOS

To connect to your session, use the following parameters:
- Host: _`<your domain/IP>`_
- RPC URL: `/transmission/rpc` (Default usually)
- Port: **`443`**
- Username: _`your normal username`_
- Password: _`your normal password`_
- SSL: **Yes**
- Validate SSL: **No**