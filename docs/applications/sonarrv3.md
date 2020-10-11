---
id: sonarrv3
title: Sonarr v3 aka "Phantom"
sidebar_label: Sonarr v3
---

Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.

## Initial Setup

Installing Sonarr is easy. Simply issue the following command

```bash main
sudo box install sonarrv3
```

This command will configure sonarr for your user. Sonarr is installed via an apt repository, thus the easiest way to keep it up to date is by issuing the command `apt update && apt upgrade`. The sonarr base files will be located in `/usr/lib/sonarr`

### Optional parameters
None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you.

::: warning Make sure you know what you're doing!
**Please note that it is difficult for us to support these options as they are custom for each install**

None of the options are sanity-checked on install so setting something wrong could break your installation.

Again, you do not need to set these if you don't know what you're doing.
:::

If you'd like to use one of these, run `export option=value` **before** running the install command.

The following is an example of how this would look

```bash main
export sonarrv3owner='autodlbot'
```

- `sonarrv2owner`
  - Used to specify a non-master user which sonarr v2 might have ran under before for the migration and user-group adding.
- `sonarrv3owner`
  - Used to specify a non-master user which sonarr v3 will run as after the installation.

## How to Access

Once setup, sonarr will be available at the link `https://<hostname.ltd>/sonarr`

## Migrating from v2
The install script for Sonarr v3 includes functionality to migrate and remove a v2 (`sonarr`) installation. Please keep the v2 installed for optimal results. **It is not possible to have both v2 and v3 installed at the same time.**

An additional backup of the v2 configuration is created in `/root/sonarrv2.bak/`, which includes an internal Sonarr backup file triggered via API right before the installation.

Please check the Downgrading chapter if you want to go back.

### v2 setups that were modified
If you have toyed with the v2 Sonarr configuration and are not using the vanilla setup by swizzin (e.g. modified service files, overrides, etc.), you should make sure to run some extra steps before.

You should generally follow the following steps at your own risk. 

1. Back up your sonarrv2 through the web interface.
2. Make a remote copy of the entire Sonarr folder just in case.
3. Stop your sonarr service or process
3. Remove Sonarrv2 through `box remove sonarrv2`
   - verify you cleaned up all custom configs in random places
4. Link/copy your old `.config/nzb` directory to the sonarrv3 migration path
   - e.g. `ln -s /home/"${sonarrv2owner}"/.config/NzbDrone /usr/lib/sonarr/nzbdrone-appdata`
5. Install sonarr v3 with `box install sonarrv3`

## Service Management

Service status for sonarr is handled by systemd. Despite the service being enabled for multi-user usage, Sonarr itself has not been configured for usage on more than one user account with swizzin. Regardless, as a multi-user service, you must append the username of the service you need to modify follow the `@` sign. The systemd service file resides at

```bash main
/etc/systemd/system/sonarr@.service
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Start-->
```bash
sudo systemctl start sonarr
```
<!--Stop-->
```bash
sudo systemctl stop sonarr
```
<!--Restart-->
```bash
sudo systemctl restart sonarr
```
<!--Enable-->
```bash
sudo systemctl enable sonarr
```
<!--Disable-->
```bash
sudo systemctl disable sonarr
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Out of the box, Sonarr comes with very little pre-set configuration. Following are some basic tasks to help get your client up and running.

### Add a new show (and your first root directory)

1. At the top, click series.
2. Click the button `+ Add Series`
3. Type the name of the show you want to add
4. Under `Path`, choose `Add a new path`. Enter the path for the folder you wish to add your Sonarr shows to and click the green check-mark to add the directory.
  - e.g. `"/home/<username>/media/TV Shows"`
5. Change the other settings to your own needs
6. Click the green + to add the show.

### Connect download clients
To add a download client, go to `Settings > Download Client`. Make sure `Advanced Settings` are shown and click `Add Client`.

