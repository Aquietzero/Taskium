# Models

## User

* name
* hashed_password
* salt
* student_id (primary key)
* email
* website

```ruby
    rails generate scaffold user name:string hashed_password:string salt:string student_id:string email:string website:string
```
