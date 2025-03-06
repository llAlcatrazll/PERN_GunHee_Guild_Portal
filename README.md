## ER Diagram
```mermaid
erDiagram
    Request ||--|{ Attachment: contains
    Request ||--|{ Label: has
    User ||--|{ Assignee: is
    Request ||--|{ Action: has
    Office ||--|{ User: has
    Category ||--|{ Subcategory: has
    Office ||--|{ Category: has
    Category ||--|{ Tag: has
    Subcategory ||--|{ Tag: has
    Subcategory ||--|{ Request: has
    Category ||--|{ Request: has
    Assignee ||--|{ Request: has
    User ||--|{ Request: makes
    User ||--|{ Action: responds
    Action ||--|{ Attachment: contains
    Label }|--|| Tag: has

User {
    ulid id pk
    string number
    string email
    string position
    string role
    string avatar
    ulid office_id fk
}

Office {
    ulid id pk
    string name
    string address
    string building
    string room
    string logo
}

Category {
    ulid id pk
    string name
    ulid office_id fk
}

Subcategory {
    ulid id pk
    string name
    ulid category_id fk
}

Tag {
    ulid id pk
    string name
    string taggable_type
    ulid taggable_id fk
}

Request {
    ulid id pk
    ulid category_id fk
    ulid subcategory_id fk
    ulid requestor_id fk
    string subject
    text remarks
    int priority
    int difficulty
    date target_date
    time target_time
    datetime availability_from
    datetime availability_to
}

Action {
    ulid id pk
    ulid request_id fk
    ulid user_id fk
    string status
    text remarks
    datetime time
}

Assignee {
    ulid id pk
    ulid request_id fk
    ulid user_id fk
    ulid assigner_id fk
    string response
    datetime responded_at
}

Attachment {
    ulid id pk
    string file
    string attachable_type
    ulid attachable_id fk
}

Label {
    ulid id pk
    ulid request_id fk
    ulid tag_id fk
}
