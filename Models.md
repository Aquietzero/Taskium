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

## Post

* title
* content
* category_id
* user_id

```ruby
    rails generate scaffold post name:string content:text user_id:integer category_id:integer
```

## Tag

* name

```ruby
    rails generate scaffold tag name:string 
```

## Category

* name

```ruby
    rails generate scaffold category name:string 
```
