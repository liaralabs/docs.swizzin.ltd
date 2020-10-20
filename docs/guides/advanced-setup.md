---
id: advanced-setup
title: Setting up swizzin with advanced options
sidebar_label: Advanced Setup
---

Below are the many ways you can use the installer to get exactly toi where you need to be, fast.

::: info
Please note that not all the code has been modified yet to be compatible with the unattended setup. If you find some application that is breaking the unattended setup or has no configuration flags, please raise a [GitHub issue](https://github.com/liaralabs/swizzin/issues/new/choose).
:::

## Examples
Quickly get a local environment with a user installed, using your local fork clone instead of upstream, and no apps installed
```bash
git clone <your fork>
bash setup.sh --user tester --pass tester123 --local --unattend
```

Get a quick transmission installation
```bash
git clone <your fork>
arg_transmissionsource="Repo" bash <(curl -s  https://raw.githubusercontent.com/liaralabs/swizzin/master/setup.sh) --user tester --pass tester123 transmission
```

Get a Dan Shake(TM) (A username, password, domain, nginx and letsencrypt only shaked and not interrupted)
```bash
bash <(curl -s  https://raw.githubusercontent.com/liaralabs/swizzin/master/setup.sh) --unattend --user tester --pass tester123 --domain testing.com nginx letsencrypt
```

## Options
::: warning
Please note that none of the values that you set here are checked for validity or comaptibility. Setting wrong values here could break your system.
:::
## `--user`
  * Takes the `username` of the master user for swizzin to create as positional argument (i.e. `--user masteruser`)
## `--pass`
  * Takes the `password` of the master user for siwzzin to create as positional argument (i.e. `--pass "P@55w0rd"`)
  * Specifying 
## `--domain`
  * Takes `domain` as positional argument (i.e. `--domain domain.tld`)
  * _If_ `letsencrypt` is being installed, this will quickly set the domain against which to verify, enable the certificate in the default `nginx` config, and skip cloudflare integration
    * Shorthand for `LE_hostname=domain.tld`, `LE_defaultconf=yes` and `LF_bool_cf=no` as described in the [Letsencrypt Installation Options](/applications/letsencrypt#install-options). If you need something else, check the [`--env`](#--env) option.
  * **Please note:** This does not imply that `nginx` or `letsencrypt` will be installed, you still have to pass those as packages to install

## `--local`
  * Instead of cloning the repository to `/etc/swizzin/`, it will link the folder where `setup.sh` is located to `/etc/swizzin`.
  * If you (re)move the folder where `setup.sh` was sitting, the link will break, and so will your `box` commands etc.
## `--env`
  * Takes a path to file as positional argument (e.g. `--env /path/to/env/file.env`)
 /path/to/env/file.env
  * Ingests variables and settings from a file for use later through the installer.Please see the [Env File](#env-file) Chapter below
  * _Using this implies using [`--unattend`](#--unattend)_
  * If `--env` is specified after other arguments, contents of env file will override the arguments. If arguments are specified after the `--env file`, they will override the content of the env file.
    * if you do `bash setup.sh --env /path/to/file.env --user otheruser`, all of the env file contents will be ingested, and then the user will be overridden to `otheruser`
    * The only exception to this are the packages specified on the CLI. If they are specified after the `--env`, they will get added to the list.
## **Passing environment variables**
  * Instead of using [the `--env` flag](#--env), you can pass environment variables either through...
    * `export` within your shell before running `bash setup.sh`
    * you can use something like `var1=value var2=value bash setup.sh`
  * Same options are available as are for the env file.
## `--unattend`
  * Disables interactive queries within the `setup.sh` script, such as the greeting, user creation queries and the installation applications queries.
  * **Does not disable interactive queries in install packages, as those will need per-variable declaration.**
## `[package(s)]`
  * Any other arguments are treated as a name of a package for swizzin to install.
  * If any package is specified, the application installation picker will be skipped during the installation
  * If you want no packages to be installed, make sure to specify the `--unattend` flag


## Env file
::: warning
Please note that none of the values that you set here are checked for validity or comaptibility. Setting wrong values here could break your system.
:::

You can use a file with recorded variables for `setup.sh` to use, instead of using the CLI arguments/variables. Please [see the `--env` option in the chapter above](#--env).

An example file is included in the root of the git repo.


If a package has an "Install Options" chapter, you can specify those values in this file. Please note that these options can change over time. An example of these can be found [here](/applications/letsencrypt#install-options), or in the source code. 

```bash
# SETUP.SH OPTIONS
## master user setup
user=test
pass=test123
## symlink local swizzin folder to /etc/swizzin/ instead of cloning from upstream
local=true
## packages to install separated by colons. 
packages=nginx:panel:transmission:letsencrypt
# PACKAGE SPECIFIC OPTIONS
## transmission flags (https://docs.swizzin.ltd/applications/transmission#install-options)
arg_transmissionsource="Repo"
download_dir="customdir/ddoowwnnllooaaddss"
incomplete_dir="customdir/iinnccoommppllete"
## LetsEncrypt options ((https://docs.swizzin.ltd/applications/letsencrypt#install-options))
LE_hostname="domain.tld"
LE_defaultconf=yes
# LE_bool_cf=no if you don't want to use any cloudflare
LE_cf_api=aaapppiiiikkkeeeeeyyyyyyyy
LE_cf_email="email@blach.lol"
LE_cf_zone="some.zone.asdasdasdasd" # or LE_cf_zoneexists=yes if you don't need it created
```