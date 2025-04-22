### Directory Service

* A directory is a specialized database specifically designed for searching and browsing, in additional to supporting basic lookup and update functions.

* Do not support complicated transaction or roll-back schemes

* When directory information is replicated, temporary inconsistencies between the consumers may be okay, as long as inconsistencies are resolved in timely manner.

### Lightweight Directory Access Protocol (LDAP)

* Open, vendor-neutral application protocol for accessing and maintaining information such as
    - usernames
    - passwords
    - email addresses
    - static data

* Used for **authentication**

* Provides a mechanism for a client to authenticate, or prove its identity to a directory server, paving the way for rich access control to protect the information the server contains.

* used to access and manage directory information over a network.

* Optimized for hierarchical data organization and fast searches within directories. Typically used for read-heavy applications.

* LDAP uses port **389** for unencrypted communication and port **636** for secure communication using SSL/TLS.


#### **Entries**
    - Information model of LDAP
    - Entry
        - Collection of attributes that has a globally-unique Distinguished Name(DN)
        - DN is used to refer entry unambiguously
        - Attribute has a 
            - type (cn, mail)
            - one or more values
    - Directory entries are arranged in a hierarchical tree-like structure

* LDAP directory tree(Traditional naming)

    - c=US
    - c=IN
        - st=Telagana
            - o=ACME
                - ou=Sales
                - ou=Marketing
                - ou=IT
                    - cn=Ram Chandra

* Internet Naming

    - dc=net
    - dc=com
    - dc=in
        - dc=example
            - ou=People
                - uid=ramchandra
            - ou=Servers

- **objectClass**
    - special attribute
    - determines the schema rules the entry must obey

- Information referenced by its distinguished name, which is constructed by taking the name of the entry itself ( Relative Distinguished Name or RDN) and concatenating the names of its ancestor entries.

    - uid=ramchandra (RDN)
    - uid=ramchandra, ou=People, dc=example, dc=in (DN)

- Operations 
    - Adding and deleting an entry from the diretory
    - Changing an existing entry
    - Changing the name of an entry

- Usecases

    - Machine Authentication
    - User Authentication
    - User/System Groups
    - Address Book
    - Orgnization Representation
    - Asset Tracking
    - Email Address Lookups

- LDAP working

    - Utilizes a client-server model.
    - One or more LDAP servers contain the data making up the directory information tree (DIT) 

    ```
    docker pull bitnami/openldap:2.6
    docker run --name openldap bitnami/openldap:2.6
    ```

- Configuring slapd

    - Configuration data is stored in LDIF database, generally in

        ```
        /usr/local/etc/openldap/slapd.d
        ```

    - General layout of the config LDIF is as follows:

    ```
    # global configuration settings
    dn: cn=config
    objectClass: olcGlobal
    cn: config
    <global config settings>

    # schema definitions
    dn: cn=schema,cn=config
    objectClass: olcSchemaConfig
    cn: schema
    ```

#### Commands

* Search Entries

```
ldapsearch -x -LLL -H ldap://server_address -b "base_dn" "(filter)"
ldapsearch -x -LLL -H ldap://localhost -b "dc=example,dc=com" "(objectClass=person)"
```

* Add Entries

```
Filename: entry.ldif

dn: cn=Ram Chandra,ou=IT,dc=example,dc=com
objectClass: inetOrgPerson
cn: Ram Chandra
sn: Chandra
mail: ram@example.com
```

* 

### References

* [What is LDAP](https://www.okta.com/identity-101/what-is-ldap/)
* [OpenLDAP Admin Guide 2.6](https://www.openldap.org/doc/admin26/OpenLDAP-Admin-Guide.pdf)