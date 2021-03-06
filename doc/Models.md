# Models

## User

* name
* hashed_password
* salt
* student_id (primary key)
* email
* website
* group_id
* role

```ruby
    rails generate scaffold user name:string hashed_password:string salt:string student_id:string email:string website:string
```

## Group

* name

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

## Comment

* content
* user_id
* commentable_id
* commentable_type

```ruby
    rails g model comment content:text user_id:integer commentable_id:integer commentable_type:string 
```

## Task

* name
* requirement
* due

```ruby
    rails g scaffold task name:string requirement:text due:date
```

## homework

* task_id
* user_id
* group_grade
* final_grade
* group_rank
* final_rank
* url

```ruby
    rails g scaffold homework task_id:integer user_id:integer group_grade:integer final_grade:integer group_rank:integer final_rank:integer url:string
```

## groupscore

* score
* comment

## finalscore

* score
* comment
