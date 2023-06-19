# configuring a vps for connecting via ssh

when i want to connect to a vps via ssh rather than typing a password

## your machine setup

if you don't already have a ssh key, create one. you can accept the defaults if you'd like to be a little lazier.

> `ssh-keygen -t ed25519 -C "an@email.idk"`

then you need to copy the file that's now located at `~/.ssh/id_ed25519.pub` to your clipboard.

> on macos
> `pbcopy < ~/.ssh/id_ed25519.pub`

## configure vps and user account easy mode

```sh
ssh root@your_vps
password
su your_user
vim ~/.ssh/authorized_keys
paste your pub key
su
vim /etc/ssh/sshd_config
find the config `/Pubkey` and uncomment
service ssh restart
```

usually should disable password login altogether and set a key up for root. i like using user accounts for running/managing different projects

also add all this stuff to github secrets for the deploy script