<!--DOCUSAURUS_CODE_TABS-->
<!--rTorrent-->
```plaintext
Name: rTorrent
rTorrent host: 127.0.0.1
URL Path: /rutorrent/plugins/httprpc/action.php
Use SSL: ON
Username: <your username>
Password: <your password>
Add label to torrent: TV (or anything else you desire)
Optional - Downloaded files location: <custom directory>
```

<!--Deluge (via Web)-->
```plaintext
Name: Deluge
Host: 127.0.0.1
Post: <deluge web port>
Deluge Password: <your password>
Add label to torrent: TV (or anything else you desire)
* label plugin must be enabled in Deluge if you add a label
SSL: OFF
```

<!--nzbGet-->
```plaintext
NZBget host: 127.0.0.1
port: 443
URL Base: nzbget
Connect using HTTPS: ON
nzbget username: <your username>
nzbget Password: <your password>
Add label to torrent: Series (or anything else you desire)
* label must exist under "Categories" in nzbGet
```

<!--Transmission-->
```plaintext
To retrieve your port, please run `grep rpc-port ~/.config/transmission-daemon/settings.json`,
when logged in as the user you want to use transmission of (i.e. not root).
----------
Host: 127.0.0.1
Port: <See above, e.g. 9091>
URL Base: /transmission/ (Should be default)
Username: <your username>
Password: <your password>
Category: <optional, e.g. Sonarr or TV>
Connect using HTTPS: OFF
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Add an indexer with Jackett
Sonarr only supports a few trackers out of the box, but the indexers can be expanded by using the application [Jackett](jackett.md). To add an indexer with Jackett, use the following steps.

::: note
By default, when receiving the torznab feed from Jackett, it will need to be modified to be connected with the application. The default link looks like:

```plaintext
https://<yourhostname.ltd>/jackett/api/v2.0/indexers/yourtracker/results/torznab/
```

We need to edit this link to **remove https** and **add the port number**. Thus, if your port number was `12345`, your edited URL would look like this:

```plaintext
http://<yourhostname.ltd>:12345/jackett/api/v2.0/indexers/yourtracker/results/torznab/
```
:::

1. Go to `Settings > Indexers` and click `+` to add a new indexer.
2. Under `Torrent` choose `Torznab`
3. Use the settings:
```plaintext main
Name: <tracker name>
URL: <click copy torznab feed in jackett and modify as per above>
API: <copy and paste from jackett UI>
```
4. Click `Test`. If all is good, click `Save`.

### Sonarr and user homedir permissions
Sonarr is running as the master user (unless changed in install options using parameters), so that user needs to be able to see the directories you'd like sonarr to see as well. You can achieve this by adding the desired user to the group of whoever runs the sonarr process. e.g. `usermod -a -G <user with data> <master/sonarrv3owner>`

### Other tasks

You may wish to further alter your setup by setting quality profiles or setting up post-processing so that media is automatically transferred to your Sonarr library when your torrents are completed. If you need further help, you can refer to the [Sonarr Wiki](https://github.com/Sonarr/Sonarr/wiki).

## Troubleshooting

::: tip 
You can always also try the [general troubleshooting tips written in our guide](/guides/troubleshooting). They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!
:::

Please consult the [github issues](https://github.com/Sonarr/Sonarr/issues) or the [Sonarr Discord community](https://discord.gg/M6BvZn5) in case you are having problems with this application.

## Downgrading to v2

In order to downgrade, remove `sonarrv3` and install `sonarr` again. The original configuration files will be untouched. Any changes in v3 will not be migrated, as the installation will only look at the old files.

If the installation does not reproduce your original v2 content, please see the Migration and Backup steps on the Sonarr Github, and use the contents of `/root/swizzin/backups/sonarrv2.bak` as the "original" files.

Please consult the [Sonarr's wiki for downgrading steps](https://github.com/Sonarr/Sonarr/wiki/Backup-and-Restore)

Therefore, you could achieve a downgrade with the following (untested!) example steps

```bash
box remove sonarrv3
box install sonarr
systemctl stop sonarr
cd /home/<master>/.config
mv sonarr sonarrv3bak
cp /root/swizzin/backups/sonarrv2.back./* NzbDrone/
systemctl start sonarrv3
```
