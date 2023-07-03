# dieKlingel Server

This is a sample config of the dieKlingel-Server

Deploy:

```bash
export ADMIN_USERNAME=<the dyn-sec admin username>
export ADMIN_PASSWORD=<the dyn-sec admin password hash>

ansible-playbook -i inventory.yaml playbook.yaml --user="<user>" --key-file="<shh key>" --ask-become-pass
```
